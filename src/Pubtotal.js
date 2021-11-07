import React from 'react';
import "./Pubtotal.css";
import image1 from "./deals_of_day/BestBuys4.webp";
import image2 from "./biggest_deal/TopBrands6.webp";
import image3 from "./category/CategoryBag4.webp";
import image4 from "./explorebrand/ExploreBrands1.webp";

function Pubtotal() {
    return (
        <div className="pub">
            <div className="pub__container">
                <div className="pub__row">
                    <img src={image1} />                    
                </div>
                <h4 class="pub_text1">1500 likes</h4>
                <h4 class="pub_text2">400 comments</h4>
                <div className="pub__row">
                    <img src={image2} />
                </div>
                <h4 class="pub_text1">400 likes</h4>
                <h4 class="pub_text2">50 comments</h4>
                <div className="pub__row">
                    <img src={image3} />
                </div>
                <h4 class="pub_text1">600 likes</h4>
                <h4 class="pub_text2">100 comments</h4>
                <div className="pub__row">
                    <img src={image4} />
                </div>
                <h4 class="pub_text1">2000 likes</h4>
                <h4 class="pub_text2">300 comments</h4>
                    
                <h3>There is 4 items available in the public domain</h3>
                
            </div>
        </div>
    )
}

export default Pubtotal
