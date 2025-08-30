import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-5 flex-wrap-reverse md:flex-nowrap">
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 space-y-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            <p>
              I&apos;m a skilled software engineer proficient in JavaScript,
              TypeScript and Python I also have experience developing in{" "}
              <ReactTyped
                strings={[
                  "React.js",
                  "Next.js",
                  "Nest.js",
                  "Supabase",
                  "Firebase",
                  "Google Cloud",
                ]}
                typeSpeed={80}
                backSpeed={70}
                backDelay={1000}
                className="text-white text-xl"
                loop
              />
              . I have been developing applications for 4 years. I&apos;m a
              quick learner and collaborate closely with clients to create
              efficient, scalable, and user-friendly solutions that solve
              real-world problems.
            </p>
            <p>
              I also have experience working with contemporary data analysis
              tools and techniques (e.g., Pandas, NumPy, Hadoop, Spark) from my
              training.
            </p>
            <p>
              When I&apos;m not working on projects, I like to play chess, read
              on tech trends, and enjoy outdoors activities.
            </p>
            <p>Let&apos;s work together to bring ideas to life!</p>
          </motion.div>
        </div>
        <img
          src="/me.jpg"
          alt="me"
          className="w-4/5 mx-auto rounded-[20px] md:w-1/3 max-h-[470px] object-cover"
        />
      </div>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
