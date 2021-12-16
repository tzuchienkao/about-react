import { Link } from 'react-router-dom';

const Card = ({ cardInfo }) => {
  const { data, item } = cardInfo;

  return (
    <div className="card">
      <Link
        to={{
          pathname: `/about-react/portfolio/${data}/${item.type}`,
        }}
      >
        <img src={`${item.cover}` || "https://tzuchienkao.github.io/about-react/img/me.jpg"} alt={item.title} />
        <p>{item.label}</p>
        <sub className="tag-list font-normal flex flex-wrap">
        {
          item.tag.map((tag) => {
            return (
              <span key={tag} className="tag">{`#${tag}`}</span>
            )
          })
        }
        </sub>
      </Link>
    </div>
  )
}

export default Card;