import { actionTypes,appSections } from "../utils/constants";

const INITIAL_STATE = {
    section : appSections.start,
    selectedTweet: null
};

const flowReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case actionTypes.CHANGE_SECTION:
            return {
                ...state,
                section : action.payload
            };
            break;

        case actionTypes.SELECT_TWEET:
            return {
                ...state,
                selectedTweet : action.payload
            };
            break;
        default:
            return state;
    }
};

export default flowReducer;