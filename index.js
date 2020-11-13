const winapi = require('winapi-bindings');

function getVersion(filePath) {
  if (process.platform === 'win32') {
    const v = winapi.GetFileVersionInfo(filePath).fileVersion;
    return `${v[0]}.${v[1]}.${v[2]}.${v[3]}`;
  }
  // not implemented on MacOS and Linux. On MacOS we could use the bundle version
  // from the plist file. On Linux? Hmm
  return '';
}

module.exports = {
  __esModule: true,
  default: getVersion,
}

