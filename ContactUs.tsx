// import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaFax } from 'react-icons/fa';

// import { useForm } from 'react-hook-form';

export default function ContactUs() {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data: any) => console.log(data);

  // console.log(watch('example'));
  return (
    <div className="">
      <div className="grid grid-cols-8 ml-2">
        <div className="col-span-4 ml-1 mt-3">
          <h1 className="text-5xl font-bold mt-5 ml-4 text-red-700">
            Contact Us!
          </h1>
          <p className="text-lg ml-5 mt-2 font-light text-gray-500">
            Reach out to us for any inquiries or support.{' '}
            <span className="text-red-700">Thank You.</span>
          </p>

          <div className="flex ml-6 mt-11 cursor-pointer">
            <MdEmail className="text-red-700 text-2xl" />
            <h2 className="text-lg pl-2 text-red-700 font-extralight -mt-[2px]">
              Email
            </h2>
          </div>
          {/* adding one line just down of the title */}
          <h1 className="border-b-[0.5px] border-red-700 ml-6  mt-1 w-[450px]"></h1>
          <p className="office email ml-6 pt-2  font-medium text-gray-700 cursor-pointer hover:text-blue-900">
            admin_cms@cms.com
          </p>

          <div className="flex ml-6 mt-10 cursor-pointer">
            <FaPhoneAlt className="text-red-700 text-xl" />
            <h2 className="text-lg pl-3 -mt-[2px] text-red-700 font-extralight">
              Contact info
            </h2>
          </div>
          <h1 className="border-b-[0.5px] border-red-700 ml-6  mt-1 w-[450px]"></h1>
          <p className="contact info ml-6 pt-2  font-medium text-gray-700 hover:text-blue-900 cursor-pointer">
            (+91) 80 - 49203800
          </p>

          <div className="ml-6 mt-10 flex cursor-pointer">
            <FaFax className="text-red-700 text-xl" />
            <h2 className="text-lg pl-3 -mt-[2px] text-red-700 font-extralight hover:text-blue-900">
              Fax
            </h2>
          </div>
          <h1 className="border-b-[0.5px] border-red-700 ml-6  mt-1 w-[450px]"></h1>
          <p className="fax ml-6 pt-2  font-medium text-gray-700 hover:text-blue-900 cursor-pointer">
            (+91) 80 - 49203800
          </p>

          <div className="flex ml-6 mt-10 cursor-pointer">
            <FaLocationDot className="text-red-700 text-xl" />
            <h2 className="text-lg pl-3 -mt-[2px] text-red-700 font-extralight">
              Address
            </h2>
          </div>
          <h1 className="border-b-[0.5px] border-red-700 ml-6  mt-1 w-[450px]"></h1>
          <p className="address ml-6 pt-2  font-medium text-gray-700 hover:text-blue-900">
            Prestige AL- Kareem No 3, Edward Road Vasanth Nagar
          </p>
          <p className="ml-6 pt-1 text-gray-700 hover:text-blue-900 font-medium">
            Karnataka, Bangalore. Pin : 560052
          </p>
        </div>

        <div className="col-span-4 mt-3">
          <img
            className="w-[85px] ml-[570px] "
            src="CMS Logo.png"
            alt="CMS logo"
          />

          <img className="w-[550px] ml-10 -mt-16" src="contact us.png" alt="" />
        </div>
      </div>
    </div>
  );
}
