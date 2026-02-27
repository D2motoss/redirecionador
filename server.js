const express = require("express");
const app = express();

// Lista dos WhatsApps
const whatsappLinks = [
  "https://wa.me/5547996264683",
  "https://wa.me/5547996834199"
];

// Controle simples para alternar
let contador = 0;

// Rota principal (LINK DA BIO)
app.get("/", (req, res) => {
  const linkEscolhido = whatsappLinks[contador];
  contador = (contador + 1) % whatsappLinks.length;

  console.log("Redirecionando para:", linkEscolhido);
  res.redirect(linkEscolhido);
});

// Porta dinâmica (Render) ou local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor WhatsApp Redirect ativo 🚀");
});