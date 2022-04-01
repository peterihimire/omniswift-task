import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import Loader from "react-loader-spinner";

import "./styles.scss";

const Result = (props) => {
  console.log(props);
  console.log(props.match.params.id);
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(location);

  const [id, setId] = useState("");

  const { result, loading, error } = useSelector((state) => {
    console.log(state);
    // console.log(error, loading);
    // console.log(allStudents);
    return {
      result: state.students.result,
      error: state.students.error,
      loading: state.students.loading,
    };
  });

  useEffect(() => {
    setId(props.match.params.id);
  }, [props.match.params.id]);
  console.log(id);

  useEffect(() => {
    dispatch(actions.result({ id }));
  }, [dispatch, id]);

  console.log(result);

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

  return (
    <div className='result'>
      <div className='wrapper'>
        <div className='result-wrapper'>
          <div className='result-header'>
            <div className='logo-div'>
              <img src={result.logo} alt='' />
            </div>
            <div className='result-address'>
              <div className='sch-address'>
                <h2>FREMONT COLLEGE OF EDUCATION</h2>
                <p>
                  No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria.
                </p>
              </div>
              <div className='sch-dept'>
                <h2>Post Graduate Diploma in Education</h2>
                <h5>Student First Semester Statement Of Result</h5>
              </div>
            </div>
            <div className='passport-div'>
              <img src={result.profile_picture} alt='' />
            </div>
          </div>

          <div className='result-user'>
            <div>
              <div className='result-user-item'>
                <h4>Name:</h4>
                <span>{result.data.surname}</span>
                <span>{result.data.firstname}</span>
              </div>
              <div className='result-user-item'>
                <h4>level:</h4>
                <span>{result.data.level}</span>
              </div>
            </div>

            <div>
              <div className='result-user-item'>
                <h4>Reg. No.:</h4>
                <span>{result.data.reg_no}</span>
              </div>
              <div className='result-user-item'>
                <h4>Session:</h4>
                <span>{result.data.session}</span>
              </div>
            </div>
          </div>

          <div className='table1'>
            <table>
              <tbody>
                <tr>
                  <th>S/N</th>
                  <th>Course Code</th>
                  <th>Course Title</th>
                  <th>Unit</th>
                  <th>Grade</th>
                  <th>Total Point</th>
                </tr>
                {result.data.result?.map((val, key) => {
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
                })}
              </tbody>
            </table>
          </div>

          <div className='table2'>
            <table>
              <tbody>
                <tr>
                  <th>UNTS</th>
                  <th>UNTD</th>
                  <th>GPTS</th>
                  <th>GPTD</th>
                  <th>GPATS</th>
                  <th>GPATD</th>
                </tr>

                <tr>
                  <td>{result.data.cummulative?.unts}</td>
                  <td>{result.data.cummulative?.untd}</td>
                  <td>{result.data.cummulative?.gpts}</td>
                  <td className=''>{result.data.cummulative?.gptd}</td>
                  <td>{result.data.cummulative?.gpats}</td>
                  <td>{result.data.cummulative?.gpatd}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='remarks'>
            <div className='remarks-item'>
              <h4>Remarks:</h4>
              <span>{result.data.cummulative?.remarks}</span>
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
