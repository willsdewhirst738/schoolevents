import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>学校活动管理系统</h1>
      <textarea
        rows={5}
        cols={40}
        value={inputValue}
        onChange={handleInputChange}
      ></textarea>
      <p>输入内容：{inputValue}</p>
    </div>
  );
};

export default App;
