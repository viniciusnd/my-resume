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
        <p className="font-bold font-amiri text-xl text-white text-center p-12 leading-loose">
          Graduated in Electronic Engineering and passionated with techonology,
          I keep studying programming and have some knowledge in programming languages such as C, C++, JavaScript
          and I am on my way to get a graduate degree in technology,
          like systems development, multiplatform mobile apps, data analitycs
          and get to know more about the languages I already have some knowledge in and other languages such as Python and Java.
          I have experiences in developing projects with Arduino, Esp32 and other microcontrollers using C++.
          I also have already used the Raspberry PI in a project on college, it was my Final Paper actually.
        </p>
      </div>

    </div>
  )
}
