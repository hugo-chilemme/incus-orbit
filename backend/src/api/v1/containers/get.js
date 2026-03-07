import incus from "../../../../lib/modules/incus.js";


/**
 * Filter container list based on query parameters
 * @param {Array} data - List of sanitized containers
 * @param {Object} filters - Filters from request query
 * @param {string} filters.name - Filter by container name (partial match)
 * @param {string} filters.status - Filter by container status (Running, Stopped)
 * @param {string} filters.type - Filter by container type (container, virtual-machine)
 * @param {string} filters.profile - Filter by container profile
 * @returns {Array} Filtered container list
 */
function filterContainers(data, { name, status, type, profile, ip }) {
	let filtered = data;

	if (name) filtered = filtered.filter((c) => c.name.includes(name));
	if (status) filtered = filtered.filter((c) => c.status === status);
	if (type) filtered = filtered.filter((c) => c.type === type);
	if (profile) filtered = filtered.filter((c) => c.profile === profile);
	if (ip) filtered = filtered.filter((c) => c.ip?.toString().includes(ip));

	return filtered;
}


/**
 * Sanitize container object by removing unnecessary properties
 * and returning only relevant fields for API output
 * @param {Object} container - Raw container data from Incus
 * @returns {Object} Sanitized container object
 */
function sanitizeContainer(container) {
	return {
		// Container name
		name: container.name,

		// Current status (Running, Stopped, etc.)
		status: container.status,

		// Instance type (container / virtual-machine)
		type: container.type,

		// Primary profile (fallback to default if none)
		profile: container.profiles[0] || "default",

		// Extract first IPv4 address from network interfaces
		ip: container.state.network
			? Object.values(container.state.network)
					.flatMap((net) => net.addresses)
					.find((addr) => addr.family === "inet")?.address
			: null,
	};
}


/**
 * GET /containers
 * Returns a list of containers with optional filters
 * Query params:
 * - name
 * - status
 * - type
 * - profile
 */
export default function get(req, res) {
	const { name, status, type, profile, ip } = req.query;
	const containers = incus.containers.list();
	const containerList = containers.then((data) => data.map(sanitizeContainer));

	return containerList
		.then((data) => {
			const filtered = filterContainers(data, { name, status, type, profile, ip });

			return res.json({
				status: true,
				data: filtered,
			});
		})
		.catch((err) =>
			res.status(500).json({
				status: false,
				message: err.message,
			})
		);
}