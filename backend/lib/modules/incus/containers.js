import { execute, COMMAND } from "./executor.js";


/**
 * Execute a command inside a container.
 * @param {string} name - Container name.
 * @param {string} command - Command to execute inside the container.
 * @returns {Promise<any>} Command output.
 */
export const exec = async (name, command) => {
	return execute(`${COMMAND} exec ${name} -- ${command}`);
};


/**
 * Retrieve detailed information about a container.
 * @param {string} name - Container name.
 * @returns {Promise<object>} Container information in JSON format.
 */
export const info = async (name) => {
	return execute(`${COMMAND} query /1.0/instances/${name}`);
};


/**
 * Create a new container from an image.
 * @param {string} image - Image name (ex: ubuntu/22.04).
 * @param {string} name - Name of the container to create.
 * @returns {Promise<object>} Information about the created container.
 */
export const launch = async (image, name) => {
	await execute(`${COMMAND} create images:${image} ${name}`);
	return getInfo(name);
};


/**
 * List all containers.
 * @returns {Promise<Array>} List of containers in JSON format.
 */
export const list = async () => {
	return execute(`${COMMAND} list --format json`);
};


/**
 * Retrieve logs of a container.
 * @param {string} name - Container name.
 * @returns {Promise<any>} Container logs output.
 */
export const logs = async (name) => {
	return execute(`${COMMAND} logs ${name}`);
};


/**
 * Delete a container.
 * @param {string} name - Container name.
 * @returns {Promise<any>}
 */
export const remove = async (name) => {
	return execute(`${COMMAND} delete ${name}`);
};


/**
 * Restart a container.
 * @param {string} name - Container name.
 * @returns {Promise<any>}
 */
export const restart = async (name) => {
	return execute(`${COMMAND} restart ${name}`);
};


/**
 * Start a container.
 * @param {string} name - Container name.
 * @returns {Promise<any>}
 */
export const start = async (name) => {
	return execute(`${COMMAND} start ${name}`);
};


/**
 * Retrieve the runtime state of a container.
 * @param {string} name - Container name.
 * @returns {Promise<object>} Container state information.
 */
export const state = async (name) => {
	return execute(`${COMMAND} info ${name} --state --format json`);
};


/**
 * Retrieve resource statistics of a container (CPU, memory, disk, etc).
 * @param {string} name - Container name.
 * @returns {Promise<object>} Resource usage statistics.
 */
export const stats = async (name) => {
	return execute(`${COMMAND} info ${name} --resources --format json`);
};


/**
 * Stop a container.
 * @param {string} name - Container name.
 * @returns {Promise<any>}
 */
export const stop = async (name) => {
	return execute(`${COMMAND} stop ${name}`);
};