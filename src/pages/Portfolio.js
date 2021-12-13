import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import portfolio from '../datas/portfolio';
import Case from './Case';

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

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const { type: subject } = useParams();
  const type = searchParams.get('type');

  return (
    <>
      {
        subject && type
        ? portfolio[subject]?.collection
          ? <Case collection={portfolio[subject].collection} />
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
