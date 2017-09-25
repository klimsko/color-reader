import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { grey800, blue500 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

const Input = (props) => {
	const styles = {
	  floatingLabelStyle: {
	    color: grey800
	  },
	  floatingLabelFocusStyle: {
	    color: blue500
	  },
	  paperStyle: {
      height: 'auto',
      minHeight: 100,
      width: '100%',
      maxWidth: 360,
      textAlign: 'center',
      display: 'block',
      padding: '0 20px',
      margin: '0 auto'
    }
	};
	return (
		<Paper style={styles.paperStyle} zDepth={1} rounded={false} >
			<TextField
				onChange={props.onChangeInput}
				value={props.value}
	      hintText="Hint Text"
	      errorText={props.valid ? '' : 'Not a legal color value'}
	      floatingLabelText="Enter color name or hex, rgb, hsl"
	      floatingLabelStyle={styles.floatingLabelStyle}
	      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
	    />
    </Paper>
	)
};

Input.propTypes = {
	onChangeInput: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	valid: PropTypes.bool.isRequired
}

export default Input;