declare module 'exe-version' {
  export default function getVersion(exeFile: string);
  export function getFileVersion(exeFile: string);
  export function getProductVersion(exeFile: string);
}

