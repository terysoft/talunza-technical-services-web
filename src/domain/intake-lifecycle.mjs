/** TALUNZA Technical Services intake workflow. Pure functions, no persistence or auth. */
export const STATES = Object.freeze(['NEW','NEEDS_INFO','READY_FOR_ASSESSMENT','TECH_REVIEW','PRICE_REVIEW','QUOTED','ACCEPTED','TRANSFERRED_TO_WORKS','CANCELLED','DECLINED','EXPIRED']);
export const ROLES = Object.freeze(['INTAKE','TECHNICIAN','PRICE_APPROVER','CUSTOMER','SYSTEM','HANDOFF']);
const MOVES = Object.freeze({
 NEW:['NEEDS_INFO','READY_FOR_ASSESSMENT','CANCELLED'],
 NEEDS_INFO:['READY_FOR_ASSESSMENT','CANCELLED','EXPIRED'],
 READY_FOR_ASSESSMENT:['NEEDS_INFO','TECH_REVIEW','CANCELLED'],
 TECH_REVIEW:['NEEDS_INFO','PRICE_REVIEW','CANCELLED'],
 PRICE_REVIEW:['TECH_REVIEW','QUOTED','CANCELLED'],
 QUOTED:['PRICE_REVIEW','ACCEPTED','DECLINED','EXPIRED'],
 ACCEPTED:['TRANSFERRED_TO_WORKS','CANCELLED'],
 TRANSFERRED_TO_WORKS:[],CANCELLED:[],DECLINED:[],EXPIRED:[],
});
const AUTHORITY = Object.freeze({
 NEEDS_INFO:['INTAKE','TECHNICIAN'],
 READY_FOR_ASSESSMENT:['INTAKE','TECHNICIAN'],
 TECH_REVIEW:['TECHNICIAN'],
 PRICE_REVIEW:['TECHNICIAN'],
 QUOTED:['PRICE_APPROVER'],
 ACCEPTED:['CUSTOMER'],
 TRANSFERRED_TO_WORKS:['HANDOFF'],
 CANCELLED:['INTAKE','CUSTOMER'],
 DECLINED:['CUSTOMER'],
 EXPIRED:['SYSTEM'],
});
export function transitionIntake(current, target, actor, evidence={}) {
 if (!STATES.includes(current) || !STATES.includes(target)) return {ok:false,reason:'UNKNOWN_STATE'};
 if (!ROLES.includes(actor?.role) || typeof actor?.id !== 'string' || actor.id.trim().length===0)
  return {ok:false,reason:'ACTOR_REQUIRED'};
 if (current===target) return {ok:false,reason:'NO_STATE_CHANGE'};
 if (!MOVES[current].includes(target)) return {ok:false,reason:'TRANSITION_NOT_ALLOWED'};
 if (!AUTHORITY[target]?.includes(actor.role)) return {ok:false,reason:'ROLE_NOT_AUTHORISED'};
 if ((target==='TECH_REVIEW' || target==='PRICE_REVIEW') && evidence.assessmentEvidencePresent!==true)
  return {ok:false,reason:'ASSESSMENT_EVIDENCE_REQUIRED'};
 if (target==='QUOTED' && (evidence.technicalApproved!==true || evidence.priceApproved!==true || evidence.siteCostsReviewed!==true))
  return {ok:false,reason:'APPROVED_QUOTE_REQUIRED'};
 if (target==='ACCEPTED' && (evidence.customerAcceptanceVerified!==true || typeof evidence.quoteRef!=='string' || !evidence.quoteRef.trim()))
  return {ok:false,reason:'CUSTOMER_ACCEPTANCE_EVIDENCE_REQUIRED'};
 if (target==='TRANSFERRED_TO_WORKS' && (typeof evidence.worksReference!=='string' || !evidence.worksReference.trim() || evidence.handoffAcknowledged!==true))
  return {ok:false,reason:'WORKS_ACK_REQUIRED'};
 if (target==='EXPIRED' && evidence.expiryVerified!==true) return {ok:false,reason:'EXPIRY_EVIDENCE_REQUIRED'};
 const reason=typeof evidence.reason==='string'?evidence.reason.trim().slice(0,250):'';
 if (['CANCELLED','DECLINED'].includes(target) && !reason) return {ok:false,reason:'REASON_REQUIRED'};
 return {ok:true,previousStatus:current,nextStatus:target,auditIntent:{actorRef:actor.id.trim(),actorRole:actor.role,operation:'STATUS_TRANSITION',priorStatus:current,newStatus:target,reason:reason||null},requiresDurableCommit:true};
}
