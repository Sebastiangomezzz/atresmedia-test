import React, { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import atresplayer from "../../assets/images/atresplayer.png";
import styles from "./DefaultLayout.module.css";
import { useFetchOneSite } from "../../hooks/useFetchOneSite";

export const DefaultLayout = ({ children }) => {
  const { siteId } = useParams();
  const [currentlocation, setCurrentlocation] = useState(null);
  const location = useLocation();
  const { data, loading, error } = useFetchOneSite(siteId);
  useEffect(() => {
    setCurrentlocation(location.pathname);
  }, [location]);
  useEffect(() => {
    console.log(data);
  }, [siteId]);
  return (
    <div className={styles.container}>
      <NavBar>
        <img src={atresplayer} />
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
            <h1 style={{marginRight:'5rem'}}>Detalles de</h1>
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
