import ContactUsWeb2 from '@/components/Contact/Web2Contact'
import Web2Footer from '@/components/Footer/Web2Footer'
import Web2Header from '@/components/Header/Web2Header'
import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'
import AnimatedCursor from 'react-animated-cursor'

const Contact = () => {
  const theme = useSelector((state: any) => state.theme)
  return (
    <div className={theme}>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Web2Header />
      <ContactUsWeb2 />
      <AnimatedCursor
        color={theme == 'dark' ? '255,255,255' : '0,0,0'}
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: `3px solid ${theme == 'dark' ? '#fff' : '#000'}`
        }}
      />
      <Web2Footer />
    </div>
  )
}

export default Contact
