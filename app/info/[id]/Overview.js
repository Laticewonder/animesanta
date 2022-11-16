'use client'

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
        <div className="overview mb-44 min-h-fit max-h-fit max-w-fit overflow-hidden m-4 mt-8 ">
            <div className="description bg-zinc-800 p-4 pb-0 rounded-lg">
                <div  className="para overflow-hidden" style={{height: showMe ? "max-content" : "100px"}} >
                    {parse(`<p className='opacity-80 text-sm tracking-wide mb-4 mx-auto max-w-prose '>${info.description}</p>`)}
                </div>
                <button onClick={toggle} className=' bg-zinc-800 mx-auto w-full pt-2 text-purple-500'>{showMe ? <IoIosArrowUp className=' w-full text-2xl'/>: <IoIosArrowDown className=' w-full text-2xl'/>}</button>
            </div>

            <div className="character">

            </div>
        </div>
    );
}

export default Overview;