// Lista de contatos WhatsApp (ordem importa)
const contatos = [
       "https://wa.me/5547996264683",
       "https://wa.me/5547996834199"
];

function redirecionarWhats() {
  // Lê o índice salvo
  let index = Number(localStorage.getItem("whatsIndex"));

  // Se não existir ou for inválido, começa do zero
  if (isNaN(index)) {
    index = 0;
  }

  // Define o destino atual
  const destino = contatos[index];

  // Atualiza para o próximo (round-robin real)
  index = (index + 1) % contatos.length;
  localStorage.setItem("whatsIndex", index);

  // Redireciona
  window.location.href = destino;
}