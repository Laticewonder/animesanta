import Image from 'next/image';
import info from '../../../data/info.json'
import { Suspense } from "react";

import parse from 'html-react-parser';
import Overview from './Overview';
import Header from './Header';

export const revalidate = 60;

const Info = () => {

    return (
        <div className="info w-full relative ">
            <Header/>         
            <div className="nav flex max-w-xl text-sm mx-auto justify-around mb-4">
                <h1 className='border-b-2 border-purple-500'>Overview</h1>
                <h1>Reviews</h1>
                <h1>Episodes List</h1>
            </div>

            <Suspense fallback={<p>Loading feed...</p>}>
                <Overview />
            </Suspense>

        </div>
    );
}

export default Info;