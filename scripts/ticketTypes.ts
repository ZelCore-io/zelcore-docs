/**
 * TypeScript type definitions for Freshdesk ticket data
 */

export interface CCEmail {
  cc_emails: string[];
  fwd_emails: string[];
  bcc_emails: string[];
  reply_cc: string[];
  tkt_cc: string[];
}

export interface CustomField {
  [key: string]: any;
}

export interface Requester {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  account_id: number;
  active: boolean;
  customer_id: number | null;
  job_title: string | null;
  phone: string | null;
  mobile: string | null;
  twitter_id: string | null;
  description: string | null;
  time_zone: string;
  deleted: boolean;
  fb_profile_id: string | null;
  language: string;
  address: string | null;
  external_id: string | null;
  helpdesk_agent: boolean;
  unique_external_id: string | null;
  company_id: number | null;
}

export interface TicketStates {
  ticket_id: number;
  opened_at: string | null;
  pending_since: string | null;
  resolved_at: string | null;
  closed_at: string | null;
  first_assigned_at: string | null;
  assigned_at: string | null;
  first_response_time: string | null;
  requester_responded_at: string | null;
  agent_responded_at: string | null;
  created_at: string;
  updated_at: string;
  group_escalated: boolean;
  inbound_count: number;
  status_updated_at: string | null;
  sla_timer_stopped_at: string | null;
  outbound_count: number;
  avg_response_time: number | null;
  first_resp_time_by_bhrs: number | null;
  resolution_time_by_bhrs: number | null;
  avg_response_time_by_bhrs: number | null;
  resolution_time_updated_at: string | null;
}

export interface GroupUser {
  id: number;
}

export interface SourceAdditionalInfo {
  email?: {
    received_at: string;
  };
  [key: string]: any;
}

export interface ReportsData {
  first_assign_by_bhrs: number | null;
  first_response_id: number | null;
  first_response_group_id: number | null;
  first_response_agent_id: number | null;
  first_assign_agent_id: number | null;
  first_assign_group_id: number | null;
  agent_reassigned_count: number | null;
  group_reassigned_count: number | null;
  reopened_count: number | null;
  private_note_count: number | null;
  public_note_count: number | null;
  agent_reply_count: number | null;
  customer_reply_count: number | null;
  agent_assigned_flag: boolean | null;
  agent_reassigned_flag: boolean | null;
  group_assigned_flag: boolean | null;
  group_reassigned_flag: boolean | null;
  internal_agent_assigned_flag: boolean | null;
  internal_agent_reassigned_flag: boolean | null;
  internal_group_assigned_flag: boolean | null;
  internal_group_reassigned_flag: boolean | null;
  internal_agent_first_assign_in_bhrs: number | null;
  last_resolved_at: string | null;
  initial_sentiment: string | null;
  archive: boolean;
  resolution_escalation_level: number | null;
  response_reminded: boolean;
  resolution_reminded: boolean;
  time_to_resolution_in_chrs: number | null;
  outbound_email: boolean;
  watchers: any[];
  group_users: GroupUser[];
  on_state_time: number;
  source_additional_info: SourceAdditionalInfo | null;
  status_stop_sla_timer: boolean;
  status_deleted: boolean;
}

export interface Attachment {
  id: number;
  name: string;
  content_type: string;
  size: number;
  created_at: string;
  updated_at: string;
  attachment_url: string;
  thumb_url: string | null;
}

export interface Note {
  id: number;
  body: string;
  user_id: number;
  source: number;
  incoming: boolean;
  private: boolean;
  created_at: string;
  updated_at: string;
  deleted: boolean;
  notable_id: number;
  notable_type: string;
  account_id: number;
  body_html: string;
  support_email: string | null;
  attachments: Attachment[];
}

export interface HelpdeskTicket {
  id: number;
  description: string;
  requester_id: number;
  responder_id: number | null;
  status: number;
  urgent: boolean;
  source: number;
  spam: boolean;
  deleted: boolean;
  created_at: string;
  updated_at: string;
  trained: boolean;
  account_id: number;
  subject: string;
  display_id: number;
  owner_id: number | null;
  group_id: number | null;
  due_by: string;
  frDueBy: string;
  isescalated: boolean;
  priority: number;
  fr_escalated: boolean;
  to_email: string | null;
  email_config_id: number | null;
  cc_email: CCEmail;
  delta: boolean;
  ticket_type: string;
  description_html: string;
  parent_ticket_id: number | null;
  dirty: number;
  sl_product_id: number | null;
  sl_sla_policy_id: number | null;
  sl_merge_parent_ticket: number | null;
  sl_skill_id: number | null;
  st_survey_rating: number | null;
  sl_escalation_level: number | null;
  sl_manual_dueby: string | null;
  internal_group_id: number | null;
  internal_agent_id: number | null;
  association_type: number | null;
  associates_rdb: any | null;
  sla_state: number;
  nr_due_by: string | null;
  nr_reminded: boolean;
  nr_escalated: boolean;
  int_tc01: any | null;
  int_tc02: any | null;
  int_tc03: any | null;
  int_tc04: any | null;
  int_tc05: any | null;
  long_tc01: any | null;
  long_tc02: any | null;
  long_tc03: any | null;
  long_tc04: any | null;
  long_tc05: any | null;
  datetime_tc01: string | null;
  datetime_tc02: string | null;
  datetime_tc03: string | null;
  json_tc01: any | null;
  status_name: string;
  requester_status_name: string;
  priority_name: string;
  source_name: string;
  requester_name: string;
  responder_name: string;
  product_id: number | null;
  to_emails: string[] | null;
  reports_data: ReportsData;
  custom_field: CustomField;
  tags: string[];
  attachments: Attachment[];
  ticket_states: TicketStates;
  requester: Requester;
  notes: Note[];
}

export interface TicketWrapper {
  helpdesk_ticket: HelpdeskTicket;
}

export type TicketsArray = TicketWrapper[];
