import { useEffect, useState, useRef } from "react";

import ChatInput from "./ChatInput";
import Message from "./Message";
import ContextVideo from "./ContextVideo";

import "../styles/Chat.css";

const Chat = () => {
  const [messagesList, setMessagesList] = useState([]);
  const [contenedor, setContenedor] = useState(false);
  const [context, setContext] = useState(null);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesList]);
  return (
    <div className="container-chat">
      {contenedor && (
        <ContextVideo
          handlerContenedor={setContenedor}
          handlerContext={setContext}
        />
      )}
      <ChatInput
        handleClick={setMessagesList}
        clickContext={setContenedor}
        videoNumber={context}
      />
      <div className="container-chat-messages">
        {messagesList.map((message, index) => (
          <>
            <Message
              key={index}
              className={message?.class}
              ref={messagesEndRef}
            >
              {message?.text}
            </Message>
            <div ref={messagesEndRef} />
          </>
        ))}
      </div>
    </div>
  );
};
export default Chat;
