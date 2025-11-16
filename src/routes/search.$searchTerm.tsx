import { SearchFeed } from "@/components"
import { SearchPill } from "@/components/search_pill/SearchPill"
import {categories} from "@/utils/constants";
import type {Category} from "@/types/categories";
import {getVideos} from "@/utils/axiosClient";
import {useLoaderData, useParams} from "react-router";


export const loader = async () => {
    // const { searchTerm } = useParams();
    // const cat = categories.filter((cat : Category) => cat.title == searchTerm );
    // if(!cat) return;
    // const url = `${cat.name}`;
    const searchTerm = 'SpringBoot'
    const data  = await getVideos(categories[0].name);
    const { contents } = data;
    return { contents, searchTerm };
};


function SearchFeedPage() {
    const {contents, searchTerm} = useLoaderData<typeof loader>();

  return (
    <>
        <SearchPill categories={categories} />
        <SearchFeed videos={contents} searchTerm={searchTerm}/>
    </>
  )
}

export default SearchFeedPage;