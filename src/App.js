import './App.css';
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/about/About"
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";



const App = () => {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <Projects />
      <Skills />
      <About/>
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
