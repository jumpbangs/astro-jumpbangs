import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    message: yup.string().required('Message cannot be empty'),
  })
  .required();

interface FormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Use the correct schema
  });
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  // eslint-disable-next-line unused-imports/no-unused-vars
  const onSubmit = (data: FormInput) => {
    setHasSubmitted(true);
    // console.log(data);
  };

  return (
    <div className="grid place-items-center text-center text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        {/* Name */}
        <label className="form-control w-full max-w-xs justify-self-center">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                id="name"
                className="input input-bordered w-72 border-amber-400 text-xl lg:w-96"
                placeholder="Name"
                {...field}
              />
            )}
          />
          {errors.name && (
            <div className="label">
              <span className="label-text-alt text-red-500">{errors.name.message}</span>
            </div>
          )}
        </label>

        {/* Email */}
        <label className="form-control w-full max-w-xs justify-self-center">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                className="input input-bordered w-72 border-amber-400 text-xl lg:w-96"
                placeholder="Email"
                id="email"
                {...field}
              />
            )}
          />
          {errors.email && (
            <div className="label">
              <span className="label-text-alt text-red-500">{errors.email.message}</span>
            </div>
          )}
        </label>

        {/* Message */}
        <div className="w-full max-w-xs justify-self-center">
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <textarea
                className="textarea textarea-bordered textarea-lg w-72 border-amber-400 text-xl lg:w-96"
                placeholder="Message"
                {...field}
              />
            )}
          />
          {errors.message && (
            <div className="label">
              <span className="label-text-alt text-red-500">{errors.message.message}</span>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-8 justify-self-end">
          <button type="submit" className="btn border border-amber-400 text-xl text-white">
            {hasSubmitted ? `Thank you` : `Submit`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
