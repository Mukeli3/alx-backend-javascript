export default function uploadPhoto(fileName) {
  return new Promise((_, reject) => {
    const errMsg = `${fileName} cannot be processed`;
    reject(new Error(errMsg));
  });
}
