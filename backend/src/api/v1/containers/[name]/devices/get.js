import incus from "../../../../../../lib/modules/incus.js";


export default async function get(req, res) {
	const { _cName } = req;

	try {
		const container = await incus.containers.info(_cName);
		const devices = (container.devices || {});
		delete devices.eth0; // Exclude default network device
		delete devices.root; // Exclude default root device


		res.json({ status: true, data: devices });
	} catch (err) {
		console.error(`Error fetching devices for container ${_cName}:`, err);
		res.status(500).json({ status: false, message: "Failed to fetch container devices" });
	}
}	