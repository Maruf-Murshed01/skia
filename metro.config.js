const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add 'wasm' to the asset extensions to ensure Metro can find the file
config.resolver.assetExts.push('wasm');

module.exports = config;