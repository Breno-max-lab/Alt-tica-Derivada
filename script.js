document.addEventListener('DOMContentLoaded', () => {
  // Atualiza ano no footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Gera link do WhatsApp com mensagem dinâmica
  const form = document.getElementById('whatsapp-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // CONFIGURE SEU NÚMERO AQUI (com DDI e DDD, apenas números)
    const PHONE_NUMBER = '5511999999999'; 
    
    const produto = document.getElementById('produto').value;
    const tamanho = document.getElementById('tamanho').value;
    
    const message = encodeURIComponent(
      `Olá! Gostaria de comprar:\n` +
      `📦 Produto: ${produto}\n` +
      `📏 Tamanho: ${tamanho}\n` +
      `Aguardo informações sobre pagamento e entrega.`
    );
    
    const waLink = `https://wa.me/${PHONE_NUMBER}?text=${message}`;
    window.open(waLink, '_blank', 'noopener,noreferrer');
  });
});