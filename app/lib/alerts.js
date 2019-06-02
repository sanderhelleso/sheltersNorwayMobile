import { Alert } from 'react-native';

const ERR_SEARCH_ALERT_TITLE = 'Wops';
const ERR_SEARCH_ALERT_MSG = 'Søkefelt må inneholde minimum 2 bokstaver for å utføre søk.';

const ERR_RESULT_ALERT_TITLE = 'Ingen Treff';
const ERR_RESULT_ALERT_MSG = 'Vi kunne ikke finne noen tilfluktsrom som passet søket ditt.';

// display error alert for wrong search format
export function showSearchErrAlert() {
	Alert.alert(ERR_SEARCH_ALERT_TITLE, ERR_SEARCH_ALERT_MSG);
}

// display error alert for empty search result
export function showSearchResultErrAlert() {
	Alert.alert(ERR_RESULT_ALERT_TITLE, ERR_RESULT_ALERT_MSG);
}
