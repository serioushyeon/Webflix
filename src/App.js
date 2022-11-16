import Login from "./Login";
import Signup from "./Signup";
import {Route, Routes} from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       <Signup />
//     </div>
//   );
// }

const App = () => (
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/signup" element={<Signup />}/>
  </Routes>
)

export default App;