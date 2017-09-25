import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';

const ColorValues = (props) => {
	const { rgb, hsl, hex, name } = props.color;
	const styles = {
		name: {
			fontWeight: 500,
			width: '40%',
			display: 'inline-block',
			textAlign: 'left'
		},
		value: {
			width: '60%',
			display: 'inline-block',
			textAlign: 'left'
		}
  };
	
	return (
  	<div>
    	<Paper className="paperStyle" zDepth={1} rounded={false} >
    		<div style={{width: 256, margin: '0 auto'}}>
    			<div style={styles.name}>Name:</div> 
    			<div style={styles.value}>{name !== '' ? name : 'no name'}</div>
    		</div>
    	</Paper>
    	<Paper className="paperStyle" zDepth={1} rounded={false} >
	    	<div style={{width: 256, margin: '0 auto'}}>
	    		<div style={styles.name}>Rgb:</div>
	    		<div style={styles.value}>{rgb}</div>
	    	</div>
    	</Paper>
    	<Paper className="paperStyle" zDepth={1} rounded={false} >
	    	<div style={{width: 256, margin: '0 auto'}}>
	    		<div style={styles.name}>Hex:</div>
	    		<div style={styles.value}>{hex}</div>
	    	</div>
    	</Paper>
    	<Paper className="paperStyle" zDepth={1} rounded={false} >
	    	<div style={{width: 256, margin: '0 auto'}}>
	    		<div style={styles.name}>Hsl:</div>
	    		<div style={styles.value}>{hsl}</div>
	    	</div>
    	</Paper>
  	</div>
  )
};

ColorValues.propTypes = {
	color: PropTypes.object.isRequired
}

export default ColorValues;