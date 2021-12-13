import { NavLink } from "react-router-dom";
import styled from "styled-components";

const colors = {
  primary: "#40C297",
  orange: "orange",
};
const fonts = {
  xxl: "5rem", // 80px
  h6: "1.25rem", // 20px
  p: "1.125rem", // 18px
  span: "0.9375rem", // 15px
};

const StyleNavLink = styled(NavLink)
`
  font-size: ${fonts.h6};
  line-height: 2.4;

  &.active {
    font-weight: bold;
    border-right: 10px solid #fff;
    
  }
`;

export { styled, colors, fonts, StyleNavLink };
