import { Element, Link as LinkScroll } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 border-2 border-amber-400">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              VIdeo Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 mad-md:md-4 max-md:text-5xl max-md:leading-12">
              Amazingly SImple
            </h1>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
