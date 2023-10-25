export const classnames = (...classnames: string[] | any) => {
  return [...classnames].join(" ");
};

// // import Styles from '@/styles';

// type IClassnames = Record<string, string | boolean>;

// const classnamesFunc = (classnames: IClassnames) => {
//   const classes: string[] = [];

//   Object.entries(classnames).forEach((_) => {
//     const key = _[0];
//     const value = _[1];

//     if (typeof value === "boolean") {
//       if (value) {
//         classes.push(key);
//       }
//     }

//     if (typeof value === "string") {
//       classes.push(value);
//     }
//   });

//   return classes.join(" ");
// };

// export { classnamesFunc as classnames };
