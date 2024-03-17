import Link from 'next/link';
import { TbBrandMeta, TbBrandTwitterFilled, TbBrandInstagram, TbBrandDiscordFilled } from "react-icons/tb";


export default function Footer(){
    return(
        <footer className="text-white bg-siteDarkTheme flex flex-col items-center justify-center">
            <div className='py-8 px-4 mx-auto max-w-screen-xl w-full'>
                <p className="text-3xl flex items-center text-base"><img src="/EllipseWhite.png" alt="Ellipse" className="mr-2 inline sm:h-[16px] sm:w-[16px sm:mb-2]"/>Lucknow Civil Decisions</p>
                <div className="flex mt-8 text-sm lg:gap-[135px] gap-[100px] sm:overflow-y-scroll sm:no-scrollbar whitespace-nowrap sm:gap-8 sm:mt-3 sm:text-xs">
                    <div>
                        <h2 className='text-base mb-4 sm:mb-2 sm:text-sm'>Get in touch</h2>
                        <p>7/8, Indira Nagar</p>
                        <p>Lucknow, Uttar Pradesh</p>
                        <p>226020</p>
                    </div>
                    <div>
                        <h2 className='text-base mb-4 sm:mb-2 sm:text-sm'>Resources</h2>
                        <Link href="/articles">Legal Documents</Link>
                        <br />
                        <Link href='/forums'>Forums</Link>
                        <br />
                        <Link href='/articles'>Articles</Link>
                    </div>
                    <div>
                        <h2 className='text-base mb-4 sm:mb-2 sm:text-sm'>About Us</h2>
                        <Link href='/'>Lucknow Civil Decisions</Link>
                        <br />
                        <Link href='/contactUs'>Email</Link>
                        <br />
                        <Link href='/newsletter'>Newsletter</Link>
                        <br />
                        <Link href='/career'>Career</Link>
                    </div>
                    <div>
                        <h2 className='text-base mb-4 sm:mb-2 sm:text-sm'>Social Share</h2>
                        <div className='flex'>
                            <TbBrandMeta className="h-[24px] w-[24px] mr-1"/>
                            <TbBrandTwitterFilled className="h-[24px] w-[24px] mx-2"/>
                            <TbBrandInstagram className="h-[24px] w-[24px] mx-2"/>
                            <TbBrandDiscordFilled className="h-[24px] w-[24px] mx-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}