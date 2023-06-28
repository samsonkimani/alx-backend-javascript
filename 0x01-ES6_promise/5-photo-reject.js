export default function uploadPhoto(filename) {
	return new Promise((reject) => {
		throw new Error(`${filename} cannot be processed`);
	})
}
