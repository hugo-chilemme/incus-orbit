import incus from "../../../../../../lib/modules/incus.js";

export default async function post(req, res) {
	const { _cName } = req;
	const { config } = req.body;

	if (!config || typeof config !== "object") {
		return res.status(400).json({ status: false, message: "Missing or invalid config parameter" });
	}

	try {
		await incus.containers.updateConfig(_cName, config);
		res.json({ status: true });
	} catch (err) {
		console.error(`Error updating config for container ${_cName}:`, err);
		res.status(500).json({ status: false, message: "Failed to update container configuration" });
	}
}

/* 
test curl:
curl -X POST "http://localhost:9001/api/v1/containers/test-container/config" -H "Content-Type: application/json" -d '{"config":{"limits.cpu":"2","limits.memory":"4GB"}}'
*/