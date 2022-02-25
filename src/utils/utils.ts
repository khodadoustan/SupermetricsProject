export const groupArrayOfObjects = (list: any[], key: string) => {
  return list.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const sortObjectArray = (array: any[], order = 'desc') => {
  if (array) {
    console.log(array)
    if (order === 'desc') {
      return array.sort(
        (x, y) => +new Date(y.created_time) - +new Date(x.created_time)
      );
    }
    return array.sort(
      (x, y) => +new Date(x.created_time) - +new Date(y.created_time)
    );
  }
  return array
};
