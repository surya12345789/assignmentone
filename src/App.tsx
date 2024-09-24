import './App.css';
import UserList from './components/users/UserList';


const users = [
  { id: 1, name: 'Anurag', email: 'Anurag@example.com' },
  { id: 2, name: 'Sohel', email: 'Sohel@example.com' },
  { id: 3, name: 'Jayadev', email: 'Jayadev@example.com' },
];

function App() {  
  return (
    <div className="App">
      <h3>{process.env.REACT_APP_API_URL}</h3>
      <UserList users={users}/>
    </div>
  );
}

export default App;
