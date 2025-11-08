import { FeedPage, Navbar } from '@/components'
import { useState } from 'react'
import { useLoaderData } from "react-router";
import {getVideos} from "@/utils/axiosClient";
//import { BACK_CONTENT } from "@/utils/constants";


export async function loader () {
   const { contents } = await getVideos();

    return {contents};
}
function AppIndex
() {

    const [selectedCategory, setSelectedCategory] = useState("Advanced Spring Boot Developer");
    const  {contents}    = useLoaderData();
    console.log(contents);

  return (
    <>
        <Navbar />
        <FeedPage videos={contents} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}  />
    </>
  )
}

export default AppIndex
