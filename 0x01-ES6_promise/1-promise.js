export default function getFullResponseFromAP(success) {
  return new Promise((resolve) => {
    if (success === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      throw new Error('The fake API is not working currently');
    }
  });
}
