import React from 'react'
import './Render.css'
 const Render=(props)=>{
    return(
        <div>
            {/* propsname.passedprops in app.map(itrator =>{
                return itrator.x itrator.y
            }) */}
            { props.details.map(count => {
                 return <li key={count.name}>{count.name} "Is {count.age} old are and an employee at {count.cpny}</li>
            })
            }
        </div>
    );
 }
 export default Render;