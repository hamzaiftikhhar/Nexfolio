
// components/WorkExperience.tsx
export default function WorkExperience() {
  const experiences = [
    { 
      icon: "🌟",
      title: "CIB on the Mobile",
      description: "Take your first project experiences by out amazing test of project created process."
    },
    // Add other experiences with different icons
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="work-card">
            <div className="text-3xl">{exp.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <button className="learn-more-btn">LEARN MORE</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}