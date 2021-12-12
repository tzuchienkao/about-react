import Sidebar from '../components/Sidebar';
import styled from "styled-components";

const StyleLayout = styled.div
`
  height: inherit;
  color: #222222;
  display: grid;
  grid-template-columns: 0.3fr 0.9fr;
  grid-auto-flow: column;

`

const Main = ({ children }) => {
  const body = document.getElementsByTagName('body')[0]
  body.removeAttribute('id')
  return (
    <StyleLayout className="wrapper">
      <Sidebar />
      {children}
    </StyleLayout>
  )
}

export default Main;
