import React,{useEffect} from "react";
import { useForm } from "react-hook-form";
import { useCreateSite } from "../../hooks/useCreateSite";
import { Button } from "../../components/buttons/Button";
import styles from "./SiteCreate.module.css";

export const SiteCreate = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { hookHandleSubmit, submitLoading, submitError, submitSuccess, setSubmitSuccess } =
    useCreateSite();
  const onSubmit = (data) => {
    hookHandleSubmit(data);
    reset();
    setTimeout(() => {
      setSubmitSuccess(false);
    } , 1000);
  };
  
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
      {submitSuccess && (
        <span className={styles.success}>Site creado correctamente!!</span>
      )}
      {submitError && <div>{submitError}</div>}
    </div>
  );
};
