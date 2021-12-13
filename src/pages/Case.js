import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import portfolio from '../datas/portfolio';
import LinkCard from '../components/LinkCard';

const StyleWrapperLayout = styled.div
`
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;
  overflow: hidden;
  display: grid;
  gap: 40px;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  .left-wrapper {
    width: inherit;
    height: 100%;
    overflow-y: scroll;
    display: grid;
    gap: 20px;
    img {
      width: 100%;
    }
  }
  .right-wrapper {
    display: grid;
    justify-content: space-between;
    grid-template-rows: 0.7fr 0.3fr;
    > div:last-child {
      padding-top: 20px;
      border-top: 3px solid #40C297;
    }
  }
`

const Case = ({ collection }) => {
  const [searchParams] = useSearchParams();
  const { type: subject } = useParams();
  const type = searchParams.get('type');

  return (
    <>
      {
        collection
          .filter((item) => {
            return item.type === type
          })
          .map((item) => {
            return (
              <StyleWrapperLayout key={`link-${item.type}`}>
                <div className="left-wrapper">
                  {
                    item.images.map((img, idx) => {
                      return (
                        <div key={idx}>
                          <img src={`/${img}` || "/img/about.jpg"} alt={item.title} />
                        </div>
                      )
                    })
                  }
                </div>
                <div className="right-wrapper">
                  <div>
                    <p>{item.label}</p>
                    <LinkCard
                      title={item.title}
                      subTitle="xxx: "
                      content={item.content}
                    />
                  </div>
                  <div>
                    {
                      <LinkCard
                        title={portfolio[subject].title}
                        subTitle="xxx: "
                        content={portfolio[subject].list}
                      />
                    }
                  </div>
                </div>
              </StyleWrapperLayout>
            )
          })
      }
    </>
  )
}

export default Case;
