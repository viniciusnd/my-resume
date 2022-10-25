import NavBar from '/src/Navigation'
export default function Skills() {
  return (
    <div className="min-h-screen bg-red-700">

      <div className="mb-5 px-8">
        <NavBar />
      </div>
      
      <header className="text-white text-center font-playfair mt-5 text-3xl uppercase"> Skills </header>
      <div className="text-white text-left text-lg flex flex-col ml-5 mt-5 font-bold md:text-2xl">
        <p1 className="flex flex-row mt-10 md:ml-5">Microsoft Office: <img src="/imgs/word.png" className="w-8 ml-2 md:w-10 md:ml-5" /> <img src="/imgs/excel.png" className="w-8 ml-2 md:w-10 md:ml-5" /> <img src="/imgs/powerpoint.png" className="w-8 ml-2 md:w-10 md:ml-5" /></p1>
        <p2 className="flex flex-row mt-10 md:ml-5">Software Development: <img src="/imgs/js.png" className="w-5 ml-2 md:w-10 md:ml-5" /> <img src="/imgs/html.png" className="w-5 ml-2 md:w-10 md:ml-5" /> <img src="/imgs/css.png" className="w-5 ml-2 md:w-10 md:ml-5" /> <img src="/imgs/nodejs.png" className="w-5 ml-2 md:w-10 md:ml-5" /> <img src="/imgs/react.png" className="w-5 ml-2 md:w-10 md:ml-5" /> <img src="/imgs/python.png" className="w-5 ml-2 md:w-10 md:ml-5" /><img src="/imgs/c.png" className="w-5 ml-2 md:w-10 md:ml-5" /> <img src="/imgs/c++.png" className="w-5 ml-2 md:w-10 md:ml-5" /></p2>
        <p3 className="flex flex-row mt-10 md:ml-5">Hardware Development: <img src="/imgs/arduino.png" className="w-8 ml-2 md:w-10 md:ml-5" /> <img src="/imgs/raspberry.png" className="w-12 ml-2 md:w-10 md:ml-5" /></p3>
      </div>
    </div>
  )
}

