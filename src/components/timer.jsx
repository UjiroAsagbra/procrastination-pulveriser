import { useState, useEffect, use } from "react";
import Tasks from "./tasks";

const Countdown = ()=> {

  const getTimeLeft = () => (isFocus ? 1 * 60 : 1 * 60)
  const [isFocus, setIsFocus] = useState(true)
  const [timeLeft, setTimeLeft] = useState(()=>getTimeLeft())


  

  let notification = new Audio('./sounds/notify.mp3')
 
  const notify = () => {
   notification.play()
  }

  useEffect(() => {
    if (timeLeft <= 0) return
    const timeout = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timeout); 
  }, [timeLeft, isFocus]);

  useEffect(() => {
    if (timeLeft === 0) {
      notify()
      setIsFocus((prev) => !prev);
      setTimeLeft(isFocus ? 1 * 60 : 1 * 60)
    }
  }, [timeLeft, isFocus]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  

  return (
    <div className="timer"
    
    >
      <div>
      {isFocus ? (
          <h3 className="focus">Focus for {formatTime(timeLeft)}</h3>
        ) : (
          <h3 className="refresh">Rest for {formatTime(timeLeft)}</h3>
        )}
      </div>
    </div>

    
  );
}
export default Countdown