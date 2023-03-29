import './App.css';
import Goals from './Component/Goals.js';
import PropsRender from './Component/PropsRender.js'

const App =()=>{
  return(
    <div>
      <h2>Hello World this is my Goal</h2>
      <Goals/>
      <PropsRender/>
    </div>
  );
}

export default App;
