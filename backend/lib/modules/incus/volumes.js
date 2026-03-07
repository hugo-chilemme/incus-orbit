import { execute, COMMAND } from "./executor.js";


/**
 * List all storage volumes in a storage pool.
 * @param {string} pool - Storage pool name.
 * @returns {Promise<Array>} List of volumes in JSON format.
 */
export const list = async (pool) => {
	return execute(`${COMMAND} storage volume list ${pool} --format json`);
};


/**
 * Retrieve details of a specific storage volume.
 * @param {string} pool - Storage pool name.
 * @param {string} name - Volume name.
 * @returns {Promise<object>} Volume configuration and metadata.
 */
export const get = async (pool, name) => {
	return execute(`${COMMAND} storage volume show ${pool} ${name} --format json`);
};


/**
 * Create a new storage volume in a storage pool.
 * @param {string} pool - Storage pool name.
 * @param {string} name - Volume name.
 * @returns {Promise<any>}
 */
export const create = async (pool, name) => {
	return execute(`${COMMAND} storage volume create ${pool} ${name}`);
};


/**
 * Delete a storage volume from a storage pool.
 * @param {string} pool - Storage pool name.
 * @param {string} name - Volume name.
 * @returns {Promise<any>}
 */
export const remove = async (pool, name) => {
	return execute(`${COMMAND} storage volume delete ${pool} ${name}`);
};


/**
 * Attach a storage volume to a container.
 * @param {string} pool - Storage pool name.
 * @param {string} volume - Volume name.
 * @param {string} container - Container name.
 * @param {string} path - Mount path inside the container.
 * @returns {Promise<any>}
 */
export const attach = async (pool, volume, container, path) => {
	return execute(`${COMMAND} storage volume attach ${pool} ${volume} ${container} ${path}`);
};


/**
 * Detach a storage volume from a container.
 * @param {string} pool - Storage pool name.
 * @param {string} volume - Volume name.
 * @param {string} container - Container name.
 * @returns {Promise<any>}
 */
export const detach = async (pool, volume, container) => {
	return execute(`${COMMAND} storage volume detach ${pool} ${volume} ${container}`);
};