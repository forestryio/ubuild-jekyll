// Configures gulp build
// See gulpfile.babel.js for build pipeline
const { resolve } = require("path")

module.exports = function(env) {
  const dest = "site/"
  const build = "dist/"
  const isProduction = process.env.NODE_ENV === "production"

  return {
    generator: {
      label: "Jekyll",
      command: "bundle",
      args: {
        default: [
          "exec",
          "jekyll",
          "build",
          "--source",
          resolve(dest),
          "--destination",
          resolve(build),
        ],
        development: [
          "-V",
          "--drafts",
          "--unpublished",
          "--future",
          "--baseURL=/",
        ],
        preview: ["--baseURL=/"],
        production: [],
      },
    },
    styles: {
      dest: dest + "css",
    },
    scripts: {
      dest: dest + "js/",
    },
    images: {
      dest: dest + "img/",
    },
    svg: {
      dest: dest + "svg/",
    },
  }
}
