import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getTweets,selectTweet,markTweet } from "../actions/index";
import Tweet from './tweet';
import TweetDetail from '../components/tweetDetail';

class Feed extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchTerm : '',
            tweets : props.tweets
        }

    }

    componentDidMount(){
        this.props.getTweets();
    }

    componentWillReceiveProps(props){
        this.setState({tweets:props.tweets});
    }

    onClickTweet(tweet){
        this.props.markTweet(tweet._id);
        this.props.selectTweet(tweet);
    }

    renderTweets(){
        const tweets = this.state.tweets;
        if(tweets) {
            return  tweets.map((tweet, index) =>{
                return (
                    <li className="tweet__holder" key={index} onClick={this.onClickTweet.bind(this,tweet)}>
                        <Tweet tweet={tweet}/>
                    </li>
                );
            });
        }
    }

    renderDetail(){
        const selectedTweet = this.props.selectedTweet;
        const campaigns = this.props.campaigns;
        if(selectedTweet&&campaigns){
            const campaign = campaigns[selectedTweet.campaignId];
            return (
                <div className="tweetDetail">
                    <TweetDetail tweet={selectedTweet} campaign={campaign}/>
                </div>
            );
        }
    }

    filterTweets(event){
        if(event.target.value){
            this.setState({searchTerm : event.target.value});
            this.setState({tweets:this.props.tweets.filter(
                tweet => tweet.content.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            )});
        }else{
            this.setState({searchTerm : ''});
            this.setState({tweets:this.props.tweets});
        }

    }

    render() {
        return (
            <div className="feed">
                <div className="timeline">
                    <input type="text" value={this.state.searchTerm}
                           placeholder="Buscar..."
                           className="searchbar"
                           onChange={this.filterTweets.bind(this)}/>
                    <ul className="">
                        {this.renderTweets()}
                    </ul>
                </div>
                {this.renderDetail()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        tweets : state.appData.tweets,
        campaigns : state.appData.campaigns,
        selectedTweet : state.flow.selectedTweet
    };
}

function mapDispatchToProps(dispatch){
    return {
        getTweets : bindActionCreators(getTweets,dispatch),
        selectTweet : bindActionCreators(selectTweet,dispatch),
        markTweet : bindActionCreators(markTweet,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Feed);