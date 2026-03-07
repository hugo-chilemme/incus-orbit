import incus from "../../../../../lib/modules/incus.js";

export default function del(req, res) {
	const { _cName } = req;
	const force = req.query.force === "true";

	incus.containers.remove(_cName, force).then(() => res.json({ status: true }))
		.catch((err) => res.status(500).json({ status: false, message: err.message }));
}

