import { Integration } from '@/lib/types';

/**
 * Common business system integrations
 * These are the external systems AI Business Systems connect to
 */
export const integrations: Integration[] = [
  // Communication
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    category: 'communication',
    description: 'WhatsApp Business API for customer communication',
    commonUseCase: 'Lead response, customer service, notifications',
  },
  {
    id: 'email',
    name: 'Email',
    category: 'communication',
    description: 'Email systems (Gmail, Outlook, custom SMTP)',
    commonUseCase: 'Customer communication, internal notifications',
  },
  {
    id: 'sms',
    name: 'SMS',
    category: 'communication',
    description: 'SMS messaging platforms',
    commonUseCase: 'Reminders, notifications, verification',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'communication',
    description: 'Instagram Direct Messages',
    commonUseCase: 'Social media lead capture and response',
  },

  // CRM
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'crm',
    description: 'Salesforce CRM platform',
    commonUseCase: 'Customer records, pipeline management, reporting',
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'crm',
    description: 'HubSpot CRM and marketing platform',
    commonUseCase: 'Contact management, deal tracking, automation',
  },
  {
    id: 'zoho-crm',
    name: 'Zoho CRM',
    category: 'crm',
    description: 'Zoho CRM system',
    commonUseCase: 'Sales pipeline, customer database, analytics',
  },
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    category: 'crm',
    description: 'Sales-focused CRM',
    commonUseCase: 'Deal tracking, sales automation',
  },

  // ERP
  {
    id: 'sap',
    name: 'SAP',
    category: 'erp',
    description: 'SAP ERP system',
    commonUseCase: 'Enterprise resource planning, inventory, orders',
  },
  {
    id: 'oracle-erp',
    name: 'Oracle ERP',
    category: 'erp',
    description: 'Oracle ERP Cloud',
    commonUseCase: 'Financial management, supply chain, procurement',
  },
  {
    id: 'microsoft-dynamics',
    name: 'Microsoft Dynamics',
    category: 'erp',
    description: 'Microsoft Dynamics 365',
    commonUseCase: 'Business operations, financials, supply chain',
  },

  // Accounting
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    category: 'accounting',
    description: 'QuickBooks accounting software',
    commonUseCase: 'Invoicing, expense tracking, financial reporting',
  },
  {
    id: 'xero',
    name: 'Xero',
    category: 'accounting',
    description: 'Xero accounting platform',
    commonUseCase: 'Bookkeeping, invoicing, bank reconciliation',
  },
  {
    id: 'sage',
    name: 'Sage',
    category: 'accounting',
    description: 'Sage accounting software',
    commonUseCase: 'Financial management, payroll, compliance',
  },

  // Productivity
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    category: 'productivity',
    description: 'Gmail, Drive, Sheets, Calendar, Docs',
    commonUseCase: 'Document storage, spreadsheets, email, scheduling',
  },
  {
    id: 'microsoft-365',
    name: 'Microsoft 365',
    category: 'productivity',
    description: 'Outlook, OneDrive, Excel, Word, Teams',
    commonUseCase: 'Office productivity, collaboration, storage',
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'productivity',
    description: 'Team communication platform',
    commonUseCase: 'Internal notifications, team coordination',
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'productivity',
    description: 'Workspace and knowledge management',
    commonUseCase: 'Documentation, procedures, knowledge base',
  },

  // Payment
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'payment',
    description: 'Payment processing platform',
    commonUseCase: 'Online payments, subscription billing',
  },
  {
    id: 'paystack',
    name: 'Paystack',
    category: 'payment',
    description: 'African payment gateway',
    commonUseCase: 'Payment processing, bank transfers, mobile money',
  },
  {
    id: 'flutterwave',
    name: 'Flutterwave',
    category: 'payment',
    description: 'African payment infrastructure',
    commonUseCase: 'Multi-channel payments across Africa',
  },

  // Database
  {
    id: 'airtable',
    name: 'Airtable',
    category: 'database',
    description: 'Collaborative database platform',
    commonUseCase: 'Custom databases, project tracking, inventory',
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    category: 'database',
    description: 'Cloud spreadsheet application',
    commonUseCase: 'Data storage, reporting, collaborative editing',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    description: 'Relational database system',
    commonUseCase: 'Application database, data storage',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    description: 'Relational database',
    commonUseCase: 'Web application data, business records',
  },

  // Custom
  {
    id: 'custom-api',
    name: 'Custom API',
    category: 'custom',
    description: 'Proprietary business systems',
    commonUseCase: 'Internal applications, legacy systems, specialized software',
  },
  {
    id: 'website',
    name: 'Website',
    category: 'custom',
    description: 'Company website and web forms',
    commonUseCase: 'Lead capture, contact forms, enquiries',
  },
];

// Helper function to get integration by ID
export function getIntegration(id: string): Integration | undefined {
  return integrations.find(i => i.id === id);
}

// Helper function to get integrations by category
export function getIntegrationsByCategory(category: Integration['category']): Integration[] {
  return integrations.filter(i => i.category === category);
}

// Helper function to get multiple integrations by IDs
export function getIntegrations(ids: string[]): Integration[] {
  return ids.map(id => getIntegration(id)).filter(Boolean) as Integration[];
}
