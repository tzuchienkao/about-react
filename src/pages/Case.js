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
    })[0];

  return (
    <div className="half-section pr-0">
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
          <sub className="tag-list top-2 mb-2 flex flex-wrap">
          {
            items.device.map((device) => {
              return (
                <span className="tag">{device}</span>
              )
            })
          }
          </sub>
          <LinkCard
            title={items.title}
            subTitle="工作內容："
            content={items.content}
          />
        </div>
        <div className="bottom">
          <h6 className="font-bold">{portfolio[subject].title}</h6>
          <LinkCard
            subTitle="任職期間："
            content={portfolio[subject].description}
          />
        </div>
      </div>
    </div>
  )
}

export default Case;
