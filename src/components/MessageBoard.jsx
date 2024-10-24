import { useState} from "react";

function MessageBoard() {
  const [messageList, setMessageList] = useState([]);
  const [inputMessage, setInputMessage] = useState("")

  const messageHandler = (event) => {
    setInputMessage(event.target.value)
  }
  const addMessage = (event) => {
    event.preventDefault();
    const newMessage ={
      id: messageList.length + 1,
      message: inputMessage
    }
    setMessageList([...messageList, newMessage]);
    setInputMessage("");
  }

  const deleteMessageHandler = (id) => {
    const updateMessageList = messageList.filter((messageList) => messageList.id !== id);
    setMessageList(updateMessageList)
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessage}
            onChange = {messageHandler}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>Submit</button>
      </div>
      <div className="board">
        {messageList.map((message) => (
        <div className="message" key = {message.id}>
        <h1> {message.message} </h1>
        <button className="delete-button" onClick={() => deleteMessageHandler(message.id) }>x</button>
        </div>
        ))}
        
      </div>
    </div>
  );
}

export default MessageBoard;
