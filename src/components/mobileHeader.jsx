import Link from 'next/link';
import SearchBar from '@/components/searchBar';
import { User, Menu } from "lucide-react";

export default function mobileHeader(){
    return(
        <nav className="flex flex-col justify-between text-siteBlack py-4 mx-4 z-[1] sticky top-0 border-b border-siteBlack bg-siteBaseBgColor mobile2xl:py-8 mobile2xl:px-4">
            <div className='flex justify-between items-center mb-4'>
                <div className="flex justify-center items-center md:w-auto w-[70px] h-[16px]">
                    <Link href="/"><img src='/Logo.png' alt="Site Logo" /></Link>
                </div>
                <div className='flex gap-[8px]'>
                    <User className='h-[24px] w-[24px]'/>
                    <Menu className='h-[24px] w-[24px]'/>
                </div>
            </div>
            
            <SearchBar isMobileView={true}/>
        </nav>
    )
}