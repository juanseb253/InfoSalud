import PropTypes from "prop-types";

import "../styles/Message.css";

const Message = ({ children, className }) => {
  return <div className={`chat-message ${className}`}>{children}</div>;
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default Message;
