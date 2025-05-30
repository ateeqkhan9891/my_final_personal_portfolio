import React from "react";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
// import TypingSubtitle from "../assets/components/introsubtitle";

import { BsMouse } from "react-icons/bs";

const HeaderIntro: React.FC = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // subtitle animation
  const phrases = [
    "Machine Learning",
    "Data Science",
    "Web Scraping",
    "Flask + React",
    "Data Visualization",
  ];

  const [text, setText] = React.useState("");
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        const nextText = isDeleting
          ? currentPhrase.slice(0, text.length - 1)
          : currentPhrase.slice(0, text.length + 1);
        setText(nextText);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-auto max-lg:gap-6 px-4"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      <img
        src={headerIntroData.profilepicture}
        alt="Profile"
        className="w-40 sm:w-52 md:w-60 drop-shadow-2xl rounded-full shadow-2xl avatar-img mt-10"
      />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        {headerIntroData.title.en}
        <span className="wave text-5xl sm:text-6xl md:text-7xl inline-block ml-2">
          &#128075;&#127997;
        </span>
      </h1>

      <h2 className="text-xl sm:text-3xl  md:text-3xl font-semibold text-orange-500 border-r-2 border-orange-500 pr-2 whitespace-nowrap overflow-hidden">
        {text}
      </h2>

     <p className="w-full sm:w-3/4 md:w-1/2 text-center text-sm sm:text-base max-sm:text-lg max-sm:mt-2 lg:text-xl">
  {headerIntroData.description.en}
</p>



      <div className="button-container flex items-center justify-center  flex-wrap gap-4 mt-10  p-4">
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index}
            label={button.label.en}
            iconSVG={button.icon}
            link={`#${button.name.toLocaleLowerCase()}`}
            buttoncolor={button.color}
            onClick={() => {
              setActiveSection(button.name);
              setTimeOfLastClick(Date.now());
            }}
          />
        ))}
      </div>

      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2rem] sm:text-[2.6rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;
