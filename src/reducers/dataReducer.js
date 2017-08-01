import { actionTypes } from "../utils/constants";

const APP_DATA = {
    "tweets": [
        {
            "_id": 0,
            "userId": 1,
            "campaignId": 1,
            "date": "19 Oct 2014",
            "content": "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
            "results": {
                "clicks": {
                    "total": 256,
                    "unique": 200,
                    "payed": 145
                },
                "retweets": 2138,
                "replys": 478

            },
            "entities": {
                "hashtags": ["#MiCombiSqualo"],
                "urls": ["voxfd.co/ZK69Es"]
            }
        }, {
            "_id": 1,
            "userId": 1,
            "campaignId": 1,
            "date": "19 Oct 2014",
            "content": "Just #coding stuff... http://instagram.com/p/uENgADtakT/",
            "results": {
                "clicks": {
                    "total": 256,
                    "unique": 100,
                    "payed": 245
                },
                "retweets": 2138,
                "replys": 478

            },
            "entitites": {
                "hashtags": ["#coding"],
                "urls": ["http://instagram.com/p/uENgADtakT/"]
            }
        }, {
            "_id": 2,
            "userId": 1,
            "campaignId": 1,
            "date": "19 Oct 2014",
            "content": "Quiero tener #MiCombiSqualo sólo para ponerle unos dados de peluche en el retrovisor. ¿No quieres una igual? vxfd.co/1zhZIZp",
            "results": {
                "clicks": {
                    "total": 256,
                    "unique": 50,
                    "payed": 295
                },
                "retweets": 2138,
                "replys": 478

            },
            "entities": {
                "hashtags": ["#MiCombiSqualo"],
                "urls": ["voxfd.co/1zhZIZp"]
            }
        }
    ],
    "campaigns": {
        "1": {
            "brand": "Squalo",
            "groupAd": "Squalo Lifestyle"
        }
    },
    "user": {
        "avatarUrl": "user.png",
        "name": "Manuelmhtr",
        "followers": 478,
        "joinedDate": "08/12/15"
    }
};

const INITIAL_STATE = {
    tweets : [],
    campaigns: null,
    user : null,
    unseen : APP_DATA.tweets.map(tweet => tweet._id)
};


const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case actionTypes.GET_TWEETS:
            return {
                ...state,
                tweets : APP_DATA.tweets
            };
            break;
        case actionTypes.GET_CAMPAIGNS:
            return {
                ...state,
                campaigns : APP_DATA.campaigns
            };
            break;
        case actionTypes.GET_USER:
            return {
                ...state,
                user: APP_DATA.user
            };
            break;
        case actionTypes.MARK_TWEET:
            const unseen = state.unseen.filter(id=>id!=action.payload);
           return {
               ...state,
               unseen
           };
            break;
        default:
            return state;
    }
};

export default dataReducer;