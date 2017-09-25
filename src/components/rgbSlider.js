import React from 'react';
import Slider from 'material-ui/Slider';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';

const RgbSlider = (props) => {
	const styles = {
    sliderStyle: {
    	width: '90%',
    	margin: 0,
    	display: 'inline-block',
    	verticalAlign: 'text-top'
    },
    name: {
    	textAlign: 'left',
    	width: '10%',
    	fontWeight: 500,
    	display: 'inline-block'
    }
	}

	return (
		<div>
			<Paper className="paperStyle" zDepth={1} rounded={false} >
		    <div className="sliderContainer">
			    <div style={styles.name}>R</div>
			    <Slider
			    	className="redSlider"
			    	style={styles.sliderStyle}
			    	sliderStyle={{'margin': 0}}
			    	min={0}
		        max={255}
		        step={1}
		        value={props.red}
		        onChange={props.handleSlider.bind(this, 'red')}
			    />
		    </div>
		    <div className="sliderContainer">
			    <div style={styles.name}>G</div>
			    <Slider
			    	className="greenSlider"
			    	style={styles.sliderStyle}
			    	sliderStyle={{'margin': 0}}
						min={0}
		        max={255}
		        step={1}
		        value={props.green}
		        onChange={props.handleSlider.bind(this, 'green')}
			    />
		    </div>
		    <div className="sliderContainer">
			    <div style={styles.name}>B</div>
			    <Slider
			    	className="blueSlider"
			    	style={styles.sliderStyle}
			    	sliderStyle={{'margin': 0}}
			    	min={0}
		        max={255}
		        step={1}
		        value={props.blue}
		        onChange={props.handleSlider.bind(this, 'blue')}
			    />
		    </div>
	    </Paper>
	  </div>
	)
};

RgbSlider.propTypes = {
	red: PropTypes.number.isRequired,
	green: PropTypes.number.isRequired,
	blue: PropTypes.number.isRequired,
	handleSlider: PropTypes.func.isRequired
}

export default RgbSlider;