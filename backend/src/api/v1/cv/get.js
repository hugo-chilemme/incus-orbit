export default function getCv(_req, res) {
  res.json({
    success: true,
    module: 'cv',
    method: 'GET',
    endpoint: '/api/v1/cv'
  });
}
