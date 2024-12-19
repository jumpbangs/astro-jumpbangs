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

  const onSubmit = (data: FormInput) => {
    setHasSubmitted(true);
    // console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center text-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <label className="form-control w-full max-w-xs">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                id="name"
                className="input input-bordered w-72 lg:w-96"
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
        <label className="form-control mt-4 w-full max-w-xs">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                className="input input-bordered w-72 lg:w-96"
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

        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <textarea
              className="textarea textarea-bordered textarea-lg mt-4 w-full gap-4 lg:w-96"
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

        <div className="mt-8 flex justify-end">
          <button type="submit" className="border-eea-green btn border text-white">
            {hasSubmitted ? `Thank you` : `Submit`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
