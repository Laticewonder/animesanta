import { cache } from "react";
import { META } from "@consumet/extensions"

export const getInfo = cache(async(id) =>{
    const anilist = new META.Anilist();
    const info = await anilist.fetchAnimeInfo(id).then(data =>(data))
    console.log('function ran')
    return info
})
