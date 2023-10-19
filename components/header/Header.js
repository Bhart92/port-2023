import DesktopHeader from "../desktop/DesktopHeader";
import useIsDesktopSize from "../../utils/useIsDesktopSize.js";
import MobileHeader from "../mobile/MobileHeader";

const Header = () => {
  const { isDesktopSize } = useIsDesktopSize();
  const generateNav = () => {
    if (isDesktop) return <DesktopHeader />;
    return <MobileHeader />;
  };

  return (
    <header className="row-span-1 h-fit lg:h-screen">
      {!isDesktopSize ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
};

export default Header;
