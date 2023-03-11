import NavBar from '/src/Navigation'
export default function Projects() {
  return (
    <div className="min-h-screen bg-alana-700">
      
      <div className="mb-5 px-8">
        <NavBar />
      </div>

      <header className="text-white text-center font-playfair mt-5 text-2xl md:text-3xl uppercase"> Projects </header>
      <div className="text-white text-left text-sm md:text-base flex flex-col ml-5 mt-5 md:text-center">
        <p2 className="flex flex-row mt-5 font-bold">Final Paper:</p2>
        <ul className="ml-5 text-sm md:text-base mt-3 flex flex-col md:flex-col md:text-left">
          <li>- Project Name: Security system with facial recognition</li>
          <li>- Description: Project developed with the goal of provide more security to houses, companies, etc.</li>
          <li>- Tech Used: Python, Pycharm, OpenCV, HaarCascade, LBPH, Raspberry PI.</li>
          <li>- Prizes: TOP 10 Electronic Projects - SGTI 2021</li>
        </ul>

        <p3 className="flex flex-row mt-5 font-bold">IoT Projects:</p3>
        <ul className="ml-5 text-sm md:text-base mt-3 mb-5 flex flex-col md:flex-col md:text-left">
          <li>- Project #1: Air conditioning long-distance controller</li>
          <li>- Project #2: Television long-distance controller</li>
          <li>- Project #3: Radio frequency long-distance controller</li>
          <li>- Project #4: Long-distance relay activation </li>
          <li>- Project #5: AC voltage monitoring </li>
          <li>- Tech Used: C++, Arduino, Esp32, MQTT Protocol, Json</li>
        </ul>
        <p4 className="flex flex-row mt-5 font-bold">Web Projects:</p4>
        <ul className="ml-5 text-sm md:text-base mt-3 mb-5 flex flex-col md:flex-col md:text-left">
          <li>- PokemonAPI: JavaScript, React, Vite, Tailwind</li>
          <li>- Letter Sorter: JavaScript, React, Vite, Tailwind</li>
          <li>- Secret Santa: JavaScript, React, Vite, Tailwind</li>
          <li>- To see all my web projects, please go to my GitHub profile: <a href="https://github.com/viniciusnd" className="text-base md:text-xl text-gray-300 ml-3"><ion-icon name="logo-github"></ion-icon></a></li>
        </ul>
      </div>
    </div>
  )
}

