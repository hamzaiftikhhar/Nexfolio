
// components/home/Hero.tsx
export default function Hero() {
    return (
      <section className="max-w-4xl mx-auto text-center py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-600 opacity-20 blur-3xl rounded-full" />
          <img 
            src="/avatar.png" 
            alt="Developer Avatar" 
            className="w-24 h-24 mx-auto mb-6 relative z-10"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Hello! I Am UI Heros</h1>
        <p className="text-xl mb-4">
          A Developer who Creates everything from{' '}
          <span className="text-purple-400">nothing...</span>
        </p>
        <h2 className="text-3xl font-bold mb-2">I'm a Software Engineer.</h2>
        <p className="text-gray-300">Currently, I'm a Full Stack Developer</p>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          A self-taught UI/UX designer, functioning in the industry for 3+ years now.
          I make meaningful and delightful digital products that create an equilibrium
          between user needs and business goals.
        </p>
      </section>
    )
  }
  