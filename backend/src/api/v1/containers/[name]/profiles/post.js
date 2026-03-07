import incus from "../../../../../../lib/modules/incus.js";


export default async function post(req, res) {
	const { _cName } = req;
	const { profile } = req.body;

	if (!profile) {
		return res.status(400).json({ status: false, message: "Profile name is required" });
	}

	try {
		await incus.profiles.attach(_cName, profile);
		res.json({ status: true, message: `Profile '${profile}' applied to container '${_cName}' successfully` });
	} catch (err) {
		console.error(`Error applying profile '${profile}' to container '${_cName}':`, err);
		res.status(500).json({ status: false, message: "Failed to apply profile to container" });
	}
}

