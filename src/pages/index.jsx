import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import BeHerdLogo from '@/images/logos/BeHerdLogo.png'
import IDCard from '@/images/logos/IDCard.png'
import NonProAdCo from '@/images/logos/Nonproadco.png'
import NetflixLogo from '@/images/logos/NetflixLogo.png'
import { useState, useEffect } from 'react';
const imagesToRenderOnSmallScreens = [image2, image3];
const projects = [
  {
    name: 'NonproAdco',
    description:
      'Website made for a client utilizing Next.js and Tailwind CSS. I learned alot from this project to include responsive design, API intergration, and got extremely comfortable/confident with both Next.js and Tailwind CSS.  ',
    link: { href: 'https://www.nonproadco.com/', label: 'https://www.Nonproadco.com/'},
    logo: NonProAdCo,
  },
  {
    name: 'Be Herd',
    description:
      'An ecommerce website with working shopping cart using React.js, Tailwind CSS, and Firebase. This was a group project from school, I contributed most of the front-end. ',
    link: { href: 'https://beherdfirebase.web.app/', label: 'https://beherdfirebase.web.app/' },
    logo: BeHerdLogo,
  },
  {
    name: 'Space Ranger ID',
    description:
      'Very Simple ID Card Generator utilizing HTML Javascript and CSS. This was one of the first projects I have ever made but I went back and redesigned it recently to practice some of my designing skills.',
    link: { href: 'https://melodious-bienenstitch-353457.netlify.app/', label: 'https://melodious-bienenstitch-353457.netlify.app/' },
    logo: IDCard,
  },
  {
    name: 'Coming Soon!',
    description:
      'I am currently working on a full stack Netflix Clone, it will utilize React, Tailwind CSS, Next.js, Prisma, MongoDB, and NextAuth. Keep an eye out for this project, as it should be completed by the 21st of Sept!',
    link: { href: 'https://github.com/TimothyEich', label: 'https://github.com/TimothyEich' },
    logo: NetflixLogo,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function MailIcon(props) {
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
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-yellow-400 dark:fill-zinc-400 dark:group-hover:fill-pink-500" />
    </Link>
  )
}



function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 640);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
      

      <div className="mt-16 sm:mt-20 mb-[10%]">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8 dark:opacity-80">
          {isSmallScreen ? (

            <div className="flex gap-5">
              {imagesToRenderOnSmallScreens.map((image, imageIndex) => (
                <div
                  key={image.src}
                  className={clsx(
                    'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl',
                    rotations[imageIndex % rotations.length]
                  )}
                >
                  <Image
                    src={image}
                    alt=""
                    sizes="18rem, 11rem"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            [image1, ...imagesToRenderOnSmallScreens,image4, image5].map((image, imageIndex) => (
              <div
                key={image.src}
                className={clsx(
                  'relative aspect-square w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                  rotations[imageIndex % rotations.length]
                )}
              >
                <Image
                  src={image}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="absolute inset-0 h-full w-full object-cover hover:scale-[120%] hover:rotate-12"
                />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

export default function Home({  }) {
  return (
    <>
      <Head>
        <title>
          Tim Eichenlaub - Developer, Veteran, and Wizard of Ideas
        </title>
        <meta
          name="description"
          content="I’m Tim, A Developer, Veteran, World's Best Dad, and Wizard of Ideas."
        />
      </Head>
      <Container className="mt-7">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Timothy Eichenlaub
          </h1>
          <p className=" text-lg mt-6 text-zinc-600 dark:text-zinc-400">
          Developer | Veteran | World's Best Dad | Wizard of Ideas 
          </p>
          <div className="mt-6 flex gap-10">
            <SocialLink
              href="https://github.com/TimothyEich"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/timothy-eichenlaub/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
                href="mailto:timothy.eichenlaub@gmail.com"
                icon={MailIcon}
            />
            
          </div>
        </div>

      </Container>
      <Photos />
      <SimpleLayout
  title="Check out some of my work!"
  intro="These projects are what I'm most proud of so far! With many more to come in the near future!"
>
  <ul
    role="list"
    className="grid grid-cols-1 gap-4 bg-yellow-500/40 dark:bg-pink-700/40 py-[2%] rounded-3xl text-center scale-[110%]"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    {projects.map((project) => (
      <Card as="li" key={project.name} style={{ flex: '1', minWidth: '45%', marginBottom: '1rem' }}>
        <div className="flex flex-col items-center justify-center space-y-4 m-[5%] ">
          <div className="flex items-center justify-center h-12 w-12 rounded-sm ">
            <Image
              src={project.logo}
              alt="project logo image"
              className="h-12 w-12"
              unoptimized
            />
          </div>
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-500">
            <Card.Link href={project.link.href}>{project.name}</Card.Link>
          </h2>
          <Card.Description>{project.description}</Card.Description>
          <p className="flex items-center text-sm font-medium text-zinc-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-500 dark:text-white">
            <LinkIcon className="h-7 w-7" />
            <span>{project.link.label}</span>
          </p>
        </div>
      </Card>
        ))}
      </ul>
</SimpleLayout>
    </>
  );
}
