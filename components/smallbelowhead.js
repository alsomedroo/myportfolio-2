const Card = ({ imageSrc, title, description }) => {
    return (
      <div className="bg-transparent rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl ease-out duration-300">
        
        <div className="md:p-6 p-0">
          <h2 className="text-xl text-teal-400 font-bold mb-2">{title}</h2>
          <p className="text-white">{description} <p className="blinking-cursor text-teal-200">|</p></p>
          
        </div>
      </div>
    );
  };
  const AnimatedText = () => {
    return (
      <div className="max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex mt-4 relative z-40">
        <div data-aos="fade-right" className="my-20 md:hidden block shadow-sky-400 shadow-lg text-black w-full md:w-1/3 p-4">
            <Card
              imageSrc="/images/image1.jpg"
              title={"Myself | Academics"}
              description="I'm Dhruv Jain, a driven Developer with a fervor for innovation and technology. I code , I teach on Youtube and Instagram. I've embarked on an exhilarating journey through the dynamic realms of web development and data structures & algorithms (DSA). I'm currently persuing B.tech from K.I.E.T (Ghaziabad). Frontend is my love, DSA is my wife (End of the day, its the most important thing). I aspire to leave an indelible mark on the digital world, one pixel at a time. "
              
            />
          </div>
          <div data-aos="fade-left" className="md:hidden block shadow-sky-400 shadow-lg text-black w-full md:w-1/3 p-4">
            <Card
              imageSrc="/images/image1.jpg"
              title={"Entrepreneurial Venture"}
              description="It starts from the childhood when I used to see my father as my role model for my Entrepreneurial Journey, and it seems to be completed when I with my childhood friend founded a digital freelancing agency with the aim of merging artistry with technology. At Weblanders, we are not just creating websites; we are designing digital masterpieces that resonate with contemporary aesthetics and functionality."
            />
          </div> 

          </div>



    



        
);
};

export default AnimatedText;
