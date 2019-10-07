/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import CustomSelect from '../../commons/custom-select';

const options = [
  { value: 'crashSeverity', label: 'Crash Severity' },
  { value: 'roadwayCharacter', label: 'Roadway Character' },
];

const crashAttributeLevels = {
  crashSeverity: [
    { label: 'Fatal', color: '#ff0000' },
    { label: 'Serious', color: '#ffa500' },
    { label: 'Slight', color: '#ffff00' },
    { label: 'Damage Only', color: '#00ff00' },
    { label: 'Unknown', color: '#00ffff' },
    { label: 'Not Specified', color: '#e0ffff' },
  ],
  roadwayCharacter: [
    { label: 'Blind bend', color: '#ffa500' },
    { label: 'Curve', color: '#ffff00' },
    { label: 'Hillcrest', color: '#00ff00' },
    { label: 'Straight or slight curve', color: '#ff0000' },
    { label: 'Not Specified', color: '#e0ffff' },
  ],
};

const initialState = {
  crashAttribute: options[0].value,
  selectedLayers: {},
};

export function crashAttributeReducer(state, action) {
  switch (action.type) {
    case 'SET_CRASH_ATTRIBUTE':
      return { ...state, crashAttribute: action.payload };
    case 'SET_SELECTED_LAYERS':
      return {
        ...state,
        selectedLayers: {
          ...state.selectedLayers,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
}

const CheckBox = ({ handleChange, name, label }) => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name={name}
      id={name}
      onChange={handleChange}
    />
    <label className="form-check-label" htmlFor={name}>
      {label}
    </label>
  </div>
);

CheckBox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const MapSelectors = () => {
  const [state, dispatch] = React.useReducer(crashAttributeReducer, initialState);

  const handleChange = event => {
    if (event.persist) {
      event.persist();
      const { target } = event;
      const value = target.checked;
      const { name } = target;
      dispatch({
        type: 'SET_SELECTED_LAYERS',
        payload: { name, value },
      });
    } else {
      dispatch({
        type: 'SET_CRASH_ATTRIBUTE',
        payload: event.value,
      });
    }
  };

  return (
    <div data-test="map-selector">
      <CustomSelect
        options={options}
        name="crashAttribute"
        onChangeHandler={handleChange}
        id="crashAttribute"
        defaultValue={options[0]}
      />
      <table className="crash-level-table">
        <tbody>
          {crashAttributeLevels[state.crashAttribute]
            && crashAttributeLevels[state.crashAttribute].map(item => (
              <tr key={item.label}>
                <td
                  style={{
                    backgroundColor: `${item.color}`,
                  }}
                  className="crash-level-td"
                >
                  {item.label.charAt(0).toUpperCase()}
                </td>
                <td>- {item.label}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <hr />
      <p>Show selected layers</p>
      <CheckBox
        handleChange={handleChange}
        name="police-regions"
        label="Police Regions"
      />
      <CheckBox
        handleChange={handleChange}
        name="unra-a"
        label="UNRA Class A Roads"
      />
      <CheckBox
        handleChange={handleChange}
        name="unra-b"
        label="UNRA Class B Roads"
      />
      <hr />
      <CheckBox
        handleChange={handleChange}
        name="draw-enable"
        label="Enable Drawing"
      />
    </div>
  );
};

export default MapSelectors;
