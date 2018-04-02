import React, { PureComponent } from 'react';
import './Footer.css';

export default class Footer extends PureComponent {

  render() {
    return (
      <footer>
        <div className='footer__logo'>
          <div className='logo'>
            <p>raknjarasoa </p>
          </div>
        </div>
        <p className='copyright'>© 2018 Made with love
            <strong className='pulse'>❤</strong>
          <span> by </span>
          <a href='https://github.com/raknjarasoa' target='_blank' rel='noopener noreferrer'>
            <strong>raknjarasoa</strong>
          </a>
          <span> | All Rights Reserved </span>
        </p>
      </footer>
    );
  }
}
