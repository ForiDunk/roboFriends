import { CHANGE_SEARCH_FIELD } from './constants';

export const setSearchFrield = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});