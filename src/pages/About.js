import styled from 'styled-components';
import about from '../datas/about';
import LinkCard from '../components/LinkCard';
const StyleSection = styled.section
`
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;
  display: grid;
  gap: 40px;
  grid-template: minmax(min-content, max-content) 1fr / repeat(2, 1fr);
  img {
    width: 100%;
  }
`

const About = () => {
  return (
    <StyleSection>
      <img src="img/about.jpg" alt="" />
      <div></div>
      {
        Object.keys(about).map((data, idx) => {
          return (
            <LinkCard
              key={idx}
              title={about[data].title}
              content={about[data].content}
            />
          )
        })
      }
    </StyleSection>
  )
}

export default About;