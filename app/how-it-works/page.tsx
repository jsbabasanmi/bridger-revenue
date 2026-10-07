import { Container, Section } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Card } from '@/components/ui/card';
import { CTA } from '@/components/ui/cta';
import { 
  Search, 
  FileText, 
  Settings, 
  Rocket, 
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';

export const metadata = {
  title: "How It Works",
  description: "See exactly how we implement AI Revenue OS in your business. From assessment to launch in 2-4 weeks.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "AI Revenue Assessment",
      duration: "Week 1",
      description: "We audit your current sales process and identify what's costing you the most money.",
      deliverables: [
        "Where leads come from and where they're lost",
        "Response time analysis",
        "Follow-up gap identification",
        "Revenue leakage calculation",
        "Priority recommendations"
      ]
    },
    {
      number: "02",
      icon: FileText,
      title: "System Design",
      duration: "Week 1-2",
      description: "We design the AI Revenue OS around your business — your products, your prices, your sales process.",
      deliverables: [
        "System architecture document",
        "Workflow mapping",
        "Business knowledge requirements",
        "Integration plan",
        "Implementation timeline"
      ]
    },
    {
      number: "03",
      icon: Settings,
      title: "Build & Configure",
      duration: "Week 2-3",
      description: "We build the system and configure it with your business knowledge, then connect it to your tools.",
      deliverables: [
        "AI trained on your business",
        "Multi-channel integration",
        "Qualification rules configured",
        "Follow-up sequences built",
        "Testing and refinement"
      ]
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Train",
      duration: "Week 3-4",
      description: "The system goes live. We train your team and monitor the first conversations closely.",
      deliverables: [
        "System deployed to production",
        "Team training sessions",
        "Documentation and guides",
        "First week monitoring",
        "Initial performance report"
      ]
    },
    {
      number: "05",
      icon: TrendingUp,
      title: "Operate & Improve",
      duration: "Ongoing",
      description: "We keep the system running, improve it based on results, and expand as you're ready.",
      deliverables: [
        "Continuous monitoring",
        "Performance optimization",
        "Monthly reports",
        "System updates",
        "Expansion planning"
      ]
    },
  ];

  return (
    <div>
      <Section className="bg-gradient-to-b from-background-cream to-background-slate pt-20">
        <Container size="narrow" className="text-center">
          <Heading as="h1" size="display-lg" className="mb-6">
            How It Works
          </Heading>
          <p className="text-xl text-primary-600">
            From assessment to launch in 2-4 weeks
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center">
                      <step.icon className="text-accent-600" size={28} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-5xl font-bold text-primary-200">{step.number}</span>
                      <div>
                        <Heading as="h2" size="xl" className="mb-1">
                          {step.title}
                        </Heading>
                        <p className="text-sm text-accent-600 font-medium">{step.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-primary-700 mb-6">
                      {step.description}
                    </p>
                    
                    <div>
                      <p className="font-semibold text-primary-900 mb-3">What you get:</p>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="text-accent-500 mt-1 flex-shrink-0" size={18} />
                            <span className="text-primary-600">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <ArrowRight className="text-primary-300" size={32} />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-background-slate">
        <Container>
          <Heading as="h2" size="display-md" className="text-center mb-12">
            Who does what
          </Heading>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <Heading as="h3" size="xl" className="mb-6 text-accent-600">
                What we do
              </Heading>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-primary-700">Audit your sales process and identify opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-primary-700">Design and build the entire system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-primary-700">Configure integrations with your tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-primary-700">Train your team on the system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-primary-700">Monitor, optimize and support ongoing</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Heading as="h3" size="xl" className="mb-6 text-primary-900">
                What you do
              </Heading>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-primary-700">Share how your sales process actually works</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-primary-700">Provide access to your tools and accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-primary-700">Give us your products, pricing and FAQs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-primary-700">Review and approve the system before launch</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-primary-700">Use the system and give us feedback</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <Heading as="h2" size="display-md" className="text-center mb-12">
            When AI Revenue OS isn&apos;t right for you
          </Heading>

          <div className="space-y-6 mb-12">
            <Card className="p-6 border-l-4 border-primary-300">
              <div className="flex items-start gap-4">
                <X className="text-primary-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-primary-900 mb-2">
                    You want a price before understanding the work
                  </p>
                  <p className="text-primary-600">
                    A number quoted before anyone has looked at your business is a guess. 
                    A guess corrected in month two costs more than the week spent looking properly.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-primary-300">
              <div className="flex items-start gap-4">
                <X className="text-primary-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-primary-900 mb-2">
                    Nobody on your team will own it
                  </p>
                  <p className="text-primary-600">
                    A system nobody is responsible for slowly stops being used. Even with our operation, 
                    you need someone spending an hour a week reviewing what&apos;s happening.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-primary-300">
              <div className="flex items-start gap-4">
                <X className="text-primary-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-primary-900 mb-2">
                    Your sales process is broken
                  </p>
                  <p className="text-primary-600">
                    Automating a broken process makes the wrong thing happen faster. 
                    Fix the process first, then automate it.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-primary-300">
              <div className="flex items-start gap-4">
                <X className="text-primary-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-primary-900 mb-2">
                    You get very few enquiries
                  </p>
                  <p className="text-primary-600">
                    If you receive fewer than 50 enquiries per month, your time is better spent 
                    on marketing and lead generation, not automation.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-accent-50 border-accent-200">
            <p className="text-lg text-center text-primary-900">
              <strong>The best implementations happen when both sides are honest.</strong><br />
              If we&apos;re not the right fit, we&apos;ll tell you.
            </p>
          </Card>
        </Container>
      </Section>

      <Section className="bg-primary-900 text-white">
        <Container size="narrow" className="text-center">
          <Heading as="h2" size="display-md" className="mb-6 text-white">
            Ready to get started?
          </Heading>
          <p className="text-xl text-primary-100 mb-8">
            Book a call and we&apos;ll show you exactly how AI Revenue OS works for your business
          </p>
          <CTA href="/book-demo" size="lg">
            Book a Demo
          </CTA>
        </Container>
      </Section>
    </div>
  );
}
