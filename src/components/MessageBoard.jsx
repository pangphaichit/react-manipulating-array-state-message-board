import { useState } from "react";
//ผู้ใช้สามารถกรอกฟอร์ม อัพเดทรายการ และลบรายการได้
/**
 * state ของ input
 * state ของปุ่ม submit เป็นอาเรย์>>ฟังก์ชั่น add / ฟังก์ชั่น delete
 * @returns
 *   "Hello all ! This is first message.",
 */
const [inputText, setInputText] = useState("Hello all ! This is first message.");
const [messageList, setMessageList] = useState([]);
const updateText = (event) => {
  //ใช้กับ onChange เก็บค่าไว้ที่ inputText
  setInputText(event.target.value);
};
const handleAdd = () => {
  //ก็อปอาเรย์ลงมาก่อนแล้วค่อยแก้ไขใน set แก้ค่า messageList
  const newMessge = inputText;
  setMessageList([...messageList, newMessge]);
};
const handleDelete = (index) => {
  const updateList = messageList.filter((item) => {
    item[index] !== index;
  });
  setMessageList(updateList);
};

function MessageBoard() {
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
        {messageList.map((item, index) => {
          <div key={index} className="message">
            <h1>{item}</h1>
            <button className="delete-button" onClick={handleDelete}>
              x
            </button>
          </div>;
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
