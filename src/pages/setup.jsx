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
        title="Technology I use, Tools I love, and Software I find useful."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Mac Mini, M2, 24GB RAM (2023)">
              I just purchased this Mac Mini to start learning Swift and I'm still getting used to operating a Mac as I have always used Windows before. But so far it has been really fast and an excellent addition to my work tools.
            </Tool>
            <Tool title="OMEN Desktop, Intel Core i7-8700, 16GB RAM (2021)">
              Yes, I had two computers that I actively use on a daily basis. This computer is what I started off learning coding on. It is still plenty fast for me to do what I need to do daily and was a great starter PC while learning SWD. I might however transition to using the Mac Mini for full time coding in the near future.
            </Tool>
            <Tool title="FireLegend 27 inch Curve Screen Monitor x3 (2023)">
              I have 3 of these monitors expanding the length of my desk. Two of them are connected to my OMEN Desktop and the other to my Mac Mini. They have excellent graphics and give me plenty of screen space to be able to easily manage having all of the windows open that I use on a daily basis.
            </Tool>
            <Tool title="UpLife Desk (2023)">
              I bought this desk recently and it has been the best upgrade of my tools as of late. I can stand up when I feel the need to and it will easily bring my computers up with me. It is a really nice way to wake the brain up, I notice if I'm struggling on something I will lift my desk and stand up which allows me to get a different perspective sometimes. 
            </Tool>
            <Tool title="Shaquille O'neal Office Chair (2021)">
              This is the old reliable, comfortable with a lumbar support built in for those long nights of coding. I feel like a CEO of a Fortune 500 company in this chair sometimes. 
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studios Code">
              I know most developers use this but I figured it is the foundation of my tools I use daily so I will list it first. 
            </Tool>
            <Tool title="Google">
              Okay just hear me out. If you are a devloper and don't use google then you aren't challenging yourself enough.
            </Tool>
            <Tool title="Tailwind UI">
              This has been great for getting pre-made components. I once had a mentor tell me not to re-invent the wheel and it makes sense. I could easily make most of these components but it helps save time and I can edit them to fit what I need. 
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Canva">
              Anytime I need a particular image edited, or a Logo made, or need to make a background transparent, Canva has been my go to application.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
