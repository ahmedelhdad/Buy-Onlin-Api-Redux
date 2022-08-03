import React, { useState, useEffect, Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import "./Products.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const respons = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await respons.clone().json());
        setFilter(await respons.json());
        setLoading(false);
      }
    };
    getProducts();
  }, [componentMounted]);
  const load = () => {
    return (
      <Fragment>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </Fragment>
    );
  };
  const showProducts = filter.map((products) => {
    return (
      <div className="col-md-4 col-lg-3 my-2 d-flex justify-content-center" key={products.id}>
        <Card style={{ width: "18rem" }} className="p-4 text-center">
          <Card.Img
            variant="top"
            src={products.image}
            alt={products.title}
            height={250}
          />
          <Card.Body>
            <h5>{products.title.substring(0, 12)}</h5>
            <p className="card-text fs-5 fw-bolder">${products.price}</p>
            <Link
              to={`/Products${products.id}`}
              className="btn border-dark buy"
            >
              Buy Now
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  });

  const filterProducts = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-12 text-center  title-products ">
          <h1 className="display-3 fw-bolder ">Latest Products</h1>
        </div>
        <div className="row  ">
          <div className="col-12 d-flex justify-content-center flex-wrap flex-column flex-md-row  gap-2">
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => setFilter(data)}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProducts("men's clothing")}
            >
              Men's clothing
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProducts("women's clothing")}
            >
              Women's clothing
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProducts("jewelery")}
            >
              Jewelery
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProducts("electronics")}
            >
              Electronic
            </button>
          </div>
          <div className="col-12">
            <div className="row py-4">
              {loading ? load() : showProducts}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
