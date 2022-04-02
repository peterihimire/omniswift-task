import React from "react";
import SearchSort from "./searchSort";
import StudentTable from "./studentTable";

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
