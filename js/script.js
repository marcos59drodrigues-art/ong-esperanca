document.addEventListener('DOMContentLoaded', () => {
  // 1. MÁSCARAS DE ENTRADA DOS FORMULÁRIOS
  const cpfInput = document.getElementById('cpf');
  const telInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');

  // Máscara de CPF (000.000.000-00)
  cpfInput?.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = v;
  });

  // Máscara de Telefone ((00) 00000-0000)
  telInput?.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
    v = v.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = v;
  });

  // Máscara de CEP (00000-000)
  cepInput?.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    v = v.replace(/^(\d{5})(\d)/, '$1-$2');
    e.target.value = v;
  });

  // 2. CONTROLE DO MODAL DE FEEDBACK (FECHAR AO CONFIRMAR)
  const confirmBtn = document.querySelector('.modal .btn');
  const modalOverlay = document.querySelector('.modal-overlay');

  confirmBtn?.addEventListener('click', () => {
    if (modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  });
});