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
             <BarChart width={55} height={300} data={data}
                       margin={{top: 0, right: 0, left: 30, bottom: 20}}>
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
                    <div className="col-md-12 text-left">
                        <img className="detail__brand" src={brand} alt=""/>
                        <p className="detail__name">{campaign.brand} <br/> <span className="detail__group">{campaign.groupAd}</span> </p>
                    </div>
                </div>
                <span className="divider">CANTIDAD Y TIPOS DE CLICK</span>
                <div className="row chart__holder">
                  <div className="col-xs-12">
                      {this.barChart(tweet)}
                  </div>
                </div>
                <span className="divider">IMPACTO VIRAL</span>
            </div>
        );
    }
}

export default TweetDetail;