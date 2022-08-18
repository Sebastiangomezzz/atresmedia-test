import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import atresplayer from "../../assets/images/atresplayer.png";
import styles from "./DefaultLayout.module.css";
import { useSiteState } from "../../contexts/site/siteContext";

export const DefaultLayout = ({ children }) => {
  const [currentlocation, setCurrentlocation] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setCurrentlocation(location.pathname);
  }, [location]);
  const { selected_site } = useSiteState();
  return (
    <div className={styles.container}>
      <NavBar>
        <img src={atresplayer} alt='atresmedia-logo'/>
        {currentlocation && currentlocation.includes("/edit") && (
          <>
            <h1>Editar Site</h1>
            <Link to='/'>Volver a inicio</Link>
          </>
        )}
        {currentlocation && currentlocation.includes("/create") && (
          <>
            <h1>Crear Site</h1>
            <Link to="/">Volver a inicio</Link>
          </>
        )}
        {currentlocation && currentlocation.includes("/detail") && (
          <>
            {selected_site && (<h1 style={{ marginRight: '5rem' }}>Detalles de { selected_site.name}</h1>)}
            <Link to="/">Volver a inicio</Link>
          </>
        )}
        {currentlocation &&
          !currentlocation.includes("/edit") &&
          !currentlocation.includes("/create") &&
          !currentlocation.includes("/detail") && (
            <>
              <h1>Sites</h1>
              <Link to="/create">Crear nuevo Site</Link>
            </>
          )}
      </NavBar>
      <div className={styles.pageContent}>{children}</div>
    </div>
  );
};
