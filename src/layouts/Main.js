import Sidebar from '../components/Sidebar';

const Main = ({ children }) => {
  const body = document.getElementsByTagName('body')[0]
  body.setAttribute('id', 'body')
  return (
    <div className="wrapper">
      <Sidebar />
      {children}
    </div>
  )
}

export default Main;
