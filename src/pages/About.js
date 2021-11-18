import about from '../datas/about';
import LinkCard from '../components/LinkCard';

const About = () => {
  return Object.keys(about).map((data, idx) => {
    return (
      <LinkCard
        key={idx}
        title={about[data].title}
        content={about[data].content}
      />
    )
  })
}

export default About;