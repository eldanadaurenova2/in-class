document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.getElementById('text');
    const text = paragraph.innerHTML;

    // 1. Выделить слова длиннее 8 символов
    const highlightedText = text.replace(/\b(\w{8,})\b/g, '<span style="background-color: yellow;">$1</span>');
    paragraph.innerHTML = highlightedText;

    // 2. Добавить ссылку на источник текста
    const link = document.createElement('a');
    link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
    link.textContent = 'Источник текста';
    document.getElementById('link-container').appendChild(link);

    // 3. Разделить предложения на отдельные строки
    const sentences = paragraph.innerHTML.split('. ').join('.<br>');
    paragraph.innerHTML = sentences;

    // 4. Посчитать количество слов в параграфе
    const wordCount = text.split(/\s+/).length;
    const wordCountElement = document.createElement('p');
    wordCountElement.textContent = `Количество слов: ${wordCount}`;
    document.body.insertBefore(wordCountElement, paragraph);

    // 5. Заменить знаки вопроса и восклицания
    const finalText = paragraph.innerHTML
        .replace(/\?/g, '🤔')
        .replace(/!/g, '😲');
    paragraph.innerHTML = finalText;
});
