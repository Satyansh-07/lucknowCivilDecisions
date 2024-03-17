import { Search } from 'lucide-react';

export default function SearchBar(props){
    return(
        <div className="flex relative">
            <input type="text" className="border-siteBlack border rounded-lg h-[42px] lg:w-[340px] md:w-[280px] w-full p-4 text-sm" id="search-inp" placeholder="Search cases"/>
            <Search className="absolute right-2 top-2"/>
        </div>
    )
}

<Search />