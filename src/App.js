import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header.jsx";
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Jobs from "./components/jobs/Jobs";
import Footer from "./components/footer/Footer";



const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
