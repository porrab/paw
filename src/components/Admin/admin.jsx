import Swal from "sweetalert2";
import NavigationBar from "../Navbar/navbar";
import Footer from "../Footer";
const Admin = () => {
  return (
    <>
    <NavigationBar/>
      <div className="LogoBig flex items-start justify-center w-full pt-4">
        <img
          className="echoShop w-[299px] h-[151px] object-cover"
          src="LogoBig.svg"
          alt="Logo"
        />
      </div>
      <div className="flex  justify-center w-full  mt-10">
        <div className="flex flex-col items-center justify-center w-[250px] h-6 mb-8">
          <div className="textLogin font-semibold text-[#555555] font-poppins mt-2">
            Fill in your product information{" "}
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-8 bg-[#D6EFD8] rounded-lg shadow-lg">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-lg font-semibold text-gray-800"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-base"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="brand"
            className="block text-lg font-semibold text-gray-800"
          >
            Description
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-base"
            placeholder="Enter Description"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="brand"
            className="block text-lg font-semibold text-gray-800"
          >
            Material
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-base"
            placeholder="Enter Material"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="review"
            className="block text-lg font-semibold text-gray-800"
          >
            Review
          </label>
          <textarea
            id="review"
            name="review"
            rows="3"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-color focus:border-green-500 sm:text-base"
            placeholder="Write your review"
          ></textarea>
        </div>
        <div className="mb-6">
          <label
            htmlFor="brand"
            className="block text-lg font-semibold text-gray-800"
          >
            Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring[#7B9C64] focus:border-green-500 sm:text-base"
            placeholder="Enter the brand"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-lg font-semibold text-gray-800"
          >
            Image
          </label>
          <div className="flex items-center mt-1">
            <input type="file" className="file-input w-full max-w-xs" />
          </div>
        </div>
        <button
          type="button"
          className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#7B9C64] hover:bg-[#7B9C64] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B9C64]"
          onClick={() =>
            Swal.fire({
              icon: "success",
              title: "Successfully ",
              html: '<p style="color: #333;">Your product has been successfully added.<br/>Please check.</p>',
              confirmButtonText: "OK",
            })
          }
        >
          Submit
        </button>
      </div>
      <Footer/>
      ;
    </>
  );
};

export default Admin;