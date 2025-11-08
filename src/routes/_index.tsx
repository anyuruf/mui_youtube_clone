import { FeedPage, Navbar } from '@/components'
import { useState } from 'react'
import { useLoaderData } from "react-router";
import {fetchFromAPI, getVideos} from "@/utils/axiosClient";
import {BACK_CONTENT} from "@/utils/constants";
//import { BACK_CONTENT } from "@/utils/constants";


export async function loader () {
   const data  = await getVideos("Advanced Spring Boot Developer");
   const {contents} = data;
    return {contents};
}
function AppIndex
() {
    const [selectedCategory, setSelectedCategory] = useState("Advanced Spring Boot Developer");
    const  {contents}    = useLoaderData();

  return (
    <>
        <Navbar />
        <FeedPage videos={contents} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}  />
    </>
  )
}

export default AppIndex
