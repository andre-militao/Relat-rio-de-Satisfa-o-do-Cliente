// Função para atualizar a data atual
document.getElementById("dataAtual").innerText = new Date().toLocaleDateString();

// Dados fictícios para o gráfico de satisfação geral
const dadosSatisfacao = {
  labels: ["Muito Satisfeito", "Satisfeito", "Neutro", "Insatisfeito", "Muito Insatisfeito"],
  datasets: [{
    label: "Satisfação do Cliente",
    data: [50, 25, 15, 5, 5],
    backgroundColor: ["#4CAF50", "#8BC34A", "#FFEB3B", "#FFC107", "#F44336"]
  }]
};

// Configuração do gráfico de satisfação
const graficoSatisfacao = new Chart(
  document.getElementById("graficoSatisfacao"),
  {
    type: "pie",
    data: dadosSatisfacao
  }
);

// Dados fictícios para o gráfico de tendências
const dadosTendencias = {
  labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
  datasets: [{
    label: "Satisfação ao Longo do Tempo",
    data: [80, 85, 90, 87],
    fill: false,
    borderColor: "#4CAF50",
    tension: 0.1
  }]
};

// Configuração do gráfico de tendências
const graficoTendencias = new Chart(
  document.getElementById("graficoTendencias"),
  {
    type: "line",
    data: dadosTendencias
  }
);

// Função para alterar o período (aqui você pode personalizar para buscar novos dados)
function alterarPeriodo(periodo) {
  alert("Exibindo dados para: " + periodo);
}
