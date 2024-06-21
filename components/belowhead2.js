const Card = ({ imageSrc, title, description }) => {
    return (
      <div className="bg-transparent rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl ease-out duration-300">
        {/* <div className="relative pb-56">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover" 
            className="rounded-t-lg"
          />
        </div> */}
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
        {/* <div className="w-2/3 h-full">
        <div data-aos="fade-right" className=" w-full hidden md:border-b md:rounded-xl flex-col md:block lg:w-2/3 lg:mr-4 md:text-teal-800">
          <h1 className="typewriter md:bubble-text flex md:text-2xl text-white justify-center md:dark:border-neutral-800 md:dark:bg-zinc-800/30 md:dark:from-inherit lg:static rounded-xl w-full">
           Hey Geeks ✌️, This is&nbsp;<code className=" font-mono text-teal-300 font-bold">DROO...</code>
           <code className="blinking-cursor font-mono text-teal-300 font-bold">|</code>
          </h1>
        </div>
        <div data-aos="fade-right" className=" w-full hidden md:border-b md:rounded-xl flex-col md:block lg:w-2/3 lg:mr-4 md:text-teal-800">
          <h1 className="md:bubble-text flex md:text-2xl text-white justify-center md:dark:border-neutral-800 md:dark:bg-zinc-800/30 md:dark:from-inherit lg:static rounded-xl w-full">
           Hey Geeks ✌️, This is&nbsp;<code className=" font-mono text-teal-300 font-bold">DROO...</code>
           <code className="blinking-cursor font-mono text-teal-300 font-bold">|</code>
          </h1>
        </div>
        <div data-aos="fade-right" className=" w-full hidden md:border-b md:rounded-xl flex-col md:block lg:w-2/3 lg:mr-4 md:text-teal-800">
          <h1 className="md:bubble-text flex md:text-2xl text-white justify-center md:dark:border-neutral-800 md:dark:bg-zinc-800/30 md:dark:from-inherit lg:static rounded-xl w-full">
           Hey Geeks ✌️, This is&nbsp;<code className=" font-mono text-teal-300 font-bold">DROO...</code>
           <code className="blinking-cursor font-mono text-teal-300 font-bold">|</code>
          </h1>
        </div>
        <div data-aos="fade-right" className=" w-full hidden md:border-b md:rounded-xl flex-col md:block lg:w-2/3 lg:mr-4 md:text-teal-800">
          <h1 className="md:bubble-text flex md:text-2xl text-white justify-center md:dark:border-neutral-800 md:dark:bg-zinc-800/30 md:dark:from-inherit lg:static rounded-xl w-full">
           Hey Geeks ✌️, This is&nbsp;<code className=" font-mono text-teal-300 font-bold">DROO...</code>
           <code className="blinking-cursor font-mono text-teal-300 font-bold">|</code>
          </h1>
        </div>
        <div data-aos="fade-right" className=" w-full hidden md:border-b md:rounded-xl flex-col md:block lg:w-2/3 lg:mr-4 md:text-teal-800">
          <h1 className="md:bubble-text flex md:text-2xl text-white justify-center md:dark:border-neutral-800 md:dark:bg-zinc-800/30 md:dark:from-inherit lg:static rounded-xl w-full">
           Hey Geeks ✌️, This is&nbsp;<code className=" font-mono text-teal-300 font-bold">DROO...</code>
           <code className="blinking-cursor font-mono text-teal-300 font-bold">|</code>
          </h1>
        </div>
        <div data-aos="fade-right" className=" w-full hidden md:border-b md:rounded-xl flex-col md:block lg:w-2/3 lg:mr-4 md:text-teal-800">
          <h1 className="md:bubble-text flex md:text-2xl text-white justify-center md:dark:border-neutral-800 md:dark:bg-zinc-800/30 md:dark:from-inherit lg:static rounded-xl w-full">
           Hey Geeks ✌️, This is&nbsp;<code className=" font-mono text-teal-300 font-bold">DROO...</code>
           <code className="blinking-cursor font-mono text-teal-300 font-bold">|</code>
          </h1>
        </div>
        <div data-aos="fade-right" className=" w-full hidden md:border-b md:rounded-xl flex-col md:block lg:w-2/3 lg:mr-4 md:text-teal-800">
          <h1 className="md:bubble-text flex md:text-2xl text-white justify-center md:dark:border-neutral-800 md:dark:bg-zinc-800/30 md:dark:from-inherit lg:static rounded-xl w-full">
           Hey Geeks ✌️, This is&nbsp;<code className=" font-mono text-teal-300 font-bold">DROO...</code>
           <code className="blinking-cursor font-mono text-teal-300 font-bold">|</code>
          </h1>
        </div>
        <div data-aos="fade-right" className=" w-full hidden md:border-b md:rounded-xl flex-col md:block lg:w-2/3 lg:mr-4 md:text-teal-800">
          <h1 className="md:bubble-text flex md:text-2xl text-white justify-center md:dark:border-neutral-800 md:dark:bg-zinc-800/30 md:dark:from-inherit lg:static rounded-xl w-full">
           Hey Geeks ✌️, This is&nbsp;<code className=" font-mono text-teal-300 font-bold">DROO...</code>
           <code className="blinking-cursor font-mono text-teal-300 font-bold">|</code>
          </h1>
        </div>
        <div data-aos="fade-right" className=" w-full hidden md:border-b md:rounded-xl flex-col md:block lg:w-2/3 lg:mr-4 md:text-teal-800">
          <h1 className="md:bubble-text flex md:text-2xl text-white justify-center md:dark:border-neutral-800 md:dark:bg-zinc-800/30 md:dark:from-inherit lg:static rounded-xl w-full">
           Hey Geeks ✌️, This is&nbsp;<code className=" font-mono text-teal-300 font-bold">DROO...</code>
           <code className="blinking-cursor font-mono text-teal-300 font-bold">|</code>
          </h1>
        </div>
        <div data-aos="fade-right" className=" w-full hidden md:border-b md:rounded-xl flex-col md:block lg:w-2/3 lg:mr-4 md:text-teal-800">
          <h1 className="md:bubble-text flex md:text-2xl text-white justify-center md:dark:border-neutral-800 md:dark:bg-zinc-800/30 md:dark:from-inherit lg:static rounded-xl w-full">
           Hey Geeks ✌️, This is&nbsp;<code className=" font-mono text-teal-300 font-bold">DROO...</code>
           <code className="blinking-cursor font-mono text-teal-300 font-bold">|</code>
          </h1>
        </div>
        
        
        </div> */}
        
            <div data-aos="fade-right" className="hidden md:block shadow-sky-400 shadow-lg text-black w-full md:w-1/3 p-4">
              <Card
                imageSrc="/images/image1.jpg"
                title={"Myself | Academics"}
                description="I'm Dhruv Jain, a driven Developer with a fervor for innovation and technology, I've embarked on an exhilarating journey through the dynamic realms of web development and data structures & algorithms (DSA). My academic pursuits have honed my analytical prowess, enabling me to craft seamless digital experiences and solve complex problems with elegant solutions. My passion for coding transcends mere academics, intertwining with a vision to redefine digital landscapes through creativity and technical finesse. "
                
              />
            </div>
  
        <div data-aos="fade-down" className="md:w-1/3 flex justify-center flex-col items-center mt-4 lg:mt-0">
          <img 
            src="/profilepic.jpg"
            alt="Profile Picture"
            className="rounded-full shadow-sky-400 shadow-lg border border-x-2 border-y-2 border-teal-300 box-shadow h-44 w-44 lg:h-32 lg:w-72 lg:h-72 object-cover transition-transform transform hover:shadow-sky-400 hover:scale-110 hover:shadow-xl ease-out duration-300"
          />
          <h1 className="text-2xl md:text-5xl my-10">Dhruv Jain</h1>
          <p className="md:text-xl">CS Grad</p>
          <p className="flex flex-row">Founder -&nbsp;<a href="#" className="text-teal-300">Weblanders</a></p>
          
          <p>Frontend Developer</p>
        </div>
        {/* <div data-aos="fade-right" className="md:hidden block shadow-sky-400 shadow-lg text-black w-full md:w-1/3 p-4">
              <Card
                imageSrc="/images/image1.jpg"
                title={"Myself | Academics"}
                description="I'm Dhruv Jain, a driven Developer with a fervor for innovation and technology, I've embarked on an exhilarating journey through the dynamic realms of web development and data structures & algorithms (DSA). My academic pursuits have honed my analytical prowess, enabling me to craft seamless digital experiences and solve complex problems with elegant solutions. My passion for coding transcends mere academics, intertwining with a vision to redefine digital landscapes through creativity and technical finesse. "
                
              />
            </div>
            <div data-aos="fade-left" className="md:hidden block shadow-sky-400 shadow-lg text-black w-full md:w-1/3 p-4">
              <Card
                imageSrc="/images/image1.jpg"
                title={"Entrepreneurial Venture"}
                description="This vision materialized into Weblanders, a digital freelancing agency with the aim of merging artistry with technology. At Weblanders, we are not just creating websites; we are designing digital masterpieces that resonate with contemporary aesthetics and functionality. Our team of adept professionals brings diverse expertise to the table, ensuring that every client’s vision is not only realized but elevated beyond expectations. Through Weblanders, I aspire to leave an indelible mark on the digital world, one pixel at a time."
              />
            </div> */}
        <div data-aos="fade-left" className="hidden md:block shadow-sky-400 shadow-lg text-black w-full md:w-1/3 p-4">
              <Card
                imageSrc="/images/image1.jpg"
                title={"Entrepreneurial Venture"}
                description="This vision materialized into Weblanders, a digital freelancing agency with the aim of merging artistry with technology. At Weblanders, we are not just creating websites; we are designing digital masterpieces that resonate with contemporary aesthetics and functionality. Our team of adept professionals brings diverse expertise to the table, ensuring that every client’s vision is not only realized but elevated beyond expectations. Through Weblanders, I aspire to leave an indelible mark on the digital world, one pixel at a time."
              />
            </div>
            
  
      </div>
  
  
  
      
  
  
  
          
    );
  };
  
  export default AnimatedText;
  