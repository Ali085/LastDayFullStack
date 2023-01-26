import React from "react";
import './index.scss'

function BestSeller() {
  return (
    <section className="bestSec">
      <div className="bestDiv">
        <div className="bestTxt">
          <p>Popular Item in the market</p>
          <h2>Best Sellers</h2>
        </div>
        <div className="bestProduct">
          <div>
            <img
              src="https://preview.colorlib.com/theme/aroma/img/product/product2.png"
              alt="foto"
            />
            <p>Decor</p>
            <h4>Quartz Belt Watch</h4>
            <h5>$150</h5>
          </div>
          <div>
            <img
              src="https://preview.colorlib.com/theme/aroma/img/product/product3.png"
              alt="foto"
            />
            <p>Decor</p>
            <h4>Room Flash Light</h4>
            <h5>$150</h5>
          </div>
          <div>
            <img
              src="https://preview.colorlib.com/theme/aroma/img/product/product5.png"
              alt="foto"
            />
            <p>Decor</p>
            <h4>Women Freshwash</h4>
            <h5>$150</h5>
          </div>
          <div>
            <img
              src="https://preview.colorlib.com/theme/aroma/img/product/product7.png"
              alt="foto"
            />
            <p>Decor</p>
            <h4>Charging Car</h4>
            <h5>$150</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
