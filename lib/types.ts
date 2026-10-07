// Core content type definitions for Bedrock AI Business Systems

export type AutomationLevel = 'autonomous' | 'ai-assisted' | 'human-controlled';

export type SystemCategory = 
  | 'revenue' 
  | 'customer-operations' 
  | 'finance' 
  | 'procurement' 
  | 'documents' 
  | 'management-intelligence';

export type IndustryType =
  | 'financial-services'
  | 'healthcare'
  | 'distribution-commerce'
  | 'professional-services'
  | 'real-estate'
  | 'manufacturing'
  | 'logistics'
  | 'education'
  | 'export-trade';

/**
 * Integration - External systems that AI Business Systems connect to
 */
export interface Integration {
  id: string;
  name: string;
  category: 'communication' | 'crm' | 'erp' | 'accounting' | 'productivity' | 'payment' | 'database' | 'custom';
  description: string;
  commonUseCase: string;
}

/**
 * Task - Individual action within a workflow
 */
export interface Task {
  id: string;
  name: string;
  description: string;
  automationLevel: AutomationLevel;
  aiCapability?: string; // What AI does
  humanRole?: string; // What humans do
  exampleInput?: string;
  exampleOutput?: string;
}

/**
 * Workflow - Sequence of business activities
 */
export interface Workflow {
  id: string;
  name: string;
  trigger: string; // What starts this workflow
  description: string;
  steps: string[]; // High-level steps
  tasks: Task[]; // Detailed task breakdown
  automationLevel: AutomationLevel;
  integrations: string[]; // Integration IDs
  businessKnowledge: string[]; // What context is needed
  exceptions: string[]; // Edge cases
  metrics: string[]; // How success is measured
}

/**
 * Module - Deployable component of a system
 */
export interface Module {
  id: string;
  name: string;
  systemId: string; // Parent system
  tagline: string;
  description: string;
  problem: string; // What business problem it solves
  workflows: Workflow[];
  integrations: string[]; // Integration IDs
  autonomousActions: string[]; // What runs automatically
  aiAssistedActions: string[]; // What AI prepares for human review
  humanControlActions: string[]; // What requires human approval
  metrics: string[]; // Key performance indicators
  relatedModules: string[]; // Module IDs
}

/**
 * System - Collection of related workflows serving a business function
 */
export interface System {
  id: string;
  slug: string;
  name: string;
  category: SystemCategory;
  tagline: string;
  description: string;
  icon: string; // Lucide icon name
  businessProblem: {
    title: string;
    today: string[]; // Pain points with current manual process
    withAI: string[]; // How AI system changes this
  };
  modules: string[]; // Module IDs
  integrations: string[]; // Common integration IDs
  businessKnowledge: string[]; // What company context is needed
  targetCustomers: string[]; // Who benefits most
  relatedSystems: string[]; // System IDs for expansion paths
  metrics: {
    category: string;
    examples: string[];
  }[];
}

/**
 * Industry - Vertical-specific business context
 */
export interface Industry {
  id: string;
  slug: string;
  name: string;
  type: IndustryType;
  description: string;
  businessContext: {
    commonPainPoints: string[];
    typicalWorkflows: string[];
    regulatoryConsiderations?: string[];
  };
  nigerianContext?: {
    specificChallenges: string[];
    opportunities: string[];
  };
  applicableSystems: {
    systemId: string;
    priority: 'primary' | 'secondary';
    useCases: string[];
  }[];
  exampleWorkflows: {
    scenario: string;
    currentProcess: string[];
    aiSystemProcess: string[];
  }[];
  commonIntegrations: string[];
  industryOSVision?: string; // Future Industry OS concept
}

/**
 * Content Label - Transparency about capability status
 */
export type ContentLabel = 
  | 'available-now'      // Can genuinely be deployed
  | 'productized'        // Standardized capability
  | 'example'            // Demonstration of what could be built
  | 'roadmap';           // Future platform concept

/**
 * Use Case - Specific scenario demonstrating system value
 */
export interface UseCase {
  id: string;
  title: string;
  industry?: IndustryType;
  scenario: string;
  before: string[];
  after: string[];
  metrics?: {
    metric: string;
    improvement: string;
  }[];
  label: ContentLabel;
}
