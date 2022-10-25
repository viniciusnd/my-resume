import { useState } from "react";

export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex items-center justify-between py-8">
            <span class="text-3xl text-slate-300 cursor-pointer mx-2 block hover:text-4xl hover:text-blue-300">
                <a href="/"><ion-icon name="home"></ion-icon></a>
            </span>
            <nav>
                <section className="flex md:hidden">
                    <div
                        className="space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span class="text-3xl text-slate-300 cursor-pointer mx-2 md:hidden block">
                            <ion-icon name="menu"></ion-icon>
                        </span>

                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)} 
                        >
                            <span class="text-3xl cursor-pointer mx-2 md:hidden block">
                                <ion-icon name="close"></ion-icon>
                            </span>

                        </div>
                        <ul className="flex flex-col items-center justify-between">
                            <li className="my-8 uppercase font-bold">
                                <a href="/about">About</a>
                            </li>
                            <li className="my-8 uppercase font-bold">
                                <a href="/education">Education</a>
                            </li>
                            <li className="my-8 uppercase font-bold">
                                <a href="/skills">Skills</a>
                            </li>
                            <li className="my-8 uppercase font-bold">
                                <a href="/projects">Projects</a>
                            </li>
                            <li className="my-8 uppercase font-bold">
                                <a href="/experience">Experience</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="hidden space-x-8 md:flex font-bold text-white text-lg">
                    <li className="uppercase hover:text-blue-300 hover:text-xl">
                        <a href="/about">About</a>
                    </li>
                    <li className="uppercase hover:text-blue-300 hover:text-xl">
                        <a href="/education">Education</a>
                    </li>
                    <li className="uppercase hover:text-blue-300 hover:text-xl">
                        <a href="/skills">Skills</a>
                    </li>
                    <li className="uppercase hover:text-blue-300 hover:text-xl">
                        <a href="/projects">Projects</a>
                    </li>
                    <li className="uppercase hover:text-blue-300 hover:text-xl">
                        <a href="/experience">Experience</a>
                    </li>
                </ul>
            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgb(221,160,221, 0.98);
        z-index: 10;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    );
}