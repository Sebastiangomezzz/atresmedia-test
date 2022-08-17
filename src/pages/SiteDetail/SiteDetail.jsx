import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetchOneSite } from "../../hooks/useFetchOneSite";
import { useDeleteSite } from "../../hooks/useDeleteSite";
import { Navigate } from "react-router-dom";
import { Button } from "../../components/buttons/Button/Button";
import { ButtonWithLink } from "../../components/buttons/ButtonWithLink/ButtonWithLink";
import styles from "./SiteDetail.module.css";
export const SiteDetail = () => {
  const { siteId } = useParams();
  const { data, loading, error } = useFetchOneSite(siteId);
  const [navigateToEdit, setNavigateToEdit] = useState(false);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
    handleDelete,
  } = useDeleteSite(siteId);
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>{data.name}</h2>
      <div className={styles.dataContainer}>
        <p>Descripción: {data.description}</p>
        <p>Path: {data.path}</p>
        <p>Path público: {data.publicPath}</p>
        <p>Key: {data.key}</p>
      </div>
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
            handleDelete(siteId);
          }}
        />
      </div>
      {successDelete && <Navigate to="/" />}
    </div>
  );
};
