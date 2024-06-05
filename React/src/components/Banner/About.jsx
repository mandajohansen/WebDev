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
            <h3 className="text-5xl uppercase font-semibold text-title tracking-wide pb-2">About me</h3>
                    <HiOutlineIdentification className="text-6xl text-hover"/>
        </div>
        <p className="text-base font-bodyFont leading-6 tracking-wide pt-5">
        I am a 25 year old student currently enrolled in my 6th semester of the 
        Bachelor's degree of Mediaology. Which is located at Aalborg University
        in Copenhagen, which is highlighted with the red marker on the map 
        to the left. Zooming out you can see where the location is in relation 
        to other places in the world. Alongside my studies and work, I also 
        take part in the social tutor program. I have done that for two years
        now, and this year I am the tutor coordinator with one of my classmates. This position includes recruiting other tutors, being in charge of meetings to discuss social activities and to manage the finances we have available for events. I am also frequently a volunteer at other social activities at my study, this includes setting up for bigger events, stand in the bar and serv people and help cleaning after events.

        </p>
      </div>
    </section>
  );
};

export default About;
