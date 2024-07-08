import Slide from "../Slide/slide";
import NavigationBar from "../Navbar/navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
const Recycle = () => {
    return (
        <div>
            <NavigationBar />
            <div className="relative flex justify-center">
                <img src="/bg-recycle2.png" alt="" className="w-full h-[600px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* <p className="text-black font-bold text-5xl md:text-6xl lg:text-7xl drop-shadow-md bg-white bg-opacity-75 px-4 py-2 rounded">
                        Recyclable Items
                    </p> */}
                </div>
            </div>



            <div className="flex w-full h-auto bg-[#FFEFE5] mb-10">
                <div className="flex flex-row justify-evenly py-16 px-20">
                    <Slide />
                    <div className="flex flex-col ml-20 justify-between">
                        <div>
                            <p className="font-serif text-[48px] font-[700]">Join Our Recycling Community</p>
                            <p>Help the environment and earn rewards by recycling your items.</p>
                        </div>
                        <Link to='/detail'>
                            <button className="btn btn-primary btn-lg flex-initial w-32 self-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 60 60" fill="none">
                                    <g clip-path="url(#clip0_1408_2519)">
                                        <path d="M21.4746 41.475L32.9246 30L21.4746 18.525L24.9996 15L39.9996 30L24.9996 45L21.4746 41.475Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1408_2519">
                                            <rect width="60" height="60" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="flex flex-row justify-between px-36 mb-20">
                <div className="flex justify-center">
                    <div className="card bg-base-100 w-10/12 h-10/12 shadow-xl mt-10">
                        <figure>
                            <img
                                src="/Cup.png"
                                alt="Shoes"
                                className="h-full w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-black font-[300]">Reusable Water Bottle</h2>
                            <p className="card-title">Eco-Friendly</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="card bg-base-100 w-10/12 h-10/12 shadow-xl mt-10">
                        <figure>
                            <img
                                src="/Notebook.png"
                                alt="Shoes"
                                className="h-full w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-black font-[300]">Notebook Set</h2>
                            <p className="card-title">Handcrafted</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="card bg-base-100 w-10/12 h-10/12 shadow-xl mt-10">
                        <figure>
                            <img
                                src="/Candle.png"
                                alt="Shoes"
                                className="h-full w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-black font-[300]">Candle Holder</h2>
                            <p className="card-title">Artisanal</p>
                        </div>
                    </div>
                </div>


            </div>

            <div className="flex flex-row justify-center h-72">
                <p className="font-serif text-[48px] font-[700] flex self-center mr-96">Recycling Tips</p>
                <div className="flex flex-col justify-evenly ">
                    <div className="flex ">
                        <div className="flex flex-row self-center ">
                            <div class="flex flex-col justify-center flex-shrink-0 overflow-hidden text-black text-center text-ellipsis whitespace-nowrap font-roboto text-[37.5px] font-normal leading-[60px] w-[60px] h-[60px]">
                                🌍
                            </div>
                            <div className="flex flex-col self-start">
                                <p>Reduce, Reuse, Recycle</p>
                                <p>Start by reducing waste at the source</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row self-center">
                            <div class="flex flex-col justify-center flex-shrink-0 overflow-hidden text-black text-center text-ellipsis whitespace-nowrap font-roboto text-[37.5px] font-normal leading-[60px] w-[60px] h-[60px]">
                                🌱
                            </div>
                            <div className="flex flex-col self-start">
                                <p>Eco-Friendly Choices</p>
                                <p>Choose sustainable products to support recycling</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row self-center">
                            <div class="flex flex-col justify-center flex-shrink-0 overflow-hidden text-black text-center text-ellipsis whitespace-nowrap font-roboto text-[37.5px] font-normal leading-[60px] w-[60px] h-[60px]">
                                🔄
                            </div>
                            <div className="flex flex-col self-start">
                                <p>Stay Informed</p>
                                <p>Keep up with the latest recycling news and initiatives</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Recycle;