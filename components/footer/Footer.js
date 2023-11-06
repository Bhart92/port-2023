import footerStyles from './footer.module.scss';

const Footer = (props) => {
  return (
    <footer className={`${footerStyles.footer} bg-neutral-900 h-[120px] flex items-end justify-center text-xs pb-2 w-full `} >
    	<span>All Rights Reserved.&copy;2023</span>
    </footer>
  )
}

export default Footer;