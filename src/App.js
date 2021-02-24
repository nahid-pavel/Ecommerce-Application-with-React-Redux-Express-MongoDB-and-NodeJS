
import './App.css';
import BasePage from './BasePage';
import { useSelector, shallowEqual } from "react-redux";



function App() {
  const { profileData } = useSelector(
    (state) => state?.auth,
    shallowEqual
  );

  return (
    <div className="app">
      <BasePage />
    </div>
  );
}

export default App;
