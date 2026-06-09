// Questions are loaded from questions_gemini.js (auto-generated from Gemini.txt)
// const questions_gemini = { ukgk: [...], india_polity: [...], ... }

document.addEventListener('DOMContentLoaded', () => {
    // ── DOM Elements ──────────────────────────────────────────
    const topicDashboard  = document.getElementById('topic-dashboard');
    const appContainer    = document.getElementById('app-container');
    const topicCards      = document.querySelectorAll('.topic-card');
    const backBtn         = document.getElementById('back-btn');
    const quizTitle       = document.getElementById('quiz-title');

    // ── Global State ──────────────────────────────────────────
    let weakQuestions = JSON.parse(localStorage.getItem('weakQuestions')) || [];

    // ── Inject question-count badges ──────────────────────────
    topicCards.forEach(card => {
        const topic = card.getAttribute('data-topic');
        let count = 0;
        if (topic === 'weak') {
            count = weakQuestions.length;
        } else if (typeof questions_gemini !== 'undefined' && questions_gemini[topic]) {
            count = questions_gemini[topic].length;
        }

        if (count > 0 || topic === 'weak') {
            const badge = document.createElement('span');
            badge.className = 'q-count';
            badge.id = `badge-${topic}`;
            badge.textContent = `${count} questions`;
            card.appendChild(badge);
        }
    });

    const questionText     = document.getElementById('question-text');
    const questionTracker  = document.getElementById('question-tracker');
    const progressBar      = document.getElementById('progress-bar');
    const answerInput      = document.getElementById('answer-input');
    const answerReveal     = document.getElementById('answer-reveal');
    const correctAnswerText= document.getElementById('correct-answer-text');
    const inputContainer   = document.querySelector('.input-container');
    const nextBtn          = document.getElementById('next-btn');
    const prevBtn          = document.getElementById('prev-btn');
    const randomBtn        = document.getElementById('random-btn');

    // ── State ─────────────────────────────────────────────────
    let currentQuestions = [];
    let currentIndex     = 0;
    let totalQuestions   = 0;
    let isRevealed       = false;
    let correctCount     = 0;          // running tally of correct answers
    let markedCorrect    = new Set();  // tracks which question indices were marked correct
    let markedIncorrect  = new Set();  // tracks which question indices were marked incorrect

    // ── Dashboard ─────────────────────────────────────────────
    topicCards.forEach(card => {
        card.addEventListener('click', () => {
            const topic    = card.getAttribute('data-topic');
            const topicName= card.querySelector('h3').textContent;
            startQuiz(topic, topicName);
        });
    });

    backBtn.addEventListener('click', showDashboard);

    function showDashboard() {
        appContainer.classList.add('hidden');
        topicDashboard.classList.remove('hidden');
        currentQuestions = [];
        correctCount     = 0;
        markedCorrect    = new Set();
        markedIncorrect  = new Set();
        updateScoreDisplay();

        // Update weak questions count badge
        const weakBadge = document.getElementById('badge-weak');
        if (weakBadge) {
            weakBadge.textContent = `${weakQuestions.length} questions`;
        }
    }

    // ── Start Quiz ────────────────────────────────────────────
    function startQuiz(topic, topicName) {
        // Pull from questions_gemini (the new unified source) or weakQuestions
        let dataset = [];
        if (topic === 'weak') {
            dataset = [...weakQuestions];
        } else if (typeof questions_gemini !== 'undefined' && questions_gemini[topic]) {
            dataset = [...questions_gemini[topic]];
        }

        if (dataset.length === 0) {
            if (topic === 'weak') {
                alert('You have no weak questions saved yet! Mark some questions as incorrect (press 2) during a quiz to add them here.');
            } else {
                alert('Questions for this topic are currently unavailable.');
            }
            return;
        }

        // Shuffle (Fisher-Yates)
        for (let i = dataset.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [dataset[i], dataset[j]] = [dataset[j], dataset[i]];
        }

        currentQuestions = dataset;
        totalQuestions   = currentQuestions.length;
        currentIndex     = 0;
        correctCount     = 0;
        markedCorrect    = new Set();
        markedIncorrect  = new Set();
        quizTitle.textContent = topicName;

        topicDashboard.classList.add('hidden');
        appContainer.classList.remove('hidden');

        updateScoreDisplay();
        loadQuestion(currentIndex);
    }

    // ── Score display helper ──────────────────────────────────
    function updateScoreDisplay() {
        let badge = document.getElementById('score-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.id = 'score-badge';
            badge.className = 'score-badge';
            // Insert beside the question tracker in the header
            const tracker = document.getElementById('question-tracker');
            tracker.parentNode.insertBefore(badge, tracker.nextSibling);
        }
        badge.textContent = `✅ ${correctCount} correct`;
    }

    // ── Keyboard ──────────────────────────────────────────────
    document.addEventListener('keydown', (e) => {
        if (appContainer.classList.contains('hidden')) return;

        if (e.key === 'Enter') {
            e.preventDefault();
            if (!isRevealed) {
                revealAnswer();
            } else {
                goToNext();
            }
            return;
        }

        if (e.key === 'ArrowLeft') {
            goToPrev();
            return;
        }


        if (e.key === '1' && isRevealed) {
            e.preventDefault();
            if (!markedCorrect.has(currentIndex)) {
                markedCorrect.add(currentIndex);
                markedIncorrect.delete(currentIndex);
                correctCount++;
                updateScoreDisplay();

                // Brief visual flash on the badge
                const badge = document.getElementById('score-badge');
                if (badge) {
                    badge.classList.add('score-flash');
                    setTimeout(() => badge.classList.remove('score-flash'), 500);
                }

                // If practising a weak question and getting it right, remove it from weakQuestions
                const currentQ = currentQuestions[currentIndex];
                const wIdx = weakQuestions.findIndex(q => q.question === currentQ.question);
                if (wIdx > -1) {
                    weakQuestions.splice(wIdx, 1);
                    localStorage.setItem('weakQuestions', JSON.stringify(weakQuestions));
                }

                // Visual feedback for marking correct
                const answerLabel = document.querySelector('.answer-label');
                const origText = answerLabel.innerHTML;
                answerLabel.innerHTML = '✅ Marked Correct';
                answerLabel.style.color = 'var(--success-color, #10b981)';
                setTimeout(() => {
                    answerLabel.innerHTML = origText;
                    answerLabel.style.color = ''; // Reset
                }, 1000);
            }
        }

        // Press '2' after reveal to mark current question as incorrect
        if (e.key === '2' && isRevealed) {
            e.preventDefault();
            if (!markedIncorrect.has(currentIndex)) {
                markedIncorrect.add(currentIndex);

                // Undo correct count if previously marked correct
                if (markedCorrect.has(currentIndex)) {
                    markedCorrect.delete(currentIndex);
                    correctCount--;
                    updateScoreDisplay();
                }

                // Add to weakQuestions if not already there
                const currentQ = currentQuestions[currentIndex];
                const exists = weakQuestions.some(q => q.question === currentQ.question);
                if (!exists) {
                    weakQuestions.push(currentQ);
                    localStorage.setItem('weakQuestions', JSON.stringify(weakQuestions));
                }

                // Visual feedback for marking incorrect
                const answerLabel = document.querySelector('.answer-label');
                const origText = answerLabel.innerHTML;
                answerLabel.innerHTML = '❌ Marked Incorrect';
                answerLabel.style.color = '#ef4444'; // Red color for error
                setTimeout(() => {
                    answerLabel.innerHTML = origText;
                    answerLabel.style.color = ''; // Reset
                }, 1000);
            }
        }
    });

    nextBtn.addEventListener('click',   goToNext);
    prevBtn.addEventListener('click',   goToPrev);
    randomBtn.addEventListener('click', loadRandom);

    // ── Load Question ─────────────────────────────────────────
    function loadQuestion(index) {
        if (index < 0 || index >= totalQuestions) return;

        const q = currentQuestions[index];

        // Animate question text change
        questionText.style.animation = 'none';
        void questionText.offsetHeight; // reflow
        questionText.style.animation  = null;

        questionText.textContent       = q.question;
        questionTracker.textContent    = `Question ${index + 1} / ${totalQuestions}`;
        correctAnswerText.textContent  = q.answer;       // pre-set (keeps layout stable)

        const pct = ((index + 1) / totalQuestions) * 100;
        progressBar.style.width = `${pct}%`;

        // Reset state
        isRevealed = false;
        answerInput.value       = '';
        answerInput.disabled    = false;
        answerInput.focus();

        answerReveal.classList.add('hidden');
        inputContainer.style.opacity       = '1';
        inputContainer.style.pointerEvents = 'auto';

        prevBtn.disabled = (index === 0);
    }

    // ── Reveal Answer ─────────────────────────────────────────
    function revealAnswer() {
        if (isRevealed) return;
        isRevealed = true;

        answerReveal.classList.remove('hidden');
        inputContainer.style.opacity       = '0.4';
        inputContainer.style.pointerEvents = 'none';
        answerInput.blur();
        nextBtn.focus();
    }

    // ── Navigation ────────────────────────────────────────────
    function goToNext() {
        if (currentIndex < totalQuestions - 1) {
            currentIndex++;
            loadQuestion(currentIndex);
        } else {
            alert('🎉 Congratulations! You\'ve completed all questions for this topic.');
            showDashboard();
        }
    }

    function goToPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            loadQuestion(currentIndex);
        }
    }

    function loadRandom() {
        if (totalQuestions === 0) return;
        currentIndex = Math.floor(Math.random() * totalQuestions);
        loadQuestion(currentIndex);
    }
});
