import NavigationBar from "../Navbar/navbar"
import Footer from "../Footer"
import QuantityInput from "../QuanitInput"
import { Link } from "react-router-dom";
const CartToBuy = () => {
    return (
        <div>
            <NavigationBar />
            <div className="flex flex-row justify-center mt-10">
                <img src="/CartToBuy.png" alt="" className="mr-10" />
                <div className="flex flex-col justify-between ">
                    <p className="font-serif text-[56px] font-[700] mb-5">Otis UPCYDE from BRAVE</p>
                    <p className="font-[600]">ทำมาจากเปลือกผลไม้ที่แปรรูปเป็นหนัง สีเขียวทำมาจากเปลือกมะนาว ส่วนสีขาวทำมาจากเปลือกกล้วย </p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="text-[12px] font-[600] text-slate-500">Brand : BRAVE SHOES</p>
                    <hr />
                    <p className="text-primary text-[32px] font-[700]">฿ 3,290</p>
                    <p className="text-[12px] font-[600] text-slate-500">Material : หนังที่ทำมาจากเปลือกผลไม้เหลือทิ้ง</p>
                    <hr />
                    <div className="grid justify-items-stretch grid-cols-2">
                        <QuantityInput />
                        <Link to ='/cart2' className="w-full ">
                            <button className="btn btn-primary w-full">
                                <p className="text-white"> Add to card</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-20 justify-center">
                <div className="flex flex-row justify-evenly mb-5">
                    <p>Product Details</p>
                    <p>Rating & Reviews</p>
                    <p>FAQs</p>
                </div>
                <hr className="w-9/12 flex self-center border-1 mb-10" />
                <div className="flex flex-row px-36 mb-10">
                    <p className=" text-[24px] font-[700] font-sans mr-5">All reviews</p>
                    <p className="flex self-center opacity-75">(56)</p>
                </div>
                <div className="flex justify-evenly">
                    <div className="flex w-[610px] p-[28px] gap-[24px] flex-col border-2 rounded-2xl">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-[20px] font-[700]">Samantha D.</p>
                        <p>"I absolutely love these recycled shoes! The design is unique and they are incredibly comfortable. As a fellow designer, I appreciate the attention to detail. They've become my favorite go-to shoes."</p>
                        <p className="text-[16px] font-[500] opacity-60">Posted on August 14, 2023</p>
                    </div>
                    <div className="flex w-[610px] p-[28px] gap-[24px] flex-col border-2 rounded-2xl">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-[20px] font-[700]">Samantha D.</p>
                        <p>"I absolutely love these recycled shoes! The design is unique and they are incredibly comfortable. As a fellow designer, I appreciate the attention to detail. They've become my favorite go-to shoes."</p>
                        <p className="text-[16px] font-[500] opacity-60">Posted on August 14, 2023</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default CartToBuy