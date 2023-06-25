import { useEffect } from "react";
import "./App.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-YS15MYFHKB");

function App() {

  useEffect(() => {
    window.addEventListener('message', (event) => {
      console.log('postMessage',event);
      ReactGA.event({
        category: event.data.category,
        action: event.data.event,
        label:  event.data.label,
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
