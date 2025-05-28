import React from "react";

const VideoFeedbackSection = () => {
  const videos = [
    {
      title: "Mr. ZUSTIN",
      url: "https://www.youtube.com/embed/wtkb5isj4Pw"
,
      description: "FROM 40 to Zero in 15 days. ICanCaRe Tobacco Cessation Program at MAX Vaishali",
    },
    {
      title: "Mr. Naveen Goel",
      url: "https://www.youtube.com/embed/16ovqMZ__d8",
      description: "Mr. Naveen Goel - Tobacco Smoking Quit Champion - ICanCaRe Tobacco Wellness Program",
    },
    {
      title: "Mr. Rajesh Choudhary",
      url: "https://www.youtube.com/embed/6p_6DQENnL4",
      description: "Tobacco Chewing Quit Champion - ICanCaRe Tobacco Wellness Program",
    },
  ];

  return (
    <section className="py-16  font-[poppins]">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-wrap justify-center gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative w-full md:w-[30%] rounded-xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105"
            >
              <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
                <iframe
                  src={video.url}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoFeedbackSection;
