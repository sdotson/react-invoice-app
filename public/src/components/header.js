import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <div className="page-header">
      <h1>{props.path}</h1>
    </div>
  );
};

export default Header;
