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
            Timothy Eichenlaub 
            </h1>
            <h2 className='text-2xl font-bold text-zinc-800'>Pronounced [Ay-Ken-Lob]</h2>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
              <p>
              I’m a Veteran, Husband, World's Best Father and Full Stack Software Developer in Oklahoma City.
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
              <SocialLink href="https://www.linkedin.com/in/timothy-eichenlaub-a4a686228/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:timothy.eichenlaub@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-yellow-400 pt-8 dark:border-pink-500">
                timothy.eichenlaub@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
