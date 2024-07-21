const Storage = artifacts.require("StorageVal");

contract("Storage contract", () => {
  //---------------------------------------------------------

  //   beforeEach(() => {
  //     console.log("before each : hii");
  //   });

  //   before(() => {
  //     console.log("before : hii");
  //   });

  //   after(() => {
  //     console.log("after : hii");
  //   });

  //   afterEach(() => {
  //     console.log("after each : hii");
  //   });

  //---------------------------------------------------------

  let storage = null;

  before(async () => {
    storage = await Storage.deployed();
  });

  it("should return message", async () => {
    await storage.setmessage("Good Afternoon");

    const result = await storage.getmessage();
    console.log("the msg is : ", result);
    assert(result === "Good Afternoon");
  });

  it("should return message", async () => {
    await storage.setmessage("Good Evening");

    const result = await storage.getmessage();
    console.log("the msg is : ", result);
    assert(result === "Good Evening");
  });
});
