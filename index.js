
function cardFunction(id) {
    const idString = id.toString();
    const secondHalfText = document.getElementById("h2-second-half");
    const pSecondHalf = document.getElementById("p-second-half");
    switch(idString){
        case '1':
            secondHalfText.innerHTML = 'Planejamento';
            pSecondHalf.innerHTML = 'Com o Acquario, faça seu planejamento personalizado com base nas suas preferências. Tenha controle total sobre seus objetivos financeiros e crie um plano que se adapta ao seu estilo de vida e metas, tornando suas finanças mais acessíveis e alinhadas com seus sonhos.';
            break;
        case '2':
            secondHalfText.innerHTML = 'Controle de gastos';
            pSecondHalf.innerHTML = 'Com o Acquario, tenha total controle sobre seus gastos. Gerencie suas finanças de forma eficiente e simplificada, acompanhe despesas e orçamentos com facilidade, e alcance sua estabilidade financeira com confiança.';
            break;
        case '3':
            secondHalfText.innerHTML = 'IA Assistente';
            pSecondHalf.innerHTML = 'A inteligência artificial (IA) é usada como assistente de investimentos e controle de metas ao analisar dados financeiros, identificar padrões e recomendar estratégias de investimento personalizadas. Ela automatiza tarefas de pesquisa e monitoramento, fornecendo informações em tempo real, otimizando a alocação de ativos e ajudando os investidores a alcançar seus objetivos financeiros de maneira eficiente e informada.';
            break;
    }
}

