import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { profilePhotos } from '../constants/constants.js';
import { fadeIn, textVariant } from '../utils/motion.js';

const PhotoCard = ({ index, alt, image }) => {
  return (
    <Tilt className="w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-2xl shadow-card"
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
    <section id="about">
  <div className="bg-background1 relative bg-cover w-full top-0 left-0 right-0 bottom-0 pt-5 pb-10">
    <div className="mx-auto px-5">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText + styles.paddingX}>Introduction</p>
        <h2 className={styles.sectionHeadText + styles.paddingX}>About Me</h2>
      </motion.div>

      <div className="flex flex-wrap px-5 space-x-6 justify-center">
      <motion.div
            variants={fadeIn("", "", 0.1, 1)} //direction, type, delay, duration
            className={styles.padding + "text-white text-[14px] max-w-6xl leading-[30px]"}
          >

      <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className="flex-1 xs:mx-auto sm:mx-auto md:mx-auto xs:pb-10 sm:pb-10 md:pb-10 xs:pt-10 sm:pt-10 md:pt-10 lg:pt-0 xl:pt-0">
          {profilePhotos.map((photo, index) => (
            <PhotoCard key={index} {...photo} />
          ))}
        </div>

        <div className="flex-2 lg:ml-10 xl:ml-10 xs:mx-auto sm:mx-auto md:mx-auto xs:w-full sm:w-full md:w-full">
            I'm a full-stack developer with a passion for creating meaningful and accessible web applications.
        I enjoy working with React.js, Node.js and MongoDB, and I'm curious and eager to learn new technologies.
        I use my imagination and creativity everywhere in my life and I'm always looking for new ways to express myself.
        Crafting beautiful and functional websites is one of my favorite ways to do so. 
        <br /><br />
        My journey has been a diverse and rewarding one, taking me through various experiences such as studying mathematics, working at customer service, engaging in private tutoring and volunteering. 
        My coding journey started with a highschool programming class, where I was introduced to the basics of algorithmic thinking.
        One of my most profound experiences has been my time as a caregiver for vulnerable adults, which illuminated my innate desire to help others. 
        It has also helped me develop my empathy and compassion; I now bring those qualities to my projects by following a people-first approach. 
        </div>
      </div>
        <div className="flex w-full mx-auto">
        <br />
        Beyond my work, I enjoy exploring new places, as well as gazing up at the night sky. 
        I like delving into local history, I appreciate architectural wonders and indulge in amateur astronomy. 
        I've found immense joy and fulfillment in my long-standing involvement in choirs, seeking out new vocal ensembles in every place I call home. 
        Additionally, my transformative journey into yoga has had a profound impact on both my mind and body. 
        The positive energy I derive from choir singing and yoga serves as a healing force, enriching my life further.
        <br /><br />
        Nature, in all its beauty, feels like a second home to me. 
        Whether I'm following mountain trails or tending to my beloved flower and vegetable garden, I relish every moment spent outdoors. 
        <br /><br />
        As a web developer, I'm aiming to keep helping people and organisations fulfill significant goals, as well as promote accessibility and sustainability,
        as I believe such causes make the world more inclusive and our planet healthier.
        </div>
          </motion.div>
        </div>
        
      </div>
    </div>
</section>

  )
}

export default About;