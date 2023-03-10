import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = ({handleAddProduct}) => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);

    return (
        <div>
            <h1>Your Product Details.</h1>
            <Product product={product}></Product>
        </div>
    );
};

export default ProductDetail;