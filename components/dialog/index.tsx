"use client";
import { useState } from "react";

export default function Dialog() {
  const [visible, setVisible] = useState(false);

  const onCloseDialog = () => {
    setVisible(false);
  };
  return (
    <div
      className={`${visible ? "visible" : "hidden"}
			 bg-green-400 h-12 flex justify-between items-center rounded-b-xl`}
    >
      <p className={`text-gray-900 pl-4`}>Aviso personalizado... WIP!</p>
      <button className="m-0 mr-4 p-0" onClick={onCloseDialog}>
        <p className="text-red-600 hover:scale-110 transform transition-transform duration-150">
          X
        </p>
      </button>
    </div>
  );
}
