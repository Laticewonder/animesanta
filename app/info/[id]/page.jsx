import Image from 'next/image';
import info from '../../../data/info.json'
import { GoPrimitiveDot } from 'react-icons/go';

import parse from 'html-react-parser';

export const revalidate = 60;

const Info = () => {
    
    return (
        <div className="info w-full relative ">
            <div className="cover w-full h-60 md:h-72 lg:h-80 relative ">
                <div className="gradient absolute w-full h-full bg-gradient-to-t from-zinc-900 to-transparent z-10 "></div>
                <Image src={info.cover} alt={info.title.romaji} layout='fill' className='object-cover z-0' />
            </div>

            <div className="info max-h-fit lg:h-60 w-full flex relative bottom-16 items-end px-2 lg:px-8 tracking-wider -mb-8 z-20">
                <div className="image relative w-36 h-52 lg:w-44 lg:h-64 rounded-2xl truncate border-4 border-zinc-800 shrink-0 ">
                    <Image src={info.image} alt={info.title.romaji} layout='fill' className='object-cover min-w-max' />
                </div>
                <div className="main-info px-2 mb-2 max-h-fit md:ml-2">
                    <h1 className=' text-xl md:text-4xl line-clamp-2 mb-2 lg:mb-4'>{info.title.romaji}</h1>
                    <div className="flex space-x-4 mb-1 text-sm lg:text-base">
                        <h1>{info.totalEpisodes} episodes</h1>
                        <h2>{info.type}</h2>
                    </div>
                    <div className="flex space-x-4 text-xs lg:text-sm opacity-80 mb-2 lg:mb-4">
                        <h1>{info.season.toLocaleLowerCase()} {info.releaseDate}</h1>
                        <h1 className='line-clamp-2'>{info.studios.toString().replace(",", " & ")}</h1>
                    </div>
                    <div className="flex flex-col text-xs lg:text-sm">
                        <h1 className=''><span className='opacity-80'>score</span> <span className='opacity-100 text-purple-400'>{info.rating}</span></h1>
                        <div className="flex items-end space-x-1 mt-1">
                            <h1 className='opacity-80 font-bold'> {info.status}</h1>
                            <GoPrimitiveDot  className='text-green-400 font-bold'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav flex max-w-xl mx-auto justify-around mb-4">
                <h1 className='border-b-2 border-purple-500'>Overview</h1>
                <h1>Reviews</h1>
                <h1>Episodes List</h1>
            </div>

            <div className="description  bg-zinc-800 p-4 mb-44  min-h-fit max-h-fit rounded-lg max-w-fit overflow-hidden mx-4 xl:mx-auto">              
                {parse(`<p className=' opacity-80 text-sm max-w-6xl mx-auto tracking-wide'>${info.description}</p>`)}
            </div>
        </div>
    );
}

export default Info;