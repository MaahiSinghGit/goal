import React from 'react'
import Props from './Props';
import Render from './Render';

const PersonDeatails=[{name:'Manoj', age:22, cpny:"Ericsson"},
{name:'Karan', age:23, cpny:"Ericsson.com"},
{name:'Harshit', age:22, cpny:"Airtel"},
{name:'akash', age:22, cpny:"Voda"}];
const PropsRender=()=>{
    return(
        <div>
            <Props name="karan" work="FO" />
{/* for default props
<Props/> */}
{/* Itrating over a array and use its functionlity */}
<Render details={PersonDeatails}/>
        </div>

    );
}
export default PropsRender;