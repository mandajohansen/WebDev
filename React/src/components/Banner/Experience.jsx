import React, { useEffect, useState } from "react";
import { SkillInfo } from "./SkillInfo";
import { motion } from "framer-motion";
// Axios bruges til at hente data fra en url
import axios from "axios";

export const Experience = () => {
  // Vi laver en state-variabel, der hedder education. Til at starte med har den ingen værdi
  const [education, setEducation] = useState();

  // useEffect kører første gang denne del af coden bliver læst.
  useEffect(() => {
    // Vi laver en function, der hedder fetchData
    const fetchData = async () => {
      try {
        // Vi henter noget data fra Node-backenden
        const response = await axios.get("http://localhost:5050/api/education");
        // Skriver det i consollen
        console.log("response", response.data);
        // Giver variablen education værdien af den data vi har hentet via setEducation
        setEducation(response.data.higher_education);
      } catch (error) {
        // Hvis noget går galt skriver vi det og giver education en fejl-meddelelse
        console.error("Error fetching data:", error);
        setEducation("Failed to connect to MongoDB");
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20 mt-12"
    >
      <div className="w-1/2">
        <div className="py-12">
          <p className="text-sm font-semibold text-title tracking-[4px]">
            2014-Now
          </p>
          <h2 className="text-4xl font-bold text-title">Education History</h2>
        </div>
        {/* Hvis education har en værdi, dvs. efter at useEffect og fetchData har kørt, så tegnes det følgende */}
        {education && (
          <div className="mt-5 w-full h-[1000px] border-l-[6px] border-title text-title flex flex-col gap-10">
            {/* education er et array med 1 object. Der kunne fx være tre objecter. Vi looper igennem education og for hvert object laver vi SkillInfo med værdien fra det object vi er kommet til - hver gang kaldes det "edu" */}
            {education.map((edu) => (
              <>
                <SkillInfo
                  title={edu.title}
                  subtitle={edu.subtitle}
                  description={edu.description}
                  result={edu.result}
                />
              </>
            ))}
          </div>
        )}
      </div>
      <div className="w-1/2">
        <div className="py-12">
          <p className="text-sm font-semibold text-title tracking-[4px]">
            2014-Now
          </p>
          <h2 className="text-4xl font-bold text-title">Job History</h2>
        </div>
        <div className="mt-5 w-full h-[1000px] border-l-[6px] border-title text-title flex flex-col gap-10">
          <SkillInfo
            title="Software Developer"
            subtitle="Tech Company"
            description="Worked as a software developer at a tech company where I was responsible for developing and maintaining web applications."
            result="Promoted to Senior Developer"
          />
          <SkillInfo
            title="Software Developer"
            subtitle="Tech Company"
            description="Worked as a software developer at a tech company where I was responsible for developing and maintaining web applications."
            result="Promoted to Senior Developer"
          />
          <SkillInfo
            title="Software Developer"
            subtitle="Tech Company"
            description="Worked as a software developer at a tech company where I was responsible for developing and maintaining web applications."
            result="Promoted to Senior Developer"
          />
        </div>
      </div>
    </motion.div>
  );
};
