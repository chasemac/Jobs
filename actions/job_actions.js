import axios from 'axios';
import qs from 'qs';

import {
    FETCH_JOBS
} from './types';

const JOB_ROOT_URL = 'https://jobs.github.com/positions.json?';
const JOB_QUERY_PARAMS = {
    description: 'javascript'
};

const buildJobsUrl = ({ latitude, longitude }) => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, lat: latitude, long: longitude})
    return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region) => async (dispatch) => {
    try {
        const url = buildJobsUrl(region);
        let { data } = await axios.get(url);
        dispatch({ type: FETCH_JOBS, payload: data });
        console.log('==============DATA======================');
        console.log(data);
        console.log('====================================');

    } catch(e) {
        console.log('===============ERROR=====================');
        console.log(e);
        console.log('================ERROR====================');
    }
};