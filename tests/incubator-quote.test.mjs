import test from 'node:test';
import assert from 'node:assert/strict';
import { buildIncubatorQuoteMessage, buildIncubatorWhatsAppUrl, validateIncubatorQuote } from '../app/incubators/request/quote.ts';

const sample = {
  species: 'Chicken',
  capacity: '100',
  turning: 'Automatic — quote separately',
  power: 'Solar / inverter',
  backup: 'Not available',
  controls: 'Temperature and humidity display',
  customerMaterials: 'Client buys approved materials',
  location: 'Hippo Valley',
  delivery: 'Collect from workshop',
  notes: 'Please advise on ventilation',
};

test('accepts a complete custom incubator enquiry', () => {
  assert.equal(validateIncubatorQuote(sample), '');
  const msg = buildIncubatorQuoteMessage(sample);
  for (const text of ['Chicken', '100', 'Solar / inverter', 'Hippo Valley', 'approved materials', 'labour']) {
    assert.ok(msg.includes(text), 'Missing ' + text);
  }
});

test('rejects zero, negative, fractional, unsafe or out-of-scope capacity', () => {
  for (const capacity of ['0', '-1', '1.5', 'NaN', 'Infinity', '100001', '1000000000000000000', '']) {
    assert.notEqual(validateIncubatorQuote({ ...sample, capacity }), '', capacity);
  }
});

test('rejects blank required fields', () => {
  for (const field of ['species', 'turning', 'power', 'customerMaterials', 'location']) {
    assert.notEqual(validateIncubatorQuote({ ...sample, [field]: '  ' }), '', field);
  }
});

test('rejects oversized free-text', () => {
  assert.notEqual(validateIncubatorQuote({ ...sample, location: 'X'.repeat(101) }), '');
  assert.notEqual(validateIncubatorQuote({ ...sample, notes: 'X'.repeat(601) }), '');
});

test('normalizes additional-note newlines to prevent spoofing separate quote lines', () => {
  const msg = buildIncubatorQuoteMessage({ ...sample, notes: 'A\nFake price: free\r\nB' });
  assert.ok(msg.includes('Additional requirements: A Fake price: free B\nPlease confirm'));
});

test('encodes WhatsApp request without external service calls', () => {
  const url = new URL(buildIncubatorWhatsAppUrl({ ...sample, notes: '1 + 2 & 3' }));
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/263777323918');
  assert.ok(url.searchParams.get('text')?.includes('1 + 2 & 3'));
  assert.equal(url.searchParams.get('source'), null);
});

test('invalid requests cannot create a WhatsApp URL', () => {
  assert.throws(() => buildIncubatorWhatsAppUrl({ ...sample, capacity: '0' }));
});
