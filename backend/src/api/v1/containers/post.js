import incus from "../../../../lib/modules/incus.js";


/*
Créer un container depuis une image
Créer un container depuis un snapshot
Créer un container avec un profil
Créer un container avec configuration personnalisée
*/	

export default function post(req, res) {
	const { name } = req.body;
	const image = req.body.image || "images:ubuntu/22.04";

	incus.containers.launch(image, name).then((data) => res.json({ status: true, data }))
		.catch((err) => res.status(500).json({ status: false, message: err.message }));
}

