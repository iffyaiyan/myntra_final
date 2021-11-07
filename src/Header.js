import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import logo from "./image/logo.png";

function Header() {  

  const [{ basket, user }, dispatch] = useStateValue();
  const [{ dcount, user2 }, dispatch2] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
        <Link to="/">
            <img
            className="header__logo"
            src = "https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-com-brand-logo-transparent-png-6.png"
            // src={logo}
            alt = ""
            />
        </Link>  
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
      <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        {/* <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div> */}

        
        <Link to="/checkout">
            <div className="header__optionBasket">
                <AddShoppingCartIcon />
                <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
                </span>
            </div>
        </Link>

        <Link to="/design">
            <div className="header__optionDesign">
                <DesignServicesIcon />
                <span className="header__optionLineTwo header__basketCount">
                {dcount?.length}
                </span>
            </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;
