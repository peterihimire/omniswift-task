import * as actionTypes from "../actions/actionTypes";

const initialState = {
  // currentUser: JSON.parse(localStorage.getItem("user")) || null,
  allStudents: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STUDENTS:
      return {
        ...state,
        allStudents: action.payload,
      };
    case actionTypes.STUDENT_START:
      return {
        ...state,
        loading: action.payload,
      };
    case actionTypes.STUDENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
