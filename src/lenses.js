class Lens {
  constructor() {
    this.view = this.view.bind(this);
    this.set = this.set.bind(this);
  }
}

class BindedLens extends Lens {
  constructor(get, set) {
    super();

    this.get = get;
    this.set = set;
  }

  view() {
    return this.get();
  }

  set(value) {
    return this.set(value)
  }
}

class PropertyLens extends Lens {
  constructor(prop) {
    super();

    this.prop = prop;
  }

  view(obj) {
    return obj[this.prop];
  }

  set(value, obj) {
    return obj.set(this.prop, value);
  }
}

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const composeGetters = (...lenses) => compose(...lenses.map(lens => lens.view));
const composeSetters = (...lenses) => compose(...lenses.map(lens => lens.set));

class LensChain extends Lens {
  constructor(...lenses) {
    super();

    this.lenses = lenses;
  }

  view() {
    return this.lenses.reduce((acc, lens) => lens.view(acc), null);
  }

  set(value) {
    const [first, ...rest] = this.lenses;
    const last = rest.pop();

    const getFirst = first.view;
    const setFirst = first.set;

    let getRest = () => composeGetters(...rest)(getFirst())
    let setRest = (restValue) => setFirst( composeSetters(...rest)(restValue, getFirst()) )

    if (rest.length === 0) {
      getRest = getFirst;
      setRest = setFirst;
    }

    return setRest( last.set(value, getRest()) );
  }

  chain(...lenses) {
    return new LensChain(...this.lenses, ...lenses);

  }
}

export { Lens, BindedLens, PropertyLens, LensChain } ;
