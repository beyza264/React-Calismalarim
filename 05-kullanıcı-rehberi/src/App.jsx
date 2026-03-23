import './App.css'
import { BrowserRouter,Routes,Route,Navigate} from  'react-router-dom';
import UserDetay from './userDetay';
import UserList from './userList';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/users" replace />} />
        <Route  path='/users'  element={<UserList/>}/>
        <Route path="/users/:id" element={<UserDetay/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
