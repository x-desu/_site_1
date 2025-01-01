import { IKImage } from "imagekitio-react";
import { useEffect, useState } from "react";

const urlEndpoint = import.meta.env.VITE_IK_URL_ENDPOINT;

const Image = ({ path, w, h, className }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true); // Reset loading to true when path changes
  }, [path]);

  const handleImageLoad = () => {
    setLoading((false)); // When the image is loaded, set loading to false
  };

  return (
    <div className={`${loading ? "opacity-0" : "opacity-100"} relative transition-all duration-500 h-[329px] xl:h-[541px]  xl:w-[814px] lg:h-full  lg:w-full  ease-in-out flex items-center justify-center`}>
      {/* Loading Placeholder */}
      {loading && (
        <div className="flex items-center animate-pulse justify-center w-full h-64 bg-gray-300 rounded sm:h-[541px]  sm:w-[814px] dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      )}

      {/* Image with transition opacity */}
      <IKImage
        urlEndpoint={urlEndpoint}
        path={path}
        className={`${className} transition-opacity duration-500 ease-in-out ${
          loading ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
        w={w}
        h={h}
        lqip={{ active: true, quality: 20 }} // Low-quality image placeholder
        loading="lazy"
        transformation={[
          {
            width: w,
            height: h,
          },
        ]}
        onLoad={handleImageLoad} // Trigger loading state change on image load
      />
    </div>
  );
};

export default Image;
