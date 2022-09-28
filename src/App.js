import './App.css';
import { Routes, Route } from 'react-router-dom';
import RocketsScreen from './screens/RocketsScreen';
import MissionsScreen from './screens/MissionsScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <Routes>
      <Route path="/profile" exact element={<ProfileScreen />} />
      <Route path="/missions" exact element={<MissionsScreen />} />
      <Route path="/" exact element={<RocketsScreen />} />
    </Routes>
  );
}

export default App;
