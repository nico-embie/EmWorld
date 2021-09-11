import { discord } from "../cookie";

describe("discord", () => {
  it("should work lol", async () => {
    const MP = {
      send: jest.fn(),
    };
    const DM = jest.fn().mockResolvedValue(MP);
    const message = {
      delete: jest.fn().mockResolvedValue({}),
      reply: jest.fn(),
      author: {
        createDM: jest.fn(DM),
      },
    };
    console.log(await discord(message));
    expect(message.de)
  });
});


describe('test', () => {
  it('nouveau test', () => {
    const countries = []
    const firstMocke = jest.fn().getMockName(countries)
    expect(discord.firstMocke).to.be.equal(firstMocke)
  })
})