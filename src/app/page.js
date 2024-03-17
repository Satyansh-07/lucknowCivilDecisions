import Link from 'next/link'
import HeroSection from '@/components/heroSection';
import ArticleCard from '@/components/articleCard';
import articleImage from 'public/Rectangle.png';
import Image from 'next/image';
import ellipse from 'public/ellipse.svg';
import arrowUp from 'public/arrow-up-right.svg';
import SliderWidget from '@/components/sliderWidget';

function multipleRenderForAricles(){
  let collection = [];
  for(let i = 0; i < 10; i++){
    collection.push(<ArticleCard key={i} articleId={i} ArticleImage={articleImage}/>);
  }
  return collection; 
}
export default function Home() {  
  let listOfAricle = multipleRenderForAricles();
  return (
    <main className="max-w-screen-xl mx-auto px-4">
      <div className="flex justify-between mt-[100px] sm:mt-8 sm:flex-col-reverse">
        <HeroSection />
      </div>
      <div className="mt-[100px] sm:text-xs">
        <div className="flex justify-between pb-4 sm:pb-1 border-b-[1px] border-siteBlack items-center">
          <h2 className={`text-2xl sm:text-sm`}><Image className="inline mr-2 sm:mr-1 sm:w-[12px] h-[18px] w-[18px] sm:h-[16px] sm:w-[16px] align-[0px] sm:align-[-3px]" src={ellipse} alt="Picture of the author"/>Recent publish from LCD</h2>
          <div className='flex items-center relative'>
            <Link className="text-base sm:text-sm sm:hidden" href="/">Explore More<Image className="inline align-bottom ml-2" src={arrowUp} alt="Picture of the author"/></Link>
            <Image className="inline align-bottom ml-2 sm:h-[16px] sm:ml-0 sm:align-middle md:invisible" src={arrowUp} alt="Picture of the author"/>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <SliderWidget />
        </div>
        <div className='flex gap-x-4 mb-20'>
          <div className='flex-1'>
            {listOfAricle}
          </div>
          <div className='adsContainer w-[300px] lg:block sm:hidden h-[600px] rounded-lg bg-capsuleBgColor sticky top-24'>
            <div className></div>
          </div>
        </div>
      </div>
    </main>
  )
}
