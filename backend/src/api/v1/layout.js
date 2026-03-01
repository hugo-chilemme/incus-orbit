export default function v1Layout(req, _res, next) {
  req.apiVersion = 'v1';
  console.info('[layout:v1] request', req.method, req.originalUrl);
  next();
}
