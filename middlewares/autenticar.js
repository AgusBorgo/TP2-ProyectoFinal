import { verifyToken } from "../utils/jwt.js";

const autenticar = (req, res, next) => {
  try {
   
    const token = req.cookies.token || req.headers["authorization"];

    if (!token) {
      throw new Error("Token no proporcionado");
    }

    
    const cleanToken = token.startsWith("Bearer ") ? token.slice(7) : token;

   
    const user = verifyToken(cleanToken);

   

    next(); 
  } catch (error) {
    res.status(401).send({ success: false, message: "Acceso no autorizado: " + error.message });
  }
};

export default autenticar;
