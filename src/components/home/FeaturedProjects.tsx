// components/home/FeaturedProjects.tsx
import Image from 'next/image'

export default function FeaturedProjects() {
  const projects = [
    {
      title: 'Example Project',
      description: 'A web app for visualizing personalized spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      image: '/project1.png',
    },
    {
      title: 'Example Project',
      description: 'A web app for visualizing personalized spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      image: '/project2.png',
    }
  ]

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <div key={index} className="group relative">
            <div className="bg-white/5 rounded-lg p-8 transition-all duration-300 hover:bg-white/10">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    <span className="w-6 h-6">☀️</span>
                    <span className="w-6 h-6">🌙</span>
                  </div>
                </div>
                <div className="lg:w-1/2 relative h-[300px]">
                  <div className="absolute inset-0 bg-purple-600/20 rounded-lg"></div>
                  <Image
                    src="/api/placeholder/800/600"
                    alt={project.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}