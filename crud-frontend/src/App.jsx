import { useState } from "react";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  };

  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("modal mode add");
    } else {
      console.log("modal mode edit");
    }
  };

  return (
    <>
      <Navbar whileOpen={() => handleOpen("add")} />
      <TableList handleOpen={handleOpen} />
      <ModalForm
        isOpen={isOpen}
        onSubmit={handleSubmit}
        onClose={() => {
          setIsOpen(false);
        }}
        mode={modalMode}
      />
    </>
  );
}

export default App;
