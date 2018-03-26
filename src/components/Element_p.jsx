import React, {Component} from 'react';
import {Bootstrap, Grid, Row, Col, Nav, NavItem, Well} from 'react-bootstrap';


function getText(text){
	return text;
}

function isVisible(isVisible){
	if(!isVisible){
		return 'hide';
	}
}	


class Element_p extends Component {
  render() {
    return (
    	<div>
    	<p className={this.props.className}>{getText(this.props.text)}</p>    	
    	</div>
    );
  }
}
export default Element_p;
