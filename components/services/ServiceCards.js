import ServiceCard from './ServiceCard';
import {HiMiniCodeBracket} from 'react-icons/hi2'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {MdOutlineDesignServices} from 'react-icons/md'
const ServiceCards = (props) => {
  return (
    <><ServiceCard title={`Full Service Development`} icon={<HiMiniCodeBracket />} desc={"Static websites, dynamic data, and databases... We do it all. Whether you need a basic single page, five page, or complex web app with interactive media - we can and will build it all."}/>
    <ServiceCard title={'Logo Design'} classes={"md:self-end md:flex-row-reverse"} icon={<MdOutlineDesignServices />} desc={"Every website comes with a free logo - or have your current one redesigned / touched up. Don't need a website? We also offer stand alone logo design & creation!"}/>
    <ServiceCard title={'Retain a Developer'} icon={<BsFillPersonCheckFill />} desc={"For a small recurring fee you can have your own personal developer, on call - 24/7 to make any changes no matter the size. Already have a website? that's fine - we can jump into any codebase."}/></>
  )
}

export default ServiceCards;