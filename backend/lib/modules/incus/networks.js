import { execute, COMMAND } from "./executor.js";


/**
 * List all Incus networks.
 * @returns {Promise<Array>} List of networks in JSON format.
 */
export const list = async () => {
	return execute(`${COMMAND} network list --format json`);
};


/**
 * Retrieve details of a specific network.
 * @param {string} name - Network name.
 * @returns {Promise<object>} Network configuration and status.
 */
export const get = async (name) => {
	return execute(`${COMMAND} network show ${name} --format json`);
};


/**
 * Create a new network.
 * @param {string} name - Network name.
 * @param {Object} config - Optional network configuration key/value pairs.
 * @returns {Promise<any>}
 */
export const create = async (name, config = {}) => {
	const args = Object.entries(config)
		.map(([k, v]) => `${k}=${v}`)
		.join(" ");

	return execute(`${COMMAND} network create ${name} ${args}`);
};


/**
 * Delete a network.
 * @param {string} name - Network name.
 * @returns {Promise<any>}
 */
export const remove = async (name) => {
	return execute(`${COMMAND} network delete ${name}`);
};


/**
 * Attach a network to a container.
 * @param {string} container - Container name.
 * @param {string} network - Network name.
 * @returns {Promise<any>}
 */
export const connect = async (container, network) => {
	return execute(`${COMMAND} network attach ${network} ${container}`);
};


/**
 * Detach a network from a container.
 * @param {string} container - Container name.
 * @param {string} network - Network name.
 * @returns {Promise<any>}
 */
export const disconnect = async (container, network) => {
	return execute(`${COMMAND} network detach ${network} ${container}`);
};