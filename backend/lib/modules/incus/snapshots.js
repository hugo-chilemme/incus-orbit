import { execute, COMMAND } from "./executor.js";


/**
 * List all snapshots of a container.
 * @param {string} container - Container name.
 * @returns {Promise<Array>} List of snapshots in JSON format.
 */
export const list = async (container) => {
	return execute(`${COMMAND} snapshot list ${container} --format json`);
};


/**
 * Retrieve details of a specific snapshot.
 * @param {string} container - Container name.
 * @param {string} snapshot - Snapshot name.
 * @returns {Promise<object>} Snapshot metadata and configuration.
 */
export const get = async (container, snapshot) => {
	return execute(`${COMMAND} snapshot show ${container}/${snapshot} --format json`);
};


/**
 * Create a snapshot of a container.
 * @param {string} container - Container name.
 * @param {string} snapshot - Snapshot name to create.
 * @returns {Promise<any>}
 */
export const create = async (container, snapshot) => {
	return execute(`${COMMAND} snapshot create ${container}/${snapshot}`);
};


/**
 * Delete a snapshot from a container.
 * @param {string} container - Container name.
 * @param {string} snapshot - Snapshot name to delete.
 * @returns {Promise<any>}
 */
export const remove = async (container, snapshot) => {
	return execute(`${COMMAND} snapshot delete ${container}/${snapshot}`);
};


/**
 * Restore a container from a specific snapshot.
 * @param {string} container - Container name.
 * @param {string} snapshot - Snapshot name to restore.
 * @returns {Promise<any>}
 */
export const restoreSnapshot = async (container, snapshot) => {
	return execute(`${COMMAND} snapshot restore ${container}/${snapshot}`);
};