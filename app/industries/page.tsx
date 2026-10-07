import Link from 'next/link';
import { Container, Section } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Card } from '@/components/ui/card';
import { CTA } from '@/components/ui/cta';
import { Button } from '@/components/ui/button';
import {
  Shirt,
  Sparkles,
  ShoppingBag,
  Sofa,
  Smartphone,
  Car,
  Home,
  GraduationCap,
  Plane,
  Calendar,
  Heart,
  Building,
  Package,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

export const metadata = {
  title: 'Industries',
  description:
    'Revenue OS is built for Nigerian businesses that acquire and sell through WhatsApp, Instagram and other conversational channels. See which businesses it is built for.',
};

export default function IndustriesPage() {

  const icpSignals = [
    'Receives lots of "How much?" enquiries',
    'Has several salespeople managing separate conversations',
    'Follows up manually — or not at all',
    'Has customers asking the same questions repeatedly',
    'Sells products with repeat purchase cycles',
    'Has dormant customers who used to buy',
    'Loses leads because nobody followed up',
    'Has a meaningful Instagram or WhatsApp presence',
    '20+ meaningful customer enquiries per day',
  ];

  const tier1 = [
    {
      icon: Shirt,
      name: 'Fashion',
      description: 'Manage product enquiries, custom order requests, size consultations and repeat customers.',
      signals: ['High "How much?" volume', 'Custom order follow-up', 'Seasonal repeat purchases', 'Instagram-driven enquiries'],
    },
    {
      icon: Sparkles,
      name: 'Beauty & Skincare',
      description: 'Handle product questions, usage guidance, reorder reminders and customer satisfaction.',
      signals: ['High repeat purchase rate', 'Product education needed', 'Customer reorder cycles', 'Before/after testimonials'],
    },
    {
      icon: ShoppingBag,
      name: 'Cosmetics & Hair',
      description: 'Capture enquiries, qualify product fit, follow up on samples and manage customer loyalty.',
      signals: ['Product variety questions', 'Sample and trial follow-up', 'Loyal customer base', 'Referral potential'],
    },
    {
      icon: Sofa,
      name: 'Furniture',
      description: 'Qualify buyer intent, manage quotations, coordinate delivery and handle post-delivery satisfaction.',
      signals: ['High-value transactions', 'Quotation and negotiation', 'Delivery coordination', 'Referral-driven acquisition'],
    },
    {
      icon: Smartphone,
      name: 'Electronics & Appliances',
      description: 'Respond to product and availability questions, manage quotations and track after-sales support.',
      signals: ['Product specification queries', 'Availability questions', 'Warranty and support follow-up', 'B2B and B2C enquiries'],
    },
    {
      icon: Car,
      name: 'Auto-related',
      description: 'Qualify vehicle or parts enquiries, schedule viewings, follow up on quotations and manage service reminders.',
      signals: ['High-consideration purchase', 'Long follow-up cycle', 'Parts and service repeat', 'Referral from network'],
    },
    {
      icon: Home,
      name: 'Real Estate',
      description: 'Capture property enquiries, qualify buyer readiness, schedule viewings and follow up systematically.',
      signals: ['High-value, long sales cycle', 'Multiple touchpoints needed', 'Buyer qualification critical', 'Agent coordination'],
    },
    {
      icon: GraduationCap,
      name: 'Education & Training',
      description: 'Manage course enquiries, qualify prospective students, follow up on enrolments and reactivate alumni.',
      signals: ['Seasonal demand', 'Enrolment follow-up', 'Alumni reactivation', 'Course and programme upsell'],
    },
    {
      icon: Plane,
      name: 'Travel',
      description: 'Handle itinerary enquiries, qualify trip requirements, follow up on bookings and manage repeat travellers.',
      signals: ['Complex enquiries', 'Booking follow-up', 'Seasonal repeat customers', 'Referral potential'],
    },
    {
      icon: Calendar,
      name: 'Events',
      description: 'Capture enquiry, qualify event requirements, send proposals, manage follow-up and confirm bookings.',
      signals: ['Proposal and quotation heavy', 'Time-sensitive follow-up', 'Repeat corporate clients', 'Referral-based acquisition'],
    },
    {
      icon: Heart,
      name: 'Healthcare & Wellness',
      description: 'Manage appointment enquiries, qualify service fit, confirm bookings and handle post-appointment follow-up.',
      signals: ['Appointment scheduling', 'Follow-up care reminders', 'Repeat visits', 'Customer satisfaction important'],
    },
    {
      icon: Building,
      name: 'B2B Distributors & Wholesalers',
      description: 'Manage dealer enquiries, bulk orders, reorder cycles and account relationships across multiple contacts.',
      signals: ['Account management', 'High reorder frequency', 'Multi-contact relationships', 'Volume quotations'],
    },
    {
      icon: Package,
      name: 'Professional Services',
      description: 'Capture service enquiries, qualify prospect fit, schedule consultations, send proposals and manage client relationships.',
      signals: ['Long sales cycles', 'Proposal follow-up', 'Renewal reminders', 'Referral-driven new business'],
    },
  ];

  const conversationalPatterns = [
    { pattern: '"How much?"', response: 'Captured as lead. AI provides price from knowledge base. Qualification begins.' },
    { pattern: '"Do you deliver?"', response: 'Delivery details from knowledge base. Location and timeline captured.' },
    { pattern: '"I\'ll get back to you."', response: 'Follow-up sequence triggered. Customer moved to nurture pipeline.' },
    { pattern: '"Send account."', response: 'Payment details sent. Opportunity status updated. Follow-up scheduled.' },
    { pattern: '"Abeg reduce am."', response: 'Negotiation flag raised. Salesperson notified. Discount workflow triggered.' },
    { pattern: '"I\'m interested but not now."', response: 'Reorder reminder scheduled. Customer stays in pipeline, not lost.' },
  ];

  return (
    <div>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-background-cream to-background-slate pt-20">
        <Container size="content" className="text-center">
          <Heading as="h1" size="display-lg" className="mb-6">
            Built for Nigerian businesses that sell through conversations
          </Heading>
          <p className="text-xl text-primary-500 max-w-3xl mx-auto mb-4">
            Revenue OS is designed for businesses where sales happen through WhatsApp, Instagram, phone and in-person — and where consistent follow-up determines whether a lead becomes a customer.
          </p>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            The initial market is Nigeria. The initial customer is any business with meaningful conversational sales volume and a follow-up problem.
          </p>
        </Container>
      </Section>

      {/* ICP Signals */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <p className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">Ideal Customer Profile</p>
              <Heading as="h2" size="display-sm" className="mb-6">
                Revenue OS is built for your business if…
              </Heading>
              <div className="space-y-3">
                {icpSignals.map((signal, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent-400 mt-0.5 flex-shrink-0" size={20} />
                    <p className="text-primary-700">{signal}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8 bg-primary-600 border-0">
              <p className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">A useful threshold</p>
              <p className="text-4xl font-bold text-white mb-4">20+</p>
              <p className="text-xl text-white mb-4">meaningful customer enquiries per day</p>
              <p className="text-primary-100">
                If your business consistently receives 20 or more genuine customer enquiries daily, you almost certainly have a coordination problem that Revenue OS is designed to solve.
              </p>
              <div className="mt-6 pt-6 border-t border-primary-500">
                <p className="text-primary-200 text-sm">
                  At that volume, no salesperson can consistently respond quickly, qualify accurately, follow up reliably and track every outcome — without a system.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Tier 1 Industries */}
      <Section className="bg-background-slate">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3">Priority Segments</p>
            <Heading as="h2" size="display-md" className="mb-4">
              Industries where Revenue OS is most effective
            </Heading>
            <p className="text-xl text-primary-500 max-w-2xl mx-auto">
              These are businesses where conversational selling is structurally important and consistent follow-up directly determines revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tier1.map((industry, i) => (
              <Card key={i} hoverable className="p-6">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-4">
                  <industry.icon className="text-accent-500" size={24} />
                </div>
                <Heading as="h3" size="lg" className="mb-2">{industry.name}</Heading>
                <p className="text-primary-600 text-sm mb-4">{industry.description}</p>
                <div className="space-y-1.5">
                  {industry.signals.map((signal, si) => (
                    <div key={si} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0"></div>
                      <span className="text-xs text-primary-500">{signal}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Conversational patterns */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3">WhatsApp-first</p>
            <Heading as="h2" size="display-md" className="mb-4">
              Built around the way Nigerian businesses actually communicate
            </Heading>
            <p className="text-xl text-primary-500 max-w-2xl mx-auto">
              Revenue OS understands Nigerian conversational selling patterns. It handles the messages your salespeople receive every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {conversationalPatterns.map((item, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                      <MessageSquare className="text-white" size={18} />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900 mb-2 text-lg">{item.pattern}</p>
                    <p className="text-sm text-primary-600">{item.response}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-8 bg-accent-50 border-accent-200 max-w-3xl mx-auto text-center">
            <p className="text-lg font-semibold text-primary-900 mb-2">
              AI understands the context. It never invents information.
            </p>
            <p className="text-primary-600">
              Revenue OS responds using your products, pricing, policies and business rules — not generic AI responses. If it doesn&apos;t know, it escalates to your team.
            </p>
          </Card>
        </Container>
      </Section>

      {/* Before/After for a specific persona */}
      <Section className="bg-primary-600">
        <Container size="narrow">
          <Heading as="h2" size="display-md" className="text-white text-center mb-12">
            What changes when you use Revenue OS
          </Heading>

          <div className="space-y-8">
            {[
              {
                role: 'Fashion business',
                before: '"Someone messaged on Instagram last week about the ankara dress. I think Tolu was handling it. Let me check her phone."',
                after: 'Customer record: Adaeze Okafor. Product interest: Ankara wrap dress (navy). Budget: ₦45,000. Last interaction: 6 days ago. Status: Quotation sent, no response. Next action: Follow up on size confirmation.',
              },
              {
                role: 'Electronics distributor',
                before: '"We had loads of enquiries for the Samsung TV last month. I\'m not sure how many we actually converted. Sales says they followed up but I can\'t verify."',
                after: 'Last month: 247 TV enquiries captured. 89 qualified. 34 quotations sent. 21 purchased. 13 quotations still open. 4 high-intent leads not yet contacted. Pipeline value: ₦4.8m.',
              },
              {
                role: 'Professional services firm',
                before: '"We close most clients through referral. We haven\'t really done any follow-up on old proposals. Some of them might still be interested."',
                after: '18 proposals sent in the last 6 months with no follow-up. AI identifies 7 as still potentially active based on engagement signals. Reactivation campaign ready for approval.',
              },
            ].map((item, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-primary-700 border-primary-600">
                  <p className="text-xs font-semibold text-primary-300 uppercase tracking-wider mb-3">{item.role} — Before</p>
                  <p className="text-primary-200 italic">&quot;{item.before}&quot;</p>
                </Card>
                <Card className="p-6 bg-primary-500 border-primary-400">
                  <p className="text-xs font-semibold text-accent-400 uppercase tracking-wider mb-3">{item.role} — With Revenue OS</p>
                  <p className="text-white">{item.after}</p>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-background-cream to-background-slate">
        <Container size="narrow" className="text-center">
          <Heading as="h2" size="display-md" className="mb-4">
            See how Revenue OS works for your business
          </Heading>
          <p className="text-lg text-primary-600 mb-8 max-w-xl mx-auto">
            Every business is different. Book a demo and we&apos;ll show you exactly how Revenue OS handles your specific sales process, products and customer conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA href="/book-demo" size="lg">
              Book a Demo
            </CTA>
            <Link href="/pricing">
              <Button variant="secondary" size="lg">
                View Pricing <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
