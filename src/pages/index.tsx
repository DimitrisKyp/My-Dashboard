export default function Home() {
  return (
    <div className="space-y-16">
      {/* Studies Section */}
      <section id="studies" className="bg-gray-800 p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4">Studies</h2>
        <p className="text-gray-300">Details about your academic background and certifications.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-800 p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <p className="text-gray-300">A showcase of your professional and personal projects.</p>
      </section>

      {/* Personal Interests Section */}
      <section id="interests" className="bg-gray-800 p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4">Personal Interests</h2>
        <p className="text-gray-300">Information about your hobbies and interests outside of work.</p>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="bg-gray-800 p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4">Technologies</h2>
        <p className="text-gray-300">List of programming languages, frameworks, and tools you use.</p>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="bg-gray-800 p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
        <p className="text-gray-300">Your work history and relevant job experience.</p>
      </section>

      {/* Contact Info Section */}
      <section id="contact" className="bg-gray-800 p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4">Contact Info</h2>
        <p className="text-gray-300">How people can get in touch with you.</p>
      </section>
    </div>
  );
}
