import NavBar from '/src/Navigation'
import { Link } from 'react-router-dom'
export default function Education() {
  return (
    <div className="min-h-screen bg-red-700">
      <div className="mb-5 px-8">
        <NavBar />
      </div>
      <header className="text-white text-center font-playfair mt-5 text-2xl md:text-3xl uppercase"> Education </header>
      <div className="text-white text-left text-sm md:text-base flex flex-col ml-5 mt-5 md:text-center">
        <p1 className="flex flex-row mt-5 font-bold">Technical Degree:</p1>
        <ul className="ml-5 text-sm md:text-base mt-3 flex flex-col md:flex-col md:text-left space-x-0 space-y-0">
          <li>- Course: Electronics</li>
          <li>- Duration: 3 Years</li>
          <li>- Graduated in: 2016</li>
        </ul>

        <p2 className="flex flex-row mt-5 font-bold"> College Degree:</p2>
        <ul className="ml-5 text-sm md:text-base mt-3 flex flex-col md:flex-col md:text-left">
          <li>- Course: Electronic Engineering</li>
          <li>- Duration: 5 Years</li>
          <li>- Graduated in: 2022</li>
        </ul>

        <p3 className="flex flex-row mt-5 font-bold">Languages:</p3>
        <ul className="ml-5 text-sm md:text-base mt-3 mb-5 flex flex-col md:flex-col md:text-left">
          <li>- Course: English</li>
          <li>- Duration: 6 Years</li>
          <li>- Graduated in: 2016</li>
          <li>- Certifications: C1</li>
        </ul>
        <p4 className="flex flex-row mt-5 font-bold">Graduate Course:</p4>
        <ul className="ml-5 text-sm md:text-base mt-3 mb-5 flex flex-col md:flex-col md:text-left">
          <li>- Desired Course Area: Software Development</li>
          <li>- Status: Loading...</li>
          <li>- Starting in: 2023</li>
        </ul>
        <p5 className="flex flex-row mt-5 font-bold">Personal Studies:</p5>
        <ul className="ml-5 text-sm md:text-base mt-3 mb-5 flex flex-col md:flex-col md:text-left">
          <li>- Currently I am studying by myself</li>
          <li>- Goal: Become a Full-Stack Developer</li>
          <li>- For more details of what I am studying go to <Link to="/skills">"Skills"</Link></li>
        </ul>
      </div>
    </div>
  )
}

