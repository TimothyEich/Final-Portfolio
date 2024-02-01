import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-pink-500">
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500 dark:group-hover:fill-pink-500"/>
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

function Resume() {
  let resume = [
    {
      company: 'Southern Careers Institute',
      title: 'Software Development Coordinator',
      start: '2022',
      end: '2023',
    },
    {
      company: 'Stay At Home Dad / Student',
      title: 'Dad / Student',
      start: '2019',
      end: '2022',
    },
    {
      company: 'Caliber Home Loans',
      title: 'Customer Service Rep',
      start: '2017',
      end: '2019',
    },
    {
      company: 'US Army',
      title: 'Military Police',
      start: '2012',
      end: '2017',
    },
  ]

  return (
    <div className="githubrounded-2xl border border-yellow-400 p-8  dark:border-pink-500">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        className="group mt-6 w-full "
        href="/TimResume.pdf"
        variant="secondary"
      >
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        Download Resume
      </Button>
    </div>
  );
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
                className=" rotate-3 rounded-2xl scale-[100%] imag bg-zinc-100 object-cover shadow-md shadow-yellow-500 dark:bg-zinc-800 dark:shadow-md dark:shadow-pink-500"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Timothy Eichenlaub 
            </h1>
            <h2 className='text-2xl font-bold text-zinc-800 dark:text-zinc-100 italic'>
              Pronounced [Ay-Ken-Lob]</h2>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
              <p>
              I’m a Veteran, Husband, World’s Best Father and Full Stack Software Developer in Oklahoma City.
              </p>
              <p>
              In 2019 I took a big leap of faith when I became a stay at home dad and started learning my first computer languages.  I not only loved my time with my kids, time that I wasn't able to have in the military and later jobs, but I also LOVED coding and the challenges it presented. So I did what I typically do and I dove in head first. What started as self learning C#, turned to night classes for Unity, turned to a 9 month Full Stack Software Development program with Southern Careers Institute.
              </p>
              <p>
              I like to keep a positive attitude and environment. I’m not afraid of challenges and deadlines. I  like to set game plans and goals EVERY SINGLE DAY to get me where I need to be. As with every new chapter of my life so far, I’m embracing every opportunity to learn and evolve, continually pushing myself to excel.
              </p>
              <p>
              I am actively seeking new opportunities in the software development industry. I would love to connect and discuss how I can add value to your team and help achieve your company's vision. 
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            
            <ul role="list">
              <SocialLink href="https://github.com/TimothyEich" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/timothy-eichenlaub/" icon={LinkedInIcon} className="mt-4">
                Connect with me on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:timothy.eichenlaub@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-yellow-400 pt-8 dark:border-pink-500 mb-[20%]">
                Send me an Email
              </SocialLink>
            </ul>
          </div>
        </div>
        <div className="mx-[10%] m-y-[20%] grid max-w-xl grid-cols-1 lg:max-w-none lg:grid-cols-1">
          <div className="space-y-10">
          <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
