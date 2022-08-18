import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Button } from "../../components/buttons/Button/Button";
import { ButtonWithLink } from "../../components/buttons/ButtonWithLink/ButtonWithLink";
import { useSiteActions } from "../../contexts/site/siteActions";
import { useSiteState } from "../../contexts/site/siteContext";
import styles from "./SiteDetail.module.css";

export const SiteDetail = () => {
  const { siteId } = useParams();
  const { getSite, deleteSite } = useSiteActions();
  const { selected_site, siteDeleteSuccess } = useSiteState();
  useEffect(() => {
    getSite(siteId);
  }, [siteId]);
  return (
    <div className={styles.container}>
      {selected_site && (
        <>
          <div className={styles.dataContainer}>
            <p>Descripción: {selected_site.description}</p>
            <p>Path: {selected_site.path}</p>
            <p>Path público: {selected_site.publicPath}</p>
            <p>Key: {selected_site.key}</p>
          </div>
        </>
      )}
      <div className={styles.buttonContainer}>
        <ButtonWithLink
          width={"20rem"}
          color="#343434"
          text="Editar"
          linkTo={`/edit/${siteId}`}
          onClick={() => {}}
        />
        <Button
          width={"20rem"}
          color="#512930"
          text="Eliminar Site"
          onClick={() => {
            deleteSite(siteId);
          }}
        />
      </div>
      {siteDeleteSuccess && <Navigate to="/" />}
    </div>
  );
};
