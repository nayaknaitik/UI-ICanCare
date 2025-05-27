import React from "react";

const VideoFeedbackSection = () => {
  const videos = [
    {
      title: "Amazing Transformation",
      url: "https://www.youtube.com/embed/VIDEO_ID_1",
      description: "How our program changed lives.",
    },
    {
      title: "Success Story",
      url: "https://www.youtube.com/embed/VIDEO_ID_2",
      description: "Hear directly from our successful clients.",
    },
    {
      title: "Why Choose Us",
      url: "https://www.youtube.com/embed/VIDEO_ID_3",
      description: "What makes our program unique and effective.",
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
                  frameBorder="0"
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
