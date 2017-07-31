import React, { Component } from 'react';
import {BarChart, Bar} from 'recharts';


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
        console.log(tweet);
        return(
            <div>
                {this.barChart(tweet)}
            </div>
        );
    }
}

export default TweetDetail;