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
import { addItemAsync } from "../../store/cart/cart.slice";
import axios from "axios"; // Импортируем библиотеку Axios
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsCard = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = async (id, name, price, image) => {
    try {
      const response = await axios.post("http://localhost:8007/cart", {
        id,
        name,
        price,
        image,
      });
      // Проверяем, что ответ успешный (статус код 200-299)
      if (response.status >= 200 && response.status < 300) {
        // Если запрос успешен, добавляем товар в Redux-хранилище
        dispatch(addItemAsync({ id, name, price, image }));
        toast.success("Product added to cart");
      } else {
        throw new Error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

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
              <Button style={{color:"white"}} color="blue">edit</Button>
            </Link>
            <Button style={{color:"white"}}
              onClick={() => dispatch(deleteProduct(item.id))}
              color="white"
            >
              delete
            </Button>

            <Button
              onClick={() =>
                handleAddToCart(item.id, item.title, item.price, item.image)
              }
              color="blue"
            >
              add to cart
            </Button>
          </div>
        ))}
      </div>
      <div style={{marginTop:"5%",marginLeft:"35%"}}>
      <Pagination/>
      </div>
    </div>
  );
};

export default ProductsCard;
