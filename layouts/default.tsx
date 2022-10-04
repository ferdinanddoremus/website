import { ReactNode, FC, useState } from 'react'
import Link from 'next/link'
import { CommandLineIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'

import { BanerComponent } from '@/components/ui/BanerComponent'

type CustomProps = {
  children: ReactNode
}

const DefaultLayout: FC<CustomProps> = ({ children }) => {
  const [showBaner, setShowBaner] = useState(true)
  const { pathname } = useRouter()

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col grow">
        <div>
          {children}
        </div>
        <footer className="py-10">
          <div className="container mx-auto px-4">
            <ul>
              <li className="mb-2">
                <Link href="mailto:groremus@icloud.com">
                  <a className="underline font-bold hover:text-slate-600" target="_blank">
                    groremus@icloud.com
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://github.com/ferdinanddoremus">
                  <a className="underline font-bold hover:text-slate-600" target="_blank">
                    github
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://twitter.com/Groremus">
                  <a className="underline font-bold hover:text-slate-600" target="_blank">
                    twitter
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://www.instagram.com/groremus/">
                  <a className="underline font-bold hover:text-slate-600" target="_blank">
                    instagram
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://linkedin.com/in/ferdinand-doremus">
                  <a className="underline font-bold hover:text-slate-600" target="_blank">
                    linkedin
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      {/* Baner */}
      {pathname === '/' && showBaner ? (
        <BanerComponent
          text="Here is a list a useful tech resources I regularly update."
          mobileText="My useful tech resources!"
          cta={
            <Link href="/resources">
              <a className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50">View list</a>
            </Link>
          }
          icon={<CommandLineIcon className="h-6 w-6 fill-white" />}
          onClose={() => setShowBaner(false)}
        />
      ) : null}
    </div>
  )
}

export default DefaultLayout
