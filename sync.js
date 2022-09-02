class Lodash {
  compact(arr) {
    return arr.filter(value => !!value);
  }

  groupBy(arr, prop) {
    const result = {};
    if (typeof prop === 'function') {
      arr.map(el => {
        const value = prop(el);
        if (!(value in result)) {
          result[value] = [];
        }
        result[value].push(el);
      });
    } else if (typeof prop === 'string') {
      arr.map(el => {
        const value = el[prop];
        if (!(value in result)) {
          result[value] = [];
        }
        result[value].push(el);
      });
    }

    return result;
  }
}

module.exports = Lodash;
