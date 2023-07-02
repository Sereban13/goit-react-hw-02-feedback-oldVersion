import { Component } from 'react';
import css from './DropDown.module.css';

class DropDown extends Component {
  render() {
    return (
      <div className={css.dropDown}>
        <button type="button" className={css.button}>
          Open
        </button>
        <div className={css.dropDown_menu}></div>
      </div>
    );
  }
}

export default DropDown;
