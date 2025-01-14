import React from "react";
import ActionButton from "./Elements/Button";
import { clients } from "../data/clients";

const TableList = () => {
  return (
    <section className="overflow-x-auto">
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
                <button
                  className={`btn rounded-full w-20 ${
                    client.isActive ? `btn-primary` : `btn-outline btn-primary`
                  }`}
                >
                  {client.isActive ? `Active` : `Inactive`}
                </button>
              </td>
              <td className="space-x-8">
                <ActionButton label="Update" type="secondary" />
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
