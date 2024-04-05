import React, { useEffect } from "react";
import "./productCard.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProducts,
} from "../../store/products/products.actions";
import Button from "../../widgets/button/Button";
import { Link, useSearchParams } from "react-router-dom";
import Loader from "../loader/Loader";
import Pagination from "../pagination/Pagination";

const ProductsCard = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="cardList">
        {(loading || error) && <Loader />}
        {products.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <h3>{item.price}$</h3>
            <p>{item.description}</p>
            <Link to={`/edit-product/${item.id}`}>
              <Button color="blue">edit</Button>
            </Link>
            <Button
              onClick={() => dispatch(deleteProduct(item.id))}
              color="red"
            >
              delete
            </Button>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ProductsCard;
