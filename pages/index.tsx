import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ferdinand Dorémus | Grorémus</title>
        <meta name="description" content="Ferdinand Dorémus website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <div className="md:grid grid-cols-2 gap-4">
          <div className="pt-10">
            <p className="text-[75px] mb-6">✌️</p>
            <h1 className="font-bold text-4xl">
              Hi, I&apos;m Ferdinand
            </h1>
            <h2 className="text-lg mt-4 text-slate-500">
              I’m a frontend engineer mainly focused on delivering amazing experience to users, building great products and using JavaScript, React and React Native.
            </h2>
            <p className="text-lg mt-2 text-slate-500">
              I&apos;m currently looking for my next role. Contact me if you want to work together !
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
