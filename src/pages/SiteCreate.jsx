import React from "react";
import { useForm } from "react-hook-form";
import { useCreateSite } from "../hooks/useCreateSite";

export const SiteCreate = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { hookHandleSubmit, submitLoading, submitError, submitSuccess } = useCreateSite();
  const onSubmit = (data) => {
    hookHandleSubmit(data);
    reset();
  }
  return (
    <>
      <div>SiteCreate</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nombre" {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <input placeholder="Path" {...register("path", { required: true })} />
        {errors.path && <span>This field is required</span>}
        <input placeholder="Path público"{...register("publicPath", { required: true })} />
        {errors.publicPath && <span>This field is required</span>}
        <input placeholder="Key" {...register("key", { required: true })} />
        {errors.key && <span>This field is required</span>}
        <input placeholder="Descripción" {...register("description", { required: true })} />
        {errors.description && <span>This field is required</span>}
        <input type="submit" />
      </form>
      {submitSuccess && <div>Success</div>}
      {submitError && <div>{submitError}</div>}
    </>
  );
};
