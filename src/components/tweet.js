import React, { Component } from 'react';

class Tweet extends Component {
    render(){
        const tweet = this.props.tweet;
        return(
            <span>
                {tweet.content}
            </span>
        );
    }
}

export default Tweet;