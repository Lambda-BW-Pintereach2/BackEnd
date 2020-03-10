const request = require("supertest");
const db = require("../data/dbConfig");

const server = require("../api/server");

describe("articles-route.js with middleware", () => {
  afterEach(async () => {
    await db("articles").truncate();
  });
  it("should set to testing env", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  it("should return 401 unauthorized", async () => {
    const res = await request(server).get("/articles/");
    expect(res.status).toBe(401);
  });

  it("should return 401 unauthorized for /:id", async () => {
    const res = await request(server).get("/articles/:id/");
    expect(res.status).toBe(401);
  });

  it("should return 401 unauthorized for POST /", async () => {
    const res = await request(server).post("/articles/");
    expect(res.status).toBe(401);
  });

  it("should return 401 unauthorized for PUT /", async () => {
    const res = await request(server).put("/articles/:id");
    expect(res.status).toBe(401);
  });

  it("should return 401 unauthorized for Delete /", async () => {
    const res = await request(server).delete("/articles/:id");
    expect(res.status).toBe(401);
  });
});
