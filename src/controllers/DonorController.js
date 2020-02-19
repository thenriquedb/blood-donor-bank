const db = require('../config/database');

module.exports = {
  index(req, res) {
    db.query(`SELECT * FROM donors`, (err, result) => {
      if (err) return res.send("erro no db");

      const donors = result.rows;
      return res.render("index.html", { donors });
    })
  },
  show(req, res) {
    const { search } = req.query;
    const query = `SELECT * FROM donors WHERE name=$1`;

    db.query(query, [search], (err, result) => {
      if (err) return res.send("erro no db")

      const donor = result.rows;
      return res.render("donor.html", { donor, valor: 1 });
    })
  },
  store(req, res) {
    const { name, email, blood } = req.body;

    if (!name || !email || !blood) return res.send("Todos os campos são obrigatórios.");

    const query = `INSERT INTO donors ("name","email","blood")
                   VALUES ($1, $2, $3)`;

    db.query(query, [name, email, blood], (err) => {
      if (err) return res.send("erro no db")

      return res.redirect("/");
    });
  },
}