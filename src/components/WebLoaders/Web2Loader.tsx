import React from 'react'
import Lottie from 'react-lottie'
// import animationData from '@//web1loading.json'
import animationData from '@/public/web2loading.json'
export default function Web2Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}
