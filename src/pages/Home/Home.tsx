import Navbar from '../../layouts/NavBar/Navbar.tsx'
import Cover from '../../layouts/Cover/cover.jsx';
import CoverTitle from './components/CoverTitle/CoverTitle.tsx';
import News from './components/News/News.tsx';
import Links from './components/Links/Links.tsx';

const Home = () => {

  return (
    <>
      <Navbar />
      <main>
        <CoverTitle />
        <News />
        <Links />
        <Cover />
      </main>
    </>
  )
}

export default Home;