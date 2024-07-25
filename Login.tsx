import { useState } from 'react';
import { CiLogin } from 'react-icons/ci';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(true);
  //state variable for password visibility

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate();
  const handleNavigateToAdmin = () => {
    navigate('/admin');
  };

  return (
    <>
      <div className="">
        <div className="">
          <div className="w-[900px] h-[530px] ml-56 mt-10 pt-12 shadow-lg border border-gray-300 rounded-lg bg-violet-100">
            <div className="grid grid-cols-8">
              {/* Here I have divided the grid into 2 equal parts of 4 cols each */}

              <div className="col-span-4">
                <img
                  className="w-28 ml-12 -mt-6"
                  src="CMS Logo.png"
                  alt="CMS logo"
                />

                <div className="flex space-x-1">
                  <h2 className="text-gray-500 text-xl ml-14 mt-2 font-semibold">
                    Login
                  </h2>
                  <CiLogin className="text-xl text-gray-800 mt-3" />
                </div>

                {/* here i am adding a transition effect on hover on the "Welcome back to CMS!" text */}
                <h1 className="text-2xl ml-14 mt-3 text-red-700 transition-transform duration-500 ease-in-out transform hover:translate-x-2 hover:scale-110">
                  Welcome back to CMS!
                </h1>

                <div className="ml-14 mt-5">
                  <div className="space-y-1 mb-5">
                    <h3 className="text-sm">Email*</h3>
                    <input
                      className="w-80 rounded-md h-9 pl-1 placeholder-gray-500 placeholder:py-1 pb-1 placeholder:text-sm border-0.5 focus:outline-0.5 focus:outline-gray-500"
                      placeholder="enter your email"
                      name=""
                      id="1"
                      type="email"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm">Password*</h3>
                    <input
                      className=" w-80 rounded-md h-9 pl-1 placeholder-gray-500  placeholder:py-1 pb-1 placeholder:text-sm border-0.5 focus:outline-0.5 focus:outline-gray-500"
                      placeholder="enter your password"
                      name=""
                      id="2"
                      type={passwordVisible ? 'password' : 'text'}
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

                  <p className="text-sm ml-[220px] mt-[10px] cursor-pointer hover:text-red-600">
                    Forgot Password?
                  </p>

                  <Link to={'/app'}>
                    <button className=" bg-blue-700 text-white w-80 h-10 rounded-md hover:bg-gray-600 mt-6 font-medium text-lg">
                      Login
                    </button>
                  </Link>
                </div>
              </div>

              {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

              <div className="col-span-4">
                <img
                  className="h-[528px] -mt-12 size-fit rounded-r-lg w-[500px]"
                  src="form Image.jpg"
                  alt="illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// import React from 'react';
// import { HiOutlineDocumentChartBar } from 'react-icons/hi2';
// import { Link } from 'react-router-dom';

// export default function Login() {
//   return (
//     <div className=" flex items-center justify-center">
//       <strong>Login</strong>
//       <Link to={'/app'} className="flex items-center gap-2 mr-1 ">
//         <HiOutlineDocumentChartBar /> Go to Dashboard
//       </Link>
//     </div>
//   );
// }
