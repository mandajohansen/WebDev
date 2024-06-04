import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { HiCode } from "react-icons/hi";
import { HiOutlineIdentification } from "react-icons/hi";


const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 55.650471,
  lng: 12.542930,
};

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-[650px] flex pb-20 py-20 border-b-[1px] border-b-detail relative"
    >
      <div className="w-1/2 flex justify-center relative">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div className="absolute left-10 top-4 w-[93%] h-[415px] bg-gradient-to-t from-title via-hover to-detail flex"></div>
          <div style={{ position: "relative", width: "90%", height: "90%"}}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}
            >
              <Marker position={center} />
            </GoogleMap>
          </div>
        </LoadScript>
      </div>
      <div className="w-1/2 flex flex-col pl-10 relative">
        <div className="flex items-center gap-4">
            <h3 className="text-5xl uppercase font-semibold text-title tracking-wide pb-2">About</h3>
                    <HiOutlineIdentification className="text-6xl text-hover"/>
        </div>
        <p className="text-base font-bodyFont leading-6 tracking-wide pt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </section>
  );
};

export default About;
