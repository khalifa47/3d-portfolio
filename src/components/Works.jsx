/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, readme } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  isMobile,
  description,
  tags,
  image,
  link,
  creds,
  source_code_link,
}) => {
  const tilt = (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ${
        link ? "cursor-pointer" : ""
      }`}
      onClick={() => link && window.open(link, "_blank")}
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-contain scale-105 rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {creds && (
            <div
              onClick={() => window.open(creds, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transform transition-all"
            >
              <img
                src={readme}
                alt="source code"
                className="w-1/2 h-1/2 object-contain rounded-full"
              />
            </div>
          )}
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient ml-1 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transform transition-all"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
  return isMobile ? (
    <div>{tilt}</div>
  ) : (
    <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
      {tilt}
    </motion.div>
  );
};

const Works = () => {
  const isMobile = globalThis.isMobile;
  const headings = (
    <>
      <p className={`${styles.sectionSubText} `}>My work</p>
      <h2 className={`${styles.sectionHeadText}`}>Projects🛠️.</h2>
    </>
  );
  const intro = (
    <span className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
      The following projects showcase my skills and experience through
      real-world examples of my work. Each project is briefly described with
      links to code repositories, live demos, and/or login credentials (if
      necessary) in it. They reflect my ability to solve complex problems, work
      with different technologies, and manage projects effectively.
    </span>
  );

  return (
    <>
      <div>
        {isMobile ? (
          <div>{headings}</div>
        ) : (
          <motion.div variants={textVariant()}>{headings}</motion.div>
        )}

        <div className="w-full flex">
          {isMobile ? (
            <p>{intro}</p>
          ) : (
            <motion.p variants={fadeIn("", "", 0.1, 1)}>{intro}</motion.p>
          )}
        </div>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            isMobile={isMobile}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
