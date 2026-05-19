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

                <h3 className='text-4xl text-black font-bold text-center lg:py-10 md:pt-7 pt-5'>Promotion Tools & Features</h3>

                <div className="xl:px-25 xl:pt-0  md:pb-25 md:px-13 px-6 py-16 flex flex-col xl:space-y-13 md:space-y-6 space-y-8 ">
                    <div className="bg-[#D3FFE8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-[60px] md:p-[25px] p-6 pr-0">
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
                            <h2 className="text-black font-bold xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                                Playlist Power Boost
                            </h2>
                            <p className="text-black xl:text-base text-sm">
                                Get your music featured on curated playlists on Spotify to increase streams and reach new listeners organically.                  </p>
                        </div>
                        <div className="xl:w-126.75 xl:h-115 md:w-75 md:h-67.5 w-75.75 h-69 md:mt-0 mt-8 relative">
                            <Image src={Images.Vegan2} alt="fast distribution " />
                        </div>
                    </div>


                    <div className="bg-[#E3D7F3] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col-reverse md:items-center md:justify-between md:p-0 p-6">
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
                            <h2 className="text-black font-bold xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                                Smart Audience Targeting
                            </h2>
                            <p className="text-black xl:text-base text-sm">
                                Reach the right listeners for your music on Snapchat, Facebook, and Instagram based on their interests, location and music taste.             </p>
                        </div>
                        <div className="flex flex-col space-y-4 xl:w-150 xl:mr-13 md:w-90 md:mr-7.5 w-full">
                            <Image src={Images.SmartAudience} alt="analytics" />
                        </div>
                    </div>

                    <div className="bg-[#FBFFDB] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end md:p-0 p-6 pr-0">
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
                            <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                              Algorithm Growth Push 
                            </h2>
                            <p className="text-black xl:text-base text-sm">
 Boost your track’s performance with strategies designed to trigger platform algorithms on YouTube Music and streaming services.                   </p>
                        </div>
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
                            <Image src={Images.Algorithm} alt="playlist pitching" />
                        </div>
                    </div>

                    <div className="bg-[#FFD3DE] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end md:p-0 p-6 pr-0">
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
                            <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                             Influencer Music Promotion 
                            </h2>
                            <p className="text-black xl:text-base text-sm">
                               Promote your music through influencers and creators to gain authentic exposure and viral potential.            </p>
                        </div>
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
                            <Image src={Images.Influencer} alt="Influencer Music Promotion" />
                        </div>
                    </div>

                    <div className="bg-[#C5FFF8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end md:p-0 p-6 pr-0">
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
                            <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                              Organic Fan Growth 
                            </h2>
                            <p className="text-black xl:text-base text-sm">
                            Build a real and loyal fanbase with natural promotion methods - no bots, only genuine listeners.            </p>
                        </div>
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
                            <Image src={Images.Organic} alt="Global Reach" />
                        </div>
                    </div>
                    <div className="bg-[#C3E5FF] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end md:p-0 p-6 pr-0">
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
                            <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                               Data-Driven Campaign Insights 
                            </h2>
                            <p className="text-black xl:text-base text-sm">
                              Track performance with detailed analytics to understand what works best for your music across platforms like Spotify and YouTube Music.          </p>
                        </div>
                        <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
                            <Image src={Images.Royalties} alt="Keep 100% Royalties" />
                        </div>
                    </div>
                    <div className="bg-[#C5FFF8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end md:p-0 p-6 pr-0">
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