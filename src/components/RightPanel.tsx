export default function RightPanel() {
  return (
    <nav className="flex flex-col items-start space-y-6 sticky top-16">
      <a href="#studies" className="text-lg text-gray-400 hover:text-white transition duration-200">Studies</a>
      <a href="#projects" className="text-lg text-gray-400 hover:text-white transition duration-200">Projects</a>
      <a href="#interests" className="text-lg text-gray-400 hover:text-white transition duration-200">Personal Interests</a>
      <a href="#technologies" className="text-lg text-gray-400 hover:text-white transition duration-200">Technologies</a>
      <a href="#experience" className="text-lg text-gray-400 hover:text-white transition duration-200">Work Experience</a>
      <a href="#contact" className="text-lg text-gray-400 hover:text-white transition duration-200">Contact Info</a>
    </nav>
  );
}
