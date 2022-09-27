import './App.css';
import { Routes, Route } from 'react-router-dom';
import RocketsScreen from './screens/RocketsScreen';
import MissionsScreen from './screens/MissionsScreen';

function App() {
  return (
    <Routes>
      <Route path="/missions" exact element={<MissionsScreen />} />
      <Route path="/" exact element={<RocketsScreen />} />
    </Routes>
  );
}

export default App;
