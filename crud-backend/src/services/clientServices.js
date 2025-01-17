import { query } from "../config/db.js";

export const getClients = async () => {
  const result = await query("SELECT * FROM clients_tb");
  return result.rows;
};

export const createGetClient = async (clientData) => {
  const { name, email, job, rate, isactive } = clientData;

  try {
    // cek email ada apa engga
    const checkQuery = "SELECT * FROM clients_tb WHERE email = $1";
    const existingClient = await query(checkQuery, [email]);

    if (existingClient.rows.length > 0) {
      throw new Error("Email already exists");
    }

    // if email belum ada, tambahkan client baru
    const insertQuery = `
      INSERT INTO clients_tb (name, email, job, rate, isactive)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [name, email, job, rate, isactive];

    const result = await query(insertQuery, values);
    return result.rows[0]; // return data client baru
  } catch (error) {
    console.error("Error inserting client:", error.message);
    throw new Error(`Error inserting client: ${error.message}`);
  }
};

export const updateClient = async (id, updatedData) => {
  const { name, email, job, rate, isactive } = updatedData;

  try {
    const updateQuery = `
      UPDATE clients_tb
      SET name = $1, email = $2, job = $3, rate = $4, isactive = $5
      WHERE id = $6
      RETURNING *;
    `;
    const values = [name, email, job, rate, isactive, id];

    const result = await query(updateQuery, values);

    if (result.rows.length === 0) {
      throw new Error(`Client with ID ${id} not found`);
    }

    return result.rows[0]; // return updated client
  } catch (error) {
    console.error("Error updating client:", error.message);
    throw new Error(`Error updating client: ${error.message}`);
  }
};
