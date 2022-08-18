import React, { createContext, useReducer, useContext } from "react";
import { siteReducer, sitesInitialState } from "./siteReducer";

const SiteStateContext = createContext();
const SiteDispatchContext = createContext();

export const useSiteState = () => {
  const context = useContext(SiteStateContext);
  if (context === undefined) {
    throw new Error("useSiteState must be used within a SiteProvider");
  }
  return context;
};

export const useSiteDispatch = () => {
  const context = useContext(SiteDispatchContext);
  if (context === undefined) {
    throw new Error("useSiteDispatch must be used within a SiteProvider");
  }
  return context;
};

export const SiteContextProvider = ({ initialValue, ...props }) => {
  const [state, dispatch] = useReducer(siteReducer, sitesInitialState);
  return (
    <SiteStateContext.Provider value={state}>
      <SiteDispatchContext.Provider value={dispatch}>
        {props.children}
      </SiteDispatchContext.Provider>
    </SiteStateContext.Provider>
  );
};
