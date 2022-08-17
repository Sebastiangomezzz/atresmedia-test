import React, { useState, useEffect } from "react";
import { useFetchOneSite } from "../../hooks/useFetchOneSite";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEditSite } from "../../hooks/useEditSite";
import { ButtonWithLink } from "../../components/buttons/ButtonWithLink/ButtonWithLink";
import { Button } from "../../components/buttons/Button/Button";
import styles from "./SiteEdit.module.css";
export const SiteEdit = () => {
  const { siteId } = useParams();
  const { data: siteData, loading, error } = useFetchOneSite(siteId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [editedData, setEditedData] = useState(siteData);
  const { hookHandleEditSubmit, submitLoading, submitError, submitSuccess } =
    useEditSite();

  const onSubmit = (data) => {
    if (data.name === "") {
      data.name = siteData.name;
    }
    if (data.path === "") {
      data.path = siteData.path;
    }
    if (data.publicPath === "") {
      data.publicPath = siteData.publicPath;
    }
    if (data.key === "") {
      data.key = siteData.key;
    }
    if (data.description === "") {
      data.description = siteData.description;
    }
    hookHandleEditSubmit(data, siteId);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.formLabel}>Nombre</label>
        <input
          className={styles.formInput}
          defaultValue={siteData.name}
          {...register("name")}
        />
        <label className={styles.formLabel}>Path</label>
        <input
          className={styles.formInput}
          defaultValue={siteData.path}
          {...register("path")}
        />
        <label className={styles.formLabel}>Path Público</label>
        <input
          className={styles.formInput}
          defaultValue={siteData.publicPath}
          {...register("publicPath")}
        />
        <label className={styles.formLabel}>Key</label>
        <input
          className={styles.formInput}
          defaultValue={siteData.key}
          {...register("key")}
        />
        <label className={styles.formLabel}>Descripción</label>
        <input
          className={styles.formLastInput}
          defaultValue={siteData.description}
          {...register("description")}
        />
        <Button
          color="#343434"
          width={"100%"}
          text="Confirmar Cambios"
          onClick={() => {}}
          type="submit"
        />
      </form>
      <ButtonWithLink
        color="#512930"
        width={"100%"}
        text="Cancelar"
        linkTo={`/detail/${siteId}`}
        onClick={() => {}}
      />
      {submitSuccess && (
        <span className={styles.success}>Editado correctamente!!</span>
      )}
    </div>
  );
};
