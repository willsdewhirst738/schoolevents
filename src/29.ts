import { useState } from "react";

function MyFunction() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          if (!isDragging && e.target.value === "") {
            setIsDragging(true);
          }
        }}
        value=""
      />
    </div>
  );
}

export default MyFunction;
