import React from "react";
import Link from "next/link";

import { urlFor } from "@/lib/client";

const Product2 = ({ product:{ image, name,
    slug, price } }) =>{
    return(

        <div>
            <Link href={`/product/${slug.current}`}>
                <div className={"product-card2"}>
                    <img src={urlFor(image && image[0])}
                         width={200}
                         height={250}
                         className={"product-image2"}
                    />
                    <p className={"product-name"}>{name}</p>
                    <p className={"product-price"}>{price} PLN</p>

                </div>
            </Link>
        </div>
    )

}

export default Product2