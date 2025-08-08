import { BiCurrentLocation, BiEnvelope, BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiMoon, BiPhone, BiSun } from 'react-icons/bi'
import profile from '/profile.png'

const Header = ({darkMode, toggleTheme}) =>
{
    return (
        <div className="relative min-h-screen flex-1 p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center justify-center gap-5">
                    <img src={profile} alt="profile" className="w-32 rounded-full mb-7 mt-10"/>
                    <div className="text-center space-y-1">
                        <h1 className="text-4xl font-light">Krishna <span className="font-semibold">Verma</span></h1>
                        <h3 className="text-xl font-light">Software Developer</h3>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="absolute right-10 top-10"
                    >
                        { darkMode ? (<BiSun className="text-2xl"/>) : (<BiMoon className="text-2xl"/>)}
                    </button>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <BiCurrentLocation className="text-xl"/>
                            <span>Uttar Pradesh, India</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiEnvelope className="text-xl"/>
                            <span>krishnaverma@galaxystudio.org</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiPhone className="text-xl"/>
                            <span>+91 99976 88555</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-baes font-semibold md:text-2xl">SOCIAL</h1>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <BiLogoGithub className="text-xl"/>
                            <a href="https://github.com/KrishnaKV2004" target='_blank'>@ GitHub</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiLogoLinkedin className="text-xl"/>
                            <a href="https://www.linkedin.com/in/krishnakv2004" target='_blank'>@ LinkedIn</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiLogoTwitter className="text-xl"/>
                            <a href="https://github.com/KrishnaKV2004" target='_blank'>@ Twitter</a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-baes font-semibold md:text-2xl">EDUCATION</h1>
                    <ul className="">
                        <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                            <span className="font-semibold md:text-lg">Computer Science</span>
                            <span className="font-light">Graphic Era University</span>
                            <span className="text-sm text-gray-400">2022-26</span>
                        </li>
                        <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                            <span className="font-semibold md:text-lg">Class 12</span>
                            <span className="font-light">Asha Modern International</span>
                            <span className="text-sm text-gray-400">2021-22</span>
                        </li>
                        <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                            <span className="font-semibold md:text-lg">Class 10</span>
                            <span className="font-light">Asha Modern International</span>
                            <span className="text-sm text-gray-400">2019-20</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-baes font-semibold md:text-2xl">SKILLS</h1>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex flex-wrap gap-3">
                            <span className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black">C</span>
                            <span className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black">C++</span>
                            <span className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black">Python</span>
                            <span className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black">JavaScript</span>
                            <span className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black">React JS</span>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <span className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black">Keras</span>
                            <span className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black">Tensorflow</span>
                            <span className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black">Scikit Learn</span>
                            <span className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black">Open CV</span>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <span className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black">Github</span>
                            <span className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black">Docker</span>
                            <span className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black">Mongo DB</span>
                            <span className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black">My SQL</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-baes font-semibold md:text-2xl">HOBBIES</h1>
                    <div className="flex flex-wrap gap-16 p-3">
                        <ul className="flex list-disc flex-col gap-3">
                            <li>Music</li>
                            <li>Travelling</li>
                            <li>Exploring</li>
                        </ul>

                        <ul className="flex list-disc flex-col gap-3">
                            <li>Hiking</li>
                            <li>Gaming</li>
                            <li>Learning</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-baes font-semibold md:text-2xl">LANGUAGES</h1>
                    <ul className="flex list-disc flex-wrap gap-12 md:text-lg">
                        <li>English</li>
                        <li>Hindi</li>
                        <li>Japanese</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header