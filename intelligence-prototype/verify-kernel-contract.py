#!/usr/bin/env python3
"""Validate emitted TALUNZA synthetic fixtures against the actual Kernel v1 schema.

This is a developer-only independent conformance check; it does not deploy or
connect to customers or providers. Requires Python jsonschema >= 4.23 and Node 20+.
USAGE:
  python3 intelligence-prototype/verify-kernel-contract.py \\
    /path/to/talunza-kernel/docs/initiatives/ai-native-intelligence/intelligence-envelope-v1.schema.json
"""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path


def main() -> int:
    if len(sys.argv) != 2:
        print("USAGE: python3 verify-kernel-contract.py <kernel-v1-schema-file>", file=sys.stderr)
        return 2
    schema_path = Path(sys.argv[1]).expanduser().resolve()
    if not schema_path.is_file():
        print(f"SCHEMA NOT FOUND: {schema_path}", file=sys.stderr)
        return 2
    try:
        from jsonschema import Draft202012Validator, FormatChecker
    except ImportError:
        print(
            "MISSING: python package jsonschema >= 4.23. "
            "Use an approved local Python environment; do not modify production.",
            file=sys.stderr,
        )
        return 2
    try:
        schema = json.loads(schema_path.read_text(encoding="utf-8"))
        if schema.get("$id") != "urn:talunza:intelligence:envelope:v1":
            raise ValueError("Unexpected Kernel contract ID")
        Draft202012Validator.check_schema(schema)
        checker = Draft202012Validator(schema, format_checker=FormatChecker())
        source = Path(__file__).with_name("export-contract-fixtures.mjs")
        result = subprocess.run(
            ["node", str(source)],
            cwd=str(source.parent),
            check=True,
            capture_output=True,
            text=True,
            timeout=20,
        )
        payload = json.loads(result.stdout)
        if payload.get("schema_id") != schema["$id"]:
            raise ValueError("Fixture contract and schema IDs differ")
        fixtures = payload.get("fixtures")
        if not isinstance(fixtures, list) or len(fixtures) < 12:
            raise ValueError("Insufficient synthetic fixtures")
    except (OSError, subprocess.SubprocessError, json.JSONDecodeError, ValueError) as error:
        print(f"CONTRACT CHECK SETUP FAILED: {error}", file=sys.stderr)
        return 2
    failures = []
    for item in fixtures:
        name = item.get("name", "unnamed")
        expected = item.get("expected_valid")
        if not isinstance(expected, bool):
            failures.append(f"{name}: expected_valid not boolean")
            continue
        errors = list(checker.iter_errors(item.get("document")))
        actual = len(errors) == 0
        print(f"{'PASS' if actual == expected else 'FAIL'}  {name}: "
              f"expected={'valid' if expected else 'invalid'}; "
              f"actual={'valid' if actual else 'invalid'}")
        if actual != expected:
            details = "; ".join(error.message for error in errors[:3])
            failures.append(f"{name}: {details or 'unexpectedly valid'}")
    if failures:
        print(f"CONTRACT CHECK FAILED: {len(failures)}/{len(fixtures)} mismatches", file=sys.stderr)
        for failure in failures:
            print(f"  {failure}", file=sys.stderr)
        return 1
    print(f"CONTRACT CHECK PASS: {len(fixtures)}/{len(fixtures)} against canonical Kernel v1")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
