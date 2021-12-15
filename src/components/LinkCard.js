const LinkCard = ({title = null, subTitle = null, content}) => {
  return (
    <div className="link-card">
      {
        title
        ? <h6 className="font-bold">{title}</h6>
        : <></>
      }
      {
        subTitle
        ? <p>{subTitle}</p>
        : <></>
      }
      {
        typeof content === 'object'
        ? content.map((list, idx) => {
            return list?.list
              ? <ul key={`content-${idx}`}>
                  <li>{list?.content || list}</li>
                  <ul key={`sublist-${idx}`}>
                    {
                      list.list.map((subList, index) => {
                        return (<li key={`sub-content-${index}`}>{subList}</li>)
                      })
                    }
                  </ul>
                </ul>
              : <ul key={`content-${idx}`}>
                  <li>{list?.content || list}</li>
                </ul>
            })
        : <p>{content}</p>
      }
    </div>
  )
}

export default LinkCard;
