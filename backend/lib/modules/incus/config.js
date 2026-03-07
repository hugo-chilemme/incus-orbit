import { execute, COMMAND } from "./executor.js";


/**
 * Retrieve the configuration of a container.
 * @param {string} name - Container name.
 * @returns {Promise<object>} Container configuration in JSON format.
 */
export const get = async (name) => {
	return execute(`${COMMAND} config show ${name} --format json`);
};


/**
 * Set one or multiple configuration keys on a container.
 * @param {string} name - Container name.
 * @param {Object} config - Key/value configuration pairs to apply.
 * @returns {Promise<any>}
 */
export const set = async (name, config) => {
	const args = Object.entries(config)
		.map(([k, v]) => `${k}=${v}`)
		.join(" ");

	return execute(`${COMMAND} config set ${name} ${args}`);
};


/**
 * Remove configuration keys from a container.
 * @param {string} name - Container name.
 * @param {string[]} keys - List of configuration keys to remove.
 * @returns {Promise<any>}
 */
export const unset = async (name, keys) => {
	const args = keys.join(" ");
	return execute(`${COMMAND} config unset ${name} ${args}`);
};