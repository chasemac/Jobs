import axios from 'axios';
import qs from 'qs';

import {
    FETCH_JOBS,
    LIKE_JOB,
    CLEAR_LIKED_JOBS,
} from './types';

const JOB_ROOT_URL = 'https://jobs.github.com/positions.json?';
const JOB_QUERY_PARAMS = {
    description: 'javascript',
  //  search: 'node'
};

const buildJobsUrl = ({ latitude, longitude }) => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, lat: latitude, long: longitude})
    return `${JOB_ROOT_URL}${query}`;
};


export const fetchJobs = (region, callback) => async (dispatch) => {
    try {
        const url = buildJobsUrl(region);
        let { data } = await axios.get(url);
        dispatch({ type: FETCH_JOBS, payload: data });
        callback();


        console.log('==============DATA=Below=====================');
        console.log(data);
        console.log('================DATA Above====================');

    } catch(e) {
        console.log('===============ERROR=====================');
        console.log(e);
        console.log('================ERROR====================');
    }
};

export const likeJob = (job) => {
    return {
        payload: job,
        type: LIKE_JOB
    };
};

export const clearLikedJobs = () => {
    return { type: CLEAR_LIKED_JOBS };
}