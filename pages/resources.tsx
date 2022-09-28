import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

import { useGetLinks } from '@/hooks/useGetLinks'
import { Resource } from '@/types/resources'

const Resources: NextPage = () => {
  const links = useGetLinks()

  return (
    <>
      <Head>
        <title>Tech resources | Grorémus</title>
        <meta name="description" content="Here is a list of useful tech resources I update regularly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <div className="md:grid grid-cols-2 gap-4">
          <div className="pt-10">
            <p className="text-[75px] mb-6">🔗</p>
            <h1 className="font-bold text-4xl">
              Resources
            </h1>
            <h2 className="text-lg mt-4 text-slate-500">
              To help me stay informed about tech and stuffs, I update this list weekly with new resources.
            </h2>
            <ul className="pt-6">
              {links.map((link, i) => (
                <Resource key={i} link={link} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

type ResourceProps = {
  link: Resource
}

const Resource = ({ link }: ResourceProps) => {
  return (
    <li>
      <Link href={link.url}>
        <a
          className="block border border-gray-100 rounded px-3 py-2.5 mb-2 bg-indigo-600 hover:bg-indigo-800 duration-100 transition-all"
          target="_blank"
        >
          <div className="flex items-center">
            <p className="font-bold text-white">
              {link.title}
            </p>
            <ArrowTopRightOnSquareIcon className="h-4 w-4 fill-white ml-1" />
          </div>
          <p className="text-white text-sm opacity-50 mt-1">
            {link.desc}
          </p>
        </a>
      </Link>
    </li>
  )
}

export default Resources
