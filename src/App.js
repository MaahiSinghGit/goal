import logo from './logo.svg';
import './App.css';
import Goals from './Component/Goals.js';
import Props from './Component/Props.js';

const App =()=>{
  return(
    <div>
      <h2>Hello World this is my Goal</h2>
      <Goals/>
      <Props name="karan" work="FO" />
      {/* for default props */}
      <Props/>
    </div>
  );

}

export default App;
