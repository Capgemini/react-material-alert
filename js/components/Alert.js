'use strict';

import React from 'react';
import assign from 'lodash.assign';
import Natures from './Natures';
var cssify = require('cssify')

cssify.byUrl('../../css/main.css');

var alertStyle = {
    margin: 5 + 'px',
    position: 'relative',
    minHeight: 50 + 'px',
    display: 'flex',
    justifyContent: 'center', /* align horizontal */
    alignItems: 'center', /* align vertical */
    fontFamily: 'roboto'
};

var alertWarning = assign({}, alertStyle, {backgroundColor: '#FDD835'});
var alertFailure = assign({}, alertStyle, {backgroundColor: '#F44336'});
var alertInfo = assign({}, alertStyle, {backgroundColor: '#BBDEFB'});
var alertSuccess = assign({}, alertStyle, {backgroundColor: '#69F0AE'});


var alertCloseButton = {
    position: 'absolute',
    right: 0 + 'px',
    top: 0 + 'px'
};

export default class Alert extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.dismissAlert = this.dismissAlert.bind(this);
        this.state = {sShow: true};
    }
    
    dismissAlert() {
        this.setState({sShow: false});
    }
    
    render() {
        
        if(this.state.sShow === false) {
            return <div></div>;
        }
        var alertType;
        switch(this.props.alert.nature) {
            case Natures.WARNING:
                    alertType = alertWarning;
                break;
                case Natures.FAILURE:
                    alertType = alertFailure;
                break;
                case Natures.SUCCESS:
                    alertType = alertSuccess;
                break;
                case Natures.INFO:
                    alertType = alertInfo;
                break;
        }
        if(alertType !== undefined) {
            return (
                    <div style={alertType} role="alert" id={this.props.id}>      
                    <span dangerouslySetInnerHTML={{__html: this.props.alert.content}}></span> 
                <div style={alertCloseButton} ><img onClick={this.dismissAlert} src="../../images/ic_close_18px.svg"></img>
                </div>
                    </div>
                );
        }
        
        return null;
    }
}