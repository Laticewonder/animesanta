import Image from 'next/image';
// import info from '../../../data/info.json'
import { Suspense } from "react";

import Overview from './Overview';
import Loading from './loading';

// import { META } from "@consumet/extensions"

// const anilist = new META.Anilist();



const Info =  async ({params:{id}}) => {

    // const info = await anilist.fetchAnimeInfo(id).then(data => (data))
    const res = await fetch(`https://api.consumet.org/meta/anilist/info/${id}`,{ next: { revalidate: 60 } })
    const info = await res.json()

    return (
        <div className="info w-full relative ">
            <Suspense fallback={<Loading />}>
                <Overview info={info}/>
            </Suspense>
        </div >
    );
}

export default Info;