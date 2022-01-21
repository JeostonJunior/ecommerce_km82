import React from "react";
import "./Navbar.css";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="NavBarContainer">
      <div className="Wrapper">
        <div className="Left">
          <span className="Language">PT</span>
          <div className="SearchContainer">
            <input type="text" className="InputSearchContainer" />
            <div className="Search">
              <Search style={{color:"gray",fontSize:16}}/>
            </div>
          </div>
        </div>
        <div className="Center">
          <h1 className="Logo">KM82.</h1>
        </div>
        <div className="Right">
          <div className="MenuItem">REGISTER</div>
          <div className="MenuItem">SIGN IN</div>
          <div className="MenuItem">
            <Badge badgeContent={0} color="Primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
