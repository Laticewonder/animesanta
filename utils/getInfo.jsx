import { META } from "@consumet/extensions"
// import cache from "memory-cache-pro"
const anilist = new META.Anilist();
import Redis from "ioredis";

let client = new Redis(process.env.REDIS_KEY);

export const getInfo = async (id)=>{ 
    const value = client.get(id)
    if(value){
        console.log('from cache')
        return value
    }else{
        const data =  await anilist.fetchAnimeInfo(id).then(data =>(data))
        client.set(id, data, 24*60*60)
        console.log(`fetch ${id}`)
        return data;
    }

}

