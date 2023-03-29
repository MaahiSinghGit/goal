import './App.css';
import Goals from './Component/Goals.js';
import Props from './Component/Props.js';
import Render from './Component/Render.js'

const PersonDeatails=[{name:'Manoj', age:22, cpny:"Ericsson"},
{name:'Karan', age:23, cpny:"Ericsson.com"},
{name:'Harshit', age:22, cpny:"Airtel"},
{name:'akash', age:22, cpny:"Voda"}];
const App =()=>{
  return(
    <div>
      <h2>Hello World this is my Goal</h2>
      <Goals/>
      <Props name="karan" work="FO" />
      {/* for default props
      <Props/> */}
      <Render details={PersonDeatails}/>

    </div>
  );

}

export default App;
