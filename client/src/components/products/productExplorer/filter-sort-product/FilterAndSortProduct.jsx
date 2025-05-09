import React from "react";
import "./FilterAndSortProduct.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const FilterAndSortProduct = () => {
    const { products, isProductsLoading } = useSelector((state) => state.selectedOrSearchProducts);
    // console.log(products, isProductsLoading);

    if (isProductsLoading) {
        return (
            <div className='loading'>
                <p>Loading</p>
                <span>.</span><span>.</span><span>.</span>
            </div>
        )
    }
    return (
        <>
            {products?.length === 0 ?
                <div className="filter-product-container">
                    <h1 style={{ backgroundColor: "white", padding: "1rem", textAlign: "center", fontSize: "1.3rem" }}>No Product Found</h1>
                </div>
                :
                <div className="filter-product-container">
                    {products.map((product, index) => {
                        let { _id, title, thumbnail, rating, description, mrp, salePrice, discountPercentage, stock, } = product;
                        return (
                            <div key={index} className="container-filter">
                                <div className="product-details">
                                    <Link to={`/wishlist`} target="_blank" className="favourite">
                                        <i className="icon"><FaRegHeart /></i>
                                    </Link>
                                    <Link to={`/products/${_id}`} target="_blank" className="product-img">
                                        <img src={thumbnail} alt="product-img"></img>
                                    </Link>
                                    <Link to={`/products/${_id}`} target="_blank" className="product-details-container">
                                        <div className="product-description">
                                            <h2>
                                                {window.innerWidth < 767 ? `${title.slice(0, 18)}...` : title}
                                            </h2>
                                            <p>
                                                <span className="rating">{rating}★</span>{" "}
                                                <span>80 Rating & 10 Reviews</span>
                                            </p>
                                            <p className="description">
                                                {window.innerWidth < 767 ? `${description.slice(0, 25)}...` : description}
                                            </p>
                                        </div>
                                        <div className="product-buy">
                                            <p>₹ {salePrice}</p>
                                            <small>
                                                <span>₹ {mrp}</span> {discountPercentage}% off
                                            </small>
                                            <small className="stock">only {stock} left</small>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    );
}

export default FilterAndSortProduct;