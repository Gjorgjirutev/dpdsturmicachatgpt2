import socket from "../socket";
import { useEffect, useState } from "react";

export default function Chat() {
  const [msgs, setMsgs] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("chat", msg => setMsgs(m => [...m, msg]));
  }, []);

  return (
    <div>
      <div>{msgs.map((m,i)=><div key={i}>{m}</div>)}</div>
      <input value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={()=>{socket.emit("chat", text); setText("");}}>
        Испрати
      </button>
    </div>
  );
}