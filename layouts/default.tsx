import { ReactNode, FC } from 'react'
import Link from 'next/link'

type CustomProps = {
  children: ReactNode
}

const DefaultLayout: FC<CustomProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
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
              <Link href="https://www.linkedin.com/in/ferdinand-gror%C3%A9mus-26449b95/">
                <a className="underline font-bold hover:text-slate-600" target="_blank">
                  linkedin
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default DefaultLayout
