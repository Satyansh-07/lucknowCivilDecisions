import Link from 'next/link';

export default function ArticleCards(props){
    let authorImage = props.ArticleImage.src;
    let articleId = props.articleId;
    return(
        <article className="p-4 sm:p-2 border-y-[1px] first:mt-0 mt-4 cursor-pointer relative flex border border-siteBlack rounded-lg gap-x-4 w-full">
            <div className="max-w-[190px] max-h-[132px] sm:max-w-[72px] sm:max-h-[64px]">
                <img src={authorImage} alt="Aricle Image" className='w-[190px] h-[132px] sm:w-[72px] sm:h-[64px] max-w-none'/>
            </div>
            <div className='sm:flex sm:flex-col'>
                <p className="text-base text-secondaryTextColor mb-2.5 sm:order-2 sm:text-xs sm:mb-0">Prashant Kumar on Article 251</p>
                <h4 className='mb-2.5 text-[18px] text-siteBlack font-bold sm:order-1 sm:text-[12px] sm:mb-4'>Rights and Remedies: Understanding Indian Constitutional Law</h4>
                <p className='text-[#4e4e4e] leading-tight h-[40px] line-clamp-2 sm:hidden'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <Link className="after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0" href={"/cases/" + articleId}></Link>
        </article>
    )
}