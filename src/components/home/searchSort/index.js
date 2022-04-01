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
        <form>
          <div className='formGrid'>
            <div className='formGroup'>
              <Select
                name='category'
                id='category'
                labelText='Category'
                // required
                defaultValue=''
                wrapClass='selectWidth'
                // onChange={sortByInputHandler}
                // onChange={sortByInput}
              >
                <option value='default'>All</option>
                <option value='education'>Education</option>
                <option value='ecommerce'>E-Commerce</option>
                <option value='health'>Health</option>
              </Select>
            </div>
            <div className='formGroup'>
              <Select
                name='order'
                labelText='Order'
                // required
                id='order'
                defaultValue=''
                wrapClass='selectWidth'
                // onChange={sortByInput}
              >
                <option value='default'>Default</option>
                <option value='order_asc'>Order - A-Z</option>
                <option value='order_desc'>Order - Z-A</option>
              </Select>
            </div>
            <div className='formGroup'>
              <Select
                name='date'
                labelText='Date'
                // required
                id='date'
                defaultValue=''
                wrapClass='selectWidth'
                // onChange={sortByInput}
              >
                <option value='default'>Default</option>
                <option value='date_asc'>Date - ASC</option>
                <option value='date_desc'>Date - DESC</option>
              </Select>
            </div>
            <div className='formGroup'>
              <Select
                name='date'
                labelText='Date'
                // required
                id='date'
                defaultValue=''
                wrapClass='selectWidth'
                // onChange={sortByInput}
              >
                <option value='default'>Default</option>
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
        {/* </div> */}
      </div>
    </section>
  );
};

export default SearchSort;
