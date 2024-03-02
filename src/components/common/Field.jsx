/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Field = ({ label, childern, htmlFor, error }) => {
  const id = htmlFor || getChilId(childern);

  return (
    <div className="form-control">
      {label && (
        <label className="auth-label" htmlFor={id}>
          {label}
        </label>
      )}
      {childern}

      {error && (
        <div className="text-red-600" role="alert">
          {error.message}
        </div>
      )}
    </div>
  );
};

const getChilId = () => {
  const child = React.Children.only(childern);

  if ('id' in child?.props) {
    return child.props.id;
  }
};

export default Field;
