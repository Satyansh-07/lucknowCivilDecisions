import DesktopHeader from './desktopHeader';
import MobileHeader from './mobileHeader';
import { headers } from "next/headers";
import { getSelectorsByUserAgent } from "react-device-detect";

export default function Header(){
    const { isMobile } = getSelectorsByUserAgent(
        headers().get("user-agent") ?? ""
    );
    return(isMobile ? <MobileHeader/> : <DesktopHeader />);
}