
import Swal from "sweetalert2";
import QuantityInput from "../QuanitInput";
import NavigationBar from "../Navbar/navbar";
const Cart = () => {
    return (
        <>
            <NavigationBar/>
            <div className="p-20">
                <div className="text-black text-[40px] font-[700] font-['Integral CF'] mb-20">
                    Your cart
                </div>
                <div className="flex justify-center items-start gap-36 w-full  ">
                    <div className="w-[715px] h-[188px] px-6 py-5 rounded-[20px] border border-black/opacity-10 flex flex-col justify-start items-start gap-6">
                        <div className="self-stretch justify-start items-center gap-4 inline-flex">
                            <div className="w-[124px] h-[124px] relative rounded-lg">
                                <img
                                    className="w-[124px] h-[124px] left-[-7px] top-[8px] absolute"
                                    src="/Shoes.svg"
                                    alt="shoes" />
                            </div>
                            <div className="grow shrink basis-0 h-[124px] justify-between items-center flex">
                                <div className="h-[118px] flex-col justify-between items-start inline-flex">
                                    <div className="flex-col justify-start items-start gap-0.5 flex">
                                        <div className="text-zinc-800 text-[15px] font-bold font-['Libre Baskerville']">
                                            {" "}
                                            Otis UPCYDE from BRAVE{" "}
                                        </div>
                                        <div className="flex-col justify-start items-start gap-1 flex">
                                            <div className="text-black text-sm font-normal font-['Asap']">
                                                {" "}
                                                Size: 39{" "}
                                            </div>
                                            <div className="text-black text-sm font-normal font-['Asap']">
                                                {" "}
                                                Color: Green{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-stone-500 text-base font-semibold font-['Inter'] leading-normal">
                                        {" "}
                                        3290 ฿{" "}
                                    </div>
                                </div>
                                <div className="self-end">
                                    <QuantityInput />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-[0px] border border-black/opacity-10"></div>
                    </div>
                    <div className="w-[505px] h-[357px] px-6 py-5 rounded-[20px] border border-black/opacity-10 flex flex-col justify-start items-start gap-6 mb-20">
                        <div className="text-black text-2xl font-normal font-['Alice']">
                            {" "}
                            Order Summary{" "}
                        </div>
                        <div className="self-stretch h-44 flex-col justify-start items-start gap-5 flex">
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="text-black/opacity-60 text-xl font-normal font-['Alice']">
                                    {" "}
                                    Subtotal{" "}
                                </div>
                                <div className="text-right text-stone-500 text-base font-semibold font-['Inter'] leading-normal">
                                    {" "}
                                    3290 ฿{" "}
                                </div>
                            </div>
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="text-black/opacity-60 text-xl font-normal font-['Alice']">
                                    {" "}
                                    Discount (-20%){" "}
                                </div>
                                <div className="text-right text-red-500 text-base font-semibold font-['Inter'] leading-normal">
                                    {" "}
                                    -90 ฿{" "}
                                </div>
                            </div>
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="text-black/opacity-60 text-xl font-normal font-['Alice']">
                                    {" "}
                                    Delivery Fee{" "}
                                </div>
                                <div className="text-right text-stone-500 text-base font-semibold font-['Inter'] leading-normal">
                                    {" "}
                                    3200 ฿{" "}
                                </div>
                            </div>
                            <div className="self-stretch h-[0px] border border-black/opacity-10"></div>
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="flex gap-2">
                                    <div className=" text-black text-xl font-normal font-['Alice']">
                                        {" "}
                                        Total{" "}
                                    </div>
                                    <div className="moneyCard flex space-x-2 justify-start  ">
                                        <div className="w-[35px] h-[23px] relative bg-white rounded-md shadow border border-gray-300 flex items-center justify-center">
                                            <img
                                                src="/Visa.svg"
                                                alt="Image 1"
                                                className="w-full h-full object-contain rounded-md"
                                            />
                                        </div>
                                        <div className="w-[35px] h-[23px] relative bg-white rounded-md shadow border border-gray-300 flex items-center justify-center">
                                            <img
                                                src="/Mastercard.svg"
                                                alt="Image 2"
                                                className="w-full h-full object-contain rounded-md"
                                            />
                                        </div>
                                        <div className="w-[35px] h-[23px] relative bg-white rounded-md shadow border border-gray-300 flex items-center justify-center">
                                            <img
                                                src="/Paypal.svg"
                                                alt="Image 3"
                                                className="w-full h-full object-contain rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right text-stone-500 text-base font-semibold font-['Inter'] leading-normal">
                                    {" "}
                                    3200 ฿{" "}
                                </div>
                            </div>
                        </div>
                        <button
                            className="self-stretch h-[60px] px-[54px] py-4 bg-black rounded-[62px] justify-center items-center gap-3 inline-flex"
                            onClick={() =>
                                Swal.fire({
                                    icon: "success",
                                    title: "Order completed !!!",
                                    html: '<p style="color: #333;">27 April - 29 April 2024<br/>The receipt will be sent to your gmail</p>',
                                    confirmButtonText: "OK",
                                })
                            }
                        >
                            <span className="text-white text-base font-normal font-['Alice']">
                                Go to Checkout
                            </span>
                            <div className="w-6 h-6 relative origin-top-left -rotate-90" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Cart;