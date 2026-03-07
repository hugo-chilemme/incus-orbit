import incus from "../../../../../../lib/modules/incus.js";


export default async function del(req, res) {
	const { _cName } = req;
	const { keys } = req.body;

	if (!keys || !Array.isArray(keys) || keys.some(key => typeof key !== "string")) {
		return res.status(400).json({ status: false, message: "Missing or invalid keys parameter" });
	}

	try {
		await incus.containers.deleteConfigKeys(_cName, keys);
		res.json({ status: true });
	} catch (err) {
		console.error(`Error deleting config keys for container ${_cName}:`, err);
		res.status(500).json({ status: false, message: "Failed to delete container configuration keys" });
	}
}
