const sayHello = require("./sayHelloWorld");

test("It should say hello world", () => {
  expect(sayHello).toBe("Hello World")
})