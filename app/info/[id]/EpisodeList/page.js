import Image from 'next/image';
import info from '../../../../data/info.json'

const Episodes = () => {
    return (
        <div className="episodes p-4 mt-4 lg:mt-8 max-w-6xl mx-auto">
            <h1 className='mb-4 border-b-2 border-purple-500 p-2'>Epsiodes</h1>
            <div className="cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 ">
                {info.episodes.map(ep => (
                    <div className="card w-full p-1">
                        <div className="image w-full h-28 relative rounded-lg truncate">
                            <Image src={ep.image} layout='fill' className='object-cover'/>
                        </div>
                        <h1 className='title-third' >{ep.number}.{ep.title}</h1>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Episodes;

