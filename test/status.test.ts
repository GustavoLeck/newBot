import { testServer } from "./jest.setup";

describe("Get - Test", () => {
  it("Validando retorno", async () => {
    const response = await testServer.get("/api/status");
    expect(response.body).toEqual({ status: "Ok" });
  });
});
