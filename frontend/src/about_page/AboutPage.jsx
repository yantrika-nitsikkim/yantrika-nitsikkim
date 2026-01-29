// src/about_page/AboutPage.jsx
import AboutUsSection from "./AboutUsSection";
import MoreAbout from "./MoreAbout";

const AboutPage = () => {
  return (
    <main className="bg-black text-white min-h-screen">
      <AboutUsSection />
      <MoreAbout />
    </main>
  );
};

export default AboutPage;
