import Sidebar from '../components/Sidebar';

const Main = ({ children }) => {
  const body = document.getElementsByTagName('body')[0]
  body.removeAttribute('id')
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  )
}

export default Main;
