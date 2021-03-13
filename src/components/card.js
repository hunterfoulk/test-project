import React from 'react'
import "./card.scss"
import { Link, useHistory } from "react-router-dom";


export default function Card({ item }) {
    const history = useHistory();

    const handleProductRoute = (item) => {
        history.push({
            pathname: `/product/${item.id}`,

        });
    }

    return (
        <div className="card" onClick={() => handleProductRoute(item)}>
            <div className="image-container">
                <img src={item.image} />
            </div>
            <div className="card-title-container">
                <span>{item.title}</span>
            </div>
            <div className="card-price-container">
                <span>${item.price}</span>
            </div>
        </div>
    )
}
