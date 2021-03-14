import React, { useState, useEffect } from 'react'
import { useLocation, useRouteMatch } from "react-router-dom";
import ProductActions from "./actions/actions"
import "./app.scss"
import Loading from "./components/loading";

export default function Product() {
    const { getProductItem } = ProductActions();
    const match = useRouteMatch();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    async function fetchProduct() {
        let id = match.params.id

        const response = await getProductItem(id);
        setProduct(response)
        setLoading(false)
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    if (loading) {
        return <Loading />
    }
    return (
        <div className="product-main">
            <div className="product">
                <div className="product-top">
                    <div className="product-image-container">
                        <img src={product.image} />
                    </div>
                    <div className="product-right-details-container">
                        <div className="product-title-container">
                            <span>{product.title}</span>
                            <span>{product.category}</span>
                            <span>${product.price}</span>
                        </div>

                    </div>

                </div>
                <div className="button-container">
                    <div className="button-container-left">

                    </div>
                    <div className="button-container-right">
                        <button>ADD TO BAG</button>

                    </div>
                </div>
                <div className="product-bottom-details-container">
                    <span>{product.description}</span>
                </div>
            </div>

        </div>
    )
}
