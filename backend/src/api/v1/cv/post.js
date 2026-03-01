export default function postCv(req, res) {
  res.status(201).json({
    success: true,
    module: 'cv',
    method: 'POST',
    payload: req.body || {}
  });
}
