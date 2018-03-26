import React, {Component} from 'react';
import {Bootstrap, Grid, Row, Col, Nav, NavItem} from 'react-bootstrap';
import Element_p from './Element_p.jsx';
import Element_label from './Element_label.jsx';
import Element_img from './Element_img.jsx';
import Element_h4 from './Element_h4.jsx';
import Element_a from './Element_a.jsx';

class Component_property_card extends Component {
  render() {
    return (
    	<div className="property-card">
    		<Element_img id={this.props.data.Element_img}/>
    		<Element_label text={this.props.data.Element_label} className="sub-heading graphite-grey"/>
    		<Element_h4 text={this.props.data.Element_h4} className="headline-2"/>
    		<Element_p text={this.props.data.Element_p} className="body-1" />
    		<Element_a text={this.props.data.Element_a} className="dark-costal-blue body-1"/>
    	</div>
    );
  }
}

export default Component_property_card;
