import incus from "../../../../../../lib/modules/incus.js";


export default async function get(req, res) {
	const { _cName } = req;
	const keyFilter = req.query.key;

	try {
		const containerInfo = await incus.containers.info(_cName);

		if (!containerInfo || !containerInfo.config) {
			return res.status(404).json({ status: false, message: "Container not found or has no configuration" });
		}

		let config = containerInfo.config;

		// If a key filter is provided, filter the config keys
		if (keyFilter) {
			config = Object.fromEntries(
				Object.entries(config).filter(([key]) => key.startsWith(keyFilter))
			);
		}

		res.json({ status: true, config });
	} catch (err) {
		console.error(`Error retrieving config for container ${_cName}:`, err);
		res.status(500).json({ status: false, message: "Failed to retrieve container configuration" });
	}
}