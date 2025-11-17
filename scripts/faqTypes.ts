/**
 * TypeScript type definitions for FAQ extraction from tickets
 */

export interface FAQNote {
  id: number;
  body: string;
  isPrivate: boolean;
  isIncoming: boolean;
  isAgentReply: boolean;
  createdAt: string;
}

export interface FAQTicket {
  // Identification
  ticketId: number;
  displayId: number;
  subject: string;

  // Content
  description: string;
  descriptionHtml: string;

  // Classification
  ticketType: string;
  status: string;
  priority: string;

  // Timing
  createdAt: string;
  resolvedAt: string | null;

  // Participants
  requesterName: string;
  requesterEmail: string;
  responderName: string;

  // Conversation
  notes: FAQNote[];

  // Metadata
  tags: string[];
  agentReplyCount: number | null;
  customerReplyCount: number | null;
}

export type FAQTicketsArray = FAQTicket[];
