import { Component } from 'react';
import css from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {};
  render() {
    return (
      <div className={css.colorPicker}>
        <h2 className={css.colorPicker_title}>Color Picker</h2>
        <div>
          {this.props.options.map(({ label, color }) => {
            return (
              <button
                key={label}
                className={css.colorPicker_option}
                style={{ backgroundColor: color }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
