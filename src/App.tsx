import { useEffect } from "react";
import "./App.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-YS15MYFHKB");

function App() {

  useEffect(() => {
    window.addEventListener('message', (event) => {
      console.log('postMessage',event);
      ReactGA.event({
        category: "your category",
        action: "your action",
        label: "your label", // optional
        nonInteraction: true, // optional, true/false
        transport: "xhr", // optional, beacon/xhr/image
      });
      
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
