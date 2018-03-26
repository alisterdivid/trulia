import React, {Component} from 'react';
import {Bootstrap, Grid, Row, Col, Nav, NavItem, Well} from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import style from 'react-syntax-highlighter/styles/prism/pojoaque.js';


function getText(text){
	return text;
}

function isVisible(isVisible){
	if(!isVisible){
		return 'hide';
	}
}	


class Element_h4 extends Component {
  render() {
    return (
    	<div>
    	<h4 className={this.props.className}>{getText(this.props.text)}</h4>
    	</div>
    );
  }
}
export default Element_h4;
