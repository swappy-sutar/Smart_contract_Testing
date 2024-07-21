const HelloTesting = artifacts.require("HelloTesting");

contract("HelloTesting", () => {
  it("should return the string 'Hello Testing'", async () => {
    const hello = await HelloTesting.deployed();
    const message = await hello.getMessage(); // Correct function call
    console.log("the message is : ", message);
    assert(message === "good morning");
  });

  it("should return 1", async () => {
    const hello = await HelloTesting.deployed();
    const message = await hello.getNum();
    assert(message.toNumber() === 1);
    console.log("the number is : ", message.toNumber());
  });
});
