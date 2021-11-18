import { NavLink } from "react-router-dom";
import styled from "styled-components";

const colors = {
  primary: "mediumseagreen",
  orange: "orange",
};
const fonts = {
  xxl: "6.25rem", // 100px
  h6: "1.25rem", // 20px
  p: "1.125rem", // 18px
  span: "0.9375rem", // 15px
};

const StyleNavLink = styled(NavLink)
`
  font-size: ${fonts.p};
  color: ${colors.primary};

  &.active {
    font-weight: bold;
    color: ${colors.orange};
  }
`;

export { styled, colors, fonts, StyleNavLink };
