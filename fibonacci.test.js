const fibonacci = require("./fibonacci");

test("Sequencia fibonacci",()=>{
    expect(fibonacci(4)).toStrictEqual([0,1,1,2]);
    expect(fibonacci(4)).not.toBe([])
})
