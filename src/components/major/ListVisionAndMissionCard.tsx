
import React from "react";

interface ListVisionAndMissionProps {
   selectedContent: string;
   visionContent: string[];
   missionContent: string[];
}

const ListVisionAndMissionCard: React.FC<ListVisionAndMissionProps> = ({
   selectedContent,
   visionContent,
   missionContent,
}) => {
   const contentToDisplay =
      selectedContent === "vision" ? visionContent : missionContent;

   const listClassName =
      selectedContent === "vision"
         ? "space-y-2 px-10 py-2 text-justify text-[#6B7280] md:px-6 md:text-sm lg:text-base"
         : "list-disc space-y-2 px-10 py-2 text-justify text-[#6B7280] md:px-6 md:text-sm lg:text-base";

   return (
      <div className="max-w-[50rem] rounded-2xl border border-[#3C99DC] bg-white px-5">
         <ul className={listClassName}>
            {contentToDisplay.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </ul>
      </div>
   );
};

export default ListVisionAndMissionCard;
