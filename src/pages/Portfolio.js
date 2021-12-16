import { Navigate, useParams } from 'react-router-dom';
import portfolio from '../datas/portfolio';
import Case from './Case';
import Card from '../components/Card';

const Portfolio = () => {
  const { type: subject, case: type } = useParams();

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
