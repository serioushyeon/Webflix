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
const idpws = [
  {
      email: 'test@example.com',
      pw: 'test2323@@@',
  },
  {
      email: '1225yj50@naver.com',
      pw: 'yj991010*',
  },
];

const App = () => (
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/signup" element={<Signup />}/>
  </Routes>
)

export default App;