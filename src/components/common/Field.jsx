/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import React from 'react';

const Field = ({ label, children, htmlFor, error }) => {
  const getChildId = (children) => {
    const child = React.Children.only(children);

    if ('id' in child?.props) {
      return child.props.id;
    }
  };

  const id = htmlFor || getChildId(children);

  return (
    <div className="form-control">
      {label && (
        <label className="auth-label" htmlFor={id}>
          {label}
        </label>
      )}
      {children}

      {error && (
        <div className="text-red-600" role="alert">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Field;
