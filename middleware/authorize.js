export function authorizeModification(req, res, next) {
  const { role, id } = req.user;

  if (role === "parent" || String(req.params.userId) === String(id)) {
    return next();
  }

  res.status(403).json({ error: "Access denied" });
}
