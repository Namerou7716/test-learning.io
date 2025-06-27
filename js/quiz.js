function checkAnswer(questionName, correctAnswer) {
    const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
    const resultElement = document.getElementById(`result-${questionName}`);

    if (!selectedOption) {
        resultElement.textContent = '答えを選択してください。';
        resultElement.className = 'quiz-result incorrect';
        return;
    }

    if (selectedOption.value === correctAnswer) {
        resultElement.textContent = '正解！素晴らしい！';
        resultElement.className = 'quiz-result correct';
    } else {
        resultElement.textContent = '不正解。もう一度、解説を読んでみましょう！';
        resultElement.className = 'quiz-result incorrect';
    }
}
