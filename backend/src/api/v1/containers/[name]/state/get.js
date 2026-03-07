import incus from "../../../../../../lib/modules/incus.js";

export default function get(req, res) {
	const { _cName } = req;

	const container = incus.containers.stats(_cName);

	return container.then((data) => res.json({ status: true, data }))
		.catch((err) => res.status(500).json({ status: false, message: err.message }));
}