import './App.css';
import Header from "./components/header/Header.jsx";
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Trajectory from "./components/trajectory/Trajectory";
import Footer from "./components/footer/Footer";



const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Trajectory />
      <Footer />
    </div>
  );
}

export default App;
