import NavBar from '/src/Navigation'
export default function About() {
  return (
    <div className="min-h-screen bg-red-700">

      <div className="mb-5 px-8">
        <NavBar />
      </div>


      <div className="flex flex-row justify-center">
        <img src="/imgs/personal.jpeg" className="w-40 border rounded-full mt-5 max-w-md" />
      </div>
      <div className="flex justify-center">
        <p className="font-bold font-amiri text-base md:text-xl text-white text-center p-12 leading-loose">
        I am currently work as a software engineer, working with software test and validation. <br></br>
        I have a degree in Electronic Engineering, and I am now a graduate student in Full Stack Development and Product Management.
        </p>
      </div>

    </div>
  )
}
