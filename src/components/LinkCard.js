import * as style from '../style/global';

const { styled, fonts } = style;
const StyleCard = {
  title: styled.h6`
    font-size: ${fonts.h6};
    font-weight: bold;
    margin: 0;
  `,
  content: styled.p`
    font-size: ${fonts.p};
    margin: 0;
  `,
  list: styled.li`
    font-size: ${fonts.p};
    margin: 0;
  `,
}
const StyleTitle = StyleCard.title;
const StyleContent = StyleCard.content;
const StyleList = StyleCard.list;

const LinkCard = ({title, subTitle = null, content}) => {
  console.log('content', content)
  return (
    <div>
      <StyleTitle>{title}</StyleTitle>
      {
        subTitle
        ? <>
            <StyleContent>{subTitle}</StyleContent>
            <ul>
              {
                typeof content === 'object'
                ? content.map((list, idx) => {
                    return list?.list
                    ? <>
                        <StyleList key={idx}>{list.content}</StyleList>
                        <ul>{
                          list.list.map((subList, index) => {
                            return (<StyleList key={index}>{subList}</StyleList>)
                          })
                        }</ul>
                      </>
                    : <StyleList key={idx}>{list?.content || list}</StyleList>
                  })
                : <StyleContent>{content}</StyleContent>
              }
            </ul>
          </>
        : <StyleContent>{content}</StyleContent>
      }
    </div>
  )
}

export default LinkCard;
