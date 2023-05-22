import React  from 'react'
// import './App.css';
// import Greet from './components/greet';
// import Welcome from './components/welcome'
// import Hello from './components/hello'
// import Click from './components/functionClick'
// import ClassClick from './components/ClassClick';
import LoginPage from'./components/LoginPage/LoginPage'
import Dashboard from './components/Dashboard';
import Header from './components/Header/Header';

import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import End from './components/End'
function App() {
  return (<>

  <Router>
    <Header/>
    <Routes>
          <Route exact path="/" element={<LoginPage />}/>
          
          <Route exact path="/Dashboard" element={<Dashboard />} />
          
      
        </Routes>
        </Router>
        </>
  );
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Greet />
//         <Welcome />
//         <Hello />
//         </div>
//         );
//   }

// }



export default App;
