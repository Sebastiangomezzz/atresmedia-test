import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/buttons/Button";
import { useSiteActions } from "../../contexts/site/siteActions";
import { useSiteState } from "../../contexts/site/siteContext";
import styles from "./SiteCreate.module.css";

export const SiteCreate = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createSite, resetSuccess } = useSiteActions();
  const { siteCreateSuccess, siteCreateError, siteCreateLoading } = useSiteState();
  const onSubmit = (data) => {
    createSite(data);
    setTimeout(() => {
      resetSuccess();
    } , 1500);
    reset();
  };
  console.log(siteCreateLoading)
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.formInput}
          placeholder="Nombre"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className={styles.required}>This field is required</span>
        )}
        <input
          className={styles.formInput}
          placeholder="Path"
          {...register("path", { required: true })}
        />
        {errors.path && (
          <span className={styles.required}>This field is required</span>
        )}
        <input
          className={styles.formInput}
          placeholder="Path público"
          {...register("publicPath", { required: true })}
        />
        {errors.publicPath && (
          <span className={styles.required}>This field is required</span>
        )}
        <input
          className={styles.formInput}
          placeholder="Key"
          {...register("key", { required: true })}
        />
        {errors.key && (
          <span className={styles.required}>This field is required</span>
        )}
        <input
          className={styles.formInput}
          placeholder="Descripción"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className={styles.required}>This field is required</span>
        )}
        <Button
          color={"#343434"}
          width={"100%"}
          text="Crear Site"
          onClick={() => {}}
          type="submit"
        />
      </form>
      {siteCreateSuccess && (
        <span className={styles.success}>Site creado correctamente!!</span>
      )}
      {siteCreateError && <span className={styles.success}>{siteCreateError}</span>}
    </div>
  );
};
