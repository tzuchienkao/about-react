import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import portfolio from '../datas/portfolio';
import Case from './Case';
import Card from '../components/Card';

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
        : <div className="grid-list">
            {
              Object.keys(portfolio).map((data) => {
                return (
                  portfolio[data].collection.map((item) => {
                    return (
                      <Card key={`${data}${item.type}`} cardInfo={{data, item}}></Card>
                    )
                  })
                )
              })
            }
          </div>
      }
    </>
  )
}

export default Portfolio;
