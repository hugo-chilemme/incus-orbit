import incus from "../../../../../../lib/modules/incus.js";


export default async function get(req, res) {
	const { _cName } = req;

	try {
		const snapshots = await incus.snapshots.create(_cName);
		res.json({ status: true, data: snapshots });
	} catch (err) {
		console.error(`Error creating snapshot for container '${_cName}':`, err);
		res.status(500).json({ status: false, message: "Failed to create snapshot for container" });
	}
}	

