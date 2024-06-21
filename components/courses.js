import Image from 'next/image';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className=" rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl ease-out duration-300">
      <div className="relative pb-56">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          content="fir"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-10">
        <a href="#" className="md:text-xl text-sm text-white flex justify-center">{title}</a>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="bg-transparent my-20 rounded-2xl shadow-sky-400 shadow-lg py-8 w-full">
       <section id="Courses">
       </section>
      <div className=" mx-auto px-4">
        <div className='items-center justify-center flex loader'>
        <span data-aos="fade-down" className="loader md:text-5xl text-2xl font-arial tracking-wider text-white text-center mb-8">
          C
        </span>
        <span data-aos="fade-down" className="loader md:text-5xl text-2xl font-arial tracking-wider text-white text-center mb-8">
          o
        </span>
        <span data-aos="fade-down" className="loader md:text-5xl text-2xl font-arial tracking-wider text-white text-center mb-8">
          u
        </span>
        <span data-aos="fade-down" className="loader md:text-5xl text-2xl font-arial tracking-wider text-white text-center mb-8">
          r
        </span>
        <span data-aos="fade-down" className="loader md:text-5xl text-2xl font-arial tracking-wider text-white text-center mb-8">
          s
        </span>
        <span data-aos="fade-down" className="loader md:text-5xl text-2xl font-arial tracking-wider text-white text-center mb-8">
          e
        </span>
        <span data-aos="fade-down" className="loader md:text-5xl text-2xl font-arial tracking-wider text-white text-center mb-8">
          s
        </span>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div data-aos="fade-right" className=" w-full md:w-1/3 p-4">
            <a href='#'><Card
              imageSrc="/css.jpg"
              title="CSS"
              
            /></a>
          </div>
          <div data-aos="fade-up" className="w-full md:w-1/3 p-4">
          <a href='#'><Card
              imageSrc="/dbms.jpg"
              title="DBMS"
              
            /></a>
          </div>
          <div data-aos="fade-left" className="w-full md:w-1/3 p-4">
          <a href='#'><Card
              imageSrc="/js.jpg"
              title="Javascript"
              
            /></a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CardContainer;
