

export default function Layout(req, res, next) {
	const { name } = req.params;

	req._cName = name;

	next();
}