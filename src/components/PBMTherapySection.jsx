import React from 'react';

const PBMTherapySection = () => {
    return (
        <div className="bg-white py-16 flex flex-col items-center font-[poppins]">
            <h2 className="text-3xl font-bold text-black mb-4 text-center tracking-tighter">What is PBM Therapy?</h2>
            <p className="text-[#2987D7]/70 text-lg mb-10 text-center max-w-4xl px-4">
                "Photobiomodulation (PBM) is an advanced, non-invasive light therapy that accelerates healing, reduces pain, and restores oral health without medications."
            </p>
            <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full px-6 md:px-12">
                <div className="bg-white rounded-xl shadow-md flex-1 h-120"></div>
                <div className="bg-white rounded-xl shadow-md flex-1 h-120"></div>
            </div>
        </div>
    );
};

export default PBMTherapySection;
