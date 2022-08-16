import React from "react";
import { useLocation } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
export const DefaultLayout = ({ children }) => {
    const location = useLocation();
    console.log(location);
  return (
    <div>
          <NavBar>
              
      </NavBar>
      <div>{children}</div>
    </div>
  );
};
