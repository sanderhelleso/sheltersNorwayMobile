import ENDPOINTS from './endpoints';
import API from './api';

/**
 * Fetch all shelters
 * 
 * Endpoint:    /all
 * Method:      GET
 */
export async function _getShelters() {

    try {
        const response = await API.get(ENDPOINTS.getShelters)
        console.log(response);
        return alert(response)
    }

    catch(error) {
        console.log(error);
        return alert(error)
    }
}