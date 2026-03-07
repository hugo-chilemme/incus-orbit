import incus from "../../../../../../lib/modules/incus.js";


export default async function get(req, res) {
	const { _cName } = req;

	try {
		const container = await incus.containers.info(_cName);
		const profiles = container.profiles || [];

		res.json({ status: true, data: profiles });
	} catch (err) {
		console.error(`Error listing profiles for container ${_cName}:`, err);
		res.status(500).json({ status: false, message: "Failed to list container profiles" });
	}
}