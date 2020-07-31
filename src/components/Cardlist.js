import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {
  /*  if(true)  {
    	throw new Error('For demonstrating Error Boundaries concept');
    }  */
    // Error Boundaries Expanation

    return (
    	<div>
    	    {
	    	    robots.map((users, i) => {
	    	       return (	
	       	  			<Card 
			       			key = {users} 
			       			id = {robots[i].id} 
			       			name = {robots[i].name} 
			       			email = {robots[i].email}
		       			/>
		       		);
		       	})
	       	}			
        </div>	
    );
};

export default Cardlist;