
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { 
  BrowserRouter,
  Route,
  Routes
   } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

// import mylogo from './Components/logo_transparent.png'
  const App =()=> {
  const apiKey = "416486f6bd76445d8ae6643f9033ac83";
  const [progress,setProgress] = useState(0);
  
    return (
      <>
          <BrowserRouter>
        <div>
             <Navbar/>
             <LoadingBar color='#f11946'  progress={progress} />
             <Routes>
               <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize ={9} country={'us'} category={'general'}/>}></Route>
               {/* <Route exact path="/about" element={<News setProgress={setProgress} apiKey={apiKey} pageSize ={9} country={ 'in'} category={'general'}/>}></Route> */}
               <Route  exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize ={9} country={ 'us'} category={'business'}/>} ></Route>
               <Route  exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize ={9} country={ 'us'} category={'entertainment'}/>} ></Route>
               <Route  exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize ={9} country={ 'us'} category={'general'}/>} ></Route>
               <Route  exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize ={9} country={ 'us'} category={'health'}/>} ></Route>
               <Route  exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSizhealthe ={9} country={ 'us'} category={'science'}/>} ></Route>
               <Route  exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize ={9} country={ 'us'} category={'sports'}/>} ></Route>
               <Route  exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize ={9} country={ 'us'} category={'technology'}/>} ></Route>

            </Routes>

        </div>
        </BrowserRouter>
      </>
    )
};
export default App;