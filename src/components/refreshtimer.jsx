import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const RefreshTimer = ()=> {

  const getTimeLeft = () => (120)
  const [timeLeft, setTimeLeft] = useState(()=>getTimeLeft())


  const notification = new Audio('./sounds/notify.mp3')
  const navigate = useNavigate()
 
  const notify = () => {
   notification.play()
  }

  useEffect(() => {
    if (timeLeft <= 0) return
    const timeout = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timeout); 
  }, [timeLeft]);

    if (timeLeft === 0) {
      notify()
    }

    const handleFocus=()=> {
      navigate('/1')
    }
 

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(62,180,137)";  // Set background to green

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  

  return (
    <div className="refreshtimer timer"
    
    >
      <div >
          <h3 className="focus">Rest for {formatTime(timeLeft)}</h3>
          <button onClick={handleFocus} className="btns">Focus</button>

      </div>
    </div>

    
  );
}
export default RefreshTimer