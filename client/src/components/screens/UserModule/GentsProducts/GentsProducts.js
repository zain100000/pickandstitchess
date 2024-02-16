import React, { useEffect } from "react";
import GentsItemsContainer from "../../../otherComponents/GentsProducts/GentsItemContainer";
import ShalwarKameezSimple from "../../../../assets/gents-products/shalwar-kameez-simple.jpg";
import ShalwarKameezCotton from "../../../../assets/gents-products/shalwar-kameez-cotton.jpg";
import ShalwarKameezKurta from "../../../../assets/gents-products/shalwar-kameez-kurta.jpg";
import ShalwarKameezKhaddar from "../../../../assets/gents-products/shalwar-kameez-khaddar.jpg";
import ShalwarKameezKarandi from "../../../../assets/gents-products/shalwar-kameez-karandi.jpg";
import ShalwarKameezSilk from "../../../../assets/gents-products/shalwar-kameez-silk.jpg";
import GentsKidsSuit from "../../../../assets/gents-products/gents-kids.png";

const GentsProducts = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll to the top when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <section id="GentsProduct">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <GentsItemsContainer
              product="Shalwar Kameez (Simple)"
              product_pic={ShalwarKameezSimple}
              price={"1500"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <GentsItemsContainer
              product="Shalwar Kameez (Cotton)"
              product_pic={ShalwarKameezCotton}
              price={"1500"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <GentsItemsContainer
              product="Shalwar Kameez (Kurta)"
              product_pic={ShalwarKameezKurta}
              price={"1500"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <GentsItemsContainer
              product="Shalwar Kameez (Khaddar)"
              product_pic={ShalwarKameezKhaddar}
              price={"1600"}
              onwards={"Onwards"}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <GentsItemsContainer
              product="Shalwar Kameez (Karandi)"
              product_pic={ShalwarKameezKarandi}
              price={"1800"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <GentsItemsContainer
              product="Shalwar Kameez (Silk)"
              product_pic={ShalwarKameezSilk}
              price={"1800"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <GentsItemsContainer
              product="Gents Kids Suit"
              product_pic={GentsKidsSuit}
              price={"1800"}
              onwards={"Onwards"}
            />
          </div>
        </div>
      </div>
      <hr
        className="seperator"
        style={{ color: "green", fontWeight: "bold" }}
      />
    </section>
  );
};

export default GentsProducts;
