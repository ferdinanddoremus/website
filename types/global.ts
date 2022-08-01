import type { FC } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout = NextPage & {
  layout?: FC,
  skipLayout: boolean
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
