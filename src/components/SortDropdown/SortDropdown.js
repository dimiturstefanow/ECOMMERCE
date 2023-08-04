import React, { useState } from "react";
import "./sortdropdown.css";

function SortDropdown({sortName, callBack}) {
    const [show, setShow] = useState(false);

    const switchSort = (event) => {
        setShow(false)
        callBack(event.target.getAttribute("value"), event.target.innerHTML)
    }

  return (
    <div className="sort-dropdown">
      <span onClick={() => setShow(!show)}>{sortName}</span>
      <div style={{display: show ? "block" : "none"}} class="dropdown-content">
        <p value={1} onClick={switchSort} >Alphabetical a-z</p>
        <p value={2} onClick={switchSort}>Alphabetical z-a</p>
        <p value={3} onClick={switchSort}>Price ascending</p>
        <p value={4} onClick={switchSort}>Price descending</p>
      </div>
    </div>
  );
}

export default SortDropdown;
