const a = [{key: 1}, {key: 2}];
const b = a.reduce((sum, item) => {
  return sum + item.key
})

console.log(b);