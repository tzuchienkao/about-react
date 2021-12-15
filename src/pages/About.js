import about from '../datas/about';
import LinkCard from '../components/LinkCard';

const About = () => {
  return (
    <section id="about">
      <div>
        <img src="/img/me.jpg" alt="高慈謙 Agnes Kao" />
      </div>
      <div className="bottom">
      {
        Object.keys(about).map((data, idx) => {
          return (
            <LinkCard
              key={idx}
              title={about[data].title}
              content={about[data].description}
            />
          )
        })
      }
      </div>
    </section>
  )
}

export default About;