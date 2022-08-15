import React, { useState, useEffect } from "react";
import { useFetchOneSite } from "../hooks/useFetchOneSite";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEditSite } from "../hooks/useEditSite";
import { ButtonWithLink } from "../components/buttons/ButtonWithLink/ButtonWithLink";
import { Button } from "../components/buttons/Button";

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={siteData.name} {...register("name")} />
        <input defaultValue={siteData.path} {...register("path")} />
        <input defaultValue={siteData.publicPath} {...register("publicPath")} />
        <input defaultValue={siteData.key} {...register("key")} />
        <input
          defaultValue={siteData.description}
          {...register("description")}
        />
        <Button text="Confirmar Cambios" onClick={() => {}} type="submit" />
      </form>
      <ButtonWithLink
        text="Cancelar"
        linkTo={`/detail/${siteId}`}
        onClick={() => {}}
      />
    </>
  );
};
