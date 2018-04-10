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
    </div>
  );
}

export default Root;