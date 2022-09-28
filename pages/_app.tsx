import '@/styles/globals.css'
import type { ReactElement, FC } from 'react'

import type { AppPropsWithLayout } from '@/types/global'
import DefaultLayout from '@/layouts/default'

// Firebase
import { initFirebase } from '@/services/firebase'


interface Props {
  title?: string,
  children: ReactElement
}

const EmptyLayout: FC<Props> = ({ children }) => children

function Groremus({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = !Component.skipLayout
    ? Component.layout || DefaultLayout
    : EmptyLayout

  initFirebase()

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Groremus
