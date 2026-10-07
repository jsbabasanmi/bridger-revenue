import Link from 'next/link';
import { Container, Section } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { CTA } from '@/components/ui/cta';
import { ArrowRight, Building2, Users, LineChart, FileText, Cog, Brain } from 'lucide-react';

export default function ComponentsDemo() {
  return (
    <div>
      <Section>
        <Container>
          <Heading as="h1" className="mb-4">
            Component Library
          </Heading>
          <p className="text-xl text-primary-600 mb-12">
            Foundational components for the Bedrock AI Business Systems website
          </p>
        </Container>
      </Section>

      {/* Buttons */}
      <Section padding="sm">
        <Container>
          <Heading as="h2" size="display-sm" className="mb-8">
            Buttons
          </Heading>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">With Icons</h3>
              <div className="flex flex-wrap gap-4">
                <Button>
                  Get Started <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="secondary">
                  <Building2 className="w-5 h-5" /> View Systems
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">States</h3>
              <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled</Button>
                <Button variant="secondary" disabled>
                  Disabled Secondary
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cards */}
      <Section padding="sm" className="bg-background-slate">
        <Container>
          <Heading as="h2" size="display-sm" className="mb-8">
            Cards
          </Heading>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent-600" />
                  </div>
                  <Heading as="h3" size="xl">
                    Default Card
                  </Heading>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-primary-600">
                  Background white, border, subtle shadow. Perfect for content cards.
                </p>
              </CardContent>
            </Card>

            <Card variant="outline">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <Heading as="h3" size="xl">
                    Outline Card
                  </Heading>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-primary-600">
                  Transparent background with border. Clean and minimal.
                </p>
              </CardContent>
            </Card>

            <Card hoverable>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-accent-600" />
                  </div>
                  <Heading as="h3" size="xl">
                    Hoverable Card
                  </Heading>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-primary-600">
                  Hover for interaction effect. Great for clickable items.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <Heading as="h3" size="xl">
                  Card with Footer
                </Heading>
              </CardHeader>
              <CardContent>
                <p className="text-primary-600">
                  Cards can have headers, content, and footers for structured layouts.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-primary-500">Example footer content</span>
                <Link href="#">
                  <Button variant="ghost" size="sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Typography & Headings */}
      <Section padding="sm">
        <Container>
          <Heading as="h2" size="display-sm" className="mb-8">
            Typography & Headings
          </Heading>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-primary-500 mb-2 font-mono">
                &lt;Heading as=&quot;h1&quot; size=&quot;display-xl&quot;&gt;
              </p>
              <Heading as="h1" size="display-xl">
                Display Extra Large
              </Heading>
            </div>

            <div>
              <p className="text-sm text-primary-500 mb-2 font-mono">
                &lt;Heading as=&quot;h2&quot; size=&quot;display-lg&quot;&gt;
              </p>
              <Heading as="h2" size="display-lg">
                Display Large - Hero Headlines
              </Heading>
            </div>

            <div>
              <p className="text-sm text-primary-500 mb-2 font-mono">
                &lt;Heading as=&quot;h2&quot; size=&quot;display-md&quot;&gt;
              </p>
              <Heading as="h2" size="display-md">
                Display Medium - Major Sections
              </Heading>
            </div>

            <div>
              <p className="text-sm text-primary-500 mb-2 font-mono">
                &lt;Heading as=&quot;h3&quot; size=&quot;display-sm&quot;&gt;
              </p>
              <Heading as="h3" size="display-sm">
                Display Small - Subsections
              </Heading>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-primary-500 mb-4 font-mono">Body text samples</p>
              <p className="text-lg text-primary-700 mb-3">
                Large body text for emphasis. When a customer sends a WhatsApp enquiry, the system
                can identify the request, retrieve relevant information, and respond.
              </p>
              <p className="text-base text-primary-600 mb-3">
                Regular body text for main content. We design, build and deploy AI-powered business
                systems around the workflows that keep your company running.
              </p>
              <p className="text-sm text-primary-500">
                Small text for captions and secondary information. Example workflows shown here are
                demonstrations of capability.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* System Icons Grid */}
      <Section padding="sm" className="bg-background-slate">
        <Container>
          <Heading as="h2" size="display-sm" className="mb-8">
            System Icons
          </Heading>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Building2, label: 'Revenue' },
              { icon: Users, label: 'Customer Ops' },
              { icon: LineChart, label: 'Finance' },
              { icon: FileText, label: 'Documents' },
              { icon: Cog, label: 'Procurement' },
              { icon: Brain, label: 'Intelligence' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-primary-800 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-primary-700">{item.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTAs */}
      <Section padding="sm">
        <Container>
          <Heading as="h2" size="display-sm" className="mb-8">
            Call-to-Action Components
          </Heading>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Primary CTAs</h3>
              <div className="flex flex-wrap gap-4">
                <CTA href="/book-assessment">Book AI Assessment</CTA>
                <CTA href="/systems" size="lg">
                  Explore Systems
                </CTA>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Secondary CTAs</h3>
              <div className="flex flex-wrap gap-4">
                <CTA href="/how-we-work" variant="secondary">
                  How We Work
                </CTA>
                <CTA href="/resources" variant="secondary" size="sm">
                  View Resources
                </CTA>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Container Sizes */}
      <Section padding="sm" className="bg-background-slate">
        <Container>
          <Heading as="h2" size="display-sm" className="mb-8">
            Container Sizes
          </Heading>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-mono text-primary-500 mb-3">
                &lt;Container size=&quot;narrow&quot;&gt; - max-w-4xl
              </p>
              <Container size="narrow" className="bg-white border border-primary-200 rounded-lg p-6">
                <p className="text-primary-600">
                  Narrow container for focused content like articles and forms. Maximum width of
                  896px.
                </p>
              </Container>
            </div>

            <div>
              <p className="text-sm font-mono text-primary-500 mb-3">
                &lt;Container size=&quot;content&quot;&gt; - max-w-content (1280px)
              </p>
              <Container
                size="content"
                className="bg-white border border-primary-200 rounded-lg p-6"
              >
                <p className="text-primary-600">
                  Content container for most pages. Maximum width of 1280px for comfortable reading
                  and layout.
                </p>
              </Container>
            </div>

            <div>
              <p className="text-sm font-mono text-primary-500 mb-3">
                &lt;Container size=&quot;full&quot;&gt; - no max width
              </p>
              <Container size="full" className="bg-white border border-primary-200 rounded-lg p-6">
                <p className="text-primary-600">
                  Full-width container for edge-to-edge layouts and hero sections.
                </p>
              </Container>
            </div>
          </div>
        </Container>
      </Section>

      {/* Status */}
      <Section>
        <Container>
          <div className="bg-accent-50 border border-accent-200 rounded-lg p-8">
            <Heading as="h3" size="xl" className="mb-4">
              ✅ Task 2 Complete: Core Component Library
            </Heading>
            <p className="text-primary-700 mb-4">
              All foundational components have been built and are fully functional:
            </p>
            <ul className="space-y-2 text-primary-600">
              <li>✓ Button component (primary, secondary, ghost variants + 3 sizes)</li>
              <li>✓ Card components (default, outline, ghost + hoverable state)</li>
              <li>✓ Heading component (responsive sizing with semantic HTML)</li>
              <li>✓ Container & Section layout components</li>
              <li>✓ Header with navigation (desktop + mobile responsive)</li>
              <li>✓ Footer with multi-column layout</li>
              <li>✓ CTA component with arrow animations</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <CTA href="/">View Homepage</CTA>
              <Link href="#top">
                <Button variant="secondary">Back to Top</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
