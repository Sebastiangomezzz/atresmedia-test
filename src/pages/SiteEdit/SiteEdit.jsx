import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ButtonWithLink } from "../../components/buttons/ButtonWithLink/ButtonWithLink";
import { Button } from "../../components/buttons/Button";
import { useSiteActions } from "../../contexts/site/siteActions";
import { useSiteState } from "../../contexts/site/siteContext";
import styles from "./SiteEdit.module.css";
export const SiteEdit = () => {
  const { siteId } = useParams();
  const { getSite, updateSite, resetSuccess } = useSiteActions();
  const { selected_site, siteUpdateSuccess } =
    useSiteState();
  const {
    register,
    handleSubmit
  } = useForm();
  useEffect(() => {
    if (!selected_site) {
      getSite(siteId);
    }
  });

  const onSubmit = (data) => {
    updateSite(siteId, data);
    resetSuccess();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {selected_site && (
          <>
            <label className={styles.formLabel}>Nombre</label>
            <input
              className={styles.formInput}
              defaultValue={selected_site.name}
              {...register("name")}
            />
            <label className={styles.formLabel}>Path</label>
            <input
              className={styles.formInput}
              defaultValue={selected_site.path}
              {...register("path")}
            />
            <label className={styles.formLabel}>Path Público</label>
            <input
              className={styles.formInput}
              defaultValue={selected_site.publicPath}
              {...register("publicPath")}
            />
            <label className={styles.formLabel}>Key</label>
            <input
              className={styles.formInput}
              defaultValue={selected_site.key}
              {...register("key")}
            />
            <label className={styles.formLabel}>Descripción</label>
            <input
              className={styles.formLastInput}
              defaultValue={selected_site.description}
              {...register("description")}
            />
          </>
        )}
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
      {siteUpdateSuccess && (
        <>
          <span className={styles.success}>Editado correctamente!!</span>
          <Navigate to={`/detail/${siteId}`} />
        </>
      )}
    </div>
  );
};
