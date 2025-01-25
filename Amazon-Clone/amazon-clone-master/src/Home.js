import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://tecnovery.com/wp-content/uploads/2020/03/1366_2000-3.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Fujifilm Instax Mini 11 Instant Camera With Case, 60 Fujifilm Films"
            price={139.99}
            rating={4}
            image="https://i.ebayimg.com/images/g/HPgAAOSwAQdjfoUc/s-l400.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="BURBERRY BE 2255Q 3657 Havana Bordeaux Plastic Square Eyeglasses 51mm"
            price={121.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/51P8rg+6ABL._AC_SY695_.jpg"
          />
          <Product
            id="23445930"
            title="Apple Pencil 2nd Generation with Magnetic Wireless Charging"
            price={28.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41yDnYrNctL._AC_SX679_.jpg"
          />
          <Product
            id="3254354345"
            title="KIBAGA Beautiful Greeting Cards Set of 60 with Envelopes & Stickers"
            price={7.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71m2kZBUDpL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung Galaxy Tab S9 FE+ 12.4” 256GB Android Tablet, IP68 Water- and Dust-Resistant, Long Battery Life, Powerful Processor, S Pen, 8MP Camera, Lightweight"
            price={569.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51M3Xt+8OiL._AC_SL1280_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
