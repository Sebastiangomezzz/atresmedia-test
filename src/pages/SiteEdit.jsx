import React, { useState } from "react";
import { useFetchOneSite } from "../hooks/useFetchOneSite";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEditSite } from "../hooks/useEditSite";

export const SiteEdit = () => {
  const { siteId } = useParams();
  const { data, loading, error } = useFetchOneSite(siteId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [editedData, setEditedData] = useState({ ...data });
  const { hookHandleEditSubmit, submitLoading, submitError, submitSuccess } =
    useEditSite();
  const onSubmit = (formData) => {
    hookHandleEditSubmit(formData, siteId);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={data.name}
          {...register("name", { required: true })}
        />
        <input
          defaultValue={data.path}
          {...register("path", { required: true })}
        />
        <input
          defaultValue={data.publicPath}
          {...register("publicPath", { required: true })}
        />
        <input
          defaultValue={data.key}
          {...register("key", { required: true })}
        />
        <input
          defaultValue={data.description}
          {...register("description", { required: true })}
        />
        <input type="submit" />
      </form>
      <button>
        <Link to={`/detail/${siteId}`}>Cancelar</Link>
      </button>
    </>
  );
};
