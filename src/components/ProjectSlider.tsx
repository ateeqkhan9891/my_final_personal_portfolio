import bannerBg from "../assets/img/bannerbg.webp";
import React, { useRef } from "react";
import Button from "./Button";
import LiveTicker from "./ParallaxText";
import { projectsData, toastMessages } from "../assets/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { ToastContainer, toast } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
// import type { IconType } from "react-icons";

// ✅ Get correct Project type from data directly
type Project = (typeof projectsData)[number];

const ProjectSlider: React.FC = () => {
  const { ref: sectionRef } = useSectionInView("Projects");
  const animationRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: animationRef,
    offset: ["1 1", "1.3 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const notifyServerRequest = () => {
    toast.info(toastMessages.loadingProject.en, {
      toastId: "server-request",
    });
  };

  const swiperConfig = {
    effect: "cards" as const,
    grabCursor: true,
    modules: [EffectCards, Autoplay, Pagination],
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    pagination: { clickable: true },
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="relative w-full flex flex-col gap-2 overflow-x-clip"
        aria-label="Projects Section"
      >
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          className="w-max text-3xl p-3"
        />

        <div
          className="bg-[--darkblue] -rotate-3 flex justify-center items-center scale-110 pt-32 pb-32 max-lg:pt-16 max-lg:pb-16 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col gap-6 mb-24 rotate-3 justify-between items-center max-lg:w-[100vw]">
            <motion.div
              ref={animationRef}
              style={{
                scale: scaleProgress,
                opacity: opacityProgress,
                textAlign: "center",
              }}
              aria-hidden="true"
            >
              <p className="text-[--white] mt-16 mb-6">
                <span className="text-[--orange]">&lt;</span>
                Projects
                <span className="text-[--orange]">&gt;</span>
              </p>
              <h2 className="text-[--white] mb-16">My Projects</h2>
            </motion.div>

            {/* Desktop Swiper */}
            <Swiper
              {...swiperConfig}
              className="w-[60vw] max-lg:hidden min-[1921px]:px-96"
              role="region"
              aria-label="Project Carousel"
            >
              {projectsData.map((project: Project, index: number) => (
                <SwiperSlide
                  key={`desktop-${index}`}
                  className="bg-[--darkblue] text-[--white] flex flex-row justify-between rounded-2xl p-20 text-left"
                >
                  <div className="w-[55%] flex flex-col gap-12 justify-between">
                    <h2>{project.title}</h2>
                    <p>{project.description_EN}</p>
                    <div className="technologies">
                      <h3>Technologies</h3>
                      <div className="grid grid-cols-6 gap-10 p-4">
                        {project.technologies.map((technology, innerIndex) => (
                          <img
                            key={`tech-${index}-${innerIndex}`}
                            src={technology.icon}
                            alt={`${technology.name} icon`}
                            className="h-[5rem] w-[60%]"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={technology.name}
                            loading="lazy"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="buttons flex gap-10">
                      <Button
                        label="Live Demo"
                        link={project.deploymenturl}
                        iconSVG={project.deploymenticon}
                        buttoncolor={project.colors.main}
                        iconcolor={project.colors.icon}
                        onClick={notifyServerRequest}
                        aria-label={`View live demo of ${project.title}`}
                      />
                      <Button
                        label="Github Repository"
                        link={project.githuburl}
                        iconSVG={project.githubicon}
                        buttoncolor={project.colors.main}
                        iconcolor={project.colors.icon}
                        aria-label={`View Github repository for ${project.title}`}
                      />
                    </div>
                  </div>
                  <div className="relative h-[40rem] overflow-hidden rounded-xl w-[40%] transition-all duration-200 shadow-2xl">
                    <img
                      src={project.image}
                      alt={`${project.title} project mockup`}
                      className="w-full h-auto transition-all duration-[6000ms] transform opacity-100 hover:translate-y-[-50%]"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Mobile/Tablet View */}
            {projectsData.map((project: Project, index: number) => (
              <article
                key={`mobile-${index}`}
                className="bg-[--darkblue] flex flex-col gap-10 w-[80%] border-[--lightblue] border-[0.4rem] p-8 rounded-xl mb-10 min-[1024px]:hidden max-lg:w-[90%]"
                role="article"
                aria-label={`Project: ${project.title}`}
              >
                <h2 className="text-[--white]">{project.title}</h2>
                <img
                  src={project.image}
                  alt={`${project.title} project mockup`}
                  className="h-[35vh] w-full object-cover object-top rounded-3xl"
                  loading="lazy"
                />
                <div className="buttons flex gap-10 max-lg:flex-col">
                  <Button
                    label="Live Demo"
                    link={project.deploymenturl}
                    iconSVG={project.deploymenticon}
                    buttoncolor={project.colors.main}
                    iconcolor={project.colors.icon}
                    aria-label={`View live demo of ${project.title}`}
                  />
                  <Button
                    label="Github Repository"
                    link={project.githuburl}
                    iconSVG={project.githubicon}
                    buttoncolor={project.colors.main}
                    iconcolor={project.colors.icon}
                    aria-label={`View Github repository for ${project.title}`}
                  />
                </div>
                <p className="text-[--white] max-lg:text-4xl">
                  {project.description_EN}
                </p>
                <div className="technologies">
                  <h3 className="text-[--white]">Technologies</h3>
                  <div className="grid grid-cols-3 gap-10 p-4">
                    {project.technologies.map((technology, innerIndex) => (
                      <img
                        key={`tech-mobile-${index}-${innerIndex}`}
                        src={technology.icon}
                        alt={`${technology.name} icon`}
                        className="h-[5rem] w-[60%]"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={technology.name}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <LiveTicker />
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          backgroundColor: "var(--orange)",
        }}
      />
    </>
  );
};

export default ProjectSlider;
