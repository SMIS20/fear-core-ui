var path = require('path');
var bourbon = require('node-bourbon');
var fearCoreUiEntryPoint;

try {
    fearCoreUiEntryPoint = require.resolve('fear-core-ui');
} catch (e) {
    fearCoreUiEntryPoint = process.cwd();
}

var sassDir = path.dirname(fearCoreUiEntryPoint) + '/lib/sass';
var coreUIDir = path.dirname(fearCoreUiEntryPoint) + '/lib';
var assetsDir = path.dirname(fearCoreUiEntryPoint) + '/lib/assets';
var assetImageDir = path.dirname(fearCoreUiEntryPoint) + '/lib/assets/images';
var assetFontDir = path.dirname(fearCoreUiEntryPoint) + '/lib/assets/fonts';

module.exports = {
    sassPaths: [sassDir, coreUIDir, bourbon.includePaths],
    assetPaths: assetsDir,
    assetImagePaths: assetImageDir,
    assetFontPaths: assetFontDir
};

