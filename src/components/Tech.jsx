import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-20 h-20 sm:w-28 sm:h-28" key={technology.name}>
          {globalThis.isMobile ? (
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-16 h-16 mx-auto"
            />
          ) : (
            <BallCanvas icon={technology.icon} />
          )}

          <div className="text-center text-sm text-slate-300 select-none">
            {technology.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
