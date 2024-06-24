import BGIMAGE from "@/assets/background/PUMA_IT.jpg";
import LOGO from "@/assets/logo/PUMA_IT.png";
import PUMASection from "@/components/puma/PUMASection";
import About from "@/components/puma/About";
import Background from "@/components/puma/Background";
import { aboutContentInformatics } from "@/lib/data";
import VisionAndMission from "@/components/puma/VisionAndMission";
import PUMASectionMobile from "@/components/puma/PUMASectionMobile";
import LogoSection from "@/components/puma/LogoSection";

function Page() {
    return (
        <section>
            <Background image={BGIMAGE.src} logo={LOGO.src} />
            <PUMASectionMobile
                logo={LOGO.src}
                title="PUMA Informatics"
                slogan="“TOGETHER WE THRIVE, UNITED WE THRIVE”"
                cabinet="FRAGNATIOUS CABINET PERIOD 2023/2024"
            />
            <PUMASection
                title="PUMA Informatics"
                slogan="“TOGETHER WE THRIVE, UNITED WE THRIVE”"
                cabinet="FRAGNATIOUS CABINET PERIOD 2023/2024"
            />

            <About content={aboutContentInformatics} />
            <LogoSection
                title="Letter C, IT, and Circuits"
                image={LOGO.src}
                description="This logo reflects the identity of PUMA
                            Informatics under the Computing faculty. By
                            using elements such as the letter C, IT, and
                            circuits, this logo depicts the attachment,
                            diversity, and unity within PUMA Informatics."
            />
            <VisionAndMission
                visi="To become a PUMA Informatics that is able to develop soft skills and hard skills, as well as a forum for independent aspirations and creativity, characterized by autonomy, aspiration, quality, and achievement, with a focus on science and technology, and forming strong relationships among students, lecturers, faculty, and other institutions, both within President University and outside."
                misi={[
                    "Creating a positive image of PUMA Informatics among students, faculty, and other organizations at President University.",
                    "Support IT students in enhancing their academic and non-academic soft skills and hard skills development.",
                    "Forming good relationships between students, lecturers, faculty, and other institutions both inside and outside President University.",
                    "Create a platform for IT students that serves as a forum for sharing ideas and expressing aspirations",
                ]}
            />
        </section>
    );
}

export default Page;
