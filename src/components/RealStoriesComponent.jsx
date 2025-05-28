import React from 'react';
import { motion } from 'framer-motion';

const RealStoriesComponent = () => {
    return (
        <div
            className="bg-[#f0f7ff] py-16 flex flex-col items-center font-[poppins] mt-12"
        >
            <div className="flex flex-col md:flex-row items-center max-w-6xl w-full px-6 md:px-12">
                <div
                    className="flex-1 mb-8 px-8 md:mb-0 md:mr-12 md:order-1 order-2"
                >
                    <h2 className="text-[14px] md:text-4xl font-bold text-[#2987D7] md:mb-8 text-center md:text-left tracking-tighter">
                        Real Stories and Real Transformations.
                    </h2>
                    <p className="text-gray-500 md:text-xl text-[10px] md:text-left text-center mb-6">
                        A smoker for <strong>30 years</strong>, developed Pre-Cancerous Lesions at 54.
                        Dr. Pawan explains how <strong>PBM Therapy</strong>, and a structured <strong>Smoking Cessation Program</strong>, can help reverse early damage and restore oral health.
                    </p>
                    <div className="flex md:justify-start gap-4">
                        <a href="oral-treatment"><button className="bg-[#2987D7] text-white md:px-6 md:py-3 px-2 py-1 rounded-lg md:text-base text-[14px] font-semibold">Learn About PBM</button></a>
                        <a href=""><button className="border-2 border-[#2987D7] text-[#2987D7] md:px-6 md:py-2.5 px-2 py-1 rounded-lg md:text-base text-[14px] font-semibold">Talk to an Expert</button></a>
                    </div>
                </div>
                <div
                    className="flex-1 w-full md:w-100 aspect-video md:order-2 order-1 mb-8"
                >
                    <iframe 
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE" 
                        title="Testimonial Video"
                        className="w-full h-full rounded-lg shadow-md border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default RealStoriesComponent;
