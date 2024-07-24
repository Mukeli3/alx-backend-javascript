export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      reject();
    }, 1000);
  });
}
