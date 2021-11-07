import React from 'react';
import "./Private.css";
import image1 from "./deals_of_day/BestBuys6.webp";
import image2 from "./biggest_deal/TopBrands5.jpg";
import image3 from "./category/CategoryBag3.webp";

function Private() {
    return (
        <div className="pub">
            <div className="pub__container">
                <h4>Edit 1</h4>
                <div className="pub__row">
                    <img src={image1} />
                </div>
                <h4>Edit 2</h4>
                <div className="pub__row">
                    <img src={image2} />
                </div>
                <h4>Edit 3</h4>
                <div className="pub__row">
                    <img src={image3} />
                </div>
                    
                <h3>There is 3 items available in the public domain</h3>
                
            </div>
        </div>
    )
}

export default Private
