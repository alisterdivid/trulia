import React, {Component} from 'react';
import {Bootstrap, Grid, Row, Col, Nav, NavItem} from 'react-bootstrap';

function getText(text){
	return text;
}

class Element_label extends Component {
  render() {
    return (
    	<label className={this.props.className}>{getText(this.props.text)}</label>
    );
  }
}
export default Element_label;
