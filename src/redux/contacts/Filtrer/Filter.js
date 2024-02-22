// src/features/contacts/Filter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../contactsSlice';
import './Filter.css';
import PropTypes from 'prop-types';


function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div className='filter'>
      <label>
        Filter
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
