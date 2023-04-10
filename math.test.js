const {add, multiple} = require('./math')
test('add 3+ 3 to have 6' , ()=>{
    expect(add(3,3)).toEqual(6)
})


test('add 3* 3 to have 9' , ()=>{
    expect(multiple(3,3)).toEqual(6)
})
