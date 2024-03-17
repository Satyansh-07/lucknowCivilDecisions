import { Button } from '@/components/ui/button';
import Image from 'next/image';
import clumsy from 'public/clumsy.png';

export default function HeroSection(){
    return(
        <>
            <div className="flex flex-col items-left justify-center w-6/12 sm:w-full sm:text-center">
                <h2 className="text-[52px] leading-tight mb-4 sm:text-[26px] font-bold">Your Legal Search ends here!</h2>
                <p className="text-[16px] mb-6 w-4/6 sm:w-full sm:text-[12px]">Explore a curated library of judgement for a profound understanding of the legal landscape.</p>
                <Button className="w-[180px] h-[40px] bg-siteBlack text-white hover:bg-white hover:text-black border-siteBlack sm:w-full" variant="outline">Get Started</Button>
            </div>
            <div className="max-w-[480px] max-h-[370px] sm:mb-8">
                <Image
                    src={clumsy}
                    className=""
                    alt="Hero Image"
                />
            </div>
        </>
    )
}