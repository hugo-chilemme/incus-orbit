import incus from "../../../../../../lib/modules/incus.js";


export default async function post(req, res) {
	const { _cName } = req;
	const { command } = req.body;

	if (!command) {
		return res.status(400).json({ status: false, message: "Command is required" });
	}

	try {
		const output = await incus.containers.exec(_cName, command);
		res.json({ status: true, output });
	} catch (err) {
		console.error(`Error executing command in container '${_cName}':`, err);
		res.status(500).json({ status: false, message: "Failed to execute command in container" });
	}
}