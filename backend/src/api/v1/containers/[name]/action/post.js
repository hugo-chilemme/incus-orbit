import incus from "../../../../../../lib/modules/incus.js";

function startContainer(_cName) {
	return incus.containers.start(_cName);
}

function stopContainer(_cName, force = false) {
	return incus.containers.stop(_cName, force);
}

function restartContainer(_cName) {
	return incus.containers.restart(_cName);
}

function pauseContainer(_cName) {
	return incus.containers.pause(_cName);
}

function resumeContainer(_cName) {
	return incus.containers.resume(_cName);
}

function renameContainer(_cName, params, res) {
	if (!params || !params.newName) {
		res.status(400).json({ status: false, message: "Missing newName parameter for rename action" });
		return null;
	}
	return incus.containers.rename(_cName, params.newName);
}

function cloneContainer(_cName, params, res) {
	if (!params || !params.newName) {
		res.status(400).json({ status: false, message: "Missing newName parameter for clone action" });
		return null;
	}
	return incus.containers.clone(_cName, params.newName);
}

function updateConfig(_cName, params, res) {
	if (!params || !params.config) {
		res.status(400).json({ status: false, message: "Missing config parameter for update-config action" });
		return null;
	}
	return incus.containers.updateConfig(_cName, params.config);
}

function updateDevices(_cName, params, res) {
	if (!params || !params.devices) {
		res.status(400).json({ status: false, message: "Missing devices parameter for update-devices action" });
		return null;
	}
	return incus.containers.updateDevices(_cName, params.devices);
}

export default function post(req, res) {
	const { _cName } = req;
	const action = req.query.action;
	let params = null;
	if (req.query.params) {
		try {
			params = JSON.parse(req.query.params);
		} catch (err) {
			return res.status(400).json({ status: false, message: "Invalid JSON in params" });
		}
	}

	let actionPromise;

	switch (action) {
		case "start":
			actionPromise = startContainer(_cName);
			break;
		case "stop":
			actionPromise = stopContainer(_cName);
			break;
		case "restart":
			actionPromise = restartContainer(_cName);
			break;
		case "force-stop":
			actionPromise = stopContainer(_cName, true);
			break;
		case "pause":
			actionPromise = pauseContainer(_cName);
			break;
		case "resume":
			actionPromise = resumeContainer(_cName);
			break;
		case "rename":
			actionPromise = renameContainer(_cName, params, res);
			break;
		case "clone":
			actionPromise = cloneContainer(_cName, params, res);
			break;
		case "update-config":
			actionPromise = updateConfig(_cName, params, res);
			break;
		case "update-devices":
			actionPromise = updateDevices(_cName, params, res);
			break;
		default:
			return res.status(400).json({ status: false, message: "Invalid action parameter" });
	}

	if (!actionPromise) return; // response already sent for validation errors

	actionPromise
		.then((data) => res.json({ status: true, data }))
		.catch((err) => res.status(500).json({ status: false, message: err.message }));
}

