import { ReactNode } from 'react'
import clsx from 'clsx'
import { XMarkIcon } from '@heroicons/react/24/solid'

type BanerComponentProps = {
  text: string,
  mobileText?: string,
  cta: ReactNode,
  icon: ReactNode,
  onClose: (val: boolean) => void
}

export const BanerComponent = ({ text, mobileText, cta, icon, onClose  }: BanerComponentProps) => {
  return (
    <div className="bg-indigo-600 w-screen">
      <div className="mx-auto py-3 px-3 sm:px-6 lg:px-8 container">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-indigo-800 p-2">
              {icon}
            </span>
            <p className="ml-3 truncate font-medium text-white">
              {mobileText && <span className="md:hidden">{mobileText}</span>}
              <span className={clsx('md:inline', { 'hidden': mobileText })}>{text}</span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            {cta}
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button type="button" className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2" onClick={() => onClose(false)}>
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-6 w-6 fill-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
