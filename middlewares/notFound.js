export function notFound(req, res, next) {
  res.status(404).send({ success: false, message: "Ruta no encontrada" });
}
