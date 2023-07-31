import Input from "../../components/Input";
import "./Category.css";

function Category({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
       <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        
       </label>
      </div>
    </div>
  );
}

export default Category;
