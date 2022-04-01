import React from "react";

import "./styles.scss";

const TransactionHistory = () => {
  // Example of a data array that
  // you might receive from an API
  const data = [
    {
      type: "Wallet Deposit",
      value1: 2000000,
      value2: 560000,
      date: "2-Nov-2022",
      status: "suspended",
      Actions: "",
    },
    {
      type: "Cash Withdrawal",
      value1: 2000000,
      value2: 560000,
      date: "2-Nov-2022",
      status: "suspended",
      Actions: "",
    },
    {
      type: "Agrp Investment",
      value1: 2000000,
      value2: 560000,
      date: "2-Nov-2022",
      status: "success",
      Actions: "",
    },
    {
      type: "Wallet Deposit",
      value1: 2000000,
      value2: 560000,
      date: "2-Nov-2022",
      status: "suspended",
      Actions: "",
    },
    {
      type: "Cash Withdrawal",
      value1: 2000000,
      value2: 560000,
      date: "2-Nov-2022",
      status: "suspended",
      Actions: "",
    },
    {
      type: "Agrp Investment",
      value1: 2000000,
      value2: 560000,
      date: "2-Nov-2022",
      status: "success",
      Actions: "",
    },
    {
      type: "Wallet Deposit",
      value1: 2000000,
      value2: 560000,
      date: "2-Nov-2022",
      status: "suspended",
      Actions: "",
    },
    {
      type: "Cash Withdrawal",
      value1: 2000000,
      value2: 560000,
      date: "2-Nov-2022",
      status: "suspended",
      Actions: "",
    },
    {
      type: "Agrp Investment",
      value1: 2000000,
      value2: 560000,
      date: "2-Nov-2022",
      status: "success",
      Actions: "",
    },
    {
      type: "Wallet Deposit",
      value1: 2000000,
      value2: 560000,
      date: "2-Nov-2022",
      status: "suspended",
      Actions: "",
    },
    {
      type: "Cash Withdrawal",
      value1: 2000000,
      value2: 560000,
      date: "2-Nov-2022",
      status: "suspended",
      Actions: "",
    },
    {
      type: "Agrp Investment",
      value1: 2000000,
      value2: 560000,
      date: "2-Nov-2022",
      status: "success",
      Actions: "",
    },
  ];
  return (
    <section className='transactionHistory'>
      <div className='wrapper'>
        <div className='content'>
          <table>
            <tr>
              <th>Type</th>
              <th>Value</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>
                    <div className='tdDiv'>
                      <div>
                        {val.type.includes("Deposit") && (
                          <img src='/images/credit-card-red.svg' alt='' />
                        )}
                        {val.type.includes("Withdrawal") && (
                          <img src='/images/credit-card-green.svg' alt='' />
                        )}
                        {val.type.includes("Investment") && (
                          <img src='/images/briefcase.svg' alt='' />
                        )}
                      </div>
                      <span>{val.type}</span>
                    </div>
                  </td>
                  <td>
                    <div className='mValues'>
                      <h3>${val.value1}</h3>
                      <span>${val.value2}</span>
                    </div>
                  </td>
                  <td>
                    <h3>${val.date}</h3>
                  </td>
                  <td
                    className={`${
                      val.status === "suspended" ? "colorRed" : "colorGreen"
                    }  `}
                  >
                    {val.status}
                  </td>
                  <td>
                    <button className="download-btn btn-primary" onClick={val.actions}>Download Result</button>
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
