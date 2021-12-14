import { useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import portfolio from '../datas/portfolio';
import LinkCard from '../components/LinkCard';

const Case = ({ collection }) => {
  const [tabId, setTabId] = useState(0);
  const [searchParams] = useSearchParams();
  const { type: subject } = useParams();
  const type = searchParams.get('type');
  const items = collection
    .filter((item) => {
      return item.type === type
    })[0];
  const tabs = [
    "任職期間",
    "主要負責",
  ];

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
        <div className="top border-solid overflow-y-scroll">
          <p className="font-bold">{items.label}</p>
          <LinkCard
            title={items.title}
            subTitle="工作內容: "
            content={items.content}
          />
        </div>
        <div className="bottom overflow-y-scroll">
          <h6 className="font-bold">{portfolio[subject].title}</h6>
          <div className="half-section__sub">
            <div className="info-box">
              <ul className="tabs">
                {
                  tabs.map((tab, idx) => {
                    return <li className={tabId === idx ? 'is-active' : ''} key={idx} onClick={() => setTabId(idx)}>{tab}</li>
                  })
                }
              </ul>
              <LinkCard
                content={tabId === 0 ? portfolio[subject].description : portfolio[subject].list}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Case;
