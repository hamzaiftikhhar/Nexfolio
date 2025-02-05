
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

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-6 py-20">
//       <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <p className="text-lg mb-4">Hello! I Am Ibrahim Memon</p>
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             A Designer who{' '}
//             <br />
//             <span className="gradient-text">
//               Judges a book
//               <br />
//               by its cover.
//             </span>
//           </h1>
//           <p className="text-gray-300 mb-8">
//             Because if the cover does not impress you what else can?
//           </p>
//           <div className="flex gap-4">
//             <a
//               href="#projects"
//               className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors"
//             >
//               View Projects
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="relative"
//         >
//           <div className="relative w-full aspect-square max-w-md mx-auto">
//             <Image
//               src="/avatar.png"
//               alt="Hero Image"
//               width={500}
//               height={500}
//               className="rounded-full"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;