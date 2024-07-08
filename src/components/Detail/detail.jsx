import Footer from "../Footer";
import NavigationBar from "../Navbar/navbar";

const Details = () => {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center w-full mt-20">
          <div className="flex flex-col items-center justify-center w-full max-w-xl">
            <div className="textLogin font-semibold text-[#555555] font-poppins mt-2 text-3xl">
              Submission Method
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full p-10 gap-2"></div>
        <div className="flex flex-col sm:flex-row justify-center w-full mt-20">
          <div className="flex flex-col items-start justify-center w-full sm:w-1/3 text-base">
            Shipping Option
          </div>
          <div className="flex items-center sm:ml-4 mt-4 sm:mt-0">
            <input
              type="radio"
              name="radio-1"
              className="radio mr-2"
              defaultChecked
            />
            <span className="text-sm">Ship</span>
          </div>
          <div className="flex items-center sm:ml-4 mt-4 sm:mt-0">
            <input type="radio" name="radio-1" className="radio mr-2" />
            <span className="text-sm">Drop-off</span>
          </div>
        </div>
        <div className="flex justify-center w-full mt-20">
          <div className="flex flex-col items-center justify-center w-full max-w-xl">
            <div className="textLogin font-semibold text-[#555555] font-poppins mt-2 text-3xl">
              Recyclable Item Details
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full p-10 gap-4">
          <div className="flex items-center w-full max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4f4a4a"
              className="mr-2"
            >
              <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
              <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
              <path d="m14 16-3 3 3 3" />
              <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
              <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
              <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
            </svg>
            <input
              type="text"
              className="grow p-4 border border-gray-300 rounded-md"
              placeholder="Type of Item"
            />
          </div>
          <div className="flex items-center w-full max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4f4a4a"
              className="mr-2"
            >
              <circle cx="12" cy="5" r="3" />
              <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />
            </svg>
            <input
              type="text"
              className="grow p-4 border border-gray-300 rounded-md"
              placeholder="Weight"
            />
          </div>
          <div className="flex items-center w-full max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4f4a4a"
              className="mr-2"
            >
              <path d="M8 2v4" />
              <path d="M12 2v4" />
              <path d="M16 2v4" />
              <rect width="16" height="18" x="4" y="4" rx="2" />
              <path d="M8 10h6" />
              <path d="M8 14h8" />
              <path d="M8 18h5" />
            </svg>
            <input
              type="text"
              className="grow p-4 border border-gray-300 rounded-md"
              placeholder="Description"
            />
          </div>
        </div>
        <div className="flex justify-center w-full mt-20">
          <div className="flex flex-col items-center justify-center w-full max-w-xl">
            <div className="textLogin font-semibold text-[#555555] font-poppins mt-2 text-3xl">
              Address Information
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full p-10 gap-4">
          <div className="flex items-center w-full max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4f4a4a"
              className="mr-2"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            <input
              type="text"
              className="grow p-4 border border-gray-300 rounded-md"
              placeholder="Street Address"
            />
          </div>
          <div className="flex items-center w-full max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4f4a4a"
              className="mr-2"
            >
              <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
              <path d="M9 22v-4h6v4" />
              <path d="M8 6h.01" />
              <path d="M16 6h.01" />
              <path d="M12 6h.01" />
              <path d="M12 10h.01" />
              <path d="M12 14h.01" />
              <path d="M16 10h.01" />
              <path d="M16 14h.01" />
              <path d="M8 10h.01" />
              <path d="M8 14h.01" />
            </svg>
            <input
              type="text"
              className="grow p-4 border border-gray-300 rounded-md"
              placeholder="City"
            />
          </div>
          <div className="flex items-center w-full max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4f4a4a"
              className="mr-2"
            >
              <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              <path d="M20 14v4" />
              <path d="M20 22v.01" />
            </svg>
            <input
              type="text"
              className="grow p-4 border border-gray-300 rounded-md"
              placeholder="State/Province"
            />
          </div>
          <div className="flex items-center w-full max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4f4a4a"
              className="mr-2"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <input
              type="text"
              className="grow p-4 border border-gray-300 rounded-md"
              placeholder="Postal Code"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center w-full mt-10 mb-10 gap-4">
          <button className="btn btn-outline px-6 py-2">Discount</button>
          <button className="btn btn-success px-6 py-2">Submit</button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Details;
