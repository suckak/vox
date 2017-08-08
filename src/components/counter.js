import React, { Component } from 'react';

export default class Counter extends Component {

    constructor(){
        super();
        this.state = {
            actualValue : 0
        }
    }

    componentDidMount(){
        this.count = setInterval(this.timer.bind(this),10);
    }

    componentWillUnmount(){
        clearInterval(this.count)
    }

    timer(){
        if(this.state.actualValue < this.props.value) {
            this.setState({
                actualValue: (this.state.actualValue + 1)
            });
        } else{
            clearInterval(this.count);
        }
    }

    render() {
        return (
            <b>
                {this.state.actualValue}
            </b>
        );
    }
}
