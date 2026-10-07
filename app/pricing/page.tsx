import Link from 'next/link';
import { Container, Section } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Card } from '@/components/ui/card';
import { CTA } from '@/components/ui/cta';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MessageSquare, Users, TrendingUp, Zap } from 'lucide-react';

export const metadata = {
  title: 'Pricing',
  description:
    'Revenue OS pricing. Start with essential sales automation and expand as you grow. Built for Nigerian businesses.',
};

export default function PricingPage() {

  const plans = [
    {
      name: 'Starter',
      icon: MessageSquare,
      price: '₦50,000',
      period: '/month',
      tagline: 'For businesses ready to stop losing leads',
      description: 'Capture enquiries, respond faster and keep track of your pipeline. The essentials to stop revenue leaking before the sale.',
      features: [
        'Revenue Inbox (WhatsApp + 1 channel)',
        'Lead capture and customer profiles',
        'Basic AI lead qualification',
        'Sales pipeline (up to 5 stages)',
        'Follow-up reminders and tasks',
        'Message templates',
        'Up to 200 conversations/month',
        '2 team members',
        'Business knowledge base',
      ],
      cta: 'Get Started',
      ctaHref: '/book-demo',
      highlight: false,
    },
    {
      name: 'Growth',
      icon: Zap,
      price: '₦120,000',
      period: '/month',
      tagline: 'For businesses that want to convert and retain more',
      description: 'Everything in Starter plus automated follow-up, multi-channel, post-purchase journeys and the AI next-best-action engine.',
      features: [
        'Everything in Starter',
        'Multi-channel inbox (WhatsApp + Instagram + Website)',
        'AI next-best-action engine',
        'Automated follow-up sequences',
        'Workflow builder (rules-based)',
        'Post-purchase customer journeys',
        'Reorder reminders',
        'Quotes and proposals',
        'Revenue dashboard',
        'Up to 1,000 conversations/month',
        '10 team members',
        'AI permission controls',
        'Approval queue',
      ],
      cta: 'Get Started',
      ctaHref: '/book-demo',
      highlight: true,
    },
    {
      name: 'Enterprise',
      icon: TrendingUp,
      price: 'Custom',
      period: '',
      tagline: 'For businesses running a full revenue operation',
      description: 'The complete Revenue OS platform — reactivation, loyalty, referrals, AI-assisted automation and revenue intelligence across your whole customer lifecycle.',
      features: [
        'Everything in Growth',
        'All customer channels',
        'AI-assisted and AI-automated workflows',
        'Customer reactivation engine',
        'Loyalty and referral programmes',
        'Upsell and cross-sell intelligence',
        'Revenue Copilot (natural language queries)',
        'Revenue attribution and recovery tracking',
        'Unlimited conversations',
        'Unlimited team members',
        'Custom integrations',
        'Dedicated onboarding',
        'Priority support',
      ],
      cta: 'Talk to Us',
      ctaHref: '/book-demo',
      highlight: false,
    },
  ];

  const included = [
    'Business knowledge base configuration',
    'Sales process and pipeline setup',
    'WhatsApp and channel connection',
    'Customer import',
    'Team onboarding and training',
    'AI permission configuration',
    'First workflow setup',
    'Ongoing support',
  ];

  const trustLevels = [
    { level: 'Starter', automation: 'Manual + Rules-based', description: 'You control every action. The system surfaces information and runs defined sequences.' },
    { level: 'Growth', automation: 'Rules + AI-assisted', description: 'AI recommends and drafts. Your team approves. Automation runs within your defined rules.' },
    { level: 'Enterprise', automation: 'Full automation spectrum', description: 'From manual to AI autopilot — per action, per channel, per customer segment. You set the boundaries.' },
  ];

  return (
    <div>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-background-cream to-background-slate pt-20">
        <Container size="narrow" className="text-center">
          <Heading as="h1" size="display-lg" className="mb-6">
            Pricing
          </Heading>
          <p className="text-xl text-primary-500 mb-4 max-w-2xl mx-auto">
            Start with what your business needs today. Expand as revenue grows.
          </p>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Every plan includes full product access with the features your tier unlocks. No hidden setup fees.
          </p>
        </Container>
      </Section>

      {/* Plans */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, i) => (
              <Card
                key={i}
                className={`p-8 flex flex-col ${plan.highlight ? 'border-2 border-accent-400 relative' : ''}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-accent-400 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${plan.highlight ? 'bg-accent-400' : 'bg-accent-100'}`}>
                    <plan.icon className={plan.highlight ? 'text-white' : 'text-accent-500'} size={24} />
                  </div>
                  <Heading as="h3" size="xl" className="mb-1">{plan.name}</Heading>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                    <span className="text-primary-400">{plan.period}</span>
                  </div>
                  <p className="text-sm font-semibold text-accent-500 mb-3">{plan.tagline}</p>
                  <p className="text-sm text-primary-600">{plan.description}</p>
                </div>

                <div className="flex-1 mb-8">
                  <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-4">What&apos;s included</p>
                  <ul className="space-y-2.5">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <CheckCircle2 className="text-accent-400 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm text-primary-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={plan.ctaHref} className="block">
                  <Button
                    className={`w-full ${plan.highlight ? '' : 'variant-secondary'}`}
                    variant={plan.highlight ? 'primary' : 'secondary'}
                  >
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* What's included in every plan */}
          <Card className="p-8 bg-background-slate border-primary-100 mb-12">
            <Heading as="h3" size="lg" className="mb-6">Included in every plan</Heading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="text-primary-500 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-sm text-primary-700">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      {/* Automation per plan */}
      <Section className="bg-background-slate">
        <Container size="narrow">
          <div className="text-center mb-10">
            <Heading as="h2" size="display-sm" className="mb-4">
              Your level of automation grows with your plan
            </Heading>
            <p className="text-lg text-primary-500">
              Every plan respects the same principle: the business is always in control.
            </p>
          </div>
          <div className="space-y-4">
            {trustLevels.map((tl, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-24 flex-shrink-0">
                    <span className="text-sm font-bold text-accent-500">{tl.level}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary-700 mb-1">{tl.automation}</p>
                    <p className="text-sm text-primary-500">{tl.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="mt-6 p-6 bg-primary-600 border-0">
            <p className="text-white text-center">
              A business that uses fully rules-based automation with no AI autonomy is still a{' '}
              <strong>successful Revenue OS customer.</strong>{' '}
              AI is available when you are ready for it — not forced on you.
            </p>
          </Card>
        </Container>
      </Section>

      {/* FAQs */}
      <Section>
        <Container size="narrow">
          <Heading as="h2" size="display-sm" className="mb-10 text-center">
            Common questions
          </Heading>
          <div className="space-y-6">
            {[
              {
                q: 'Do I need technical skills to set up Revenue OS?',
                a: 'No. The setup process is guided: connect your channels, import your customers, describe your sales process in plain language, configure your rules. Revenue OS translates that into the underlying system. Target: first useful result within 15 minutes.',
              },
              {
                q: 'Can I start without any AI automation?',
                a: 'Yes. You can run Revenue OS as a fully manual or rules-based system with no AI involvement. AI features are available and configurable — you decide what AI is permitted to do, and you can start with nothing and increase permission gradually.',
              },
              {
                q: 'What happens to my customer data?',
                a: 'Your customer data belongs to you. Revenue OS stores and processes it to run your revenue workflows. You can export your data at any time.',
              },
              {
                q: 'Is WhatsApp included?',
                a: 'Yes. WhatsApp is a first-class channel in Revenue OS. Every plan includes WhatsApp integration. Growth and Enterprise plans include multi-channel support.',
              },
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Yes. You can move between plans. If your business needs grow beyond your current tier, upgrading unlocks additional capabilities without losing any existing data or configurations.',
              },
              {
                q: 'What does "conversation" mean in the plan limits?',
                a: 'A conversation is a customer interaction thread — typically a WhatsApp or social media conversation. The limits apply to AI-handled or system-managed conversations per month. Human-to-human conversations are unlimited.',
              },
            ].map((faq, i) => (
              <Card key={i} className="p-6">
                <p className="font-semibold text-primary-900 mb-3">{faq.q}</p>
                <p className="text-primary-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-background-cream to-background-slate">
        <Container size="narrow" className="text-center">
          <Heading as="h2" size="display-sm" className="mb-4">
            Not sure which plan is right for your business?
          </Heading>
          <p className="text-lg text-primary-600 mb-8 max-w-xl mx-auto">
            Book a demo. We&apos;ll look at your current sales process, volume and goals — and recommend the right starting point.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA href="/book-demo" size="lg">
              Book a Demo
            </CTA>
            <Link href="/features">
              <Button variant="secondary" size="lg">
                Explore Features
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
