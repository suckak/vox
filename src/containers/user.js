import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getUser } from "../actions/index";
import {getAvatarURL} from "../utils/utils";

class User extends Component {

    componentDidMount(){
        this.props.getUser();
    }


    renderUnseen(unseen){
        if(unseen.length>0){
            return <span className="unseen">{unseen.length}</span>;
        }
    }

    render() {
        const user = this.props.user;
        const unseen = this.props.unseen;
        if(user&&unseen!=null){
            return (
                <div className="user">
                    <div className="menu__img">
                        <img className="user__avatar" src={getAvatarURL(user.avatarUrl)} alt=""/>
                    </div>
                    <p className="menu__text">{user.name}</p>
                    {this.renderUnseen(unseen)}
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }
}

function mapStateToProps(state){
    return {
        user : state.appData.user,
        unseen : state.appData.unseen
    };
}

function mapDispatchToProps(dispatch){
    return {
        getUser : bindActionCreators(getUser,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(User);