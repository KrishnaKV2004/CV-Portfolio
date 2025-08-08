import { BiCurrentLocation, BiEnvelope, BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiMoon, BiPhone, BiSun } from 'react-icons/bi'
import profile from '/profile.png'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const Header = ({darkMode, toggleTheme}) => {
  return (
    <motion.div 
      className="relative min-h-screen flex-1 p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex flex-col gap-5" variants={containerVariants}>
        
        <motion.div 
          className="flex flex-col items-center justify-center gap-5"
          variants={itemVariants}
        >
          <motion.img 
            src={profile} 
            alt="profile" 
            className="w-32 rounded-full mb-7 mt-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.div className="text-center space-y-1" variants={itemVariants}>
            <h1 className="text-4xl font-light">
              Krishna <span className="font-semibold">Verma</span>
            </h1>
            <h3 className="text-xl font-light">Software Developer</h3>
          </motion.div>

          <motion.button
            onClick={toggleTheme}
            className="absolute right-10 top-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
          >
            {darkMode ? (<BiSun className="text-2xl"/>) : (<BiMoon className="text-2xl"/>)}
          </motion.button>
        </motion.div>

        {/* Contact Info */}
        <motion.div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700" variants={itemVariants}>
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
        </motion.div>

        {/* Social */}
        <motion.div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700" variants={itemVariants}>
          <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiLogoGithub className="text-xl"/>
              <a href="https://github.com/KrishnaKV2004" target='_blank' rel="noreferrer">@ GitHub</a>
            </li>
            <li className="flex items-center gap-2">
              <BiLogoLinkedin className="text-xl"/>
              <a href="https://www.linkedin.com/in/krishnakv2004" target='_blank' rel="noreferrer">@ LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <BiLogoTwitter className="text-xl"/>
              <a href="https://github.com/KrishnaKV2004" target='_blank' rel="noreferrer">@ Twitter</a>
            </li>
          </ul>
        </motion.div>

        {/* Education */}
        <motion.div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700" variants={itemVariants}>
          <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>
          <ul>
            {[
              { degree: "B Tech CSE", school: "Graphic Era University", year: "2022-26" },
              { degree: "Class 12", school: "Asha Modern International", year: "2021-22" },
              { degree: "Class 10", school: "Asha Modern International", year: "2019-20" },
            ].map(({degree, school, year}) => (
              <li key={degree} className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="font-semibold md:text-lg">{degree}</span>
                <span className="font-light">{school}</span>
                <span className="text-sm text-gray-400">{year}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700" variants={itemVariants}>
          <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>
          <div className="flex flex-wrap gap-3">
            {[
              ["C", "C++", "Python", "JavaScript", "React JS"],
              ["Keras", "Tensorflow", "Scikit Learn", "Open CV"],
              ["Github", "Docker", "Mongo DB"],
            ].map((group, i) => (
              <div key={i} className="flex flex-wrap gap-3">
                {group.map(skill => (
                  <span
                    key={skill}
                    className="rounded-full bg-black text-white p-3 text-center dark:bg-white dark:text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies */}
        <motion.div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700" variants={itemVariants}>
          <h1 className="text-base font-semibold md:text-2xl">HOBBIES</h1>
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
        </motion.div>

        {/* Languages */}
        <motion.div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700" variants={itemVariants}>
          <h1 className="text-base font-semibold md:text-2xl">LANGUAGES</h1>
          <ul className="flex list-disc flex-wrap gap-12 md:text-lg">
            <li>English</li>
            <li>Hindi</li>
            <li>Japanese</li>
          </ul>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}

export default Header