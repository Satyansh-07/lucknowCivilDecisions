import Link from 'next/link';
import SearchBar from '@/components/searchBar';
import { Button } from '@/components/ui/button';

export default function DesktopHeader(){
    return(
        <nav className="flex justify-between text-siteBlack py-4 mx-4 z-[1] sticky top-0 border-b border-siteBlack bg-siteBaseBgColor mobile2xl:py-8 mobile2xl:px-4">
            <div className="md:text-3xl text-xl flex justify-center items-center">
                <Link href="/"><img src='/Logo.png' alt="Site Logo" /></Link>
            </div>
            <div className="flex justifly-between md:gap-5 gap-3 items-center">
                <SearchBar />
                <Link href="/contactus" className='md:text-md text-base font-bold'>Contact Us</Link>
                <Link href="/login" className='md:text-md text-base font-bold'>Login</Link>
                <Link href="/signup" className='md:text-md text-xs'><Button className="w-28 h-11 font-bold bg-capsuleHoverColor hover:bg-capsuleHoverColor text-white" variant="outline">Sign Up</Button></Link>
            </div>
        </nav>
    )
}