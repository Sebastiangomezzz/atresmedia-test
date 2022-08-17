import { useEffect, useState } from 'react';
import { useSiteActions } from '../contexts/site/siteActions';
import { useSiteState } from '../contexts/site/siteContext';

export const useFetchAllSites = () => {
    const { fetchAllSites } = useSiteActions()
    const { sites } = useSiteState()
}
