import { useEffect } from "react";
import "./App.css";

function App() {

  useEffect(() => {
    window.addEventListener('message', (event) => {
      console.log('postMessage',event);
      
    })
  
    return () => {
      window.removeEventListener('message',()=>{})
    }
  }, [])
  

  return (
    <>
      <div style={{width:'100vw', height:'100vh'}}>
        <iframe
          height={'500px'}
          width={'500px'}
          src="https://netflix-nextjs-rouge.vercel.app/home"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
      </div>
    </>
  );
}

export default App;
