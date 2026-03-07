import incus from "../../../../../../../../lib/modules/incus.js";


export default async function post(req, res) {
	const { _snapshot } = req;
	const { _cName } = req;

	if (!_snapshot) {
		return res.status(404).json({ status: false, message: "Snapshot not found" });
	}

	await incus.snapshots.restore(_cName, _snapshot.name).catch(err => {
		console.error(`Error restoring snapshot '${_snapshot.name}' for container '${_cName}':`, err);
		return res.status(500).json({ status: false, message: "This snapshot does not exist or could not be restored" });
	});

	res.json({ status: true });
}
