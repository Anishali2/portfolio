import React from 'react'
interface IText {
  children: React.ReactNode
  varient?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
}
const Text = ({ children, varient = 'md' }: IText) => {
  return <div className={`text-${varient} text-primary`}>{children}</div>
}

export default Text
