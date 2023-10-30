import './App.css';
import About from './components/About/About.tsx';
import Initial from './components/Initial/Initial.tsx';
import Landing from './components/Landing/Landing.tsx';
import Card from './components/About/Card.tsx'
import Project from './components/Project/Project.js';
function App() {
  return (
    <>
      <Initial/>
      <Landing/>
      <About/>
      <Card/>
      <Project/>

    </>
  );
}

export default App;
