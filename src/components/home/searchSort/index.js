import React from "react";
import "./styles.scss";
import Select from "../../ui/customSelect";
// import SearchIcon from "../../../public/images/search-icon.svg";
// import { useSelector, useDispatch } from "react-redux";
// import * as actions from "../../../store/actions";

const SearchSort = () => {
  // const dispatch = useDispatch();
  // console.log(actions);

  // const filterByInput = (e) => {
  //   e.preventDefault();
  //   const input = e.target.value;
  //   console.log(input);
  //   dispatch(actions.filterByValue({ value: input }));
  // };

  // const sortByInputHandler = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   // let text = e.target.value;
  //   // dispatch(actions.searchCareersLocation({ ...field }));
  //   // dispatch(actions.filterByValue({value}));

  //   if (value.startsWith("education")) {
  //     dispatch(actions.sortByEducation({ value }));
  //   } else if (value.startsWith("health")) {
  //     dispatch(actions.sortByHealth({ value }));
  //   } else if (value.startsWith("ecommerce")) {
  //     dispatch(actions.sortByEcommerce({ value }));
  //   } else {
  //     dispatch(actions.loadData());
  //   }

  //   console.log(value);
  // };

  // const sortByInput = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   let direction = value.endsWith("asc") ? "asc" : "desc";

  //   if (value === "default") {
  //     dispatch(actions.loadData());
  //   } else if (value.startsWith("education")) {
  //     dispatch(actions.sortByEducation({ value }));
  //   } else if (value.startsWith("health")) {
  //     dispatch(actions.sortByHealth({ value }));
  //   } else if (value.startsWith("ecommerce")) {
  //     dispatch(actions.sortByEcommerce({ value }));
  //   } else {
  //     dispatch(actions.sortByAlphabet({ direction }));
  //   }

  //   console.log(value);
  // };

  return (
    <section className='searchSort'>
      <div className={` wrapper`}>
        {/* <div className='grid'> */}
        {/* <div className="search-hearder"></div> */}
        <h1>Student Data Table</h1>
        <div className='search-wrapper'>
          <div className='form-title'>Filter Student Table By:</div>
          <form>
            <div className='formGrid'>
              <div className='formGroup'>
                <Select
                  name='age'
                  id='age'
                  labelText='Age'
                  // required
                  defaultValue=''
                  wrapClass='selectWidth'
                  // onChange={sortByInputHandler}
                  // onChange={sortByInput}
                >
                  <option value='' disabled>
                    select age
                  </option>
                  <option value='education'>Education</option>
                  <option value='ecommerce'>E-Commerce</option>
                  <option value='health'>Health</option>
                </Select>
              </div>
              <div className='formGroup'>
                <Select
                  name='state'
                  labelText='State'
                  // required
                  id='state'
                  defaultValue=''
                  wrapClass='selectWidth'
                  // onChange={sortByInput}
                >
                  <option value='' disabled>
                    select state
                  </option>
                  <option value='order_asc'>Order - A-Z</option>
                  <option value='order_desc'>Order - Z-A</option>
                </Select>
              </div>
              <div className='formGroup'>
                <Select
                  name='level'
                  labelText='Level'
                  // required
                  id='level'
                  defaultValue=''
                  wrapClass='selectWidth'
                  // onChange={sortByInput}
                >
                  <option value='' disabled>
                    select level
                  </option>
                  <option value='date_asc'>Date - ASC</option>
                  <option value='date_desc'>Date - DESC</option>
                </Select>
              </div>
              <div className='formGroup'>
                <Select
                  name='gender'
                  labelText='Gender'
                  // required
                  id='gender'
                  defaultValue=''
                  wrapClass='selectWidth'
                  // onChange={sortByInput}
                >
                  <option value='' disabled>
                    select gender
                  </option>
                  <option value='date_asc'>Date - ASC</option>
                  <option value='date_desc'>Date - DESC</option>
                </Select>
              </div>

              <div className='submitBtn'>
                <button
                  className='btn-primary  search-btn'
                  // onClick={stepHandler}
                  type='submit'
                >
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
