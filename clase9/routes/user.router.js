import { Router } from "express";
import fs from "fs";

const router = Router();
const path = "users.json";

router.post("/", async (req, res) => {
  const user = req.body;
  console.log(user);

  if (fs.existsSync(path)) {
    const listaUsuariosJson = await fs.promises.readFile(path, "utf-8");
    const listaUsuarios = JSON.parse(listaUsuariosJson);
    listaUsuarios.push(user);

    await fs.promises.writeFile(path, JSON.stringify(listaUsuarios, null, 2));
  } else {
    const users = [user];
    await fs.promises.writeFile(path, JSON.stringify(users, null, 2));
  }

  res.redirect("/views/users");
});

export default router;
