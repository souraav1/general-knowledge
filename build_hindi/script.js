// प्रश्न questions_gemini_hi.js से लोड किए जाते हैं (Gemini.txt से ऑटो-जेनरेट किए गए हिंदी संस्करण)
// const questions_gemini_hi = { ukgk: [...], india_polity: [...], ... }

document.addEventListener('DOMContentLoaded', () => {
    // ── DOM तत्व ──────────────────────────────────────────────
    const topicDashboard  = document.getElementById('topic-dashboard');
    const appContainer    = document.getElementById('app-container');
    const topicCards      = document.querySelectorAll('.topic-card');
    const backBtn         = document.getElementById('back-btn');
    const quizTitle       = document.getElementById('quiz-title');

    // ── वैश्विक स्थिति ──────────────────────────────────────────
    let weakQuestions = JSON.parse(localStorage.getItem('weakQuestions')) || [];

    // ── प्रश्न-गणना बैज इंजेक्ट करें ──────────────────────────
    topicCards.forEach(card => {
        const topic = card.getAttribute('data-topic');
        let count = 0;
        if (topic === 'weak') {
            count = weakQuestions.length;
        } else if (typeof questions_gemini_hi !== 'undefined' && questions_gemini_hi[topic]) {
            count = questions_gemini_hi[topic].length;
        }

        if (count > 0 || topic === 'weak') {
            const badge = document.createElement('span');
            badge.className = 'q-count';
            badge.id = `badge-${topic}`;
            badge.textContent = `${count} प्रश्न`;
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

    // ── स्थिति ─────────────────────────────────────────────────
    let currentQuestions = [];
    let currentIndex     = 0;
    let totalQuestions   = 0;
    let isRevealed       = false;
    let correctCount     = 0;          // सही उत्तरों की चल रही गिनती
    let markedCorrect    = new Set();  // ट्रैक करता है कि कौन से प्रश्न सही चिह्नित हैं
    let markedIncorrect  = new Set();  // ट्रैक करता है कि कौन से प्रश्न गलत चिह्नित हैं

    // ── डैशबोर्ड ─────────────────────────────────────────────
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

        // कमजोर प्रश्न गणना बैज अपडेट करें
        const weakBadge = document.getElementById('badge-weak');
        if (weakBadge) {
            weakBadge.textContent = `${weakQuestions.length} प्रश्न`;
        }
    }

    // ── क्विज शुरू करें ────────────────────────────────────────────
    function startQuiz(topic, topicName) {
        // questions_gemini (नया एकीकृत स्रोत) या weakQuestions से खींचें
        let dataset = [];
        if (topic === 'weak') {
            dataset = [...weakQuestions];
        } else if (typeof questions_gemini_hi !== 'undefined' && questions_gemini_hi[topic]) {
            dataset = [...questions_gemini_hi[topic]];
        }

        if (dataset.length === 0) {
            if (topic === 'weak') {
                alert('आपके पास अभी तक कोई कमजोर प्रश्न सहेजे नहीं गए हैं! क्विज के दौरान कुछ प्रश्नों को गलत के रूप में चिह्नित करें (2 दबाएं) उन्हें यहाँ जोड़ने के लिए।');
            } else {
                alert('इस विषय के लिए प्रश्न वर्तमान में उपलब्ध नहीं हैं।');
            }
            return;
        }

        // शफल (Fisher-Yates)
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

    // ── स्कोर डिस्प्ले हेल्पर ──────────────────────────────────
    function updateScoreDisplay() {
        let badge = document.getElementById('score-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.id = 'score-badge';
            badge.className = 'score-badge';
            // प्रश्न ट्रैकर के बगल में डालें
            const tracker = document.getElementById('question-tracker');
            tracker.parentNode.insertBefore(badge, tracker.nextSibling);
        }
        badge.textContent = `✅ ${correctCount} सही`;
    }

    // ── कीबोर्ड ──────────────────────────────────────────────
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

                // बैज पर संक्षिप्त दृश्य फ्लैश
                const badge = document.getElementById('score-badge');
                if (badge) {
                    badge.classList.add('score-flash');
                    setTimeout(() => badge.classList.remove('score-flash'), 500);
                }

                // यदि कमजोर प्रश्न का अभ्यास कर रहे हैं और सही हो रहे हैं, तो इसे weakQuestions से हटा दें
                const currentQ = currentQuestions[currentIndex];
                const wIdx = weakQuestions.findIndex(q => q.question === currentQ.question);
                if (wIdx > -1) {
                    weakQuestions.splice(wIdx, 1);
                    localStorage.setItem('weakQuestions', JSON.stringify(weakQuestions));
                }

                // सही चिह्नित करने के लिए दृश्य प्रतिक्रिया
                const answerLabel = document.querySelector('.answer-label');
                const origText = answerLabel.innerHTML;
                answerLabel.innerHTML = '✅ सही चिह्नित किया गया';
                answerLabel.style.color = 'var(--success-color, #10b981)';
                setTimeout(() => {
                    answerLabel.innerHTML = origText;
                    answerLabel.style.color = ''; // रीसेट करें
                }, 1000);
            }
        }

        // प्रकट करने के बाद '2' दबाएं वर्तमान प्रश्न को गलत के रूप में चिह्नित करने के लिए
        if (e.key === '2' && isRevealed) {
            e.preventDefault();
            if (!markedIncorrect.has(currentIndex)) {
                markedIncorrect.add(currentIndex);

                // यदि पहले से सही चिह्नित है तो सही गणना को पूर्ववत करें
                if (markedCorrect.has(currentIndex)) {
                    markedCorrect.delete(currentIndex);
                    correctCount--;
                    updateScoreDisplay();
                }

                // यदि पहले से वहाँ नहीं है तो weakQuestions में जोड़ें
                const currentQ = currentQuestions[currentIndex];
                const exists = weakQuestions.some(q => q.question === currentQ.question);
                if (!exists) {
                    weakQuestions.push(currentQ);
                    localStorage.setItem('weakQuestions', JSON.stringify(weakQuestions));
                }

                // गलत चिह्नित करने के लिए दृश्य प्रतिक्रिया
                const answerLabel = document.querySelector('.answer-label');
                const origText = answerLabel.innerHTML;
                answerLabel.innerHTML = '❌ गलत चिह्नित किया गया';
                answerLabel.style.color = '#ef4444'; // त्रुटि के लिए लाल रंग
                setTimeout(() => {
                    answerLabel.innerHTML = origText;
                    answerLabel.style.color = ''; // रीसेट करें
                }, 1000);
            }
        }
    });

    nextBtn.addEventListener('click',   goToNext);
    prevBtn.addEventListener('click',   goToPrev);
    randomBtn.addEventListener('click', loadRandom);

    // ── प्रश्न लोड करें ─────────────────────────────────────────
    function loadQuestion(index) {
        if (index < 0 || index >= totalQuestions) return;

        const q = currentQuestions[index];

        // प्रश्न पाठ परिवर्तन को एनिमेट करें
        questionText.style.animation = 'none';
        void questionText.offsetHeight; // reflow
        questionText.style.animation  = null;

        questionText.textContent       = q.question;
        questionTracker.textContent    = `प्रश्न ${index + 1} / ${totalQuestions}`;
        correctAnswerText.textContent  = q.answer;       // पहले से सेट करें (लेआउट स्थिर रखता है)

        const pct = ((index + 1) / totalQuestions) * 100;
        progressBar.style.width = `${pct}%`;

        // स्थिति रीसेट करें
        isRevealed = false;
        answerInput.value       = '';
        answerInput.disabled    = false;
        answerInput.focus();

        answerReveal.classList.add('hidden');
        inputContainer.style.opacity       = '1';
        inputContainer.style.pointerEvents = 'auto';

        prevBtn.disabled = (index === 0);
    }

    // ── उत्तर प्रकट करें ─────────────────────────────────────────
    function revealAnswer() {
        if (isRevealed) return;
        isRevealed = true;

        answerReveal.classList.remove('hidden');
        inputContainer.style.opacity       = '0.4';
        inputContainer.style.pointerEvents = 'none';
        answerInput.blur();
        nextBtn.focus();
    }

    // ── नेविगेशन ────────────────────────────────────────────
    function goToNext() {
        if (currentIndex < totalQuestions - 1) {
            currentIndex++;
            loadQuestion(currentIndex);
        } else {
            alert('🎉 बधाई हो! आपने इस विषय के सभी प्रश्न पूरे कर लिए हैं।');
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
