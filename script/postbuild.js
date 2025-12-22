const fs = require("fs")

"use strict"

// copy to build
const build = "build"
if (!fs.existsSync(build)) {
  fs.mkdirSync("build");
}

let source = ["dist", "public"]
source.forEach(s => {
  fs.cp(s, `build/${s}`, { recursive: true }, err => {})
})

fs.copyFileSync("index.html", "build/index.html")
