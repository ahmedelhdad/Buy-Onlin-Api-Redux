import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { addCart, getCartTotal } from "../../ReduxToolkit/slice.js";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const respons = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await respons.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);
  const state = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    dispatch(getCartTotal(state));
  }, [state]);
  const load = () => {
    return (
      <div className="row">
        <div className="col-md-6">
          <Skeleton width={500} height={500} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 3 }} />
        </div>
      </div>
    );
  };
  const showProduct = () => {
    return (
      <div className="container py-2">
        <div className="row py-5" key={product.id}>
          <div className="col-md-12 col-lg-6 mb-4">
            <img
              src={product.image}
              alt={product.title}
              height={500}
              width={500} 
              className="img-fluid"
            />
          </div>
          <div className="col-md-12 col-lg-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              {<AiFillStar className="mb-1" />}
            </p>
            <h3 className="display-6 fw-bolder my-4">${product.price}</h3>
            <p className="lead">{product.description}</p>
            <div className="button d-flex ">
              <button
                className="btn btn-outline-dark"
                onClick={() => dispatch(addCart(product))}
              >
                {" "}
                Add to Cart
              </button>
              <Link
                to="/cart"
                className="btn ms-3 btn-dark text-white p-2 d-flex justify-content-center align-items-center"
              >
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <div>{loading ? load() : showProduct()}</div>;
};

export default Product;
