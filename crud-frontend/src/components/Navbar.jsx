import React from "react";

const Navbar = () => {
  return (
    <section className="navbar bg-base-100 px-4 py-6 gap-4">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">PWeb</a>
      </div>

      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-md"
          />
        </div>
      </div>

      <div className="navbar-end">
        <a href="" className="btn btn-primary" aria-label="Primary Button">
          Button
        </a>
      </div>
    </section>
  );
};

export default Navbar;
