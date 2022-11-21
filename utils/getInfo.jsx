import { META } from "@consumet/extensions"
import cache from "memory-cache"
const anilist = new META.Anilist();

export const getInfo = async (id)=>{ 
    const value = cache.get(id)
    if(value){
        console.log('from cache')
        return value
    }else{
        const hours = 1
        const data =  await anilist.fetchAnimeInfo(id).then(data =>(data))
        cache.put(id, data, hours* 1000 *60*60)
        console.log(`fetch ${id}`)
        return data;
    }

}




// const anilist = new META.Anilist();
// const info = await anilist.fetchAnimeInfo(id).then(data =>(data))
// console.log('function ran')
// return info