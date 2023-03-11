import {Link} from "react-router-dom"
export default function Home() {
  return (
    <div className="min-h-screen bg-alana-700">
      <div className="flex flex-row justify-center">
        <header className="mt-5 text-white font-playfair text-xl md:text-3xl"> Pedro Vinicius </header>
      </div>
      <div className="flex justify-center">
        <h1 className="font-bold font-amiri text-base md:text-2xl text-white text-center items-center p-12">
          Hello, dear visitant. My name is Pedro and now you are on my resumé page. By navegating throuth the pages you can get to know a little bit more about my professional and academic journey and also get to know what I want to do next, what my goals are.
          The intention of this page is to tell my professional and academic journey and to help you find how can I fit into your company or project and how we can help each other accomplish our goals.
          <h2 className="text-base md:text-lg text-left mt-5">
            If after navegating through the pages you get interested in talking to me, here's the best ways to reach me:
          </h2>
          <span className="text-base md:text-xl text-left mt-5 flex flex-row text-gray-300"><ion-icon name="mail-outline"></ion-icon><p1 className="text-sm md:text-lg ml-3 text-white"> vinicius.santosnd@gmail.com</p1></span>
          <span className="text-base md:text-xl text-left mt-5 flex flex-row text-gray-300"><ion-icon name="logo-whatsapp"></ion-icon><p2 className="text-sm md:text-lg ml-3 text-white"> +55 (12) 99705-3854</p2></span>

          <span className="text-left text-base md:text-xl mt-5 flex flex-row text-gray-500">
            <a href="https://www.linkedin.com/in/pedro-vinicius-nascimento-dos-santos-95b341149/"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="https://github.com/viniciusnd" className="ml-3"><ion-icon name="logo-github"></ion-icon></a>
          </span>
        </h1>

      </div>
      <div className="space-y-5 flex flex-col items-center text-white font-bold font-josefin justify-center md:space-y-0 md:flex-row md:space-x-10">
        <Link to="/about"><button className="bg-alana-500 border rounded-xl border-none px-4 md:px-8 py-2 md:py-3 uppercase ease-in-out duration-300 hover:bg-alana-300 hover:scale-110 hover:text-black "> About Me </button></Link>
        <Link to="/education"><button className="bg-alana-500 border rounded-xl border-none px-3 md:px-7 py-2 md:py-3 uppercase ease-in-out duration-300 hover:bg-alana-300 hover:scale-110 hover:text-black"> Education </button></Link>
        <Link to="/skills"><button className="bg-alana-500 border rounded-xl border-none px-8 md:px-12 py-2 md:py-3 uppercase ease-in-out duration-300 hover:bg-alana-300 hover:scale-110 hover:text-black"> Skills </button></Link>
        <Link to="/projects"><button className="bg-alana-500 border rounded-xl border-none px-5 md:px-9 py-2 md:py-3 uppercase ease-in-out duration-300 hover:bg-alana-300 hover:scale-110 hover:text-black"> Projects </button></Link>
        <Link to="/experience"><button className="bg-alana-500 border rounded-xl border-none px-3 md:px-7 py-2 md:py-3 uppercase ease-in-out duration-300 mb-5 hover:bg-alana-300 hover:scale-110 md:mb-0 hover:text-black"> Experience</button></Link>
      </div>


    </div>
  )
}

