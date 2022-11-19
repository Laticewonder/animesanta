// import trend from '../data/trend.json'
import Image from 'next/image';
import Link from 'next/link';

// import { META } from "@consumet/extensions"

// const anilist = new META.Anilist();

const Trending = async () => {
    // const trend = await anilist.fetchTrendingAnime().then(data => data)
    const res = await fetch('https://api.consumet.org/meta/anilist/popular',{ next: { revalidate: 60 } })
    const trend = await res.json()
    return (
        <div className="trend w-full max-h-fit flex flex-wrap gap-x-4 gap-y-8">
            {trend.results.map(anime => (
                <Link href={`/info/${anime.id}`}><div className="card w-44">
                    <div className="image w-full h-64 relative rounded-xl truncate">
                        <Image src={anime.image} alt={anime.title.userPreferred? anime.title.userPreferred:anime.title.romaji} layout={'fill'} />
                    </div>
                    <h1 className='text-white line-clamp-2'>{anime.title.userPreferred? anime.title.userPreferred:anime.title.romaji }</h1>
                </div></Link>
            ))}
        </div>
    );
}

export default Trending;