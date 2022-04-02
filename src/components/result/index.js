import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import Loader from "react-loader-spinner";
import ReactToPrint from "react-to-print";

import "./styles.scss";

const Result = (props) => {
  const [studentRes, setStudentRes] = useState({});
  const [studentRes2, setStudentRes2] = useState({});
  const [studentRes3, setStudentRes3] = useState({});
  const [studentRes4, setStudentRes4] = useState({});


  const dispatch = useDispatch();
  const componentRef = useRef();


  const [id, setId] = useState("");

  const { result, loading, error } = useSelector((state) => {
    return {
      result: state.students.result,
      error: state.students.error,
      loading: state.students.loading,
    };
  });
  console.log(error);

  useEffect(() => {
    setId(props.match.params.id);
  }, [props.match.params.id]);
  console.log(id);

  useEffect(() => {
    dispatch(actions.result({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    let studentsResult = result.data?.result[0];
    let studentsResult2 = result.data?.result[1];
    let studentsResult3 = result.data?.result[2];
    let studentsResult4 = result.data?.result[3];
    setStudentRes(studentsResult);
    setStudentRes2(studentsResult2);
    setStudentRes3(studentsResult3);
    setStudentRes4(studentsResult4);
  }, [result.data?.result]);

  if (loading)
    return (
      <div className='loader'>
        <Loader
          visible={loading}
          type='Bars'
          color='#46C35F'
          height={100}
          width={100}
        />
      </div>
    );

  const resultWrapper = {
    padding: "40px 20px",
  };
  const resultHeader = {
    display: "flex",
    justifyContent: "space-between",
  };
  const logoDiv = {
    width: "100px",
    height: "100px",
  };
  const resultAddress = {
    textAlign: "center",
    margin: "0px 10px",
  };
  const schAddress = {};
  const schDept = {};
  const passportDiv = {
    width: "100px",
    height: "100px",
  };
  const resultUser = {
    display: "flex",
    justifyContent: "space-between",
    margin: "50px 0",
  };
  const resultUserItem = {
    display: "flex",
    alignItem: "center",
    marginBottom: "20px",
  };
  const table1 = {
    width: "100%",
    height: "330px",
    marginBottom: "20px",
    backgroundColor: "white",
  };
  const mTable1 = {
    width: "100%",
    height: "200px",
    borderCollapse: "collapse",
  };
  const table2 = {
    width: "80%",
    height: "150px",
  };
  const mTable2 = {
    width: "100%",
    height: "100px",
    borderCollapse: "collapse",
  };
  const remarks = {
    marginBottom: "100px",
  };
  const remarksItem = {
    display: "flex",
    alignItem: "center",
  };
  const signatureWrapper = {};
  const signature = {
    width: "200px",
    marginBottom: "20px",
    border: "solid 1px black",
  };

  const tHead = {
    backgroundColor: "#0D7590",
    color: "white",
    padding: "15px 10px",
    marginBottom: "10px",
  };

  const tRow1 = {
    backgroundColor: "#f2f2f2",
  };
  const tRow2 = {
    backgroundColor: "#ffffff",
  };
  const tRow3 = {
    backgroundColor: "#f2f2f2",
  };
  const tRow4 = {
    backgroundColor: "#ffffff",
  };
  const tData = {
    padding: "15px 10px",
  };

  const mainRemark = {
    color: "#0D7590",
    marginLeft: "5px",
  };

  const span = {
    marginLeft: "20px",
  };
  const addTitle = {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "19px",
    color: "#4f4f4f",
    marginBottom: "10px",
  };

  const addPara = {
    width: "270px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
  };

  const deptTitle = {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#333333",
    marginBottom: "10px",
  };

  const deptSubTitle = {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#333333",
    marginBottom: "10px",
  };

  const headWidth = {
    width: "80px",
  };

  return (
    <div className='result'>
      <div className='wrapper'>
        <div className='save-btn-div'>
          <ReactToPrint
            trigger={() => (
              <button className='btn-primary save-btn'>SAVE FILE</button>
            )}
            content={() => componentRef.current}
          />
        </div>

        <div
          id='content'
          className='result-wrapper'
          ref={componentRef}
          style={resultWrapper}
        >
          <div className='result-header' style={resultHeader}>
            <div className='logo-div' style={logoDiv}>
              <img src={result.logo} alt='' />
            </div>
            <div className='result-address' style={resultAddress}>
              <div className='sch-address' style={schAddress}>
                <h2 style={addTitle}>FREMONT COLLEGE OF EDUCATION</h2>
                <p style={addPara}>
                  No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria.
                </p>
              </div>
              <div className='sch-dept' style={schDept}>
                <h2 style={deptTitle}>Post Graduate Diploma in Education</h2>
                <h5 style={deptSubTitle}>
                  Student First Semester Statement Of Result
                </h5>
              </div>
            </div>
            <div className='passport-div' style={passportDiv}>
              <img src={result.profile_picture} alt='' />
            </div>
          </div>

          <div className='result-user' style={resultUser}>
            <div>
              <div className='result-user-item' style={resultUserItem}>
                <h4 style={headWidth}>Name:</h4>
                <span style={span}>
                  {result.data?.surname + " " + result.data?.firstname}
                </span>
              </div>
              <div className='result-user-item' style={resultUserItem}>
                <h4 style={headWidth}>level:</h4>
                <span style={span}>{result.data?.level}</span>
              </div>
            </div>

            <div>
              <div className='result-user-item' style={resultUserItem}>
                <h4 style={headWidth}>Reg. No.:</h4>
                <span style={span}>{result.data?.reg_no}</span>
              </div>
              <div className='result-user-item' style={resultUserItem}>
                <h4 style={headWidth}>Session:</h4>
                <span style={span}>{result.data?.session}</span>
              </div>
            </div>
          </div>

          <div className='table1' style={table1}>
            <table style={mTable1}>
              <tbody>
                <tr>
                  <th style={tHead}>S/N</th>
                  <th style={tHead}>Course Code</th>
                  <th style={tHead}>Course Title</th>
                  <th style={tHead}>Unit</th>
                  <th style={tHead}>Grade</th>
                  <th style={tHead}>Total Point</th>
                </tr>
                {/* {result.data?.result?.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{val.coursecode}</td>
                      <td className='' width='40%'>
                        {val.title}
                      </td>
                      <td className=''>{val.credit_unit}</td>
                      <td>{val.grade}</td>
                      <td>{val.total_point}</td>
                    </tr>
                  );
                })} */}

                <tr style={tRow1}>
                  <td style={tData}>{"1"}</td>
                  <td style={tData}>{studentRes?.coursecode}</td>
                  <td style={tData} className='' width='40%'>
                    {studentRes?.title}
                  </td>
                  <td style={tData} className=''>
                    {studentRes?.credit_unit}
                  </td>
                  <td style={tData}>{studentRes?.grade}</td>
                  <td style={tData}>{studentRes?.total_point}</td>
                </tr>

                <tr style={tRow2}>
                  <td style={tData}>{"2"}</td>
                  <td style={tData}>{studentRes2?.coursecode}</td>
                  <td style={tData} className='' width='40%'>
                    {studentRes2?.title}
                  </td>
                  <td style={tData} className=''>
                    {studentRes2?.credit_unit}
                  </td>
                  <td style={tData}>{studentRes2?.grade}</td>
                  <td style={tData}>{studentRes2?.total_point}</td>
                </tr>

                <tr style={tRow3}>
                  <td style={tData}>{"3"}</td>
                  <td style={tData}>{studentRes3?.coursecode}</td>
                  <td style={tData} className='' width='40%'>
                    {studentRes3?.title}
                  </td>
                  <td style={tData} className=''>
                    {studentRes3?.credit_unit}
                  </td>
                  <td style={tData}>{studentRes3?.grade}</td>
                  <td style={tData}>{studentRes3?.total_point}</td>
                </tr>

                <tr style={tRow4}>
                  <td style={tData}>{"4"}</td>
                  <td style={tData}>{studentRes4?.coursecode}</td>
                  <td style={tData} className='' width='40%'>
                    {studentRes4?.title}
                  </td>
                  <td style={tData} className=''>
                    {studentRes4?.credit_unit}
                  </td>
                  <td style={tData}>{studentRes4?.grade}</td>
                  <td style={tData}>{studentRes4?.total_point}</td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className='table2' style={table2}>
            <table style={mTable2}>
              <tbody>
                <tr>
                  <th style={tHead}>UNTS</th>
                  <th style={tHead}>UNTD</th>
                  <th style={tHead}>GPTS</th>
                  <th style={tHead}>GPTD</th>
                  <th style={tHead}>GPATS</th>
                  <th style={tHead}>GPATD</th>
                </tr>

                <tr style={tRow1}>
                  <td style={tData}>{result.data?.cummulative?.unts}</td>
                  <td style={tData}>{result.data?.cummulative?.untd}</td>
                  <td style={tData}>{result.data?.cummulative?.gpts}</td>
                  <td style={tData} className=''>
                    {result.data?.cummulative?.gptd}
                  </td>
                  <td style={tData}>{result.data?.cummulative?.gpats}</td>
                  <td style={tData}>{result.data?.cummulative?.gpatd}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='remarks' style={remarks}>
            <div className='remarks-item' style={remarksItem}>
              <h4>Remarks:</h4>
              <span style={mainRemark}>
                {result.data?.cummulative?.remarks}
              </span>
            </div>
          </div>

          <div className='signature-wrapper' style={signatureWrapper}>
            <div className='signature' style={signature}></div>
            <p>Registra</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
