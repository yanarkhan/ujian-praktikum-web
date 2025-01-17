import React, { useState } from "react";
import axios from "axios";
import ActionButton from "./Elements/Button";
import { clients } from "../data/clients";

const TableList = ({ handleOpen, tableData, setTableData, searchTerm }) => {
  const [error, setError] = useState(null);

  // filter tableData berdasarkan si search term
  const filteredData = tableData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this client?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/clients/${id}`);
        setTableData((prevData) =>
          prevData.filter((client) => client.id !== id)
        );
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <>
      {error && <div className="alert alert-error">{error}</div>}

      <section className="overflow-x-auto ">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover">
            {filteredData.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <ActionButton
                    label={client.isActive ? "Active" : "Inactive"}
                    type={client.isActive ? "primary" : "outline btn-primary"}
                    className="rounded-full w-20"
                  />
                </td>
                <td className="space-x-8">
                  <ActionButton
                    onClick={() => handleOpen("edit", client)}
                    label="Update"
                    type="secondary"
                    choice="btn"
                  />
                  <ActionButton
                    onClick={() => handleDelete(client.id)}
                    label="Delete"
                    type="accent"
                    choice="btn"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default TableList;
