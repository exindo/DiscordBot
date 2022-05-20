const dotenv = require("dotenv").config({ path: __dirname + "/./../../.env" })

module.exports = {
  TOKEN: "OTc2NzI0NzAzNzEwNDI1MTE4.GU-9wJ.i6gAbhsBcUTKmIEVUmhesX9zgvEMd22dy4ZQF0",
  PREFIX: ".",
  OWNER: process.env.owner,
  CORONA_API: "https://corona.lmao.ninja/v2",
}
