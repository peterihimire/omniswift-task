import * as actionTypes from "./actionTypes";

import axios from "../../utils/axios";

export const studentsStart = (payload) => {
  return {
    type: actionTypes.STUDENT_START,
    payload,
  };
};

export const studentsError = (payload) => {
  return {
    type: actionTypes.STUDENT_ERROR,
    payload,
  };
};

export const setStudents = (payload) => {
  return {
    type: actionTypes.SET_STUDENTS,
    payload,
  };
};

export const setResult = (payload) => {
  return {
    type: actionTypes.SET_RESULT,
    payload,
  };
};

// get all students

export const students = () => {
  return async (dispatch) => {
    dispatch(studentsStart(true));

    try {
      const response = await axios.get("viewAllData");

      dispatch(setStudents(response.data.data.students));
    } catch (err) {
      dispatch(studentsError(err.response.data.data.message));
    } finally {
      dispatch(studentsStart(false));
    }
  };
};

// search students

export const searchStudent = ({ level, age, state, gender }) => {
  return async (dispatch) => {
    dispatch(studentsStart(true));

    if (level === "" && age === "" && state === "" && gender === "") {
      dispatch(studentsStart(false));
      return dispatch(studentsError("Select a valid search filter..."));
    }

    try {
      const response = await axios.post("filterData", {
        level,
        age,
        state,
        gender,
      });

      dispatch(setStudents(response.data.data.students));
    } catch (err) {
      console.log(err);
      dispatch(studentsError("No record found for this search..."));
    } finally {
      dispatch(studentsStart(false));
    }
  };
};

// get result

export const result = ({ id }) => {
  return async (dispatch) => {
    dispatch(studentsStart(true));

    try {
      const response = await axios.post(`viewResult/${id}`);

      dispatch(setResult(response.data));
    } catch (err) {
      dispatch(studentsError(err.response?.data));
    } finally {
      dispatch(studentsStart(false));
    }
  };
};
