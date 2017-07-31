import React, { Component } from 'react';
import { connect } from 'react-redux'

import Feed from './feed';
import Menu from './menu';
import Start from '../components/start';
import { appSections } from '../utils/constants';

class App extends Component {

    renderSection(){
        return this.props.section === appSections.start ? <Start/> : <Feed/>;
    }


    render() {
        return (
            <div className="app">
                <Menu/>
                <div className="section">
                    {this.renderSection()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {section:state.flow.section};
}

export default connect(mapStateToProps)(App);