const Hero = () => {
  return (
    <section
      className="bg-pink-100 h-[650px] px-10p bg-cover bg-center bg-hero-pattern text-white"

    >
      <div className="flex flex-col justify-center items-center p-4 h-full bg-opacity-30 bg-black">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md-mb-6">Create your own style</h1>
        <p className="text-sm md:text-xl mb-2 md:mb-4">Download. Print. Frame. </p>
        <button className="bg-white text-pink-400 hover:bg-pink-300 hover:text-white transition-all font-semibold rounded px-4 py-2 ">Start Now</button>
      </div>
    </section>
  );
};

export default Hero;
