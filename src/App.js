
import './App.css';
import BasePage from './BasePage';
import { useSelector, shallowEqual } from "react-redux";
import axios from "axios";





function App() {

  const token = useSelector(
    (state) => state?.auth?.profileData?.token,
    shallowEqual
  );

  console.log('got token', token)

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;



  return (
    <div className="app">
      <BasePage />
    </div>
  );
}

export default App;
