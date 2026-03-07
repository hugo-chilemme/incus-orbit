import incus from "../../../../../../lib/modules/incus.js";


/*
Supprimer une clé de configuration d'un container
Endpoint

DELETE /api/v1/containers/:name/config
Description Supprime une ou plusieurs clés de configuration d'un container spécifique.

Body parameters

Paramètre	Description
keys	Tableau de clés de configuration à supprimer - ex: [ "environment.VAR1", "limits.cpu" ]
Fonctionnalités

 supprimer une ou plusieurs clés de configuration d'un container
Response

{
  "status": true,
}
*/

export default async function del(req, res) {
	const { _cName } = req;
	const { keys } = req.body;

	if (!keys || !Array.isArray(keys) || keys.some(key => typeof key !== "string")) {
		return res.status(400).json({ status: false, message: "Missing or invalid keys parameter" });
	}

	try {
		await incus.containers.deleteConfigKeys(_cName, keys);
		res.json({ status: true });
	} catch (err) {
		console.error(`Error deleting config keys for container ${_cName}:`, err);
		res.status(500).json({ status: false, message: "Failed to delete container configuration keys" });
	}
}

/*
test curl:
curl -X DELETE "http://localhost:9001/api/v1/containers/new-name/config" -H "Content-Type: application/json" -d '{"keys":["limits.cpu","limits.memory"]}'
*/