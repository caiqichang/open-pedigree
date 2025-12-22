const fs = require("fs")

"use strict"

// clear package output
const build = "build"
if (fs.existsSync(build)) {
    fs.rmSync(build, {
        recursive: true,
    })
}

// clear ts output
const out = "dist"
if (fs.existsSync(out)) {
    fs.rmSync(out, {
        recursive: true,
    })
}