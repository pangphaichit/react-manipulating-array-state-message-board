import { useState } from "react";
//ผู้ใช้สามารถกรอกฟอร์ม อัพเดทรายการ และลบรายการได้
/**
 * state ของ input
 * state ของปุ่ม submit เป็นอาเรย์>>ฟังก์ชั่น add / ฟังก์ชั่น delete
 * @returns
 *   "Hello all ! This is first message.",
 */

function MessageBoard() {
  const [inputText, setInputText] = useState("");
  const [messageList, setMessageList] = useState([]);
  const updateText = (event) => {
    setInputText(event.target.value);
  };

  const handleAdd = () => {
    const newMessge = { id: messageList.length + 1, text: inputText };
    setMessageList([...messageList, newMessge]);
  };

  const handleDelete = (deletedId) => {
    const updateList = messageList.filter((item) => item.id !== deletedId);
    setMessageList(updateList);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputText}
            onChange={updateText}
          />
        </label>
        <button className="submit-message-button " onClick={handleAdd}>
          Submit
        </button>
      </div>

      <div class="board">
        {messageList.map((item) => {
          return (
            <div key={item.id} className="message">
              <h1>{item.text}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleDelete(item.id);
                }}>
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
