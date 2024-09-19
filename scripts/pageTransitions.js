function loadPage(url) {
    const pageDiv = document.querySelector('.page.active');
  
    // Remove a classe 'active' da div para iniciar a animação de saída
    pageDiv.classList.remove('active');
  
    // Espera a transição de saída terminar
    setTimeout(() => {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          // Cria uma nova div temporária para inserir o conteúdo carregado
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = data;
  
          // Remove o conteúdo anterior
          while (pageDiv.firstChild) {
            pageDiv.removeChild(pageDiv.firstChild);
          }
  
          // Insere o novo conteúdo
          while (tempDiv.firstChild) {
            pageDiv.appendChild(tempDiv.firstChild);
          }
  
          // Reaplica a classe 'active' para a animação de entrada
          setTimeout(() => {
            pageDiv.classList.add('active');
          }, 50); // Pequeno atraso para garantir que a transição seja percebida
        })
        .catch(error => console.error('Erro ao carregar a página:', error));
    }, 500); // Tempo da transição de saída (ajuste conforme necessário)
  }
  