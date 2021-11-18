import * as style from '../style/global';

const { styled, fonts } = style;
const StyleCard = {
  title: styled.h6`
    font-size: ${fonts.h6};
    font-wieght: bold;
  `,
  content: styled.p`
    font-size: ${fonts.p};
  `,
}
const StyleTitle = StyleCard.title;
const StyleContent = StyleCard.content;


const LinkCard = ({title, content}) => {
  return (
    <div>
      <StyleTitle>{title}</StyleTitle>
      <StyleContent>{content}</StyleContent>
    </div>
  )
}

export default LinkCard;
