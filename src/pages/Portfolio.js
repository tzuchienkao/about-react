import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom';
import portfolio from '../datas/portfolio';
import LinkCard from '../components/LinkCard';

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const { type: subject } = useParams();
  const type = searchParams.get('type');

  return (
    <>
      {Object.keys(portfolio).map((data, idx) => {
        return (
          <Link
            key={`c${idx}`}
            to={{
              pathname: `/portfolio/${data}`,
              search: '?type=i',
            }}
          >
            {data}
          </Link>
        )
      })}
      {
        subject && type
        ? portfolio[subject]?.collection
          ? portfolio[subject].collection
            .filter((item) => {
              return (item.type === type)
            })
            .map((current) => {
              return <LinkCard
                title={current.label}
                content={current.type}
              />
            })
          : <Navigate replace to="/" />
        : <></>

      }
    </>
  )
}

export default Portfolio;
