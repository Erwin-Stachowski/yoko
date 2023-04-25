import React from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';
const HeroBanner = ({ heroBanner:{image, smallText, midText,
                                largeText1, largeText2, buttonText,
                                desc}}) =>{
    return(
    <div>
        {/*<img src={urlFor(image)}*/}
        {/*     className={"hero-banner-image"}/>*/}

        <div className={"hero-banner-container"}>
            <div>
            <p className={"pink-bunny"}>{smallText}</p>
                <h3>{midText}</h3>
                <h1>{largeText2}</h1>

                <div>
                    <Link href={"/product/ID"}>
                        <button type={"button"}>{buttonText}</button>
                    </Link>
                    <div className={"desc"}>
                        <h5>Description</h5>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HeroBanner