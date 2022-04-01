import React, { useState} from "react";
import "./styles.scss";
import Select from "../../ui/customSelect";
import {  useDispatch } from "react-redux";
import * as actions from "../../../store/actions";

const SearchSort = () => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    level: "",
    age: "",
    state: "",
    gender: "",
  });
  // const dispatch = useDispatch();
  // console.log(actions);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFields({
      ...fields,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(actions.searchStudent({ ...fields }));
  };

  console.log(fields);

  return (
    <section className='searchSort'>
      <div className={` wrapper`}>
        {/* <div className='grid'> */}
        {/* <div className="search-hearder"></div> */}
        <h1>Student Data Table</h1>
        <div className='search-wrapper'>
          <div className='form-title'>Filter Student Table By:</div>
          <form onSubmit={submitHandler}>
            <div className='formGrid'>
              <div className='formGroup'>
                <Select
                  name='age'
                  id='age'
                  labelText='Age'
                  // required
                  // defaultValue=''
                  wrapClass='selectWidth'
                  onChange={handleInputChange}
                  value={fields.age}
                  // onChange={sortByInput}
                >
                  <option value='' disabled>
                    select age
                  </option>
                  <option value='19'>19</option>
                  <option value='20'>20</option>
                  <option value='21'>21</option>
                  <option value='22'>22</option>
                  <option value='23'>23</option>
                  <option value='24'>24</option>
                  <option value='25'>25</option>
                </Select>
              </div>
              <div className='formGroup'>
                <Select
                  name='state'
                  labelText='State'
                  // required
                  id='state'
                  // defaultValue=''
                  wrapClass='selectWidth'
                  onChange={handleInputChange}
                  value={fields.state}
                >
                  <option value='' disabled>
                    select state
                  </option>
                  <option value='Abuja'>Abuja</option>
                  <option value='Kaduna State'>Kaduna State</option>
                  <option value='Borno State'>Borno State</option>
                </Select>
              </div>
              <div className='formGroup'>
                <Select
                  name='level'
                  labelText='Level'
                  // required
                  id='level'
                  // defaultValue=''
                  wrapClass='selectWidth'
                  onChange={handleInputChange}
                  value={fields.level}
                >
                  <option value='' disabled>
                    select level
                  </option>
                  <option value='3'>3</option>
                  <option value='100 Level'>100 Level</option>
                  <option value='200 Level'>200 Level</option>
                  <option value='300 Level'>300 Level</option>
                </Select>
              </div>
              <div className='formGroup'>
                <Select
                  name='gender'
                  labelText='Gender'
                  // required
                  id='gender'
                  // defaultValue=''
                  wrapClass='selectWidth'
                  onChange={handleInputChange}
                  value={fields.gender}
                >
                  <option value='' disabled>
                    select gender
                  </option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </Select>
              </div>

              <div className='submitBtn'>
                <button className='btn-primary  search-btn' type='submit'>
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* </div> */}
      </div>
    </section>
  );
};

export default SearchSort;
