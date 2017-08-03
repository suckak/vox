import { actionTypes } from "../utils/constants";

export const getTweets = () => {
    return { type : actionTypes.GET_TWEETS };
};

export const getCampaigns = () => {
    return { type : actionTypes.GET_CAMPAIGNS };
};

export const getUser = () => {
    return { type : actionTypes.GET_USER };
};

export const changeSection = (section) => {
    return {
        type : actionTypes.CHANGE_SECTION,
        payload : section
    }
};

export const selectTweet = (tweet) => {
    return {
        type : actionTypes.SELECT_TWEET,
        payload : tweet
    };
};

export const markTweet = (id) => {
    return {
        type : actionTypes.MARK_TWEET,
        payload : id
    };
};

export const setTitle = (title) => {
    return {
        type : actionTypes.SET_TITLE,
        payload : title
    };
};