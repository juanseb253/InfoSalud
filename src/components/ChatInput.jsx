import { useState } from "react";

import { simpleConsult } from "../services/api-comsumer";

import Button from "./Button";

import Docs from "../assets/docs.svg";
import Send from "../assets/send.svg";
import Send2 from "../assets/send2.svg";

import "../styles/ChatInput.css";

const ChatInput = ({ handleClick }) => {
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSend = () => {
    handleClick((prev) => [...prev, { text: message, class: "user" }]);
    simpleConsult(message, handleClick, setMessage);
    // handleClick((prev) => [
    //   ...prev,
    //   {
    //     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic odio nihil officia dolores! Quis atque quam quia? Fugit incidunt, distinctio blanditiis omnis veniam minima rem inventore sequi quod, porro voluptatum?",
    //     class: "bot",
    //   },
    // ]);
  };
  return (
    <div className="chat-input-container">
      <div className="center-vertical">
        <Button className="button-black">
          <img src={Docs} alt="" />
        </Button>
        <input
          type="text"
          placeholder="Ingrese una consulta"
          value={message}
          onChange={(e) => handleChange(e)}
        />
        <Button className="container-send" onClick={handleSend}>
          <img className="no-hover-icon send-icon" src={Send} alt="" />
          <img className="hover-icon send-icon" src={Send2} alt="" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
