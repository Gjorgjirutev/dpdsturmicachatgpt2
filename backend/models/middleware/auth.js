import jwt from "jsonwebtoken";

export function auth(roles = []) {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      const payload = jwt.verify(token, process.env.JWT_SECRET);

      if (roles.length && !roles.includes(payload.role)) {
        return res.sendStatus(403);
      }

      req.user = payload;
      next();
    } catch {
      res.sendStatus(401);
    }
  };
}