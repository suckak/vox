import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import logo from '../../public/assets/logo_vf.png';
import start from '../../public/assets/inicio_icon.png';
import User from './user';
import { changeSection } from "../actions/index";
import { appSections } from "../utils/constants";

class Menu extends Component {

    changeSection(val){
        this.props.changeSection(val);
    }

    isSelected(section){
        return section === this.props.section ? 'selected option' : 'option';
    }

    render(){

        return(
            <nav className="nav menu">
                <ul>
                    <li>
                        <img className="vxf_logo" src={logo} alt=""/>
                    </li>
                    <li className={this.isSelected(appSections.start)}
                        onClick={this.changeSection.bind(this,appSections.start)}>
                        <img className="menu__img" src={start} alt=""/>
                        <span className="menu__text">INICIO</span>
                    </li>
                    <li className={this.isSelected(appSections.feed)}
                        onClick={this.changeSection.bind(this,appSections.feed)}>
                        <User/>
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state){
    return {section:state.flow.section};
}

function mapDispatchToProps(dispatch){
    return { changeSection : bindActionCreators(changeSection,dispatch) };
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);