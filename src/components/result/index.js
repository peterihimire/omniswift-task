import React from "react";
import passport from "../../assets/images/Passport.png";
import logo from "../../assets/images/logo.svg";

import "./styles.scss";

const Result = () => {
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
  ];

  const data2 = [
    {
      type: "Wallet Deposit",
      value1: 2000000,
      value2: 560000,
      date: "2-Nov-2022",
      status: "suspended",
      Actions: "",
    },
  ];

  return (
    <div className='result'>
      <div className='wrapper'>
        <div className='result-wrapper'>
          <div className='result-header'>
            <div>
              <img src={logo} alt='' />
            </div>
            <div className='result-address'>
              <div>
                <h2>FREMONT COLLEGE OF EDUCATION</h2>
                <p>
                  No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria.
                </p>
              </div>
              <div>
                <h2>Post Graduate Diploma in Education</h2>
                <p>Student First Semester Statement Of Result</p>
              </div>
            </div>
            <div>
              <img src={passport} alt='' />
            </div>
          </div>

          <div className='result-user'>
            <div>
              <div className='result-user-item'>
                <h4>Name:</h4>
                <span>Chukwuma James Nnamdi</span>
              </div>
              <div className='result-user-item'>
                <h4>level:</h4>
                <span>100 Level</span>
              </div>
            </div>

            <div>
              <div className='result-user-item'>
                <h4>Reg. No.:</h4>
                <span>FCE/PGDE/2021/002</span>
              </div>
              <div className='result-user-item'>
                <h4>Session:</h4>
                <span>12022/2023 Session</span>
              </div>
            </div>
          </div>

          <div className='table1'>
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

          <div className='table2'>
            <table>
              <tr>
                <th>Type</th>
                <th>Value</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              {data2.map((val, key) => {
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

          <div className='remarks'>
            <div className='remarks-item'>
              <h4>Remarks:</h4>
              <span>Pass</span>
            </div>
          </div>

          <div className='signature-wrapper'>
            <div className='signature'></div>
            <p>Registra</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
