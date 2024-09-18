import { useEffect, useState } from "react";

import ChatInput from "./ChatInput";
import Message from "./Message";

import "../styles/Chat.css";

const Chat = () => {
  const [messagesList, setMessagesList] = useState([]);
  return (
    <div className="container-chat">
      <ChatInput handleClick={setMessagesList} />
      <div className="container-chat-messages">
        {messagesList.map((message, index) => (
          <Message key={index} className={message?.class}>
            {message?.text}
          </Message>
        ))}
      </div>
    </div>
  );
};
export default Chat;
