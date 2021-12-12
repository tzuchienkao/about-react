import * as style from '../style/global';

const { styled, fonts } = style;
const StyleCard = {
  title: styled.h6`
    font-size: ${fonts.h6};
    font-wieght: bold;
    margin: 0;
  `,
  content: styled.p`
    font-size: ${fonts.p};
    margin: 0;
  `,
}
const StyleTitle = StyleCard.title;
const StyleContent = StyleCard.content;


const LinkCard = ({title, content}) => {
  return (
    <div>
      <StyleTitle>{title}</StyleTitle>
      {
          typeof content === 'string'
          ? <StyleContent>{content}</StyleContent>
          : typeof content === 'object'
            ? <> {
                content.map((item, idx) => {
                  return (<StyleContent key={idx}>{item}</StyleContent>)
                })
                }
              </>
            : <></>
      }
    </div>
  )
}

export default LinkCard;
