import incus from "../../../../../../lib/modules/incus.js";


export default async function post(req, res) {
	const { _cName } = req;
	const { src, trg, name } = req.body;

	if (!src || !trg) {
		return res.status(400).json({ status: false, message: "Source and target device names are required" });
	}

	try {
		await incus.devices.add(_cName, src, trg, name);
		res.json({ status: true, message: `Device '${src}' attached to container '${_cName}' as '${trg}' successfully` });
	} catch (err) {
		console.error(`Error attaching device '${src}' to container '${_cName}' as '${trg}':`, err);
		res.status(500).json({ status: false, message: "Failed to attach device to container" });
	}
}	

