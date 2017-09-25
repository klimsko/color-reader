import React, { Component } from 'react';
import { colorConverter } from './colorConverter';
import Input from './input';
import ColorValues from './colorValues';
import RgbSlider from './rgbSlider';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      rgb: '',
      hsl: '',
      hex: '',
      name: '',
      red: 0,
      green: 0,
      blue: 0,
      valid: true
    }
  }

  componentDidMount() {
    const value = 'rgb(0, 191, 255)';
    this.changeState(value);
  }

  changeState(value) {
    const color = new colorConverter(value);
    const colorValues = {
      rgb: color.toRgbString(),
      hsl: color.toHslString(),
      hex: color.toHexString(),
      name: color.toName(),
      red: color.red,
      green: color.green,
      blue: color.blue,
      valid: color.valid
    }
    const {valid, hex} = colorValues;

    if (valid) {
      this.changeBcgColor(value, hex);
      this.setState({ value, ...colorValues })
    } else { this.setState({ value, valid }) }
  }

  changeBcgColor(value, hex) {
    if (value !== '') {
      document.body.style.backgroundColor = hex;
    }
  }

  onChangeInput(e) {
    const value = e.currentTarget.value;
    this.changeState(value);  
  }

  handleSlider(name, event, val) {
    this.setState({
      [name] : val
    },
      () => {
        const {red, green, blue} = this.state;
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        this.changeState(rgbColor);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Input
          onChangeInput={this.onChangeInput.bind(this)} 
          value={this.state.value}
          valid={this.state.valid}
        />
        <RgbSlider 
          red={this.state.red}
          green={this.state.green}
          blue={this.state.blue}
          handleSlider={this.handleSlider.bind(this)}
        />
        <ColorValues color={this.state} />
      </div>
    );
  }
}

export default Main;
