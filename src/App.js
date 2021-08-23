import './components/styles.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Main from './components/About';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Sidebar />
      <Content contentID="content1" />
      <Footer />
    </div>
  );
};
