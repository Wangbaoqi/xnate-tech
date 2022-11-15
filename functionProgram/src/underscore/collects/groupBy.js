const _ = require("underscore");

const groupBy = require("./groupBy_s");

const list = [
  {
    type: "js",
    subType: "date",
    title: "format date",
  },
  {
    type: "js",
    subType: "browser",
    title: "url",
  },
  {
    type: "js",
    subType: "array",
    title: "gg",
  },
  {
    type: "react",
    subType: "hooks",
    title: "useState",
  },
  {
    type: "react",
    subType: "hooks",
    title: "useImdiea",
  },
];

const groupType = _.groupBy(list, "type");
const groupType_s = groupBy(list, "type");

const res = Object.keys(groupType);



const arrayfrom = Array.from({ length: 2 }, (_, i) => {
  console.log(_, "--");
  return {
    id: i,
  };
});

console.log(arrayfrom);

// console.log(groupType_s);
