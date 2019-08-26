import React from 'react';
import './App.css';
import Example from './nav';
import Example1 from './texte';
import Visits from './card';
import Culture from './culture';
import Platform from './platform';
import Improve from './improve';
import Treecard from './listecard';
import Treefooter from './listfooter';

import fly from './warsaw.png';
import fly1 from './istanbul.png';
import fly2 from './barcelona.png';
import fly3 from './curitiba.png';
import fly4 from './rome.png';
import fly5 from './mexico-city.png';

import copi from './flag.png';
import copi1 from './patients.png';
import copi2 from './visits.png';
import copi3 from './doctors.png';


const tablist=[{image:fly, titre:'Warsaw', },{image:fly1, titre:'Istanbul', },{image:fly2, titre:'Barcelona' },{image:fly3, titre:'Curitiba', },{image:fly4, titre:'Rome', },{image:fly5, titre:'Mexico-city' }]
const tablist2=[{image:fly3, titre:'Curitiba', },{image:fly4, titre:'Rome', },{image:fly5, titre:'Mexico-city', }]

const tabplat=[{symbo:copi, leader:'Leader in 10 countries', texte:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile', },{symbo:copi1, leader:'30 million unique patients visit us every month', texte:'visit us every month',},{symbo:copi2, leader:'1.5 million appointments', texte:'booked last month', },{symbo:copi3, leader:'2 million active doctors', texte:'trust in our solutions',}]

const citylist=[{txt:'Poland', },{txt:'Turkey', },{txt:'Spain', },{txt:'Italy', },{txt:'Czech Republic', },{txt:'Mexico', },{txt:'Colombia', },{txt:'Brazil', },{txt:'Argentina', },]

function App() {
  return (
    <div className="App">
   <Example/>
   <Example1/>
   <Visits/>
   <Culture/>
   <Platform t={tabplat}/>
   <Improve/>
   <Treecard x={tablist}/>
   {/* <Treecard x={tablist2}/> */}
   <Treefooter a={citylist}/>
  
    </div>
  );
}

export default App;
