import Image from 'next/image';
import info from '../../../data/info.json'
import { Suspense } from "react";

import Overview from './Overview';
import Loading from './loading';

export const revalidate = 60;

const Info = () => {

    return (
        <div className="info w-full relative ">
            <Suspense fallback={<Loading/>}>
                <Overview />
            </Suspense>
        </div >
    );
}

export default Info;