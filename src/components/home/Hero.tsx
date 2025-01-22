import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg mb-4">Hello! I Am Ibrahim Memon</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A Designer who{' '}
            <br />
            <span className="gradient-text">
              Judges a book
              <br />
              by its cover.
            </span>
          </h1>
          <p className="text-gray-300 mb-8">
            Because if the cover does not impress you what else can?
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src="/avatar.png"
              alt="Hero Image"
              width={500}
              height={500}
              className="rounded-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;