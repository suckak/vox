import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {BarChart, Bar, Tooltip} from 'recharts';

import {setTitle} from "../actions/index";
import {getAssetsURL} from "../utils/utils";
import Counter  from "../components/counter";

class TweetDetail extends Component {

    constructor(){
        super();
        this.state = {
            showed : false
        };
    }

    triggerAnimation(){
        setTimeout(()=>{
            this.setState({showed:true});
        },250);
    }

    showed(){
        return this.state.showed ? 'showed' : '';
    }

    barChart(tweet){
        const clicks = tweet.results.clicks;
        const data = [
            {payed: clicks.payed, unique: clicks.unique, total:clicks.total},
        ];

         return (
             <div className="barchart">
                 <BarChart width={55} height={300} data={data}
                           margin={{top: 0, right: 0, left: 30, bottom: 20}}>
                     <Bar dataKey="unique" stackId="a" fill="#0C6972" class="chart__top" />
                     <Bar dataKey="payed" stackId="a" fill="#148C98" class="chart__middle" />
                     <Bar dataKey="total" stackId="a" fill="#1CAFBE" class="chart__bottom" />
                 </BarChart>

                 <span className={`data__top ${this.showed()}`}> <Counter value={clicks.total}/> clicks totales (<a href="#">?</a>)</span>

                 <span className={`data__middle ${this.showed()}`}> <Counter value={clicks.unique}/> clicks únicos (<a href="#">?</a>)</span>
                 <span className={`data__bottom ${this.showed()}`}> <Counter value={clicks.payed}/> clicks pagados (<a href="#">?</a>)</span>

             </div>
         );
    }

    componentDidMount(){
        this.props.setTitle(this.props.campaign.brand);
        this.triggerAnimation();
    }


    render(){
        const tweet = this.props.tweet;
        const campaign = this.props.campaign;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-left">
                        <img className="detail__brand" src={getAssetsURL(campaign.image)} alt=""/>
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

function mapDispatchToProps(dispatch){
    return {
        setTitle : bindActionCreators(setTitle,dispatch)
    };
}

export default connect(null,mapDispatchToProps)(TweetDetail);