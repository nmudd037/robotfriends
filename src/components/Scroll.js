import React from 'react';

// CSS: overflow-y  JSX: overflowY 
const Scroll = (props) => {
	return (
	   <div style = {{ overflowY: 'scroll', border: '3px solid black',height: '600px'  }}>
		   {props.children}
		</div>
	);   	
};

export default Scroll;