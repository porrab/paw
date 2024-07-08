import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="flex w-full items-start justify-center gap-2 px-[120px] py-4 relative bg-[#658c4a] ">
        <p className="relative w-fit mt-[-1.00px] font-body-normal-semibold font-[number:var(--body-normal-semibold-font-weight)] text-white text-[length:var(--body-normal-semibold-font-size)] text-center tracking-[var(--body-normal-semibold-letter-spacing)] leading-[var(--body-normal-semibold-line-height)] whitespace-nowrap [font-style:var(--body-normal-semibold-font-style)]">
          Free delivery with minimum purchase of 100 baht.
        </p>
      </div>
      <Link to='/'>
        <div className="LogoBig flex items-start justify-center w-full pt-4">
          <img
            className="echoShop w-[299px] h-[151px] object-cover"
            src="LogoBig.svg"
            alt="Logo"
          />
        </div>
      </Link>
      <div className="flex  justify-center w-full  mt-10">
        <div className="flex flex-col items-center justify-center w-[193px] h-6 mb-8">
          <div className="textLogin font-semibold text-[#555555] font-poppins mt-2">
            Login into your account
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex justify-center items-center gap-2 w-2/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Email/Username"
          />
        </div>

        <div className="flex justify-center items-center gap-2 w-2/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Password"
          />
        </div>
        <div className="text-right mr-100 ">
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 "
          >
            Forgot password?
          </a>
        </div>
        <div className="flex justify-center w-full">
          <button className="btn btn-primary"><p className="text-white">Login</p></button>
        </div>
        <div className="text-center">
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 my-6">
            Don’t have an account yet?{" "}
            <Link to='/register'>
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </a>
            </Link>
          </p>
        </div>
        <Link to='/admin'>
          <div className="flex justify-center w-full">
            <button className="btn btn-primary btn-outline"><p className="text-primary c">Admin</p></button>
          </div></Link>
      </div>
    </>
  );
};
export default Login;