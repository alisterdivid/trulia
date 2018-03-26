import React, {Component} from 'react';
import {Bootstrap, Grid, Row, Col, Nav, NavItem} from 'react-bootstrap';

const images = ["/assets/images/example-property-1.jpg", "/assets/images/example-property-2.jpg","/assets/images/example-property-3.jpg"]

function getImageSrc(id){
	return (id ? images[id] : images[0]);
}

function isVisible(isVisible){
	if(!isVisible){
		return 'hide';
	}
}	

class Element_img extends Component {
  render() {
    return (
    	<div>    	
    	<img width="300" src={getImageSrc(this.props.id)}/>
    	</div>
    );
  }
}
export default Element_img;
