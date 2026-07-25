/* ==========================================================================
   SAINI PUBLIC SCHOOL - PROFESSIONAL JAVASCRIPT LOGIC
   Classes: PP1 to 8th Grade
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initProgramFiltering();
    initDrawingCanvas();
    calculateFee();
});

/* --------------------------------------------------------------------------
   1. MOBILE NAVIGATION TOGGLE
   -------------------------------------------------------------------------- */
function initMobileNav() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }
}

/* --------------------------------------------------------------------------
   2. PROGRAM FILTERING SYSTEM (PP1 to 8th)
   -------------------------------------------------------------------------- */
function initProgramFiltering() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const programCards = document.querySelectorAll('.program-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            programCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function inquireGrade(gradeName) {
    const targetSelect = document.getElementById('targetGrade');
    if (targetSelect) {
        targetSelect.value = gradeName;
    }
    const admissionsSection = document.getElementById('admissions');
    if (admissionsSection) {
        admissionsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/* --------------------------------------------------------------------------
   3. QUIZ INTERACTIVE LOGIC
   -------------------------------------------------------------------------- */
const quizData = [
    {
        question: "Q1: What color do you get when you mix Red 🔴 and Yellow 🟡?",
        options: [
            { text: "A) Blue 🔵", correct: false },
            { text: "B) Orange 🟧 (Correct)", correct: true },
            { text: "C) Green 🟢", correct: false }
        ]
    },
    {
        question: "Q2: How many sides does a triangle have? 🔺",
        options: [
            { text: "A) 4 Sides", correct: false },
            { text: "B) 3 Sides (Correct)", correct: true },
            { text: "C) 5 Sides", correct: false }
        ]
    },
    {
        question: "Q3: What is 5 + 3? 🧮",
        options: [
            { text: "A) 7", correct: false },
            { text: "B) 8 (Correct)", correct: true },
            { text: "C) 10", correct: false }
        ]
    }
];

let currentQuizIndex = 0;
let userScore = 0;

function checkAnswer(isCorrect, btnElement) {
    const feedback = document.getElementById('quizFeedback');
    const scoreText = document.getElementById('quizScoreText');
    
    if (isCorrect) {
        userScore++;
        if (scoreText) scoreText.textContent = `Score: ${userScore} Stars ⭐`;
        btnElement.style.background = '#059669';
        btnElement.style.borderColor = '#059669';
        btnElement.style.color = '#FFFFFF';
        feedback.innerHTML = "🎉 Excellent! Correct Answer!";
        feedback.style.color = "#059669";

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 40,
                spread: 50,
                origin: { y: 0.7 }
            });
        }

        setTimeout(() => {
            currentQuizIndex = (currentQuizIndex + 1) % quizData.length;
            loadQuizQuestion();
        }, 1500);
    } else {
        btnElement.style.background = '#E11D48';
        btnElement.style.borderColor = '#E11D48';
        btnElement.style.color = '#FFFFFF';
        feedback.innerHTML = "Not quite! Try again.";
        feedback.style.color = "#E11D48";
    }
}

function loadQuizQuestion() {
    const qData = quizData[currentQuizIndex];
    const qEl = document.getElementById('quizQuestion');
    const optsEl = document.getElementById('quizOptions');
    const feedback = document.getElementById('quizFeedback');

    if (!qEl || !optsEl) return;

    qEl.textContent = qData.question;
    feedback.textContent = "";

    optsEl.innerHTML = "";
    qData.options.forEach(opt => {
        const button = document.createElement('button');
        button.className = 'quiz-btn-opt';
        button.textContent = opt.text;
        button.onclick = function() {
            checkAnswer(opt.correct, this);
        };
        optsEl.appendChild(button);
    });
}

/* --------------------------------------------------------------------------
   4. DRAWING CANVAS LOGIC
   -------------------------------------------------------------------------- */
let canvas, ctx, isDrawing = false;
let currentColor = '#2563EB';
let currentLineWidth = 6;

function initDrawingCanvas() {
    canvas = document.getElementById('paintCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    canvas.width = canvas.parentElement.clientWidth || 380;
    canvas.height = 220;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    const brushSlider = document.getElementById('brushSize');
    if (brushSlider) {
        brushSlider.addEventListener('input', (e) => {
            currentLineWidth = e.target.value;
        });
    }
}

function startDrawing(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = currentLineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

function setBrushColor(color, btnEl) {
    currentColor = color;
    document.querySelectorAll('.color-dot').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
}

function clearCanvas() {
    if (!ctx || !canvas) return;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/* --------------------------------------------------------------------------
   5. FEE CALCULATOR
   -------------------------------------------------------------------------- */
const feeRates = {
    'pp1': { admission: '₹ 3,500', tuition: '₹ 1,800', total: '₹ 1,800' },
    'pp2': { admission: '₹ 3,500', tuition: '₹ 2,000', total: '₹ 2,000' },
    '1to3': { admission: '₹ 4,000', tuition: '₹ 2,400', total: '₹ 2,400' },
    '4to5': { admission: '₹ 4,000', tuition: '₹ 2,700', total: '₹ 2,700' },
    '6to8': { admission: '₹ 4,500', tuition: '₹ 3,200', total: '₹ 3,200' }
};

function calculateFee() {
    const select = document.getElementById('feeGradeSelect');
    if (!select) return;
    const val = select.value;
    const rate = feeRates[val] || feeRates['pp1'];

    document.getElementById('feeAdmission').textContent = rate.admission;
    document.getElementById('feeTuition').textContent = rate.tuition + ' / mo';
    document.getElementById('feeTotal').textContent = rate.total;
}

/* --------------------------------------------------------------------------
   6. FORM SUBMISSION
   -------------------------------------------------------------------------- */
function handleInquirySubmit(event) {
    event.preventDefault();

    const parentName = document.getElementById('parentName').value;
    const childName = document.getElementById('childName').value;
    const targetGrade = document.getElementById('targetGrade').value;

    const successBox = document.getElementById('formSuccessMessage');
    if (successBox) {
        successBox.innerHTML = `🎉 Thank you <strong>${parentName}</strong>! Your inquiry for <strong>${childName} (${targetGrade})</strong> has been received. Our admissions officer will contact you shortly.`;
        successBox.classList.remove('hidden');
    }

    if (typeof confetti === 'function') {
        confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    document.getElementById('inquiryForm').reset();
}

/* --------------------------------------------------------------------------
   7. MODAL TOUR
   -------------------------------------------------------------------------- */
function openVirtualTour() {
    const modal = document.getElementById('tourModal');
    if (modal) modal.classList.remove('hidden');
}

function closeVirtualTour() {
    const modal = document.getElementById('tourModal');
    if (modal) modal.classList.add('hidden');
}
