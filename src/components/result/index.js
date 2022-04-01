import React from "react";
import passport from "../../assets/images/Passport.png";
import logo from "../../assets/images/logo.svg";

import "./styles.scss";

const Result = () => {
  const data = [
    {
      courseCode: "PDE 701",
      courseTitle: "History of Education",
      unit: 2,
      grade: "A",
      totalPoint: "8ed",
    },
    {
      courseCode: "PDE 701l",
      courseTitle: "History of Education",
      unit: 2,
      grade: "A",
      totalPoint: "8ed",
    },
    {
      courseCode: "PDE 701t",
      courseTitle: "History of Education",
      unit: 2,
      grade: "A",
      totalPoint: "8",
    },

    {
      courseCode: "PDE 701t",
      courseTitle: "History of Education",
      unit: 2,
      grade: "A",
      totalPoint: "8",
    },
    {
      courseCode: "PDE 701",
      courseTitle: "History of Education",
      unit: 2,
      grade: "A",
      totalPoint: "8ed",
    },
  ];

  const data2 = [
    {
      unts: "028",
      untd: "028",
      gpts: "067",
      gptd: "067",
      gpats: "2.71",
      gpatd: "2.71",
    },
  ];

  return (
    <div className='result'>
      <div className='wrapper'>
        <div className='result-wrapper'>
          <div className='result-header'>
            <div className="logo-div">
              <img src={logo} alt='' />
            </div>
            <div className='result-address'>
              <div className="sch-address">
                <h2>FREMONT COLLEGE OF EDUCATION</h2>
                <p>
                  No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria.
                </p>
              </div>
              <div className="sch-dept">
                <h2>Post Graduate Diploma in Education</h2>
                <h5>Student First Semester Statement Of Result</h5>
              </div>
            </div>
            <div className="passport-div">
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
                <th>S/N</th>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Unit</th>
                <th>Grade</th>
                <th>Total Point</th>
              </tr>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{val.courseCode}</td>
                    <td className='' width='40%'>
                      {val.courseTitle}
                    </td>
                    <td className=''>{val.unit}</td>
                    <td>{val.grade}</td>
                    <td>{val.totalPoint}</td>
                  </tr>
                );
              })}
            </table>
          </div>

          <div className='table2'>
            <table>
              <tr>
                <th>UNTS</th>
                <th>UNTD</th>
                <th>GPTS</th>
                <th>GPTD</th>
                <th>GPATS</th>
                <th>GPATD</th>
              </tr>
              {data2.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.unts}</td>
                    <td>{val.untd}</td>
                    <td>{val.gpts}</td>
                    <td className=''>{val.gptd}</td>
                    <td>{val.gpats}</td>
                    <td>{val.gpatd}</td>
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
