import './style.css';
import Header from './Header';
import Navbar from './Navbar';
import Banner from './Banner';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Banner />
      <Sidebar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;