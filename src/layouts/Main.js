import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Main = ({ children }) => {
  const body = document.getElementsByTagName('body')[0]
  body.setAttribute('id', 'body')
  return (
    <div className="wrapper">
      <div className='aside'>
        <Sidebar />
        <footer>
          <Link
            to={{
              pathname: `/about-react/`,
            }}
            className='w-8 h-8 flex justify-center rounded-full overflow-hidden'
          >
            <img className='max-w-max max-h-full' src="https://tzuchienkao.github.io/about-react/img/me.jpg" alt="高慈謙 Agnes Kao" />
          </Link>
          <span>oyan114@hotmail.com</span>
        </footer>
      </div>
      {children}
    </div>
  )
}

export default Main;
