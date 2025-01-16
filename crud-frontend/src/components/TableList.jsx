import React from "react";
import ActionButton from "./Elements/Button";
import { clients } from "../data/clients";

const TableList = ({ handleOpen }) => {
  return (
    <section className="overflow-x-auto ">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="hover">
          {clients.map((client) => (
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
                  onClick={() => handleOpen("edit")}
                  label="Update"
                  type="secondary"
                />
                <ActionButton label="Delete" type="accent" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TableList;
