'use client'

import Image from 'next/image';
import info from '../../../data/info.json'
import parse from 'html-react-parser';
import { useState } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Overview = () => {

    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <div className="overview mb-16 min-h-fit max-w-6xl md:mx-auto overflow-hidden p-4 mt-8 space-y-6 ">
            <div className="description bg-zinc-800 p-4 pb-0 rounded-lg">
                <div className="para overflow-hidden md:w-3/4 mx-auto" style={{ height: showMe ? "max-content" : "100px" }} >
                    {parse(`<p className='opacity-80 text-sm tracking-wide mb-4 mx-auto  '>${info.description}</p>`)}
                </div>
                <button onClick={toggle} className='select-none bg-zinc-800 mx-auto w-full pt-2 text-purple-500'>{showMe ? <IoIosArrowUp className=' w-full text-2xl' /> : <IoIosArrowDown className=' w-full text-2xl' />}</button>
            </div>

            <div className="relations ">
                <h1 className='mb-2 text-lg select-none'>Relations</h1>
                <div className="cards flex gap-4">
                    {info.relations.map(item => (
                        <div className="card">
                            <div className="image select-none relative w-28 h-40 rounded-md truncate">
                                <Image src={item.image} layout='fill' className='object-cover' />
                            </div>
                            <h1 className='  text-xs lg:text-sm font-medium mt-2 opacity-90 mb-1 tracking-wide'>{item.title.userPreferred}</h1>
                        </div>
                    ))}
                </div>
            </div>

            <div className="characters">
                <h1 className='mb-2 text-lg select-none'>Characters</h1>
                <div className="cards flex overflow-x-auto gap-4 ">
                    {info.characters.map((item=>(
                        <div className="card">
                            <div className="image select-none w-24 h-24 relative rounded-lg truncate mb-2 ">
                                <Image src={item.image} layout='fill' className='object-cover'/>
                            </div>
                            <h1 className='text-xs  lg:text-sm font-medium mt-2 opacity-90 mb-1 tracking-wide'>{item.name.full}</h1>
                        </div>
                    )))}
                </div>
            </div>

            <div className="recomendations">
                <h1 className='mb-2 text-lg select-none'>Recommendations</h1>
                <div className="cards overflow-x-auto  flex gap-4">
                    {info.recommendations.map(item => (
                        <div className="card">
                            <div className="image select-none relative w-28 h-40 rounded-md truncate">
                                <Image src={item.image} layout='fill' className='object-cover select-none' />
                            </div>
                            <h1 className='text-xs  lg:text-sm font-medium mt-2 opacity-90 mb-1 tracking-wide'>{item.title.userPreferred}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Overview;