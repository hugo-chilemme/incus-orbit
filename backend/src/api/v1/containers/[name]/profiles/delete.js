import incus from "../../../../../../lib/modules/incus.js";


export default async function del(req, res) {
	const { _cName } = req;
	const { profile } = req.body;

	if (!profile) {
		return res.status(400).json({ status: false, message: "Profile name is required" });
	}

	try {
		await incus.profiles.detach(_cName, profile);
		res.json({ status: true, message: `Profile '${profile}' removed from container '${_cName}' successfully` });
	} catch (err) {
		console.error(`Error removing profile '${profile}' from container '${_cName}':`, err);
		res.status(500).json({ status: false, message: "Failed to remove profile from container" });
	}
}

