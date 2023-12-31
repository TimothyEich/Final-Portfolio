import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Setup - Timothy Eichenlaub</title>
        <meta
          name="description"
          content="Technology I use, Tools I love, and Software I find useful."
        />
      </Head>
      <SimpleLayout
        title="My Current Work Setup"
        intro="Technology I use, Tools I love, and Software I find useful."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Mac Mini, M2, 24GB RAM (2023)">
              I just purchased this Mac Mini to start learning Swift. I'm still getting used to operating a Mac as I have always been on the Windows side of the debate. So far it has been really fast and an excellent addition to my work tools.
            </Tool>
            <Tool title="OMEN Desktop, Intel Core i7-8700, 16GB RAM (2021)">
              Yes, I have two computers that I actively use on a daily basis. This was a great starter PC while learning SWD and it's still plenty fast for me to accomplish my daily tasks. However, I might eventually transition to using the Mac Mini for full time coding.
            </Tool>
            <Tool title="FireLegend 27 inch Curve Screen Monitor x3 (2023)">
              I have 3 of these monitors expanding the length of my desk. The graphics are excellent and I have more than enough screen space to manage all of the apps that I use.
            </Tool>
            <Tool title="UpLift Desk (2023)">
              This has been the best upgrade as of late. It's a standing work desk that came with several organizers and handy attachments. If I'm struggling on something, being able to stand up is a nice way to get the juices flowing and gain a different perspective. 
            </Tool>
            <Tool title="Shaquille O'neal Office Chair (2021)">
              This is "The Old Reliable." It's a comfortable chair with a lumbar support built in for those long nights of coding. I feel like a CEO of a Fortune 500 company in this chair sometimes. 
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studios Code">
              The foundation for most SWDs. 
            </Tool>
            <Tool title="Google">
              Okay, just hear me out. If you're a developer and aren't using google, then are you even challenging yourself?
            </Tool>
            <Tool title="Tailwind UI">
              I once had a mentor tell me not to re-invent the wheel and it has really stuck with me. This has been great for getting pre-made components that I can easily edit and helping me save time. 
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Canva">
              Anytime I need a particular image edited, Logo made, or transparent background, Canva has been my go to application.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
