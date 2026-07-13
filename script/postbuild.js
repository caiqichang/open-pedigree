const fs = require("fs")
const path = require("path")

"use strict"

// 兼容 Node 14 的递归复制函数
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName),
                        path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// copy to build
const build = "build"
if (!fs.existsSync(build)) {
  fs.mkdirSync(build);
}

let source = ["dist", "public"]
source.forEach(s => {
  copyRecursiveSync(s, `${build}/${s}`)
})

fs.copyFileSync("index.html", `${build}/index.html`)
