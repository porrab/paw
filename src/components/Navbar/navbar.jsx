import { Link } from "react-router-dom";
import Recycle from "../Recycle/Recycle";
const NavigationBar = () => {
  return (
    <>
      <div className="flex w-full items-start justify-center gap-2 px-[120px] py-4 relative bg-[#658c4a] ">
        <p className="relative w-fit mt-[-1.00px] font-body-normal-semibold font-[number:var(--body-normal-semibold-font-weight)] text-white text-[length:var(--body-normal-semibold-font-size)] text-center tracking-[var(--body-normal-semibold-letter-spacing)] leading-[var(--body-normal-semibold-line-height)] whitespace-nowrap [font-style:var(--body-normal-semibold-font-style)]">
          Free delivery with minimum purchase of 100 baht.
        </p>
      </div>
      <div className="navbar bg-base-100 px-16">
        <Link to='/'>
          <img src="/Logo.svg" alt="" />
        </Link>
        <label className="input input-bordered flex items-center gap- justify-center  w-full mx-12">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
        <div className="flex-none content-center">
          <div className="px-1 flex flex-row justify-between">
            <a href="" className="flex self-center">TH/ENG</a>
            <Link to='/login' className="flex self-center ml-5">
              <a href="">Login</a>
            </Link>
            <Link to='/register' className="ml-5">
              <button className="btn btn-primary"><p className="text-white">Sign Up</p></button>
            </Link>
          </div>
        </div>

      </div>
      <div className="Menu flex w-full items-center justify-center gap-4 px-4 py-4 relative bg-white border-b border-bottom-style:solid border-primary">

        <div className="New inline-flex items-center justify-center gap-16 px-4 py-2 relative">
          <div className="flex items-center">
            <img src="/Recycle.svg" alt="" />

            <Link to='/recycle'>
              <div className="relative mt-[-2px] font-body-normal-semibold font-[number:var(--body-normal-semibold-font-weight)] text-gray-600">
                <a href=""><strong>Recyclable Items</strong></a>
              </div>
            </Link>
          </div>
          <div className="relative mt-[-2px] font-body-normal-semibold font-[number:var(--body-normal-semibold-font-weight)] text-gray-600">
            <a href=""><strong>Clothing</strong></a>
          </div>
          <div className="relative mt-[-2px] font-body-normal-semibold font-[number:var(--body-normal-semibold-font-weight)] text-gray-600">
            <a href=""><strong>Bedding</strong></a>
          </div>
          <div className="relative mt-[-2px] font-body-normal-semibold font-[number:var(--body-normal-semibold-font-weight)] text-gray-600">
            <a href=""><strong>Home Goods</strong></a>
          </div>
          <div className="relative mt-[-2px] font-body-normal-semibold font-[number:var(--body-normal-semibold-font-weight)] text-gray-600">
            <a href=""><strong>Furniture</strong></a>
          </div>
          <div className="relative mt-[-2px] font-body-normal-semibold font-[number:var(--body-normal-semibold-font-weight)] text-gray-600">
            <a href=""><strong>Accessories</strong></a>
          </div>

        </div>
      </div>


    </>

  )
}

export default NavigationBar;