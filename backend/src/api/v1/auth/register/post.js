export default function register(req, res) {
  const { email } = req.body || {};

  res.status(201).json({
    success: true,
    version: req.apiVersion,
    module: 'auth',
    action: 'register',
    email: email || null
  });
}
