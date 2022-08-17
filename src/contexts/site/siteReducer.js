export const sitesInitialState = {
    sitesLoading: false,
    sites: [],
    sitesError: null,
    sitesSuccess: false,
    selected_site: null,
};

export const SITES_REQUEST = "SITES_REQUEST";
export const SITES_SUCCESS = "SITES_SUCCESS";
export const SITES_ERROR = "SITES_ERROR";

export const SITE_REQUEST = "SITE_REQUEST";
export const SITE_SUCCESS = "SITE_SUCCESS";
export const SITE_ERROR = "SITE_ERROR";

export const SITE_CREATE_REQUEST = "SITE_CREATE_REQUEST";
export const SITE_CREATE_SUCCESS = "SITE_CREATE_SUCCESS";
export const SITE_CREATE_ERROR = "SITE_CREATE_ERROR";

export const SITE_UPDATE_REQUEST = "SITE_UPDATE_REQUEST";
export const SITE_UPDATE_SUCCESS = "SITE_UPDATE_SUCCESS";
export const SITE_UPDATE_ERROR = "SITE_UPDATE_ERROR";

export const SITE_DELETE_REQUEST = "SITE_DELETE_REQUEST";
export const SITE_DELETE_SUCCESS = "SITE_DELETE_SUCCESS";
export const SITE_DELETE_ERROR = "SITE_DELETE_ERROR";

export const siteReducer = (state, action) => {
    switch (action.type) {
        case SITES_REQUEST:
            return {
                ...state,
                sitesLoading: true
            };
        case SITES_SUCCESS:
            return {
                ...state,
                sitesLoading: false,
                sites: action.payload,
                sitesError: null,
                sitesSuccess: true,
            };
        case SITES_ERROR:
            return {
                ...state,
                sitesLoading: false,
                sitesError: action.payload,
                sitesSuccess: false,
            };
        case SITE_REQUEST:
            return {
                ...state,
                selected_site: null,
                siteError: null,
                siteSuccess: false,
            };
        case SITE_SUCCESS:
            return {
                ...state,
                selected_site: action.payload,
                siteError: null,
                siteSuccess: true,
            };
        case SITE_ERROR:
            return {
                ...state,
                selected_site: null,
                siteError: action.payload,
                siteSuccess: false,
            };
        case SITE_CREATE_REQUEST:
            return {
                ...state,
                siteCreateLoading: true,
                siteCreateError: null,
                siteCreateSuccess: false,
            };
        case SITE_CREATE_SUCCESS:
            return {
                ...state,
                siteCreateLoading: false,
                siteCreateError: null,
                siteCreateSuccess: true,
            };
        case SITE_CREATE_ERROR:
            return {
                ...state,
                siteCreateLoading: false,
                siteCreateError: action.payload,
                siteCreateSuccess: false,
            };
        case SITE_UPDATE_REQUEST:
            return {
                ...state,
                siteUpdateLoading: true,
                siteUpdateError: null,
                siteUpdateSuccess: false,
            };
        case SITE_UPDATE_SUCCESS:
            return {
                ...state,
                siteUpdateLoading: false,
                siteUpdateError: null,
                siteUpdateSuccess: true
            };
        case SITE_UPDATE_ERROR:
            return {
                ...state,
                siteUpdateLoading: false,
                siteUpdateError: action.payload,
                siteUpdateSuccess: false,
            };
        case SITE_DELETE_REQUEST:
            return {
                ...state,
                siteDeleteLoading: true,
                siteDeleteError: null,
                siteDeleteSuccess: false,
            };
        case SITE_DELETE_SUCCESS:
            return {
                ...state,
                siteDeleteLoading: false,
                siteDeleteError: null,
                siteDeleteSuccess: true,
            };
        case SITE_DELETE_ERROR:
            return {
                ...state,
                siteDeleteLoading: false,
                siteDeleteError: action.payload,
                siteDeleteSuccess: false,
            };
    }
}