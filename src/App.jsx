import React, {Component} from 'react';
import {Bootstrap, Grid, Row, Col, Nav, NavItem, MenuItem, Tab} from 'react-bootstrap';
import Dictionary from './dictionary.jsx';
import Element_p from './components/Element_p.jsx';
import Element_a from './components/Element_a.jsx';
import Element_h4 from './components/Element_h4.jsx';
import Element_label from './components/Element_label.jsx';
import Element_img from './components/Element_img.jsx';
import Component_property_card from './components/Component_property_card.jsx';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import style from 'react-syntax-highlighter/styles/prism/pojoaque.js';


function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
  console.log(Dictionary)
}

let component_property_card = `<Component_property_card data={Dictionary.Component_property_card[0]} top={1} />`;
let element_a = `<Element_a text={Dictionary.Element_a} top={1} />`;
let element_p = `<Element_p text={Dictionary.Element_p} top={1} />`;
let element_label = `<Element_label text={Dictionary.Element_label} top={1} />`;
let element_h4 = `<Element_h4 text={Dictionary.Element_h4} top={1} />`;


class App extends Component {
  render() {
    return (
    	<Grid>
    	  <Tab.Container id="left-tabs-example" defaultActiveKey="element_img">
	        <Row className="show-grid">
			    <Col xs={12} md={3} lg={3} className="left-nav" >
			      	<h4>Elements</h4>
   			        <Nav bsStyle="pills" stacked>
				        <NavItem eventKey="element_img">Images</NavItem>
				        <NavItem eventKey="element_typography">Typography</NavItem>
				       	<NavItem  disabled />
			        </Nav>
			        <h4>Components</h4>
			        <Nav bsStyle="pills" stacked>
			        	<NavItem eventKey="component_property_card">Component Property Card</NavItem>
			      	</Nav>
			    </Col>
			    <Col xs={12} md={9} lg={9} className="main">	
			      <Tab.Content animation>
			        <Tab.Pane eventKey="element_img">
			        	<h1>Default Images</h1>
			        	<Row className="show-grid" md={12}>
			      		<Element_img id={2}  top={1} />  
			      		</Row>
			      		<Row className="show-grid" md={12}>
			        	   <SyntaxHighlighter language="jsx">
			                {component_property_card}
			                </SyntaxHighlighter>
				        </Row>
			        </Tab.Pane>
			        <Tab.Pane eventKey="element_typography">
			        	<h1>Default Paragraph</h1>
	 			        <Element_p text={Dictionary.Element_p} top={1} />
	 			        <SyntaxHighlighter language="jsx">
			               		 {element_p}
			            </SyntaxHighlighter>
			        	<h1>Default A</h1>
						<Element_a text={Dictionary.Element_a} top={1} />
						<SyntaxHighlighter language="jsx">
			               		 {element_a}
			            </SyntaxHighlighter>
			        	<h1>Default Label</h1>
						<Element_label text={Dictionary.Element_label} top={1} />
						<SyntaxHighlighter language="jsx">
			               		 {element_label}
			            </SyntaxHighlighter>			        
			        	<h1>Default H4</h1>
						<Element_h4 text={Dictionary.Element_h4} top={1} />
						<SyntaxHighlighter language="jsx">
			               		 {element_h4}
			            </SyntaxHighlighter>
			        </Tab.Pane>
			        <Tab.Pane eventKey="component_property_card">
			        	<h1>Property Card</h1>
			        	<Row className="show-grid" md={12}>			        	
			        	   <Col md={12}>
			        	   	<Row className="show-grid" md={12}>
					        	<Component_property_card data={Dictionary.Component_property_card[0]} top={1} />					    
					        	<Component_property_card data={Dictionary.Component_property_card[1]} top={1} />
				        	</Row>
				        	<Row className="show-grid" md={12}>
					        	<Component_property_card data={Dictionary.Component_property_card[2]} top={1} />
					        	<Component_property_card data={Dictionary.Component_property_card[0]} top={1} />
				        	</Row>
				           </Col>
				        </Row>
				        <h3>Code</h3>
			        	<Row className="show-grid" md={12}>
			        	    <SyntaxHighlighter language="jsx">
			               		 {component_property_card}
			                </SyntaxHighlighter>
				        </Row>

			        </Tab.Pane>
			      </Tab.Content>			    
			    </Col>
			</Row>
		  </Tab.Container>	
  	    </Grid>
    );
  }
}
export default App;
