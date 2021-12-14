import { useParams, useSearchParams } from 'react-router-dom';
import portfolio from '../datas/portfolio';
import LinkCard from '../components/LinkCard';

const Case = ({ collection }) => {
  const [searchParams] = useSearchParams();
  const { type: subject } = useParams();
  const type = searchParams.get('type');
  const items = collection
    .filter((item) => {
      return item.type === type
    })[0]

    return (
      <div className="half-section">
        <div className="half-section__left">
          {
            items.images.map((img, idx) => {
              return (
                <img key={idx} src={`/${img}` || "/img/about.jpg"} alt={items.title} />
              )
            })
          }
        </div>
        <div className="half-section__right">
          <div className="top border-solid">
            <p className="font-bold">{items.label}</p>
            <LinkCard
              title={items.title}
              subTitle="工作內容: "
              content={items.content}
            />
          </div>
          <div className="bottom">
            <LinkCard
              title={portfolio[subject].title}
              subTitle="主要負責: "
              content={portfolio[subject].list}
            />
          </div>
        </div>
      </div>
    )
}

export default Case;
