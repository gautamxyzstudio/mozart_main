import { GIF, Images } from '@/public/exports'
import Image from 'next/image'
import React from 'react'

const KeyFeatures = () => {

    return (

        <>
            <section className='bg-white'>

                <span className="w-full xl:text-[200px] xl:leading-51.5 md:text-[120px] md:leading-32.5 text-[60px] leading-19 text-black/70 font-bold opacity-10 xl:-mt-7 md:-mt-5 -mt-3 xl:-ml-1 md:-ml-1 -ml-1">
                    Key Features
                </span>

                <h3 className='text-4xl text-black font-bold text-center lg:py-10 md:pt-7 pt-5'>Key Features</h3>

                <div className="xl:px-25 xl:pt-0  md:pb-25 md:px-13 px-6 py-16 flex flex-col xl:space-y-13 md:space-y-6 space-y-8 ">
                    <div className="bg-[#E3D7F3] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
                            <h2 className="text-black font-bold xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                                Fast Distribution
                            </h2>
                            <p className="text-black xl:text-base text-sm">
                                Release your music on major platforms within 24–72 hours. Get your songs live quickly without long waiting times.                   </p>
                        </div>
                        <div className="xl:w-126.75 xl:h-115 md:w-75 md:h-67.5 w-75.75 h-69 md:mt-0 mt-8 relative">
                            <Image src={Images.Distribution} alt="fast distribution " />
                        </div>
                    </div>


                    <div className="bg-[#FFD3DE] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
                            <h2 className="text-black font-bold xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                                Real-Time Analytics
                            </h2>
                            <p className="text-black xl:text-base text-sm">
                                Release your music on major platforms within 24–72 hours. Get your songs live quickly without long waiting times.                   </p>
                        </div>
                        <div className="flex flex-col space-y-4 xl:w-150 xl:mr-13 md:w-90 md:mr-7.5 w-full">
                            <Image src={Images.RealTime} alt="analytics" />
                        </div>
                    </div>

                    <div className="bg-[#E3D7F3] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
                            <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                                Playlist pitching
                            </h2>
                            <p className="text-black xl:text-base text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat imperdiet turpis, ac tempor lacus efficitur sit amet. Ut et lacinia lorem. Cras sit amet purus ac magna sodales consectetur nec nec lectus. Nunc rutrum vestibulum felis non faucibus.                    </p>
                        </div>
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
                            <Image src={Images.playlist2} alt="playlist pitching" />
                        </div>
                    </div>

                    <div className="bg-[#C3E5FF] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
                            <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                                Full Rights Control
                            </h2>
                            <p className="text-black xl:text-base text-sm">
                                You always own your music rights. Remove or update your content anytime without restrictions.                </p>
                        </div>
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
                            <Image src={Images.Vegan} alt=" Full Rights Control" />
                        </div>
                    </div>

                    <div className="bg-[#FBFFDB] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
                            <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                                Global Reach
                            </h2>
                            <p className="text-black xl:text-base text-sm">
                                Distribute your music to 150+ platforms worldwide including Spotify and Apple Music. Reach listeners across different countries and grow your fanbase.             </p>
                        </div>
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
                            <Image src={Images.GlobalReach} alt="Global Reach" />
                        </div>
                    </div>
                    <div className="bg-[#D3FFE8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
                            <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                                Keep 100%
                                Royalties
                            </h2>
                            <p className="text-black xl:text-base text-sm">
                                You keep full ownership of your music and earnings. No hidden commissions every stream and download pays directly to you.  </p>
                        </div>
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
                            <Image src={Images.Royalties} alt="Keep 100% Royalties" />
                        </div>
                    </div>
                    <div className="bg-[#C5FFF8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
                            <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                                Monetization Tools
                            </h2>
                            <p className="text-black xl:text-base text-sm">
                                Earn from multiple sources like streaming, YouTube Content ID, and social platforms. Maximize revenue from every piece of content you release.          </p>
                        </div>
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
                            <Image src={Images.Menztion} alt="Keep 100% Royalties" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KeyFeatures