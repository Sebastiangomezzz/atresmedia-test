import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import styles from "./SitesList.module.css";
import { useSiteActions } from "../../contexts/site/siteActions";
import { useSiteState } from "../../contexts/site/siteContext";

export const SitesList = () => {
  const { getSites } = useSiteActions();
  const { sites, sitesLoading } = useSiteState();
  useEffect(() => {
    getSites();
  } , []);
  return (
    <div>
      {sitesLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.sitesLinkContainer}>
          <ul>
            {sites.map((site) => (
              <li key={site._id}>
                <Link to={`/detail/${site._id}`}>{site.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
