import "./Sidebar.css";
import Filter from "../Filter/Filter";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container"></div>
        <Filter handleChange={handleChange} />
      </section>
    </>
  );
}

export default Sidebar;
