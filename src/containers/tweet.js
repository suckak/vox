import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Linkify from 'react-linkify';

import {getCampaigns} from "../actions/index";
import {getAssetsURL} from "../utils/utils";

class Tweet extends Component {

    componentDidMount(){
        this.props.getCampaigns();
    }

    isSelected(id){
        if(this.props.selectedTweet===null){
            return 'container tweet';
        }

        return this.props.selectedTweet._id === id ? 'container tweet selected' : 'container tweet';
    }

    isNew(id){
        if(this.props.unseen.indexOf(id)!==-1){
            return (<span className="dot"></span>);
        }
    }

    renderTweetInfo(campaign){
        const tweet = this.props.tweet;
        if(campaign){
            return (<span>{campaign.brand}  &#183;  {campaign.groupAd}  &#183;  {tweet.date}</span>);
        }else{
            return tweet.date;
        }
    }

    renderBrandImage(campaign){
        if(campaign){
            return (<img className="avatar__brand" src={getAssetsURL(campaign.image)} alt=""/>);
        }
    }

    renderImage(tweet){
        if(tweet.image){
            return (
                <div className="tweet_img">
                    <img src={getAssetsURL(tweet.image)} alt=""/>
                </div>
            );
        }
    }

    render(){
        const tweet = this.props.tweet;
        const user = this.props.user;
        const campaigns = this.props.campaigns;

        if(tweet&&user&&campaigns){

            const campaign = campaigns[tweet.campaignId] || null;

            return(
                <div className={this.isSelected(tweet._id)}>
                    <div className="row">
                        <div className="col-xs-1 dot__holder">
                            {this.isNew(tweet._id)}
                        </div>
                        <div className="col-xs-1 avatar__holder">
                            <div className="tweet__avatar">
                                <img className="avatar" src={getAssetsURL(user.avatarUrl)} alt=""/>
                            </div>
                            {this.renderBrandImage(campaign)}
                        </div>
                        <div className="col-xs-10 text-left">
                            <span className="tweet__info">
                                {this.renderTweetInfo(campaign)}
                            </span>
                            <Linkify hashtag="twitter">{tweet.content}</Linkify>
                            {this.renderImage(tweet)}
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <p>Loading</p>
            );
        }
    }
}

function mapStateToProps(state){
    return {
        user: state.appData.user,
        unseen: state.appData.unseen,
        campaigns : state.appData.campaigns,
        selectedTweet : state.flow.selectedTweet
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCampaigns: bindActionCreators(getCampaigns,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Tweet);