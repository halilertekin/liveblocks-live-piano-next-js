import React from 'react'
import Head from 'next/head'
import SingleLineCodeBlock from '../components/SingleLineCodeBlock'
import InlineCodeBlock from '../components/InlineCodeBlock'
import Piano from './piano'
import ExampleInfo from '../components/ExampleInfo'

/*
 * Check in piano.tsx for the live piano code and guided comments
 */

const MainComponent = Piano

const exampleInfo = {
  hide: true,
  title: 'Live piano',
  description: 'Open in multiple windows, or share the link, to play piano live with others.',
  githubHref: 'https://github.com/CTNicholas/liveblocks-live-piano-next-js',
  codeSandboxHref: 'https://codesandbox.io/s/live-piano-with-liveblocks-and-next-js-pgkp5'
}

const meta = {
  title: 'Live Piano • ctnicholas.dev',
  description: 'Open in multiple windows, or share the link, to play piano live with others.',
  image: '/screenshot.png',
  url: 'https://livepiano.ctnicholas.dev',
  author: 'https://ctnicholas.dev',
  twitter: '@ctnicholasdev'
}

export async function getStaticProps () {
  return {
    props: {
      isRunningOnCodeSandbox: process.env.CODESANDBOX_SSE != null,
      hasSetupLiveblocksKey: process.env.LIVEBLOCKS_SECRET_KEY != null
    }
  }
}

type Props = {
  hasSetupLiveblocksKey: boolean;
  isRunningOnCodeSandbox: boolean;
};

export default function Home ({
  hasSetupLiveblocksKey,
  isRunningOnCodeSandbox
}: Props) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Karla:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="description" content={meta.description} />
        <meta name="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:url" content={meta.url} />
        <meta property="article:author" content={meta.author} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.description} />
        <meta property="og:image:height" content="964" />
        <meta name="application-name" content={meta.title} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={meta.title} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#18181b" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#282830" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitter} />
        <meta name="twitter:creator" content={meta.twitter} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content={meta.title} />
      </Head>
      {hasSetupLiveblocksKey ? (
        <main className="h-full">
          <ExampleInfo {...exampleInfo} />
          <MainComponent />
        </main>
      ) : isRunningOnCodeSandbox ? (
        <main className="container mx-auto px-8">
          <h1 className="text-3xl font-semibold mt-24 mb-2">
            Welcome to Liveblocks Next.js live piano example
          </h1>
            <p className="mt-12 mb-6">
              To run{' '}
              <a href="https://liveblocks.io" target="_blank" rel="noreferrer">
                Liveblocks
              </a>{' '}
              examples on CodeSandbox
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                Create an account on{' '}
                <a
                  href="https://liveblocks.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  liveblocks.io
                </a>
              </li>
              <li className="mb-2">
                Copy your secret key from the administration
              </li>
              <li className="mb-2">
                Add a{' '}
                <a
                  href="https://codesandbox.io/docs/secrets"
                  target="_blank"
                  rel="noreferrer"
                >
                  secret key
                </a>{' '}
                named <InlineCodeBlock>LIVEBLOCKS_SECRET_KEY</InlineCodeBlock>{' '}
                to your CodeSandbox sandbox.
              </li>
              <li className="mb-2">
                Refresh your browser and you should be good to go!
              </li>
            </ul>
          </main>
      ) : (
        <main className="container mx-auto px-8">
          <h1 className="text-3xl font-semibold mt-24 mb-2">
            Welcome to Liveblocks Next.js live piano example
          </h1>
            <p className="mt-12 mb-6">
              To run{' '}
              <a href="https://liveblocks.io" target="_blank" rel="noreferrer">
                Liveblocks
              </a>{' '}
              examples locally
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                Install all dependencies with{' '}
                <SingleLineCodeBlock>npm install</SingleLineCodeBlock>
              </li>
              <li className="mb-2">
                Create an account on{' '}
                <a
                  href="https://liveblocks.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  liveblocks.io
                </a>
              </li>
              <li className="mb-2">
                Copy your secret key from the administration
              </li>
              <li className="mb-2">
                Create a file named{' '}
                <InlineCodeBlock>.env.local</InlineCodeBlock> and add your
                Liveblocks secret as environment variable{' '}
                <SingleLineCodeBlock>
                  LIVEBLOCKS_SECRET_KEY=sk_test_yourkey
                </SingleLineCodeBlock>
              </li>
              <li className="mb-2">
                Run the following command and you should be good to go
                <SingleLineCodeBlock>npm run dev</SingleLineCodeBlock>
              </li>
            </ul>
          </main>
      )}
    </>
  )
}
