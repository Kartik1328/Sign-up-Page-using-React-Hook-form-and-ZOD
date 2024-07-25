import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

//this we have taken as the typescript structure for the zod validation schema........

export default function SignUp() {
  const schema: ZodType<FormData> = z
    .object({
      fullName: z.string().min(2).max(50),
      email: z.string().email(),
      password: z.string().min(6).max(20),
      confirmPassword: z.string().min(6).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });

  //Now we have to transform this zod scehma structure to  typescript structure.SO FOR that!!!
  //And we have to pass our FormData to the ZodType...

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  //this is how the ZOD will connect with the react hook form

  const [passwordVisible, setPasswordVisible] = useState(true);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const submitData = (data: FormData) => {
    console.log('Successfull', data);
  };

  return (
    <div className="">
      <div className="w-[850px] h-[585px] bg-white ml-[250px] mt-1 shadow-lg border border-gray-300 rounded-lg mb-4">
        <form onSubmit={handleSubmit(submitData)} className="grid grid-cols-8">
          {/* <h2 className="text-2xl font-bold mb-6">Example Form</h2> */}

          <div className="col-span-4 mt-5 ml-4 bg-gray-200 rounded-md h-[540px]">
            <img
              className="h-[445px] rounded-md w-[450px] mt-10"
              src="sign up.png"
              alt="illustration"
            />
          </div>

          <div className="col-span-4 ml-4">
            <img
              className="w-[75px] ml-6 -mt-2 "
              src="CMS Logo.png"
              alt="CMS logo"
            />

            <h1 className="text-xl text-red-700 font-semibold ml-7">
              Get Started
            </h1>

            <h2 className=" font-thin text-gray-500 underline mt-2 text-sm ml-7 transition-transform duration-300 ease-in-out transform hover:translate-x-2 hover:scale-110">
              Create your account now!
            </h2>

            <div className="-mt-3">
              <div className="space-y-1 ml-7 mt-8">
                <h3 className="text-sm">Full Name*</h3>
                <input
                  className="w-80 rounded-md border-[1px] h-9 pl-1 bg-gray-50  placeholder-gray-500 placeholder:py-1 pb-1 placeholder:text-sm border-0.5 focus:outline-0.5 focus:outline-gray-500"
                  placeholder="enter your name"
                  id=""
                  type="text"
                  {...register('fullName')}
                />
                {errors.fullName && (
                  <p className="text-red-700 text-xs">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="space-y-1 ml-7 mt-6">
                <h3 className="text-sm">Email*</h3>
                <input
                  className="w-80 rounded-md border-[1px] h-9 pl-1 bg-gray-50  placeholder-gray-500 placeholder:py-1 pb-1 placeholder:text-sm border-0.5 focus:outline-0.5 focus:outline-gray-500"
                  placeholder="enter your email"
                  id=""
                  type="email"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-red-700 text-xs">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-1 ml-7 mt-6">
                <h3 className="text-sm">Password*</h3>
                <input
                  className="w-80 rounded-md border-[1px] h-9 pl-1 bg-gray-50  placeholder-gray-500 placeholder:py-1 pb-1 placeholder:text-sm border-0.5 focus:outline-0.5 focus:outline-gray-500"
                  placeholder="create your password"
                  id=""
                  type={passwordVisible ? 'password' : 'text'}
                  {...register('password')}
                />

                <button
                  type="button"
                  className="-ml-8"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <FaEye className="text-gray-400 mt-[10px]  cursor-pointer ml-1" />
                  ) : (
                    <FaEyeSlash className="text-gray-400 mt-[10px] cursor-pointer ml-1" />
                  )}
                </button>
                {errors.password && (
                  <p className="text-red-700 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="space-y-1 ml-7 mt-6">
                <h3 className="text-sm">Confirm Password*</h3>
                <input
                  className="w-80 rounded-md border-[1px] h-9 pl-1 bg-gray-50  placeholder-gray-500 placeholder:py-1 pb-1 placeholder:text-sm border-0.5 focus:outline-0.5 focus:outline-gray-500"
                  placeholder="*********"
                  id=""
                  type={passwordVisible ? 'password' : 'text'}
                  {...register('confirmPassword')}
                />

                <button
                  type="button"
                  className="-ml-8"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <FaEye className="text-gray-400 mt-[10px]  cursor-pointer ml-1" />
                  ) : (
                    <FaEyeSlash className="text-gray-400 mt-[10px] cursor-pointer ml-1" />
                  )}
                </button>
              </div>
            </div>

            <button className=" bg-red-700 text-white w-80 h-10 rounded-md hover:bg-gray-600 mt-6 font-medium text-lg ml-7">
              Sign Up
            </button>

            <p className="text-xs text-center mt-[14px] cursor-pointer hover:text-red-600">
              Already have an account?{' '}
              <span className="text-red-700">Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
