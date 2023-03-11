import NavBar from '/src/Navigation'
export default function Experience() {
  return (
    <div className="min-h-screen bg-alana-700">
      <div className="mb-5 px-8">
        <NavBar />
      </div>
      <header className="text-white text-center font-playfair mt-5 text-2xl md:text-3xl uppercase"> Experiences </header>
      <div className="text-white text-left text-sm md:text-base flex flex-col ml-5 mt-5 md:text-center">
        <p4 className="flex flex-row mt-5 font-bold">MSX International | Zeentech:</p4>
        <ul className="ml-5 text-sm md:text-base mt-3 flex flex-col mb-3 md:flex-col md:text-left">
          <li>- Role: Software Engineer | Aug 2022 - Present</li>
          <li>- Activities: Software test and validation | Process Development | Creation and Management of Reports</li>
          <li>- Tech: Unit Test, SIL, Matlab, Simulink, CAN, C, C++, Python, SCRUM, Code Coverage(CTC++), GIT, JIRA</li>
        </ul>
        <p4 className="flex flex-row mt-5 font-bold">Fuse IoT:</p4>
        <ul className="ml-5 text-sm md:text-base mt-3 flex flex-col md:flex-col md:text-left">
          <li>- Role: Junior Developer | May 2022 - Aug 2022</li>
          <li>- Activities: Software and Hardware development and DevOps</li>
          <li>- Tech: JavaScript, NodeRed, C++, Docker, Grafana, GIT, Arduino, Esp32</li>
        </ul>
        <p4 className="flex flex-row mt-5 font-bold">Other Companies:</p4>
        <ul className="ml-5 text-sm md:text-base mt-3 flex flex-col md:flex-col md:text-left">
          <li>- S3 Aeronautical Maintanence | Electronic & Quality Technician | Apr 2021 - Apr 2022 </li>
          <li>- Delta Greentech | Engineering Intern | Dec 2019 - Aug 2020 </li>
          <li>- Falcão Bauer | Electronics Internship | Apr 2017 - Jul 2022 </li>
        </ul>
      </div>
    </div>
  )
}

