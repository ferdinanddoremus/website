import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import { useEffect, useState } from 'react'
import _ from 'lodash'
import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback'

const lang = ['javascript', 'typescript', 'next', 'react', 'vue', 'nuxt', 'react native', 'swift', 'node.js']

const Home: NextPage = () => {
  const [i, set] = useState(0)

  const setIndex = useThrottledCallback(() => {
    set(_.random(0, lang.length - 1))
  }, [], 50)

  useEffect(() => {
    const updateMousePosition = () => setIndex()

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])


  return (
    <>
      <Head>
        <title>Ferdinand Dorémus | Grorémus</title>
        <meta name="description" content="Ferdinand Dorémus website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container m-auto px-4 text-white flex-1 flex justify-center items-center">
        <div>
          <div className="leading-none flex justify-center items-center gap-[8px]">
            <span className="text-[75px]">🏕️</span>
            <span className="text-[58px] mt-[28px]">☕</span>
          </div>
          <p className="text-[75px] text-center font-bold mt-[-20px]">grorémus</p>
          <p className="text-[20px] text-slate-600 leading-none text-center ">breaking {lang[i]} apps since 2015</p>
          <Link href="mailto:groremus@icloud.com">
            <a className="block underline font-bold hover:text-slate-600 mt-6 text-center" target="_blank">
              groremus@icloud.com
            </a>
          </Link>
          <ul className="flex items-center justify-center gap-3 mt-3 text-slate-600">
            <li className="mb-2">
              <Link href="https://github.com/ferdinanddoremus">
                <a className="underline font-bold hover:text-white" target="_blank">
                  <Github size={20} />
                </a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://twitter.com/Groremus">
                <a className="underline font-bold hover:text-white" target="_blank">
                  <Twitter size={20} />
                </a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://www.instagram.com/groremus/">
                <a className="underline font-bold hover:text-white" target="_blank">
                  <Instagram size={20} />
                </a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://linkedin.com/in/ferdinand-doremus">
                <a className="underline font-bold hover:text-white" target="_blank">
                  <Linkedin size={20} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home
