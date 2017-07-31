import React, { Component } from 'react';
import {BarChart, Bar} from 'recharts';

import brand from '../../public/assets/logo.png';

class TweetDetail extends Component {

    barChart(tweet){
        const clicks = tweet.results.clicks;
        const data = [
            {payed: clicks.payed, unique: clicks.unique, total:clicks.total},
        ];

         return (
             <BarChart width={70} height={150} data={data}
                       margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                 <Bar dataKey="unique" stackId="a" fill="#0C6972" />
                 <Bar dataKey="payed" stackId="a" fill="#148C98" />
                 <Bar dataKey="total" stackId="a" fill="#1CAFBE" />
             </BarChart>
         );
    }

    render(){
        const tweet = this.props.tweet;
        const campaign = this.props.campaign;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-2">
                        <img src={brand} alt=""/>
                    </div>
                    <div className="col-xs-10">
                        <p >{campaign.brand}</p>
                        <p>{campaign.groupAd}</p>
                    </div>
                </div>
                <div className="row chart__holder">
                  <div className="col-xs-12">
                      {this.barChart(tweet)}
                  </div>
                </div>
            </div>
        );
    }
}

export default TweetDetail;