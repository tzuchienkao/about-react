const Home = ({ children }) => {
  const body = document.getElementsByTagName('body')[0]
  body.setAttribute('id', 'landing')
  return (
    <>
      {children}
    </>
  )
}

export default Home;
