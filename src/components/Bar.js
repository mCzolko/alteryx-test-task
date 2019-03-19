import React from 'react';
import styles from './Bar.css';


export default ({ children }) => (
  <div className="Bar">
    {children}
  </div>
);

export const BarButton = (props) => (
  <a {...props} className="BarButton">{props.children}</a>
);
