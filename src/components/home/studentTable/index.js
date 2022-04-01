import React from "react";

import "./styles.scss";

const TransactionHistory = () => {
  // Example of a data array that
  // you might receive from an API
  const data = [
    {
      id: "2",
      surname: "Ihimire",
      firstName: "Peter",
      age: "24",
      gender: "maleed",
      level: "100",
      state: "Lagos",
      action: "https://github.com/",
    },
    {
      id: "2l",
      surname: "Ihimire",
      firstName: "Peter",
      age: "24",
      gender: "maleed",
      level: "100",
      state: "Lagos",
      action: "https://github.com/",
    },
    {
      id: "2t",
      surname: "Ihimire",
      firstName: "Peter",
      age: "24",
      gender: "male",
      level: "100",
      state: "Lagos",
      action: "https://github.com/",
    },
    {
      id: "2",
      surname: "Ihimire",
      firstName: "Peter",
      age: "24",
      gender: "maleed",
      level: "100",
      state: "Lagos",
      action: "https://github.com/",
    },
    {
      id: "2l",
      surname: "Ihimire",
      firstName: "Peter",
      age: "24",
      gender: "maleed",
      level: "100",
      state: "Lagos",
      action: "https://github.com/",
    },
    {
      id: "2t",
      surname: "Ihimire",
      firstName: "Peter",
      age: "24",
      gender: "male",
      level: "100",
      state: "Lagos",
      action: "https://github.com/",
    },
    {
      id: "2",
      surname: "Ihimire",
      firstName: "Peter",
      age: "24",
      gender: "maleed",
      level: "100",
      state: "Lagos",
      action: "https://github.com/",
    },
    {
      id: "2l",
      surname: "Ihimire",
      firstName: "Peter",
      age: "24",
      gender: "maleed",
      level: "100",
      state: "Lagos",
      action: "https://github.com/",
    },
    {
      id: "2t",
      surname: "Ihimire",
      firstName: "Peter",
      age: "24",
      gender: "male",
      level: "100",
      state: "Lagos",
      action: "https://github.com/",
    },
    {
      id: "2",
      surname: "Ihimire",
      firstName: "Peter",
      age: "24",
      gender: "maleed",
      level: "100",
      state: "Lagos",
      action: "https://github.com/",
    },
    {
      id: "2l",
      surname: "Ihimire",
      firstName: "Peter",
      age: "24",
      gender: "maleed",
      level: "100",
      state: "Lagos",
      action: "https://github.com/",
    },
    {
      id: "2t",
      surname: "Ihimire",
      firstName: "Peter",
      age: "24",
      gender: "male",
      level: "100",
      state: "Lagos",
      action: "https://github.com/",
    },
  ];
  return (
    <section className='transactionHistory'>
      <div className='wrapper'>
        <div className='content'>
          <table>
            <tr>
              <th>S/N</th>
              <th>Surname</th>
              <th>First Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Level</th>
              <th>State</th>
              <th>Action</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td className='' width='5%'>
                    {key + 1}
                  </td>
                  <td className='' width='12%'>
                    {val.surname}
                  </td>
                  <td className='' width='12%'>
                    {val.firstName}
                  </td>
                  <td className='' width='8%'>
                    {val.age}
                  </td>
                  <td className='' width='8%'>
                    {val.gender}
                  </td>
                  <td className='' width='8%'>
                    {val.level} <span>level</span>
                  </td>
                  <td className='' width='12%'>
                    {val.state} <span>state</span>
                  </td>
                  <td width='12%'>
                    <button
                      className='download-btn btn-primary'
                      onClick={val.actions}
                    >
                      Download Result
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;
