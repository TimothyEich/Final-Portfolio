import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-500 dark:text-zinc-200 dark:hover:text-pink-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Timothy Eichenlaub</title>
        <meta
          name="description"
          content="I’m Timothy Eichenlaub. I live in Oklahoma City."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover shadow-md shadow-yellow-500 dark:bg-zinc-800 dark:shadow-md dark:shadow-pink-500"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Timothy Eichenlaub, Veteran, Husband, and World's Best Father
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
              <p>
              Everything changed for me 3 years ago. In 2017 I fulfilled my 5-year contract with the US Army and picked up a customer service job to make ends meet for my family and myself. Then an opportunity came up where my wife needed me to be a stay-at-home dad as she had finally landed her dream job. I loved my time with my kids and made up for a lot of lost time that I had from my time in the military. Then I decided to work towards a new career.
              </p>
              <p>
              I started self-learning C# .net and Unity game engine to make some games and quickly discovered that I LOVED coding and the challenges it presented. So I did what I typically do and I dove in head first. I started with night classes for C# and Unity classes. Upon taking all of the courses they had for those courses I realized I needed to challenge myself further if I wanted to make this a career move. I found Southern Career Institute (SCI) which provided a Full Stack Software Development program over a 9-month period. So again, I dove in head first.
              </p>
              <p>
              I worked on my coding skilling doing every example, activity, and project. No cutting corners and a lot of stressful nights trying to understand everything before the deadlines to turn in assignments. With the help of some peers and mentors, I was ECSTATIC to graduate from the program with a 4.0 GPA.  A few short weeks later SCI reached out to me with a job offer to become a mentor myself so I ran with it. I enjoyed now helping students learn coding and making sure they met the academic standards. Unfortunately, I was let go due to the low student population but it allowed me to do what I always result to. So I'm diving in head first looking to get my first real developer job! 
              </p>
              <p>
              With that being said I know there will be many obstacles to overcome in my job search but I wanted to share my story, how I got here, and what you can expect from me as a potential employee. I completely expect to botch some interviews. I hope I don't but I know that it is a skill that needs to be obtained and trial and error is part of any new process. However, I'm not someone who has an issue showing up on time. I am used to working alone and with a team, I like to keep a positive attitude and environment. I LOVE challenges and deadlines, I set game plans and goals EVERY SINGLE DAY to get where I need to be. I just need a chance to prove myself and whoever provides that opportunity will not regret it. 
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://github.com/TimothyEich" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/timothy-eichenlaub-a4a686228/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:timothy.eichenlaub@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-yellow-500 pt-8 dark:border-pink-700/40">
                timothy.eichenlaub@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
