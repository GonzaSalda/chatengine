import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();
    if (text.length > 0) sendMessage(creds, chatId, { text });
    setValue("");
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default MessageForm;
