import React, {useEffect} from "react";
import LadiesItemsContainer from "../../../otherComponents/LadiesProducts/LadiesItemContainer";
import LadiesShalwarSuit from "../../../../assets/ladies-products/ladies-shalwar-suit.jpg";
import LadiesTrouserSuit from "../../../../assets/ladies-products/ladies-trouser-suit.jpg";
import LadiesFrock from "../../../../assets/ladies-products/frock-simple.jpg";
import LadiesDoubleSuitShalwar from "../../../../assets/ladies-products/double-suit&shalwar.jpg";
import LadiesDoubleSuitTrouser from "../../../../assets/ladies-products/double-suit&trouser.jpg";
import FrockDoubleDesign from "../../../../assets/ladies-products/double-frock-design.jpg";
import MaxiSuit from "../../../../assets/ladies-products/maxi-suit.jpg";
import ShariBlouse from "../../../../assets/ladies-products/sarhi-blouse.jpg";
import LehngaSet from "../../../../assets/ladies-products/lehnga-suit.jpg";
import LadiesShalwar from "../../../../assets/ladies-products/ladies-shalwar.jpg";
import LadiesKameez from "../../../../assets/ladies-products/ladies-kameez.png";
import LadiesKidsSuit from "../../../../assets/ladies-products/ladies-kids.jpg";
import DoubleKameez from "../../../../assets/ladies-products/double-kameez.jpg";
import Abaya from "../../../../assets/ladies-products/abaya.jpg";

const LadiesProducts = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll to the top when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <section id="LadiesProduct">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Ladies Shalwar Suit"
              product_pic={LadiesShalwarSuit}
              price={"1150"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Ladies Trouser Suit"
              product_pic={LadiesTrouserSuit}
              price={"1200"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Frock (Simple)"
              product_pic={LadiesFrock}
              price={"1900"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Double Suit & Shalwar"
              product_pic={LadiesDoubleSuitShalwar}
              price={"1600"}
              onwards={"Onwards"}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Double Suit & Trouser"
              product_pic={LadiesDoubleSuitTrouser}
              price={"1800"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Frock Double Design"
              product_pic={FrockDoubleDesign}
              price={"2700"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Maxi Suit"
              product_pic={MaxiSuit}
              price={"3000"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Shari Blouse"
              product_pic={ShariBlouse}
              price={"3500"}
              onwards={"Onwards"}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Lehnga Set"
              product_pic={LehngaSet}
              price={"5500"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Ladies Shalwar"
              product_pic={LadiesShalwar}
              price={"500"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Ladies Kameez"
              product_pic={LadiesKameez}
              price={"800"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Ladies Kids Suit"
              product_pic={LadiesKidsSuit}
              price={"800"}
              onwards={"Onwards"}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Double Kameez"
              product_pic={DoubleKameez}
              price={"1100"}
              onwards={"Onwards"}
            />
          </div>
          <div className="col-lg-3">
            <LadiesItemsContainer
              product="Abaya"
              product_pic={Abaya}
              price={"2300"}
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

export default LadiesProducts;
