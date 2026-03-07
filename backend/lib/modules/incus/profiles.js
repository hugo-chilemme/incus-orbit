import { execute, COMMAND } from "./executor.js";


/**
 * List all Incus profiles.
 * @returns {Promise<Array>} List of profiles in JSON format.
 */
export const list = async () => {
	return execute(`${COMMAND} profile list --format json`);
};


/**
 * Retrieve details of a specific profile.
 * @param {string} name - Profile name.
 * @returns {Promise<object>} Profile configuration.
 */
export const get = async (name) => {
	return execute(`${COMMAND} profile show ${name} --format json`);
};


/**
 * Create a new profile.
 * @param {string} name - Profile name.
 * @returns {Promise<any>}
 */
export const create = async (name) => {
	return execute(`${COMMAND} profile create ${name}`);
};


/**
 * Delete a profile.
 * @param {string} name - Profile name.
 * @returns {Promise<any>}
 */
export const remove = async (name) => {
	return execute(`${COMMAND} profile delete ${name}`);
};


/**
 * Apply a profile to a container.
 * This replaces the container's existing profiles with the specified one.
 * @param {string} container - Container name.
 * @param {string} profile - Profile name to apply.
 * @returns {Promise<any>}
 */
export const attach = async (container, profile) => {
	return execute(`${COMMAND} profile apply ${container} ${profile}`);
};


/**
 * Remove a profile from a container.
 * @param {string} container - Container name.
 * @param {string} profile - Profile name to remove.
 * @returns {Promise<any>}
 */
export const detach = async (container, profile) => {
	return execute(`${COMMAND} profile remove ${container} ${profile}`);
};

