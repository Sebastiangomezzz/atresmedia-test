import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { useFetchAllSites } from "../../hooks/useFetchAllSites";
import styles from "./SitesList.module.css";

export const SitesList = () => {
  const { data, loading, error } = useFetchAllSites();
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.sitesLinkContainer}>
          <ul>
            {data.map((site) => (
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
