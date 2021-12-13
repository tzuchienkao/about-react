import styled from "styled-components";
// import * as style from '../style/global';
// import variables from '../style/variables.module.scss';

const fonts = {
  xxl: "80", // 80px
  h6: "20", // 20px
  p: "18", // 18px
  span: "15", // 15px
};

const fontResize = (size) => {
  // TODO: RWD font
  // base on width: 1440
  const vw = window.innerWidth;
  const result = size / vw;

  if (result < 12) {
    switch (size) {
      case fonts.xxl:
        if (result < (fonts.xxl / vw)) {
          return fonts.xxl * '1px';
        }
        return '18px';
      case fonts.h6:
        if (result < (fonts.h6 / vw)) {
          return fonts.h6 * '1px';
        }
        return '15px';
      case fonts.p:
        if (result < (fonts.p / vw)) {
          return fonts.p * '1px';
        }
        return '14px';
      default:
        return '12px';
    }
  }
  return result + 'px';
}

const StyleCard = {
  title: styled.h6`
    font-size: ${fontResize(fonts.h6)};
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
