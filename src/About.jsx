import NavBar from '/src/Navigation'
export default function About() {
  return (
    <div className="min-h-screen bg-alana-700">

      <div className="mb-5 px-8">
        <NavBar />
      </div>


      <div className="flex flex-row justify-center">
        <img src="/imgs/personal.jpeg" className="w-40 border rounded-full mt-5 max-w-md" />
      </div>
      <div className="flex justify-center">
        <p className="font-bold font-amiri text-base md:text-xl text-white text-center p-12 leading-loose">
          I am a software engineer currently work with software test and validation. <br/>
          Since 2022 I have been working on professional and also projects of my own. <br/>
          My passion is creating things that matter to people. <br/>
          I am self-taught with a high sense of responsibility. <br/>
          Always looking for new challenges to improve my technical skills and knowledge <br/>
          and also collaborate in the development of the organization as a whole. </p>
      </div>

    </div>
  )
}
