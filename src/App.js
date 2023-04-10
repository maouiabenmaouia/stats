import './App.css';
import Bio from './Components/Person/Bio';
import FullName from './Components/Person/FullName';
import ImgSrc from './Components/Person/ImgSrc';
import Profession from './Components/Person/Profession';
import Countshow from './Components/Show/Countshow';



function App() {
  return (
    <div className='App'>
  
    <h1>  welcome </h1>
    <FullName/>
    <ImgSrc/>
      <Bio/>
      <Profession/>
<Countshow/>
    </div>
  );
}

export default App;
