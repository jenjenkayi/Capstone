import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import {getAllProductsThunk} from '../../store/product';
import "./Category.css";

const DrinkwareCategory = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const products = useSelector(state => state.product.allProducts);
  const productsArr = Object.values(products);
  
  const drinkwareProducts = productsArr.filter(product => product.category === "Drinkware")

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [dispatch]);

  if (Object.keys(drinkwareProducts).length === 0) {
    return null;
  }


return (
    <div className="products_container">
        {drinkwareProducts && drinkwareProducts.map(product => {
          return (
            <>
            <NavLink key={product.id} to={`/products/${product.id}`}>
            <div>
            <img
                className="stories-image"
                src={product.image}
                alt=""
                />
            </div>
            <div>{product.name}</div>
            <div>{product.avgRating}</div>
            <div>{product.reviewCount}</div>
            <div>${product.price}</div>
            </NavLink>
            </>
            
          )
        })}
    </div>
 )
}

export default DrinkwareCategory;