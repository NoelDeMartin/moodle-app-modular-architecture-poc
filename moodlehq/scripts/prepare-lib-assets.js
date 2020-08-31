const fs = require('fs-extra');
const path = require('path');
const libAssets = ['assets', 'theme.scss'];

libAssets.forEach(dir => fs.copy(path.resolve(__dirname, '../src/lib/', dir), path.resolve(__dirname, '../dist/', dir)));
