import { Link } from 'react-router-dom';

const Card = ({ cardInfo }) => {
  const { data, item } = cardInfo;

  return (
    <div className="card">
      <Link
        to={{
          pathname: `/portfolio/${data}`,
          search: `?type=${item.type}`,
        }}
      >
        <img src={`/${item.cover}` || "/img/about.jpg"} alt={item.title} />
        <span>{item.label}</span>
      </Link>
    </div>
  )
}

export default Card;