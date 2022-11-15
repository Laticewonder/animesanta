import trend from '../data/trend.json'
import Image from 'next/image';
import Link from 'next/link';

const Trending = () => {
    return (
        <div className="trend w-full max-h-fit flex flex-wrap gap-x-4 gap-y-8">
            {trend.results.map(anime => (
                <Link href={`/info/${anime.id}`}><div className="card w-44">
                    <div className="image w-full h-64 relative rounded-xl truncate">
                        <Image src={anime.image} layout={'fill'} />
                    </div>
                    <h1 className='text-white line-clamp-2'>{anime.title.english}</h1>
                </div></Link>
            ))}
        </div>
    );
}

export default Trending;