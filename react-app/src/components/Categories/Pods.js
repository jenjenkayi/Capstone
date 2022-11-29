import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  NavLink } from "react-router-dom";
import {getAllProductsThunk} from '../../store/product';
import "./Category.css";


const PodsCategory = () => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.product.allProducts);
  const productsArr = Object.values(products);
  
  const podsProducts = productsArr.filter(product => product.category === "Pods")

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [dispatch]);

  if (Object.keys(podsProducts).length === 0) {
    return null;
  }


return (
    <div className="products-container">
        {podsProducts && podsProducts.map(product => {
          return (
            <>
            <NavLink key={product.id} to={`/products/${product.id}`}>
            <div>
            <img
                className="products-image"
                src={product.image}
                alt=""
                />
            </div>
            <div className="products-info">
              <div className="products-name">{product.name}</div>
              <div className="products-rating-info">
                <span className="products-avgRating">{product.avgRating}</span> <span className="products-reviewCount">({product.reviewCount})</span>
              </div>
              <div className="products-price">${product.price}</div>
              </div>
            </NavLink>
            </>
            
          )
        })}
    </div>
 )
}

export default PodsCategory;