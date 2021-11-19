const winapi = require('winapi-bindings');

function getFileVersion(filePath) {
  if (process.platform === 'win32') {
    const v = winapi.GetFileVersionInfo(filePath).fileVersion;
    return `${v[0]}.${v[1]}.${v[2]}.${v[3]}`;
  }
  // not implemented on MacOS and Linux. On MacOS we could use the bundle version
  // from the plist file. On Linux? Hmm
  return '';
}

function getProductVersion(filePath) {
  if (process.platform === 'win32') {
    const v = winapi.GetFileVersionInfo(filePath).productVersion;
    return `${v[0]}.${v[1]}.${v[2]}.${v[3]}`;
  }
  return '';
}

function getFileVersionLocalized(filePath) {
  if (process.platform === 'win32') {
    return winapi.GetFileVersionInfo(filePath).fileVersionString;
  } else {
    // windows PEs store "fixed" file/product versions plus potentially another 2 versions,
    // in a different format, for an arbitrary number of localizations, including potentially
    // localizations for invalid languages.
    // All are completely independent.
    // The windows explorer then shows the fixed >file< version but the localized >product< version
    // for some reason.
    // Surely other OSes don't have something
    // this.
    // f***ing.
    // stupid.
    // right?
    return getFileVersion();
  }
}

function getProductVersionLocalized(filePath) {
  if (process.platform === 'win32') {
    return winapi.GetFileVersionInfo(filePath).productVersionString;
  } else {
    // ...
    return getProductVersion();
  }
}

module.exports = {
  __esModule: true,
  default: getFileVersion,
  getFileVersion,
  getProductVersion,
  getFileVersionLocalized,
  getProductVersionLocalized,
}

