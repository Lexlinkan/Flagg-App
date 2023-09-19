import "./DropDown.css";

const DropDown = ({ options, selectedOption, handleOptionChange }) => {
    const handleChange = (event) => {
        handleOptionChange(event.target.value);
    }

    return (
        <div className="dropdown-container">
          <select
            className="dropdown"
            value={selectedOption}
            onChange={handleChange}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    };


export default DropDown;