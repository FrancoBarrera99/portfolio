import './App.css';
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/about/About"
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Jobs from "./components/jobs/Jobs";
import Footer from "./components/footer/Footer";



const App = () => {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <hr/>
      <About/>
      <hr/>
      <Skills />
      <hr/>
      <Projects />
      <hr/>
      <Jobs />
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
