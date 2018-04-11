import React from 'react';
import stylesUtils from './styles/utils.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(stylesUtils);

const Root = ({}) => {
  return (
    <div>
      <div className="test-font-color">Shawn`s Demo React</div>
      <button className={cx('test-font-color')}>Test Button</button><br/>
      <div className={cx('test-btn')}>Test Div</div>
      <a className={cx('test-a-tag')}>Test A Tag</a>
      <div className="test-border">Test border radius</div><br/>
      <div className="test-media-div">Test Media div</div><br/>
      <div className="test-extend-div">Test Extend div</div><br/>
      <input className="test-input" type="text" placeholder="Test Input"/><br/>
      <div className="test-function-div">Test Function div</div><br/>
    </div>
  );
}

export default Root;