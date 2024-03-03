/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';

import Field from '../common/Field';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      <Field label="Email">
        <input
          {...register('email', { required: 'Eamil ID is Required' })}
          type="email"
          name="email"
          id="email"
          className={` auth-input ${
            errors.email ? 'border-red-500' : 'boreder-gray-200'
          } `}
        />
      </Field>

      <Field label="Password">
        <input
          {...register('password', { required: 'Eamil ID is Required' })}
          name="password"
          type="password"
          id="password"
          className={` auth-input ${
            errors.email ? 'border-red-500' : 'boreder-gray-200'
          } `}
        />
      </Field>

      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  );
}
export default LoginForm;

const demo = () => {
  {
    /* <!-- email --> */
  }
  <div className="form-control">
    <label className="auth-label" htmlFor="email">
      Email
    </label>
    <input className="auth-input" name="email" type="email" id="email" />
  </div>;
  {
    /* <!-- password --> */
  }
  <div className="form-control">
    <label className="auth-label" htmlFor="email">
      Password
    </label>
    <input
      className="auth-input"
      name="password"
      type="password"
      id="password"
    />
  </div>;
  {
    /* <!-- Submit --> */
  }
  <button
    className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
    type="submit"
  >
    Login
  </button>;
};
