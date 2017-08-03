import { actionTypes,appSections } from "../utils/constants";

const INITIAL_STATE = {
    section : appSections.feed,
    selectedTweet: null,
    title : appSections.feed.name
};

const flowReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case actionTypes.CHANGE_SECTION:
            return {
                ...state,
                section : action.payload,
                title : action.payload.name
            };
            break;

        case actionTypes.SELECT_TWEET:
            return {
                ...state,
                selectedTweet : action.payload
            };
            break;

        case actionTypes.SET_TITLE:
            return {
                ...state,
                title:action.payload
            };
            break;
        default:
            return state;
    }
};

export default flowReducer;