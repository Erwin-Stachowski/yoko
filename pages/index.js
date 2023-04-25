import React from 'react'

import { client } from '@/lib/client';
import { Product, Product2, HeroBanner, FooterBanner} from '../components';
import heroBanner from '@/components/HeroBanner';



const Home = ({ products, products2, bannerData }) => (
        <div>
           <div><HeroBanner heroBanner={bannerData.length && bannerData[0]}/></div>

            <div className={'products-heading'}>
                <h2>Popular products: </h2>
                <p>All products</p>
            </div>

            <div className={'products-container'}>
                {products?.map((product) => <Product
                    key={product._id} product={product} />)}

                {products2?.map((product2) => <Product2
                    key={product2._id} product={product2} />)}
            </div>

            <div><FooterBanner /></div>
        </div>
    );
export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const query2 = '*[_type == "product2"]';
    const products2 = await client.fetch(query2);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { products, products2, bannerData }
    }
}
export default Home;
