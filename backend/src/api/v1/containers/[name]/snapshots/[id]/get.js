

export default function get(req, res) {
	const { _snapshot } = req;

	if (!_snapshot) {
		return res.status(404).json({ status: false, message: "Snapshot not found" });
	}

	res.json({ status: true, data: _snapshot });
}