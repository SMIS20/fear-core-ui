var path = require('path');
var bourbon = require('node-bourbon');
var fearCoreUiEntryPoint;

try {
    fearCoreUiEntryPoint = require.resolve('fear-core-ui');
} catch (e) {
    fearCoreUiEntryPoint = process.cwd();
}

var sassDir = path.join(fearCoreUiEntryPoint, 'lib/sass');
var assetsDir = path.join(fearCoreUiEntryPoint, 'lib/assets');
var assetImageDir = path.join(fearCoreUiEntryPoint, 'lib/assets/images');
var assetFontDir = path.join(fearCoreUiEntryPoint, 'lib/assets/fonts');

module.exports = {
    sassPaths: [sassDir, bourbon.includePaths],
    assetPaths: assetsDir,
    assetImagePaths: assetImageDir,
    assetFontPaths: assetFontDir
};
