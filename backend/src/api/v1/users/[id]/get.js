export default function getUser(req, res) {
  res.json({
    success: true,
    message: 'Dynamic route resolved from folder [id].',
    id: req.params.id
  });
}
