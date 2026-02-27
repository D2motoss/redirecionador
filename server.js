import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Necessário para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Contadores
let contador = 0;
let cliques = {
  lucas: 0,
  eduardo: 0
};

// Links WhatsApp
const whatsappLinks = [
  {
    nome: "Lucas",
    link: "https://wa.me/5547996264683",
    key: "lucas"
  },
  {
    nome: "Eduardo",
    link: "https://wa.me/5547996834199",
    key: "eduardo"
  }
];

// Rota principal
app.get("/", (req, res) => {
  res.send("Servidor WhatsApp Redirect ativo 🚀");
});

// Rota usada na BIO do Instagram
app.get("/whatsapp", (req, res) => {
  const index = contador % 2;
  const destino = whatsappLinks[index];

  cliques[destino.key]++;
  contador++;

  res.redirect(destino.link);
});

// Dashboard
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "dashboard.html"));
});

// API de dados do dashboard
app.get("/api/stats", (req, res) => {
  res.json({
    total: cliques.lucas + cliques.eduardo,
    lucas: cliques.lucas,
    eduardo: cliques.eduardo
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
