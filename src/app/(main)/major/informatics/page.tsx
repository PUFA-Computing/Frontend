/**
 * Study Program Page Component
 *
 * This component represents the page for the study program, including information about the program,
 * future fields and careers, and details about the lecturers.
 *
 * @component
 * @example
 * // Usage of the StudyProgramPage component in another React component or page
 * import StudyProgramPage from 'path/to/StudyProgramPage';
 * // Render the component
 * <StudyProgramPage />;
 */
"use client";
import Image from "next/image";
import Banner from "@/assets/banner/banner-informatics.png";
import React, { useState } from "react";
import ListCard from "@/components/ListCard";
import ListVisionAndMissionCard from "@/components/ListVisionAndMissionCard";
import LectureCard from "@/components/LectureCard";
import ToggleSwitch from "@/components/ToggleSwitch";

/**
 * Study Program Page Component
 *
 * @returns {JSX.Element} - React element representing the Study Program Page.
 */
export default function StudyProgramPage() {
   // State for toggling between Vision and Mission content
   const [selectedContent, setSelectedContent] = useState("vision");

   /**
    * Handle Toggle Change
    *
    * Function to handle the toggle switch change between Vision and Mission content.
    */
   const handleToggleChange = () => {
      setSelectedContent((prevContent) =>
         prevContent === "vision" ? "mission" : "vision"
      );
   };

   // Vision and Mission content
   const visionContent: string[] = [
      "Becoming the center of excellence for informatics higher education and research in Indonesia, able to compete globally, and play an active role in supporting the industry.",
   ];

   const missionContent: string[] = [
      "To perform high-quality education and teaching in informatics that focuses in the field of informatics or other relevant sectors",
      "To carry out research and improvement in science and in the development of science, tools, or technology related to the study of informatics.",
      "To carry out social service and empowerment in the field of informatics or other relevant sectors.",
      "To cooperate with industries, companies, government, and other institutions in the field of informatics or other relevant sectors.",
      "To promote the spirit of entrepreneurship for students focusing on Startup Business related to and supported by information technology.",
   ];

   // List of professions
   const professions: string[] = [
      "Professional IT",
      "Professional Programmer",
      "Database Engineer",
      "Network and Security Specialist",
      "Multimedia Designer and Animator",
      "IT Manager",
      "Technopreneur",
      "Researcher and Scientist",
   ];

   return (
      <section className="mx-auto max-w-7xl ">
         {/* banner */}
         <Image
            src={Banner}
            alt="Banner Informatics"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full"
         />

         {/* about */}
         <div>
            <h1 className="px-10 py-2 text-[20px] font-[600] text-[#2F2F2F] md:px-0">
               About Study Program
            </h1>
            <p className="px-10 py-2 text-justify text-[20px] font-[400] text-[#6B7280] md:px-0">
               Informatics are concerned with issues related to advocating for
               users and meeting their needs within an organizational and
               societal context through the selection, creation, application,
               integration, and administration of computing technologies,
               including the installation of networks; network administration
               and security; the design of web pages; the development of
               multimedia resources; the installation of communication
               components; the oversight of e-mail systems; and the planning and
               management of the technology lifecycle by which an organization’s
               technology is maintained, upgraded, and replaced.
            </p>
         </div>

         <div className="grid grid-cols-2">
            <div>
               <p className="px-10 py-2 text-[20px] font-[600] text-[#2F2F2F] md:px-0">
                  Future Field and Career
               </p>
               {/* List of professions */}
               <ListCard content={professions} />
            </div>
            <div>
               {/* Toggle switch for Vision and Mission */}
               <ToggleSwitch
                  selectedContent={selectedContent}
                  handleToggleChange={handleToggleChange}
               />

               {/* Content based on the selected toggle */}
               <ListVisionAndMissionCard
                  selectedContent={selectedContent}
                  visionContent={visionContent}
                  missionContent={missionContent}
               />
            </div>
         </div>

         {/* lecture */}
         <div>
            <h1 className="px-10 py-2 text-[20px] font-[600] text-[#2F2F2F] md:px-0">
               Lecturer
            </h1>
            {/* dean and head of study program */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
               <LectureCard
                  image="/lecture/informatics/Ir. Rila Mandala, M.Eng., Ph.D..png"
                  name="Ir. Rila Mandala, M.Eng., Ph.D."
                  position="Dean School of Computing"
               />
               <LectureCard
                  image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
                  name="Cutifa Safitri, Ph.D."
                  position="Head of Study Programme"
               />
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:py-2 lg:grid-cols-5">
               <LectureCard
                  image="/lecture/informatics/Ir. Rila Mandala, M.Eng., Ph.D..png"
                  name="Prof. Dr. Ir. Wiranto Herry Utomo, M.Kom"
               />
               <LectureCard
                  image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
                  name="Dr. Andreas Yumarma"
               />
               <LectureCard
                  image="/lecture/informatics/Ir. Rila Mandala, M.Eng., Ph.D..png"
                  name="Ir. Rila Mandala, M.Eng., Ph.D."
               />
               <LectureCard
                  image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
                  name="Cutifa Safitri, Ph.D."
               />
               <LectureCard
                  image="/lecture/informatics/Ir. Rila Mandala, M.Eng., Ph.D..png"
                  name="Ir. Rila Mandala, M.Eng., Ph.D."
               />
               <LectureCard
                  image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
                  name="Cutifa Safitri, Ph.D."
               />
               <LectureCard
                  image="/lecture/informatics/Ir. Rila Mandala, M.Eng., Ph.D..png"
                  name="Ir. Rila Mandala, M.Eng., Ph.D."
               />
               <LectureCard
                  image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
                  name="Cutifa Safitri, Ph.D."
               />
               <LectureCard
                  image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
                  name="Cutifa Safitri, Ph.D."
               />
            </div>
         </div>
      </section>
   );
}
