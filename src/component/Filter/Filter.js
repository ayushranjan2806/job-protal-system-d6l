// Importing useState hook 
import { useState } from "react";

// Importing CSS styles
import "./index.css";

// Defining experience 
const experience = [
  { min: 0, max: 1 },
  { min: 2, max: 3 },
  { min: 4, max: 5 },
  { min: 5, max: 10 },
];

// Filter component
const Filter = ({
  setFilteredJobs, // Function to set filtered jobs
  handleJobFilter, // Function to handle job filter
  handleExperienceFilter, // Function to handle experience filter
  searchEvent, // Function to handle search event
}) => {
  // Using useState hook to manage checked state for checkboxes
  const [checkedState, setCheckedState] = useState(
    new Array(experience.length).fill(false) // Initially setting all checkboxes to unchecked
  );

  // Function to handle checkbox change
  const handleOnChange = (position) => {
    // Updating checked state based on checkbox position
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    // Setting new checked state
    setCheckedState(updatedCheckedState);

    // Calling function to handle experience filter with updated checked state
    handleExperienceFilter(updatedCheckedState);
  };

  // Render filter component
  return (
    <>
      <div className="filter-page">
        <div className="search-box">
          <div className="search">
            <h3>Search Jobs</h3>
            <div className="job-search">
              {/* Input for job search */}
              <input
                type="text"
                className="search-term"
                placeholder="Search Here"
                onChange={searchEvent} // Calling search event function on input change
              />
            </div>
          </div>
          <div className="filter">
            <div className="job-category">
              <h4>Categories</h4>
              <ul>
                {/* List items for job categories */}
                <li onClick={handleJobFilter}>Frontend</li>
                <li onClick={handleJobFilter}>Backend</li>
                <li onClick={handleJobFilter}>Devops</li>
                <li onClick={handleJobFilter}>Full Stack</li>
                <li onClick={handleJobFilter}>Digital Marketing</li>
              </ul>
            </div>

            <div className="job-category">
              <h4>Experience</h4>
              <ul className="checkbox">
                {/* List items for experience levels */}
                <li>
                  <input
                    name="0-1"
                    type="checkbox"
                    checked={checkedState[0]} // Setting checkbox checked state
                    onChange={() => handleOnChange(0)} // Calling handleOnChange function on checkbox change
                  />
                  0-1 year
                </li>
                {/* Similarly for other experience levels */}
                <li>
                  <input
                    name="2-3"
                    type="checkbox"
                    checked={checkedState[1]}
                    onChange={() => handleOnChange(1)}
                  />
                  2-3 year
                </li>
                <li>
                  <input
                    name="4-5"
                    type="checkbox"
                    checked={checkedState[2]}
                    onChange={() => handleOnChange(2)}
                  />
                  4-5 year
                </li>
                <li>
                  <input
                    name="5+"
                    type="checkbox"
                    checked={checkedState[3]}
                    onChange={() => handleOnChange(3)}
                  />
                  5+ year
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter; 
