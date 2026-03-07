import { execute, COMMAND } from "./executor.js";


/**
 * List all available images.
 * @returns {Promise<Array>} List of images in JSON format.
 */
export const list = async () => {
	return execute(`${COMMAND} image list --format json`);
};


/**
 * Retrieve details of a specific image.
 * @param {string} name - Image fingerprint or alias.
 * @returns {Promise<object>} Image metadata and configuration.
 */
export const get = async (name) => {
	return execute(`${COMMAND} image show ${name} --format json`);
};


/**
 * Delete an image from the local image store.
 * @param {string} name - Image fingerprint or alias.
 * @returns {Promise<any>}
 */
export const remove = async (name) => {
	return execute(`${COMMAND} image delete ${name}`);
};


/**
 * Import an image file into Incus.
 * @param {string} file - Path to the image file.
 * @param {string} alias - Alias to assign to the imported image.
 * @returns {Promise<any>}
 */
export const importImage = async (file, alias) => {
	return execute(`${COMMAND} image import ${file} --alias ${alias}`);
};


/**
 * Export an image to a local destination.
 * @param {string} name - Image fingerprint or alias.
 * @param {string} destination - Destination path for the exported image.
 * @returns {Promise<any>}
 */
export const exportImage = async (name, destination) => {
	return execute(`${COMMAND} image export ${name} ${destination}`);
};