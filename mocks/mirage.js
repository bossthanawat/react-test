import { createServer, Model } from "miragejs"
import rice from "./data/rice"
export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    // models: {
    //   movie: Model,
    // },

    // seeds(server) {
    //   server.create("movie", { name: "Inception", year: 2010 })
    //   server.create("movie", { name: "Interstellar", year: 2014 })
    //   server.create("movie", { name: "Dunkirk", year: 2017 })
    // },
    
    routes() {
      this.passthrough((request) => {
        if (request.url === "/_next/static/development/_devPagesManifest.json") return true;
      });

      this.namespace = ""
      this.get("/rice/type", () => {
        return rice.type
      })
    },
  })

  return server
}
