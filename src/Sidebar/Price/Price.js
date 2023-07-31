import Input from "../../components/Input";
import "./Price.css";

function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span> All
      </label>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="50" name="$0 - $50" />
        <span className="checkmark"></span> All
      </label>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="100" name="$50 - $100" />
        <span className="checkmark"></span> All
      </label>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="150" name="$100 - $150" />
        <span className="checkmark"></span> All
      </label>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="200" name="test2" />
        <span className="checkmark"></span> Over $150
      </label>

      <input
        handleChange={handleChange}
        value={50}
        title="$0 - $50"
        name="test2"
      />
      <input
        handleChange={handleChange}
        value={100}
        title="$50 - $100"
        name="test2"
      />
      <input
        handleChange={handleChange}
        value={150}
        title="$100 - $150"
        name="test2"
      />
      <input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="test2"
      />
    </div>
  );
}

export default Price;
