import { execute, COMMAND } from "./executor.js";


/**
 * List all storage pools.
 * @returns {Promise<Array>} List of storage pools in JSON format.
 */
export const list = async () => {
	return execute(`${COMMAND} storage pool list --format json`);
};


/**
 * Retrieve details of a specific storage pool.
 * @param {string} name - Storage pool name.
 * @returns {Promise<object>} Storage pool configuration and status.
 */
export const get = async (name) => {
	return execute(`${COMMAND} storage pool show ${name} --format json`);
};


/**
 * Create a new storage pool.
 * @param {string} name - Storage pool name.
 * @param {string} [driver="dir"] - Storage driver to use (ex: dir, lvm, btrfs, zfs).
 * @returns {Promise<any>}
 */
export const create = async (name, driver = "dir") => {
	return execute(`${COMMAND} storage pool create ${name} ${driver}`);
};


/**
 * Delete a storage pool.
 * @param {string} name - Storage pool name.
 * @returns {Promise<any>}
 */
export const remove = async (name) => {
	return execute(`${COMMAND} storage pool delete ${name}`);
};