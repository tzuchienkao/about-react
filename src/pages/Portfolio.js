import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import portfolio from '../datas/portfolio';
import LinkCard from '../components/LinkCard';

const StyleGridList = styled.div
`
  width: inherit;
  padding: 40px;
  > div {
    box-sizing: border-box;
    display: grid;
    column-gap: 20px;
    row-gap: 40px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: minmax(min-content, max-content);
  }
  .card {
    width: inherit;
    height: inherit;
    &:hover {
      box-shadow: 0 5px #40C297;
    }
    a {
      color: #222;
      font-size: 20px;
      line-height: 2;
      font-weight: bold;
      display: block;
    }
    img {
      width: 100%;
    }
  }
`

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

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const { type: subject } = useParams();
  const type = searchParams.get('type');

  return (
    <>
      {
        subject && type
        ? portfolio[subject]?.collection
          ? portfolio[subject].collection
            .filter((item) => {
              return item.type === type
            })
            .map((item) => {
              return (
                <StyleWrapperLayout key={`link-${item.type}`}>
                  <div class="left-wrapper">
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
                  <div class="right-wrapper">
                    <div>
                      <p>{item.label}</p>
                      <LinkCard
                        title={item.title}
                        content={item.content}
                      />
                    </div>
                    <div>
                      <LinkCard
                        title={portfolio[subject].title}
                        content={portfolio[subject].title}
                      />
                    </div>

                  </div>
                </StyleWrapperLayout>
              )
            })
          : <Navigate replace to="/" />
        : 
        <StyleGridList>
          <div>
            {
              Object.keys(portfolio).map((data) => {
                return (
                  portfolio[data].collection.map((item) => {
                    return (
                      <div className="card" key={`${data}${item.type}`}>
                        <Link
                          to={{
                            pathname: `/portfolio/${data}`,
                            search: `?type=${item.type}`,
                          }}
                        >
                          <img src={`/${item.cover}` || "/img/about.jpg"} alt={item.title} />
                          {item.label}
                        </Link>
                      </div>
                    )
                  })
                )
              })
            }
          </div>
        </StyleGridList>
      }
    </>
  )
}

export default Portfolio;
