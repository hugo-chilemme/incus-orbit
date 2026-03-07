import incus from "../../../../../../../lib/modules/incus.js";


export default async function Layout(req, res, next) {

	const { _cName } = req;
	const { id } = req.params;

	try {
		const snapshot = await incus.snapshots.get(_cName, id);
		req._snapshot = snapshot;
		next();
	} catch (err) {
		res.status(500).json({ status: false, message: "This snapshot does not exist or could not be retrieved" });
	}
}