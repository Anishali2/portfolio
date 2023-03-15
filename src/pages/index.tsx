import { useSelector } from 'react-redux'
import WEB1 from '@/components/Webs/WEB1'
import WEB2 from '@/components/Webs/WEB2'
import WEB3 from '@/components/Webs/WEB3'
export default function Home() {
  const version: number = useSelector((state: any) => state.web)
  const web = [<WEB1 />, <WEB2 />, <WEB3 />]
  return <>{web[version ? version - 1 : 1]}</>
}
