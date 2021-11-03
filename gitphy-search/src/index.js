import React from 'react'
import reactDom from 'react-dom';
import index from './index.css';

import { GifExpertApp } from "./GifExpertApp";
reactDom.render(
    <GifExpertApp/>,
    document.getElementById('root')
);

// import { AddCategory } from './projectBase/components/AddCategory';
// import { GifGrid } from './projectBase/components/GifGrid';










// export const GifExpertApp = () => {
    
//     const [categories, setCategories] = useState(['One Punch']);

//     return (
//         <>
//             <h2>GifExpertApp</h2>
//             <AddCategory setCategories={ setCategories } />
//             <hr />

//             <ol>
//                 {
//                     categories.map( category  => (
//                         <GifGrid 
//                             key={ category }
//                             category={ category }
//                         />
//                     ))
//                 }
//             </ol>

//         </>
//     )
// }


// ReactDOM.render(
//   <GifExpertApp />,
//   document.getElementById('root')
// );

