import './app.scss';
import React, { useState, useEffect, useReducer } from 'react'
import ProductActions from "./actions/actions"
import Navbar from "./common/navbar"
import Card from "./components/card"
import Loading from "./components/loading"


// REDUCER STATE LOGIC
const SET_PRODUCTS = "SET_PRODUCTS";
const FILTER_PRODUCTS = "FILTER_PRODUCTS";

const initialState = { products: [] };

const reducer = (state, action) => {
    switch (action.type) {

        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products, // set all products.
            };
        case FILTER_PRODUCTS:
            return {
                ...state,
                products: state.products.filter((item) => item.title.toLowerCase().includes(action.term.toLowerCase())), // filter products by search term passed into the reducer.
            };


        default:
            return state;
    }
};



function Home() {
    const { getProducts, getCategories } = ProductActions();
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(true)
    const [searchLoading, setSearchLoading] = useState(true)
    const [state, dispatch] = useReducer(reducer, initialState);


    //Fetch All Products Function
    async function fetchProducts() {
        const response = await getProducts();
        dispatch({ type: SET_PRODUCTS, products: response });
        setLoading(false)
        setSearchLoading(false)
    }


    // Fetches all products on component mount
    useEffect(() => {
        fetchProducts();
    }, [])


    //Handles Search Term Filtering
    const handleSearchTerm = async (e) => {
        e.preventDefault();

        if (searchTerm === "") {
            const response = await getProducts();
            dispatch({ type: SET_PRODUCTS, products: response });
        }
        dispatch({ type: FILTER_PRODUCTS, term: searchTerm });
        setSearchTerm("")
    }


    const handleCategoryChange = async (category) => {


        setSearchLoading(true)

        const response = category === "" ? await getProducts() : await getCategories(category);
        dispatch({ type: SET_PRODUCTS, products: response });
        setSearchLoading(false)


    }



    if (loading) {
        return <Loading />
    }

    return (
        <div className="main">

            <div className="search-container">
                <form onSubmit={(e) => handleSearchTerm(e)}>
                    <input placeholder="Search a product..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </form>
            </div>
            <div className="filter-bar">
                <div className="filter-title-container">
                    <span>Filter by:</span>
                </div>
                <div className="filter-span-container">
                    <span onClick={() => handleCategoryChange("")}>All</span>
                    <span onClick={() => handleCategoryChange("men clothing")}>Men</span>
                    <span onClick={() => handleCategoryChange("women clothing")}>Women</span>
                    <span onClick={() => handleCategoryChange("jewelery")} >Jewelery</span>
                    <span onClick={() => handleCategoryChange("electronics")}>Electronics</span>
                </div>
            </div>

            {searchLoading ? <Loading /> : <div className="cards-section">
                {state.products.map((item, i) => (
                    <Card item={item} key={i} />
                ))}
            </div>
            }
        </div>

    );
}

export default Home;
