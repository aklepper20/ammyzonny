import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import "../css/Home.css";

function HomePage() {
  return (
    <>
      <Header />
      <div className="home">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home__image"
          alt="Home Image"
        />
        {/* Product: id, title, price, rating, image */}
        <div className="home__row">
          <Product
            id={234}
            title={"Boiling water"}
            price={100.2}
            rating={3}
            image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          />
          <Product
            id={234}
            title={"Boiling water"}
            price={100.2}
            rating={3}
            image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          />
        </div>
        <div className="home__row">
          <Product
            id={234}
            title={"Boiling water"}
            price={100.2}
            rating={3}
            image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          />
          <Product
            id={234}
            title={"Boiling water"}
            price={100.2}
            rating={3}
            image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          />
          <Product
            id={234}
            title={"Boiling water"}
            price={100.2}
            rating={3}
            image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          />
        </div>
        <div className="home__row">
          <Product
            id={234}
            title={"Boiling water"}
            price={100.2}
            rating={3}
            image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
