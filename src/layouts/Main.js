import Sidebar from '../components/Sidebar';

const Main = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  )
}

export default Main;
