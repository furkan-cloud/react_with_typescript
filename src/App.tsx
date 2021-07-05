import React from 'react';
import Hello from './components';


function App() {
  return (
    <div className="App">
hi
<Hello name={"Furkan"} onHappen={(name) => console.log(name)}/>
    </div>
  );
}

export default App;
