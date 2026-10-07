import Link from 'next/link';
import { Container, Section } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Card } from '@/components/ui/card';
import { CTA } from '@/components/ui/cta';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Brain,
  Target,
  Send,
  BarChart3,
  FileText,
  RefreshCw,
  UserPlus,
  TrendingUp,
  Workflow,
  Eye,
  Bell,
  Shield,
  Users,
  Sparkles,
  Phone,
  ArrowDown,
} from 'lucide-react';

export const metadata = {
  title: 'Features',
  description:
    'Revenue OS manages your entire customer lifecycle — from first enquiry to repeat purchase and referral. Human-defined, AI-powered, business-controlled.',
};

export default function FeaturesPage() {

  const acquireFeatures = [
    {
      icon: MessageSquare,
      title: 'Revenue Inbox',
      description:
        'Every customer conversation from WhatsApp, Instagram, Facebook, website and email in one place. Each message shows customer identity, conversation history, AI-detected intent, recommended next action and lead status.',
      detail:
        'AI automatically classifies each conversation: enquiry, price request, complaint, reorder intent, referral opportunity and more. Your team sees what matters without reading every message.',
    },
    {
      icon: Brain,
      title: 'Lead Capture Engine',
      description:
        'Every incoming enquiry becomes a structured customer record automatically. AI extracts identity, product interest, budget, location, urgency and buying intent from the conversation.',
      detail:
        '"How much is the 3-seater and can you deliver to Lekki on Saturday?" becomes a record with product, location, delivery requirement, high purchase intent, and a recommended next action — all without manual data entry.',
    },
    {
      icon: Target,
      title: 'AI Lead Qualification',
      description:
        'Revenue OS evaluates leads against criteria you define. You configure what makes a good customer for your business. AI identifies the signals and shows you why.',
      detail:
        'Instead of a mysterious score, you see: "High purchase intent — asked for price, delivery date and payment details." Your qualification criteria are configurable by business type.',
    },
    {
      icon: Users,
      title: 'Customer 360',
      description:
        'Every customer has a unified profile showing identity, conversation history, purchases, quotes, complaints, engagement patterns and lifecycle stage.',
      detail:
        'The profile answers one question: "Who is this customer, what have they done, where are they now, and what should happen next?" Your team never has to search through WhatsApp to understand a customer again.',
    },
  ];

  const convertFeatures = [
    {
      icon: Sparkles,
      title: 'AI Next-Best-Action Engine',
      description:
        'Instead of forcing salespeople to inspect every record, Revenue OS tells them exactly what to do next — with context, a suggested message and clear reasoning.',
      detail:
        '"Amaka requested a quotation 4 days ago. She has opened the last two messages but hasn\'t replied. Recommended action: Follow up today." One click to send, edit, schedule or assign.',
      highlight: true,
    },
    {
      icon: Send,
      title: 'Follow-Up Engine',
      description:
        'Follow-up is a first-class capability, not an afterthought. Revenue OS continuously monitors your pipeline for opportunities that need attention and executes follow-up according to your rules.',
      detail:
        'Trigger examples: new lead not contacted, quotation not accepted, customer promised to respond, deal sitting too long, customer approaching renewal. You define what happens next at each trigger.',
    },
    {
      icon: BarChart3,
      title: 'Sales Pipeline',
      description:
        'A live view of every opportunity from first contact to payment. New → Contacted → Engaged → Qualified → Opportunity → Quote → Negotiation → Won. Every stage is customisable.',
      detail:
        'Every opportunity carries customer, conversation history, products, value, stage, activities, tasks, quotes, payments, previous purchases and next action. No more guessing where a deal stands.',
    },
    {
      icon: FileText,
      title: 'Quotes & Proposals',
      description:
        'Generate quotations using information already in the customer record. Track quote sent → viewed → follow-up → accepted → payment. The system keeps the opportunity moving.',
      detail:
        'When a prospect is ready, one click generates a contextualised quote. Revenue OS then monitors what happens and automatically triggers the appropriate follow-up sequence.',
    },
  ];

  const retainFeatures = [
    {
      icon: RefreshCw,
      title: 'Post-Purchase Journeys',
      description:
        'The sale is not the end of the relationship. Revenue OS continues working after the customer pays — onboarding, delivery confirmation, usage check-ins, satisfaction, reorder prompts.',
      detail:
        'Example: Purchase → Thank customer → Confirm delivery → Check-in at Day 3 → Usage question at Day 7 → Reorder prompt at Day 30. Every step is configurable. Every message can be fixed, template or AI-personalised.',
    },
    {
      icon: TrendingUp,
      title: 'Reorder & Retention Engine',
      description:
        'Define expected reorder intervals for your products. Revenue OS identifies customers approaching their reorder window and triggers the appropriate action.',
      detail:
        '"12 customers are likely due for reorder this week." The system can alert a salesperson, send an approved reminder or personalise the message with AI — depending on your configuration.',
    },
    {
      icon: UserPlus,
      title: 'Reactivation Engine',
      description:
        'Dormant customers are a managed revenue segment. Revenue OS identifies who has gone quiet, segments them by purchase history and value, and triggers targeted reactivation.',
      detail:
        '"You have 142 customers who haven\'t purchased in 90 days. 27 are high-value. 83 purchased Product A but never Product B." Not everyone receives the same message — reactivation is based on actual customer history.',
    },
    {
      icon: Users,
      title: 'Upsell & Cross-Sell',
      description:
        'Revenue OS learns what customers have bought and identifies relevant next opportunities. Product B commonly follows Product A. Customer eligible for annual plan. Renewal approaching.',
      detail:
        'Your existing customer base becomes an active revenue channel — not a static list.',
    },
  ];

  const growFeatures = [
    {
      icon: TrendingUp,
      title: 'Loyalty Engine',
      description:
        'Configure points, tiers, milestones and rewards. Revenue OS tracks progress and surfaces loyalty moments — "You are ₦42,000 away from Gold." Businesses choose whether loyalty is manual, rules-based or automated.',
      detail: 'Tiers: Silver, Gold, VIP. Milestones: 3 purchases, ₦500k spent, 1-year customer, 5 referrals.',
    },
    {
      icon: Users,
      title: 'Referral Engine',
      description:
        'Customer referral is native to Revenue OS. Create referral codes, track the full journey from referral to purchase, attribute revenue and manage rewards.',
      detail:
        'The owner sees: Referral revenue ₦3.2m — not just "247 referral clicks." Revenue attribution matters.',
    },
    {
      icon: Target,
      title: 'Campaigns',
      description:
        'Target specific customer segments with relevant messages. Recent buyers, dormant customers, VIPs, customers due for reorder, customers interested in a product.',
      detail:
        'Revenue OS discourages bulk messaging to everyone. Customer state controls communication — a customer who just complained should not receive a referral offer.',
    },
  ];

  const intelligenceFeatures = [
    {
      icon: Eye,
      title: 'Revenue Command Center',
      description:
        'Live management dashboard showing revenue, pipeline, customers, sales team performance and AI activity. See the relationship between activity and revenue — not just activity.',
      detail: 'Revenue by source, salesperson, product and channel. Conversion rates, sales velocity, retention, reactivation, referral revenue and automation performance.',
    },
    {
      icon: Sparkles,
      title: 'Revenue Copilot',
      description:
        'Ask your business questions in plain language. "How are sales doing this month?" "Which leads need attention?" "Which customers are likely to reorder?" "Reactivate customers who haven\'t purchased in six months."',
      detail:
        'Revenue OS provides evidence, not generic AI prose. It traces revenue back to the source and identifies the largest bottlenecks in your funnel.',
    },
    {
      icon: Bell,
      title: 'Action-Oriented Notifications',
      description:
        'Revenue OS does not send "You have 47 unread notifications." It sends: "3 high-intent leads have not been contacted." "₦2.1m of pipeline has had no activity for 7+ days."',
      detail: '"8 customers are likely due for reorder this week." "AI has drafted 4 customer responses awaiting your approval." Every notification points to a specific action.',
    },
    {
      icon: BarChart3,
      title: 'Revenue Attribution',
      description:
        'Revenue OS distinguishes direct revenue from assisted revenue — where the system contributed through follow-up, recommendation, reminder, reactivation or campaign.',
      detail:
        'The most compelling metric: Revenue Recovered by Revenue OS. This is more useful than "10,000 messages automated."',
    },
  ];

  const controlFeatures = [
    {
      icon: Workflow,
      title: 'Workflow Engine',
      description:
        'Build automation without needing to understand APIs or logic. Describe the process: "When someone buys our skincare bundle, check on them three days later, follow up at two weeks, remind them to reorder at six weeks." Revenue OS builds the workflow.',
      detail: 'Trigger → Wait → Condition → Branch → Action → Approval → Exit. Every workflow is inspectable, editable and testable before activation.',
    },
    {
      icon: Shield,
      title: 'AI Permissions',
      description:
        'Think of AI as a new employee. The business decides what it can do. FAQs → Autopilot. Price responses → Autopilot. Discounts → Approval required. Complaints → Human only. Refunds → Human only.',
      detail:
        'Permissions are configurable per action, not just per account. AI never invents price, availability, policies, delivery timelines or product specifications.',
    },
    {
      icon: Eye,
      title: 'Automation Control Centre',
      description:
        'Every active workflow shows trigger, customers enrolled, messages sent, conversions, revenue influenced, failures, exceptions and AI involvement. Automation is never a black box.',
      detail: 'Users can pause, edit, duplicate, test, deactivate, change AI permissions or review every action the system has taken — with a full execution log and reason for each.',
    },
    {
      icon: CheckCircle2,
      title: 'Approval Queue',
      description:
        'For businesses using AI-assisted operations, a central queue shows messages awaiting approval, discount requests, complaints requiring human response and AI recommendations.',
      detail:
        'Approve, edit, reject or approve-and-remember-as-a-rule. If you repeatedly approve the same decision, Revenue OS asks: "Would you like to automate this in future?" Trust grows naturally.',
    },
    {
      icon: FileText,
      title: 'Message Library & Business Rules',
      description:
        'A reusable library of exact messages, templates and AI-personalizable variants. Combined with business rules: never offer more than 5% discount without approval, never message between 9 PM and 8 AM, VIP customers require senior staff.',
      detail: 'Rules override AI behaviour. The rule hierarchy ensures AI never optimises its way around a business policy.',
    },
  ];

  const FeatureCard = ({
    icon: Icon,
    title,
    description,
    detail,
    highlight = false,
  }: {
    icon: React.ElementType;
    title: string;
    description: string;
    detail: string;
    highlight?: boolean;
  }) => (
    <Card className={`p-8 ${highlight ? 'border-2 border-accent-400 bg-accent-50' : ''}`}>
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${highlight ? 'bg-accent-400' : 'bg-accent-100'}`}>
          <Icon className={highlight ? 'text-white' : 'text-accent-500'} size={24} />
        </div>
        {highlight && (
          <span className="text-xs font-bold text-accent-600 uppercase tracking-wider bg-accent-100 px-2 py-1 rounded self-start">
            Defining Feature
          </span>
        )}
      </div>
      <Heading as="h3" size="lg" className="mb-3">
        {title}
      </Heading>
      <p className="text-primary-700 mb-4">{description}</p>
      <div className="border-t border-primary-100 pt-4">
        <p className="text-sm text-primary-500 italic">{detail}</p>
      </div>
    </Card>
  );

  const PhaseHeader = ({
    phase,
    title,
    description,
  }: {
    phase: string;
    title: string;
    description: string;
  }) => (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-bold text-accent-400 uppercase tracking-widest bg-accent-100 px-3 py-1 rounded-full">
          {phase}
        </span>
      </div>
      <Heading as="h2" size="display-sm" className="mb-3">
        {title}
      </Heading>
      <p className="text-xl text-primary-500 max-w-3xl">{description}</p>
    </div>
  );

  return (
    <div>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-background-cream to-background-slate pt-20">
        <Container size="content" className="text-center">
          <Heading as="h1" size="display-lg" className="mb-6">
            Features
          </Heading>
          <p className="text-xl text-primary-500 max-w-3xl mx-auto mb-4">
            Revenue OS manages the entire customer lifecycle — from the first enquiry to repeat purchase, referral and recovery.
          </p>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Every feature is built around a single principle: the business defines the rules, Revenue OS executes them, AI assists where the business permits.
          </p>
        </Container>
      </Section>

      {/* Navigation */}
      <Section className="bg-background-slate py-4">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Acquire', href: '#acquire' },
              { label: 'Convert', href: '#convert' },
              { label: 'Retain & Grow', href: '#retain' },
              { label: 'Growth Engine', href: '#growth' },
              { label: 'Intelligence', href: '#intelligence' },
              { label: 'Control & Trust', href: '#control' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 bg-white border border-primary-200 rounded-full text-sm font-medium text-primary-700 hover:border-accent-400 hover:text-accent-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* ACQUIRE */}
      <Section id="acquire">
        <Container>
          <PhaseHeader
            phase="Acquire"
            title="Capture every enquiry. Understand every customer."
            description="Most businesses lose revenue before a sale is even attempted. Slow responses, lost enquiries, no customer context. Revenue OS solves this at the point of first contact."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {acquireFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CONVERT */}
      <Section id="convert" className="bg-background-slate">
        <Container>
          <PhaseHeader
            phase="Convert"
            title="Know what to do next. Then do it."
            description="Most lost sales aren't lost because customers said no. They disappear because nobody followed up. Revenue OS makes sure every opportunity gets the right attention at the right time."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {convertFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} highlight={f.highlight} />
            ))}
          </div>

          {/* Next-Best-Action callout */}
          <Card className="mt-8 p-8 bg-primary-600 border-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs font-bold text-accent-400 uppercase tracking-wider mb-3">How it works</p>
                <Heading as="h3" size="display-sm" className="text-white mb-4">
                  Revenue OS tells your team exactly what to do next
                </Heading>
                <p className="text-primary-100">
                  Instead of inspecting every customer record, salespeople see a prioritised list of actions with context, suggested messages and one-click execution.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { customer: 'Amaka', context: 'Quote sent 4 days ago. Two messages opened. No reply.', action: 'Follow up on payment options' },
                  { customer: 'Chukwudi', context: 'High-intent lead. Not contacted in 24 hours.', action: 'Send product information' },
                  { customer: 'Fatima', context: 'Purchased 6 weeks ago. Likely due for reorder.', action: 'Send reorder reminder' },
                ].map((item, i) => (
                  <div key={i} className="bg-primary-500 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-white">{item.customer}</span>
                      <span className="text-xs text-accent-400 font-medium">→ {item.action}</span>
                    </div>
                    <p className="text-sm text-primary-200">{item.context}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* RETAIN */}
      <Section id="retain">
        <Container>
          <PhaseHeader
            phase="Retain & Grow"
            title="The sale is not the end of the relationship."
            description="Revenue OS continues working after customers pay. Post-purchase journeys, reorder reminders, satisfaction checks, dormant customer recovery — systematically increasing customer lifetime value."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {retainFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>

          {/* Post-purchase journey example */}
          <Card className="mt-8 p-8 bg-background-slate">
            <Heading as="h3" size="lg" className="mb-6">
              Example: Post-purchase journey for a skincare business
            </Heading>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { day: 'Purchase', action: 'Send order confirmation and thank you' },
                { day: 'Day 1', action: 'Confirm delivery received' },
                { day: 'Day 3', action: '"Have you started using it? Here\'s how to get the best results."' },
                { day: 'Day 7', action: '"How is it going? Any questions?"' },
                { day: 'Day 14', action: 'Collect feedback. If positive → request review. If negative → alert support and pause promotions.' },
                { day: 'Day 42', action: '"Ready for your next order?" Reorder reminder with personalised message.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-16 text-xs font-bold text-accent-500 uppercase flex-shrink-0 pt-0.5">{item.day}</div>
                  <p className="text-sm text-primary-700">{item.action}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-primary-500 mt-6 italic">
              Every step can use a fixed message, a template or an AI-personalised message — depending on your configuration.
            </p>
          </Card>
        </Container>
      </Section>

      {/* GROWTH */}
      <Section id="growth" className="bg-background-slate">
        <Container>
          <PhaseHeader
            phase="Multiply"
            title="Turn existing customers into new ones."
            description="Loyalty, referrals and targeted campaigns turn your customer base into a growth engine. Revenue OS tracks attribution from referral click to revenue — not just activity."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {growFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </Container>
      </Section>

      {/* INTELLIGENCE */}
      <Section id="intelligence">
        <Container>
          <PhaseHeader
            phase="Revenue Intelligence"
            title="Know what is happening without chasing your team for updates."
            description="Revenue OS answers business questions in plain language and identifies opportunities before they become problems. Evidence, not generic AI summaries."
          />
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {intelligenceFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>

          {/* Questions Revenue OS can answer */}
          <Card className="p-8 bg-primary-600 border-0">
            <Heading as="h3" size="lg" className="text-white mb-6">Questions Revenue OS can answer</Heading>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Why did sales drop this month?',
                'Which salesperson has the most stalled opportunities?',
                'Which customers are due for reorder?',
                'How much revenue came from Instagram?',
                'Which products have the highest repeat purchase rate?',
                'Which customers are at risk of becoming dormant?',
                'How much revenue did follow-up recover?',
                'Which campaign generated the most actual sales?',
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-3 bg-primary-500 p-3 rounded-lg">
                  <Sparkles className="text-accent-400 flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-sm text-white">&quot;{q}&quot;</p>
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      {/* CONTROL */}
      <Section id="control" className="bg-background-slate">
        <Container>
          <PhaseHeader
            phase="Control & Trust"
            title="You are always in control of what AI can do."
            description="Revenue OS is built around trust. AI never takes action without permission. Every automated action is traceable, explainable and within the authority the business has granted."
          />
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {controlFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>

          {/* AI Permission Matrix */}
          <Card className="p-8">
            <Heading as="h3" size="lg" className="mb-6">Default AI permission levels</Heading>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary-100">
                    <th className="text-left py-3 pr-6 font-semibold text-primary-700">Capability</th>
                    <th className="text-left py-3 pr-6 font-semibold text-primary-700">Default</th>
                    <th className="text-left py-3 font-semibold text-primary-700">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-50">
                  {[
                    { cap: 'Answer FAQs', level: 'Autopilot', why: 'Low risk. Defined answers.', color: 'bg-green-100 text-green-700' },
                    { cap: 'Capture leads', level: 'Autopilot', why: 'Purely additive action.', color: 'bg-green-100 text-green-700' },
                    { cap: 'Send approved templates', level: 'Autopilot', why: 'Business-authored messages.', color: 'bg-green-100 text-green-700' },
                    { cap: 'Qualify leads', level: 'Draft / Auto', why: 'Depends on configuration.', color: 'bg-blue-100 text-blue-700' },
                    { cap: 'Generate custom replies', level: 'Draft', why: 'Human review recommended.', color: 'bg-blue-100 text-blue-700' },
                    { cap: 'Recommend discount', level: 'Suggest', why: 'Judgment required.', color: 'bg-amber-100 text-amber-700' },
                    { cap: 'Offer discount', level: 'Approval required', why: 'Commercial commitment.', color: 'bg-amber-100 text-amber-700' },
                    { cap: 'Handle complaints', level: 'Human', why: 'Relationship risk.', color: 'bg-red-100 text-red-700' },
                    { cap: 'Issue refunds', level: 'Human', why: 'Financial commitment.', color: 'bg-red-100 text-red-700' },
                    { cap: 'Contact VIP customers', level: 'Approval required', why: 'High-value relationships.', color: 'bg-amber-100 text-amber-700' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-3 pr-6 text-primary-700">{row.cap}</td>
                      <td className="py-3 pr-6">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${row.color}`}>{row.level}</span>
                      </td>
                      <td className="py-3 text-primary-500">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-primary-500 mt-4">All permissions are configurable. Businesses can set different levels per action, per channel or per customer segment.</p>
          </Card>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-background-cream to-background-slate">
        <Container size="narrow" className="text-center">
          <Heading as="h2" size="display-md" className="mb-6">
            See Revenue OS working on your business
          </Heading>
          <p className="text-xl text-primary-500 mb-10 max-w-2xl mx-auto">
            Every business is different. Book a demo and we&apos;ll walk through the features that are most relevant to how you sell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA href="/book-demo" size="lg">
              Book a Demo <ArrowRight className="w-5 h-5" />
            </CTA>
            <Link href="/pricing">
              <Button variant="secondary" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
