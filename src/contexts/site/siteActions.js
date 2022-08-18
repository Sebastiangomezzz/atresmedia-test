import {
    SITES_REQUEST,
    SITES_SUCCESS,
    SITES_ERROR,
    SITE_REQUEST,
    SITE_SUCCESS,
    SITE_ERROR,
    SITE_CREATE_REQUEST,
    SITE_CREATE_SUCCESS,
    SITE_CREATE_ERROR,
    SITE_UPDATE_REQUEST,
    SITE_UPDATE_SUCCESS,
    SITE_UPDATE_ERROR,
    SITE_DELETE_REQUEST,
    SITE_DELETE_SUCCESS,
    SITE_DELETE_ERROR,
    RESET_SUCCESS,
} from './siteReducer';

import { useSiteDispatch } from './siteContext';

export const getSites = async (dispatch) => {
    try {
        dispatch({ type: SITES_REQUEST });
        const result = await fetch('https://interview.staging.atresplayer.com/sites');
        const data = await result.json();
        console.log(data, 'all data')
        dispatch({ type: SITES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SITES_ERROR, payload: error.message });
    }
}
export const getSite = async (dispatch, id) => {
    try {
        dispatch({ type: SITE_REQUEST });
        const result = await fetch(`https://interview.staging.atresplayer.com/site/${id}`);
        const data = await result.json();
        console.log(data, 'one site')
        dispatch({ type: SITE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SITE_ERROR, payload: error.message });
    }
}
export const createSite = async (dispatch, data) => {
    console.log(data)
    try {
        dispatch({ type: SITE_CREATE_REQUEST });
        const result = await fetch('https://interview.staging.atresplayer.com/site', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const _data = await result.json();
        console.log(_data, 'create site')
        dispatch({ type: SITE_CREATE_SUCCESS, payload: _data });
    } catch (error) {
        dispatch({ type: SITE_CREATE_ERROR, payload: error.message });
    }
}
export const updateSite = async (dispatch, id, data) => {
    console.log(id, data, 'update site')
    try {
        dispatch({ type: SITE_UPDATE_REQUEST });
        const result = await fetch(
          `https://interview.staging.atresplayer.com/site/${id}`,
          {
            method: "PUT",
            headers: {
              accept: "application.json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const _data = await result.json();
        dispatch({ type: SITE_UPDATE_SUCCESS, payload: _data });
    } catch (error) {
        dispatch({ type: SITE_UPDATE_ERROR, payload: error.message });
        console.log('error', error)
    }
}
export const deleteSite = async (dispatch, id) => {
    try {
        dispatch({ type: SITE_DELETE_REQUEST });
        const result = await fetch(`https://interview.staging.atresplayer.com/site/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await result.json();
        console.log(data, 'delete site')
        dispatch({ type: SITE_DELETE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SITE_DELETE_ERROR, payload: error.message });
    }
}
export const resetSuccess = (dispatch) => {
    dispatch({ type: RESET_SUCCESS });
}

export const useSiteActions = () => {
    const dispatch = useSiteDispatch();
    const _getSites = getSites.bind(getSites, dispatch);
    const _getSite = getSite.bind(getSite, dispatch);
    const _createSite = createSite.bind(createSite, dispatch);
    const _updateSite = updateSite.bind(updateSite, dispatch);
    const _deleteSite = deleteSite.bind(deleteSite, dispatch);
    const _resetSuccess = resetSuccess.bind(resetSuccess, dispatch);
    return {
        getSites: _getSites,
        getSite: _getSite,
        createSite: _createSite,
        updateSite: _updateSite,
        deleteSite: _deleteSite,
        resetSuccess: _resetSuccess,
    }
}