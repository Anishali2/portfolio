import { useSelector } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro'

const GlobalStyles = () => {
  const webVersion = useSelector((state: any) => state.web)
  const te = useSelector((state: any) => state.theme)
  const color =
    webVersion == 1
      ? 'black'
      : te == 'dark'
      ? 'white'
      : te == 'cyberpunk'
      ? 'black'
      : 'white'
  const background =
    webVersion == 1
      ? 'white'
      : te == 'dark'
      ? '#ff4949'
      : te == 'cyberpunk'
      ? 'white'
      : '#ff4949'
  const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
    
    color:${webVersion == 1 ? 'white' : 'black'}
    background: ${webVersion == 1 ? 'black' : 'white'}
    
  }
  html{
    background:${
      webVersion == 1
        ? 'black'
        : te == 'dark'
        ? '#0d0d0d'
        : te == 'cyberpunk'
        ? '#ffee00'
        : 'white'
    }
  }
  ::selection {
    color: ${color};
    background: ${background}
  }
  
`
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  )
}

export default GlobalStyles
