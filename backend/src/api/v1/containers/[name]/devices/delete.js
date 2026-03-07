import incus from "../../../../../../lib/modules/incus.js";


export default async function post(req, res) {
	const { _cName } = req;
	const { name } = req.body;

	if (!name) {
		return res.status(400).json({ status: false, message: "Device name is required" });
	}

	try {
		await incus.devices.remove(_cName, name);
		res.json({ status: true, message: `Device '${name}' detached from container '${_cName}' successfully` });
	} catch (err) {
		console.error(`Error detaching device '${name}' from container '${_cName}':`, err);
		res.status(500).json({ status: false, message: "Failed to detach device from container" });
	}
}	

