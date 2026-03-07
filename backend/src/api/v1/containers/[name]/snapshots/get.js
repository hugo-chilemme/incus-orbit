import incus from "../../../../../../lib/modules/incus.js";


export default async function get(req, res) {
	const { _cName } = req;


	try {
		const snapshots = await incus.snapshots.list(_cName);
		res.json({ status: true, data: snapshots });
	} catch (err) {
		console.error(`Error fetching snapshots for container '${_cName}':`, err);
		res.status(500).json({ status: false, message: "Failed to fetch snapshots for container" });
	}
}	

