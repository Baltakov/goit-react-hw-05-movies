import React from 'react';

const Form = ({ onSubmit, value, onChange, setSearchParams }) => {
  const handleFormSubmit = e => {
    e.preventDefault();
    const trimmedValue = value.trim().toLowerCase();
    if (trimmedValue !== '') {
      setSearchParams({ query: trimmedValue });
      onSubmit(trimmedValue);
    }
  };

  return (
    <form className="searchForm" onSubmit={handleFormSubmit}>
      <button type="submit" className="searchFormButton">
        <span className="searchFormButtonLabel">Search</span>
      </button>

      <input
        className="searchFormInput"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={value}
        onChange={e => onChange(e.target.value.toLowerCase())}
      />
    </form>
  );
};

export default Form;
