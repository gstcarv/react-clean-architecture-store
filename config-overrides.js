const path = require("path");

const { override, addDecoratorsLegacy, addBabelPlugin } = require("customize-cra");

module.exports = {
    paths: function (paths) {
        paths.appIndexJs = path.resolve(__dirname, "src/lib/index.tsx");
        paths.appSrc = path.resolve(__dirname, "src");
        return paths;
    },
    webpack: override(addBabelPlugin("babel-plugin-transform-typescript-metadata")),
};
