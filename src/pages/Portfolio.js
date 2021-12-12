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
    grid-template-columns: repeat(3, minmax(0,1fr));
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
              return (item.type === type)
            })
            .map((current) => {
              return <LinkCard
                key={`link-${current.label}`}
                title={current.label}
                content={current.type}
              />
            })
          : <Navigate replace to="/" />
        : 
        <StyleGridList>
          <div>
              {
                Object.keys(portfolio).map((data) => {
                  return (
                    <div className="card" key={`card-${data}`}>
                      <Link
                        to={{
                          pathname: `/portfolio/${data}`,
                          search: '?type=i',
                        }}
                      >
                        <img src={portfolio[data].cover || "img/about.jpg"} alt={portfolio[data].content} />
                        {data}
                      </Link>
                    </div>
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
