import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { profilePhotos } from '../constants/constants.js';
import { fadeIn, textVariant } from '../utils/motion.js';

const PhotoCard = ({ index, alt, image }) => {
  return (
    <Tilt className="xs:w-[350px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="green-pink-gradient p-[1px] rounded-2xl shadow-card"
      >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-background rounded-2xl 
                  flex justify-evenly items-center flex-col"
      >
        <img src={image} alt={alt} className="w-full h-full rounded-2xl" />
      </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {

  return (
    <div className='bg-background2 relative bg-cover w-full  top-0 left-0 right-0 bottom-0'>
    <div className="mx-auto px-5">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText + styles.paddingX}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText + styles.paddingX}>
          About Me
        </h2>
      </motion.div>

      <div className="flex flex-wrap px-5 space-x-6 mt-10">
        {profilePhotos.map((photo, index) => (
          <PhotoCard key={index} {...photo} />
        ))}
      </div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)} //direction, type, delay, duration
        className={styles.padding + "text-white text-[17px] max-w-7xl leading-[30px]"}
        >
        I'm a full-stack developer, with experience in TypeScript and JavaScript, and expertise in frameworks like React and Node.js. 
        Having recently graduated from School of Code and armed with a BSc in Mathematics from the University of Ioannina, my skills have been enriched to accomodate innovating problem solving. 
        <br /><br />
        My journey has been a diverse and rewarding one, taking me through various experiences such as customer service, private tutoring and volunteering. 
        Theses experiences have given me the opportunity to develop my communication, teamwork and organisation skills. 
        My coding journey started with a programming highschool class, where I was introduced to the basics of algorithmic thinking. 
        See more about my coding journey in the <a href="#journey" className="text-[#FFD369] hover:text-[#FFD369] inline">Journey</a> section. 
        Due to involvement in online communities about things I enjoy, I mastered using Graphic Design software like Photoshop and InDesing. 
        Now that knowledge has been expanded to include Figma and Canva, which I use to create mockups and prototypes for my projects. 
        <br /><br />
        One of the most profound experiences in my journey has been my time as a caregiver for vulnerable adults, which illuminated my innate desire to help others. 
        It has also helped me develop my empathy and compassion, which I now bring to my work as a developer by following a people-first approach. 
        <br /><br />
        Beyond my work, I enjoy exploring new places, as well as gazing up at the night sky. 
        My insatiable curiosity about the world drives me to delve into local history, appreciate architectural wonders, and indulge in amateur astronomy. 
        I've found immense joy and fulfillment in my long-standing involvement in choirs, seeking out new vocal ensembles in every place I call home. 
        Additionally, my transformative journey into yoga, has had a profound impact on both my mind and body. 
        The positive energy I derive from choir singing and yoga serves as a healing force, enriching my life further. 
        Nature, in all its beauty, feels like a second home to me. 
        Whether I'm following mountain trails or tending to my beloved flower and vegetable garden, I relish every moment spent outdoors. 
        These pursuits, whether enjoyed in the company of others or as solo endeavors, remain integral to my life, ensuring that I always make time for the things that bring me joy and peace. 
        <br /><br />
        I am here to bring a positive influence to the tech industry. Carrying an analytical and a creative mindset, coupled with a deep sense of compassion, I am on a mission to make a difference! 
      </motion.div>
    </div>
    </div>
  )
}

export default About;