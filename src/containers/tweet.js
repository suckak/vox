import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Linkify from 'react-linkify';
import brandLogo from '../../public/assets/logo.png';

import {getCampaigns} from "../actions/index";
import {getAvatarURL} from "../utils/utils";

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
        if(this.props.unseen.indexOf(id)!=-1){
            return <span className="dot"></span>;
        }
    }

    render(){
        const tweet = this.props.tweet;
        const user = this.props.user;
        const campaigns = this.props.campaigns;

        if(tweet&&user&&campaigns){

            const campaign = campaigns[tweet.campaignId];

            return(
                <div className={this.isSelected(tweet._id)}>
                    <div className="row">
                        <div className="col-xs-1 dot__holder">
                            {this.isNew(tweet._id)}
                        </div>
                        <div className="col-xs-1 avatar__holder">
                            <div className="tweet__avatar">
                                <img className="avatar" src={getAvatarURL(user.avatarUrl)} alt=""/>
                            </div>
                            <img className="avatar__brand" src={brandLogo} alt=""/>
                        </div>
                        <div className="col-xs-10 text-left">
                            <span className="tweet__info">
                                {campaign.brand}  &#183;  {campaign.groupAd}  &#183;  {tweet.date}
                            </span>
                            <Linkify hashtag="twitter">{tweet.content}</Linkify>
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