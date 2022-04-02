import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

import "./styles.scss";

const StudentsTable = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { allStudents, loading, error } = useSelector((state) => {
    console.log(state);

    return {
      allStudents: state.students.allStudents,
      error: state.students.error,
      loading: state.students.loading,
    };
  });

  const studentsData = allStudents;
  console.log(error);

  useEffect(() => {
    dispatch(actions.students());
  }, [dispatch]);

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
    <section className='transactionHistory'>
      <div className='wrapper'>
        <div className='content'>
          {studentsData.length === 0 ? (
            <div className='no-result'>
              <h3>NO RESULT AVAILABLE</h3>
            </div>
          ) : (
            <table>
              <tbody>
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
                {studentsData.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td className='' width='5%'>
                        {key + 1}
                      </td>
                      <td className='' width='12%'>
                        {val.surname}
                      </td>
                      <td className='' width='12%'>
                        {val.firstname}
                      </td>
                      <td className='' width='8%'>
                        {val.age}
                      </td>
                      <td className='' width='8%'>
                        {val.gender}
                      </td>
                      <td className='' width='8%'>
                        {val.level}
                      </td>
                      <td className='' width='12%'>
                        {val.state}
                      </td>
                      <td width='12%'>
                        <button
                          // to={`/result/${val.id}`}
                          className='download-btn btn-primary'
                          onClick={() => {
                            history.push(`/result/${val.id}`);
                          }}
                        >
                          Download Result
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};

export default StudentsTable;
