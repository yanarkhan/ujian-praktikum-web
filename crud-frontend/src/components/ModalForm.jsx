import React, { useState } from "react";
import InputForm from "./Elements/Input";
import Select from "./Elements/Select";
import ActionButton from "./Elements/Button";

const ModalForm = ({ isOpen, onClose, mode, onSubmit }) => {
  const [rate, setRate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [status, setStatus] = useState(false);

  // Handle the change of status
  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active"); // Set status as boolean
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(e);
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-3">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}>
            <InputForm
              label="Name"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputForm
              label="Email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputForm
              label="Job"
              type="text"
              placeholder="Enter a Job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <div className="flex mb-4 justify-between">
              <InputForm
                label="Rate"
                type="number"
                placeholder={"0"}
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
              <Select
                value={status ? "Active" : "Inactive"}
                options={[
                  { label: "Active", value: "Active" },
                  { label: "Inactive", value: "Inactive" },
                ]}
                onChange={handleStatusChange}
                className="ml-4"
              />
            </div>
            <ActionButton
              label="✕"
              type="ghost"
              className="btn-sm btn-circle absolute right-2 top-2"
              onClick={onClose}
            />
            <ActionButton
              label={mode === "edit" ? "Save Changes" : "Add Client"}
              type="primary"
            />
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
