import Image from 'next/image';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-transparent rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl ease-out duration-300">
      <div className="relative pb-56">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="fit"
          className="rounded-t-lg h-8 md:h-full"
        />
      </div>
      <div className="md:p-24 p-10">
        <h2 className="md:text-xl font-arial text-sm text-white flex justify-center">{title}</h2>
        <a href="#" className="text-teal-300 flex justify-center">{description}</a>
      </div>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="bg-transparent items-center justify-center my-20 rounded-lg shadow-sky-400 shadow-lg py-8 w-full">
       <section id="Projects">
       </section>
      <div className="items-center justify-center mx-auto px-4">
        <div className="items-center justify-center flex w-full loader ">
        <span className="hidden md:block loader md:text-5xl text-lg font-arial tracking-wider text-teal-400 text-center mb-8">
          M
        </span>
        <span className="hidden md:block loader md:text-5xl text-lg font-arial tracking-wider text-teal-400 text-center mb-8">
          y
        </span>
        <span className="hidden md:block loader md:text-5xl text-lg font-arial tracking-wider text-teal-400 text-center mb-8">
        &nbsp;
        </span>
        <span className="loader md:text-5xl text-2xl font-arial tracking-wider text-teal-400 text-center mb-8">
          P
        </span>
        <span className="loader md:text-5xl text-2xl font-arial tracking-wider text-teal-400 text-center mb-8">
          r
        </span>
        <span className="loader md:text-5xl text-2xl font-arial tracking-wider text-teal-400 text-center mb-8">
          o
        </span>
        <span className="loader md:text-5xl text-2xl font-arial tracking-wider text-teal-400 text-center mb-8">
          j
        </span>
        <span className="loader md:text-5xl text-2xl font-arial tracking-wider text-teal-400 text-center mb-8">
          e
        </span>
        <span className="loader md:text-5xl text-2xl font-arial tracking-wider text-teal-400 text-center mb-8">
          c
        </span>
        <span className="loader md:text-5xl text-2xl font-arial tracking-wider text-teal-400 text-center mb-8">
          t
        </span>
        <span className="loader md:text-5xl text-2xl font-arial tracking-wider text-teal-400 text-center mb-8">
          s
        </span>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div data-aos="fade-right" className="text-black  w-full md:w-1/3 p-4">
            <a href='https://www.amanmithaiwala.com/'><Card
              imageSrc="/logo.png"
              title={"Aman Mithaiwala"}
              description=""
            /></a>
          </div>
          <div data-aos="fade-up" className="text-black h-full w-full md:w-1/3 p-4">
            <a href='https://myportfolio-2-alsomedroos-projects.vercel.app/'><Card
              imageSrc="/port.png"
              title={"Portfolio"}
              description=""
            /></a>
          </div>
          {/* <div data-aos="fade-left" className="text-black w-full md:w-1/3 p-4">
            <a href='#'><Card
              imageSrc="/doodle2.jpg"
              title={"Clone Website"}
              description=""
            /></a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
