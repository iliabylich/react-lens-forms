import { lens, compose, view, set } from 'ramda';

const statePropLens = (prop) => {
  return lens(
    (component) => component.state[prop],
    (value, component) => {
      const newState = {};
      newState[prop] = value;
      component.setState(newState);
    }
  )
}

const mapPropLens = (prop) => {
  return lens(
    (o) => o[prop],
    (value, o) => o.set(prop, value)
  )
}

export {
  lens, compose, view, set,
  statePropLens, mapPropLens
};
