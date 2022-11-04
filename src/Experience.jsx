import NavBar from '/src/Navigation'
export default function Experience() {
  return (
    <div className="min-h-screen bg-red-700">
      <div className="mb-5 px-8">
        <NavBar />
      </div>
      <header className="text-white text-center font-playfair mt-5 text-2xl md:text-3xl uppercase"> Experiences </header>
      <div className="text-white text-left text-sm md:text-base flex flex-col ml-5 mt-5 md:text-center">
        <p1 className="flex flex-row mt-5 font-bold">Falcão Bauer:</p1>
        <ul className="ml-5 text-sm md:text-base mt-3 flex flex-col md:flex-col md:text-left">
          <li>- Role: Lab Assistant</li>
          <li>- Function: Perform electrical tests on appliances in order to ensure it's security.</li>
          <li>- Period: 3 Months (Apr, 2017 - Jul, 2022)</li>
        </ul>
        <p2 className="flex flex-row mt-5 font-bold">Delta Greentech:</p2>
        <ul className="ml-5 text-sm md:text-base mt-3 flex flex-col md:flex-col md:text-left">
          <li>- Role: Intern</li>
          <li>- Function: Preparation of technical budgets, <br/> ~ Contact with customers and suppliers, <br/> ~ Control and organization of proposals </li>
          <li>- Period: 8 Months (Dec, 2019 - Aug, 2020)</li>
        </ul>
        <p3 className="flex flex-row mt-5 font-bold">S3 Aeronautical Maintanence:</p3>
        <ul className="ml-5 text-sm md:text-base mt-3 flex flex-col md:flex-col md:text-left">
          <li>- Role: Electronic Technician</li>
          <li>- Function: Perform troubleshooting, repair and tests, <br/> ~ Repair evaluation process, <br/> ~ Components selections, <br/> ~ Component replacement and circuit assembly, <br/> ~ Interaction with aeronautical manuals, <br/> ~ Contact with suppliers and customers, <br/> ~ Incoming inspectiion and final inspection, <br/> ~ Inventory management </li>
          <li>- Period: 12 Months (Apr, 2021 - Apr, 2022)</li>
        </ul>
        <p4 className="flex flex-row mt-5 font-bold">Fuse IoT:</p4>
        <ul className="ml-5 text-sm md:text-base mt-3 flex flex-col md:flex-col md:text-left">
          <li>- Role: Junior Developer</li>
          <li>- Function: Software and hardware development</li>
          <li>- Period: 3 Months (May, 2022 - Aug, 2022)</li>
        </ul>
        <p4 className="flex flex-row mt-5 font-bold">MSX International:</p4>
        <ul className="ml-5 text-sm md:text-base mt-3 flex flex-col mb-3 md:flex-col md:text-left">
          <li>- Role: Software Developer</li>
          <li>- Function: Software test and validation</li>
          <li>- Period: Currently (Aug, 2022 - )</li>
        </ul>
      </div>
    </div>
  )
}

