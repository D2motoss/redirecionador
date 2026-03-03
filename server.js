document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("btnWhatsapp");

  if (!botao) {
    console.error("Botão WhatsApp não encontrado");
    return;
  }

  botao.addEventListener("click", () => {
    const links = [
       "https://wa.me/5547996264683",
       "https://wa.me/5547996834199"
    ];

    const escolhido = Math.floor(Math.random() * links.length);
    window.location.href = links[escolhido];
  });
});