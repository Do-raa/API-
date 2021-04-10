import UserList from './components/UserList';
import './App.css'; 
import React , {useState} from 'react';


function App() { 
  const [users, setUsers] = useState([])
 
 
        return (
    <div className="App">
    <h1>The List Of Users</h1> 
    <UserList users={users} setUsers={setUsers}/>
    </div>
  );
}

export default App;
