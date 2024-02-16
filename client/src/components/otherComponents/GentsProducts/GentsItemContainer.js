import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Main.css";

const GentsItemsContainer = ({ product_pic, product, price, onwards }) => {
  const navigate = useNavigate();

  const navigateToOrderDetails = () => {
    navigate("/gents-order-details", {
      state: { product_pic, product, price },
    });
  };

  return (
    <div onClick={navigateToOrderDetails} style={{ cursor: "pointer" }}>
      <section id="GentsItemContainer">
        <div className="gentsContainer">
          <center>
            <img src={product_pic} alt={product} className="pImg" />
          </center>

          {product ? (
            <>
              <div className="productDetailsContainer text-center mt-2">
                <p className="pName">{product}</p>
                <p className="pPrice">Rs.{price}</p>
                <p className="pOnwards">{onwards}</p>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
};

export default GentsItemsContainer;
