import Button from '../components/Button';

export default function Home() {
    return (
      <div className="container mx-auto mt-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-6">Showcasing my knowledge, skills, and experience.</p>
        <Button>View My Projects</Button>
      </div>
    );
  }