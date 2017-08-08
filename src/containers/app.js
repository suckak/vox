import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Feed from './feed';
import Menu from './menu';
import Start from '../components/start';
import { appSections } from '../utils/constants';
import {selectTweet,setTitle} from "../actions/index";
import burger from '../../public/assets/icon_burguer.png';
import back from '../../public/assets/icon_back.png';

class App extends Component {

    constructor(){
        super();
        this.state ={
            showMenu : false
        }
    }

    headerAction(){
        if(this.props.selectedTweet === null){
            return (
                <div className="icon_holder" onClick={this.toggleMenu.bind(this)}>
                    <img src={burger} alt=""/>
                </div>
            );
        } else{
            return (
                <div className="icon_holder" onClick={this.back.bind(this)}>
                    <img src={back} alt=""/> <span>BACK</span>
                </div>
            );
        }
    }

    renderSection(){
        return this.props.section.id === appSections.start.id ? <Start/> : <Feed/>;
    }

    showMenu(){
        return this.state.showMenu ? 'active' : '';
    }

    moveSection(){
        return this.state.showMenu ? 'move' : '';
    }

    toggleMenu(){
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    back(){
        this.props.setTitle(appSections.feed.name);
        this.props.selectTweet(null);
    }

    render() {
        if(this.props.section){
            return (
                <div className="app container-fluid">
                    <div className={ `sidebar ${this.showMenu()}` }>
                        <Menu toggleMenu={this.toggleMenu.bind(this)} />
                    </div>
                    <div className={ `section ${this.moveSection()}` }>
                        <header className="mobile">
                            <h1>{this.props.title}</h1>
                            {this.headerAction()}
                        </header>
                        {this.renderSection()}
                    </div>
                </div>
            );
        }else{
            return (<div>Loading</div>);
        }

    }
}

function mapStateToProps(state){
    return {
        section:state.flow.section,
        selectedTweet : state.flow.selectedTweet,
        title: state.flow.title
    };
}

function mapDispatchToProps(dispach){
    return {
        selectTweet : bindActionCreators(selectTweet,dispach),
        setTitle : bindActionCreators(setTitle,dispach)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);