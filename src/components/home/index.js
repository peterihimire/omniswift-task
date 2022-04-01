import React from "react";
import SearchSort from "./searchSort";
import StudentTable from "./studentTable";

import "./styles.scss";

const homePage = () => {
  return (
    <div className='homepage'>
      <div className='wrapper'>
        <SearchSort />
        <StudentTable />
      </div>
    </div>
  );
};

export default homePage;
