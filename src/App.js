import "./App.css";
import Navbar from "./components/Navbar";
// import Abt from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import JobHistory from "./components/Jobhistory";
// import Contact from "./components/Contact";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Router>
          <Navbar />
          {/* <Routes>
            <Route exact path="/about" element={<Abt />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/job-history" element={<JobHistory />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}
        </Router>
      </main>
    </>
  );
}

export default App;
