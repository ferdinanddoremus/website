import { ReactNode, FC, useState } from 'react'
import Link from 'next/link'
import { CommandLineIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'

import { BanerComponent } from '@/components/ui/BanerComponent'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

type CustomProps = {
  children: ReactNode
}

const DefaultLayout: FC<CustomProps> = ({ children }) => {
  const [showBaner, setShowBaner] = useState(true)
  const { pathname } = useRouter()

  return (
    <div className="bg-black flex flex-col min-h-screen">
      {children}
    </div>
  )
}

export default DefaultLayout
