import React from 'react';
import { mount } from 'enzyme';

import MapSelectors, { crashAttributeReducer } from '.';

describe('MapSelectors component', () => {
  let wrapper;
  const dispatch = jest.fn();
  const useReducerSpy = jest.spyOn(React, 'useReducer');
  useReducerSpy.mockImplementation(init => [init, dispatch]);

  beforeEach(() => {
    wrapper = mount(<MapSelectors />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render the MapSelectors without crashing', () => {
    const mapSelector = wrapper.find("[data-test='map-selector']");
    expect(mapSelector.length).toBe(1);
  });

  describe('CheckBox', () => {
    it('should call handleChange which in turn calls dispatch on onChange ', () => {
      wrapper
        .find('.form-check-input')
        .at(0)
        .props()
        .onChange({
          persist: jest.fn,
          target: {
            type: 'checkbox',
            name: 'name',
            value: 'value',
            checked: true,
          },
        });
      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith({
        type: 'SET_SELECTED_LAYERS',
        payload: { name: 'name', value: true },
      });
    });
  });

  describe('CustomSelect', () => {
    it('should call handleChange which in turn calls dispatch after calling onChangeHandler', () => {
      wrapper
        .find('CustomSelect')
        .props()
        .onChangeHandler({
          value: 'value',
        });
      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith({
        type: 'SET_CRASH_ATTRIBUTE',
        payload: 'value',
      });
    });
  });
});

describe('crashAttributeReducer', () => {
  const state = {
    crashAttribute: '',
    selectedLayers: {},
  };
  it('should return updated crashAttribute when SET_CRASH_ATTRIBUTE is dispatched', () => {
    const action = {
      type: 'SET_CRASH_ATTRIBUTE',
      payload: 'crashSeverity',
    };
    const updatedState = crashAttributeReducer(state, action);

    expect(updatedState).toEqual({ ...state, crashAttribute: action.payload });
  });

  it('should return updated selectedLayers when SET_SELECTED_LAYERS is dispatched', () => {
    const action = {
      type: 'SET_SELECTED_LAYERS',
      payload: { name: 'name', value: 'value' },
    };
    const updatedState = crashAttributeReducer(state, action);

    expect(updatedState).toEqual({
      ...state,
      selectedLayers: {
        ...state.selectedLayers,
        [action.payload.name]: action.payload.value,
      },
    });
  });

  it('should return the state when no switch case evaluated to true', () => {
    const action = {
      type: 'TYPE_DOESNOT_EXIST',
    };
    const updatedState = crashAttributeReducer(state, action);

    expect(updatedState).toEqual(state);
  });
});
