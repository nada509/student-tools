// ================================
// Student Tools - Main JavaScript
// ================================


// ============================================================
// GLOBAL VARIABLES
// ============================================================

let courseCount = 0;

let timerInterval = null;
let timerSeconds = 25 * 60;
let isTimerRunning = false;
let isBreak = false;

let studySubjectCount = 0;


// ============================================================
// LANGUAGE SYSTEM
// ============================================================

const translations = {

    en: {

        nav_home: "Home",
        nav_tools: "Tools",
        nav_why: "Why Us",

        hero_badge: "✨ Simple Tools for Better Studying",
        hero_title: "Everything Students Need",
        hero_title_second: "in One Place",
        hero_description:
            "Simple and useful tools to help you study, organize your time, calculate your grades, and stay on track.",
        hero_button: "Explore Tools",
        hero_note: "Free • Simple • Easy to Use",

        tools_title: "Student Tools",
        tools_description:
            "Choose a tool to make your study life easier.",

        gpa_title: "GPA Calculator",
        gpa_description:
            "Calculate your GPA easily and keep track of your academic performance.",

        percentage_title: "Percentage Calculator",
        percentage_description:
            "Calculate percentages quickly for marks, grades, and everyday calculations.",

        pomodoro_title: "Pomodoro Timer",
        pomodoro_description:
            "Stay focused and manage your study sessions using the Pomodoro technique.",

        todo_title: "To-Do List",
        todo_description:
            "Organize your tasks, assignments, and study plans in one place.",

        studytime_title: "Study Time Calculator",
        studytime_description:
            "Calculate how much study time you need and plan your available study hours.",

        projects_title: "Graduation Project Ideas",
        projects_description:
            "Explore many graduation project ideas based on your college and specialization.",

        open_tool: "Open Tool",

        why_title: "Why Student Tools?",
        why_description:
            "Everything you need to organize your study routine in a simple way.",

        why_fast_title: "Fast & Simple",
        why_fast_description:
            "Easy-to-use tools designed to give you results quickly.",

        why_organized_title: "Stay Organized",
        why_organized_description:
            "Manage your tasks, exams, grades, and study sessions in one place.",

        why_student_title: "Student Friendly",
        why_student_description:
            "A clean and simple experience built with students in mind.",

        advertisement: "Advertisement",

        footer_text:
            "© 2026 Student Tools. Built for students.",
        footer_about: "About",
        footer_privacy: "Privacy Policy",
        footer_contact: "Contact",


        // Percentage

        percentage_tool_title: "Percentage Calculator",
        percentage_tool_description:
            "Calculate a percentage of a number.",
        percentage_label: "Percentage",
        percentage_number: "Number",
        percentage_example_20: "Example: 20",
        percentage_example_500: "Example: 500",
        calculate: "Calculate",
        valid_numbers:
            "Please enter valid numbers.",
        result: "Result:",


        // GPA

        gpa_tool_title: "GPA Calculator",
        gpa_tool_description:
            "Calculate your GPA using your courses and grades.",
        add_course: "+ Add Course",
        calculate_gpa: "Calculate GPA",
        course: "Course",
        credits: "Credits",
        valid_course:
            "Please enter valid course information.",
        your_gpa: "Your GPA:",


        // Pomodoro

        pomodoro_tool_title: "Pomodoro Timer",
        pomodoro_tool_description:
            "Focus for 25 minutes, then take a short break.",
        study_time: "Study Time",
        break_time: "Break Time",
        start_pause: "Start / Pause",
        reset: "Reset",
        study_finished:
            "Study session finished! Take a short break.",
        break_finished:
            "Break finished! Time to study.",


        // To-Do

        todo_tool_title: "To-Do List",
        todo_tool_description:
            "Organize your tasks and stay productive.",
        task_placeholder: "Enter a task...",
        add: "Add",
        no_tasks: "No tasks yet.",
        delete: "Delete",
        clear_completed: "Clear Completed",


        // Study Time

        studytime_tool_title: "Study Time Calculator",
        studytime_tool_description:
            "Calculate the study time you need.",
        study_days: "Number of Study Days",
        study_days_example: "Example: 7",
        hours_per_day: "Available Hours Per Day",
        hours_example: "Example: 3",
        subjects: "Subjects",
        add_subject: "+ Add Subject",
        calculate_study_time: "Calculate",
        subject: "Subject",
        required_hours: "Required hours",
        valid_study_info:
            "Please enter valid study information.",
        required_study_hours:
            "Please enter the required study hours.",
        enough_time:
            "You have enough study time.",
        more_time:
            "You need more study time.",
        required: "Required:",
        available: "Available:",
        required_per_day: "Required per day:",
        additional_time:
            "Additional time needed:",


        // Projects

        projects_tool_title:
            "Graduation Project Ideas",
        projects_tool_description:
            "Find project ideas based on your academic field.",

        college: "College",
        department: "Department",
        specialization: "Specialization",
        search: "Search",

        select_college: "Select College",
        select_department: "Select Department",
        select_specialization:
            "Select Specialization",

        search_placeholder:
            "Search project ideas...",

        smart_random:
            "🎲 Smart Random Idea",

        start_project_message:
            "Select a college to start exploring project ideas.",

        start_exploring: "Start Exploring",
        start_exploring_description:
            "Select a college, department, and specialization to view graduation project ideas.",

        select_department_message:
            "Select a department to continue.",
        choose_department: "Choose a Department",
        choose_department_description:
            "Select a department to view its specializations.",

        select_specialization_message:
            "Select a specialization to view project ideas.",
        choose_specialization:
            "Choose a Specialization",
        choose_specialization_description:
            "Select a specialization to see available graduation project ideas.",

        project_found_one: "project idea found",
        project_found_many: "project ideas found",

        no_projects: "No project ideas found",
        no_projects_description:
            "Try changing your search terms.",

        random_suggestion:
            "🎲 Random project suggestion",

        select_specialization_first:
            "Please select a specialization first.",

        no_projects_match:
            "No project ideas match the current search.",

        suggested_tools: "Suggested Tools:"
    },


    ar: {

        nav_home: "الرئيسية",
        nav_tools: "الأدوات",
        nav_why: "لماذا نحن؟",

        hero_badge: "✨ أدوات بسيطة لدراسة أفضل",
        hero_title: "كل ما يحتاجه الطلاب",
        hero_title_second: "في مكان واحد",
        hero_description:
            "أدوات بسيطة ومفيدة تساعدك على الدراسة وتنظيم وقتك وحساب درجاتك ومتابعة تقدمك.",
        hero_button: "استكشف الأدوات",
        hero_note: "مجاني • بسيط • سهل الاستخدام",

        tools_title: "أدوات الطلاب",
        tools_description:
            "اختر أداة لتجعل حياتك الدراسية أسهل.",

        gpa_title: "حاسبة المعدل التراكمي",
        gpa_description:
            "احسب معدلك التراكمي بسهولة وتابع أدائك الأكاديمي.",

        percentage_title: "حاسبة النسبة المئوية",
        percentage_description:
            "احسب النسب المئوية بسرعة للدرجات والنتائج والحسابات اليومية.",

        pomodoro_title: "مؤقت بومودورو",
        pomodoro_description:
            "حافظ على تركيزك ونظم جلسات الدراسة باستخدام تقنية بومودورو.",

        todo_title: "قائمة المهام",
        todo_description:
            "نظم مهامك وواجباتك وخططك الدراسية في مكان واحد.",

        studytime_title: "حاسبة وقت الدراسة",
        studytime_description:
            "احسب الوقت الذي تحتاجه للدراسة ونظم ساعات الدراسة المتاحة.",

        projects_title: "أفكار مشاريع التخرج",
        projects_description:
            "استكشف العديد من أفكار مشاريع التخرج حسب الكلية والتخصص.",

        open_tool: "فتح الأداة",

        why_title: "لماذا Student Tools؟",
        why_description:
            "كل ما تحتاجه لتنظيم روتينك الدراسي بطريقة بسيطة.",

        why_fast_title: "سريع وبسيط",
        why_fast_description:
            "أدوات سهلة الاستخدام مصممة لتعطيك النتائج بسرعة.",

        why_organized_title: "كن أكثر تنظيمًا",
        why_organized_description:
            "نظم مهامك وامتحاناتك ودرجاتك وجلسات الدراسة في مكان واحد.",

        why_student_title: "مناسب للطلاب",
        why_student_description:
            "تجربة بسيطة ونظيفة مصممة خصيصًا لتناسب الطلاب.",

        advertisement: "إعلان",

        footer_text:
            "© 2026 Student Tools. صُمم للطلاب.",
        footer_about: "من نحن",
        footer_privacy: "سياسة الخصوصية",
        footer_contact: "تواصل معنا",


        // Percentage

        percentage_tool_title: "حاسبة النسبة المئوية",
        percentage_tool_description:
            "احسب نسبة مئوية من رقم.",
        percentage_label: "النسبة المئوية",
        percentage_number: "الرقم",
        percentage_example_20: "مثال: 20",
        percentage_example_500: "مثال: 500",
        calculate: "احسب",
        valid_numbers:
            "من فضلك أدخل أرقامًا صحيحة.",
        result: "النتيجة:",


        // GPA

        gpa_tool_title: "حاسبة المعدل التراكمي",
        gpa_tool_description:
            "احسب معدلك التراكمي باستخدام المواد والدرجات.",
        add_course: "+ إضافة مادة",
        calculate_gpa: "احسب المعدل",
        course: "المادة",
        credits: "الساعات",
        valid_course:
            "من فضلك أدخل بيانات صحيحة للمواد.",
        your_gpa: "معدلك التراكمي:",


        // Pomodoro

        pomodoro_tool_title: "مؤقت بومودورو",
        pomodoro_tool_description:
            "ركز لمدة 25 دقيقة ثم خذ استراحة قصيرة.",
        study_time: "وقت الدراسة",
        break_time: "وقت الاستراحة",
        start_pause: "بدء / إيقاف مؤقت",
        reset: "إعادة ضبط",
        study_finished:
            "انتهت جلسة الدراسة! خذ استراحة قصيرة.",
        break_finished:
            "انتهت الاستراحة! حان وقت الدراسة.",


        // To-Do

        todo_tool_title: "قائمة المهام",
        todo_tool_description:
            "نظم مهامك وحافظ على إنتاجيتك.",
        task_placeholder: "اكتب مهمة...",
        add: "إضافة",
        no_tasks: "لا توجد مهام حتى الآن.",
        delete: "حذف",
        clear_completed: "مسح المهام المكتملة",


        // Study Time

        studytime_tool_title: "حاسبة وقت الدراسة",
        studytime_tool_description:
            "احسب وقت الدراسة الذي تحتاجه.",
        study_days: "عدد أيام الدراسة",
        study_days_example: "مثال: 7",
        hours_per_day: "الساعات المتاحة يوميًا",
        hours_example: "مثال: 3",
        subjects: "المواد",
        add_subject: "+ إضافة مادة",
        calculate_study_time: "احسب",
        subject: "المادة",
        required_hours: "الساعات المطلوبة",
        valid_study_info:
            "من فضلك أدخل بيانات دراسة صحيحة.",
        required_study_hours:
            "من فضلك أدخل عدد ساعات الدراسة المطلوبة.",
        enough_time:
            "لديك وقت دراسة كافٍ.",
        more_time:
            "تحتاج إلى وقت دراسة إضافي.",
        required: "المطلوب:",
        available: "المتاح:",
        required_per_day: "المطلوب يوميًا:",
        additional_time:
            "الوقت الإضافي المطلوب:",


        // Projects

        projects_tool_title:
            "أفكار مشاريع التخرج",
        projects_tool_description:
            "اعثر على أفكار مشاريع حسب مجالك الأكاديمي.",

        college: "الكلية",
        department: "القسم",
        specialization: "التخصص",
        search: "بحث",

        select_college: "اختر الكلية",
        select_department: "اختر القسم",
        select_specialization:
            "اختر التخصص",

        search_placeholder:
            "ابحث عن أفكار مشاريع...",

        smart_random:
            "🎲 فكرة عشوائية ذكية",

        start_project_message:
            "اختر الكلية لبدء استكشاف أفكار المشاريع.",

        start_exploring: "ابدأ الاستكشاف",
        start_exploring_description:
            "اختر الكلية والقسم والتخصص لعرض أفكار مشاريع التخرج.",

        select_department_message:
            "اختر القسم للمتابعة.",
        choose_department: "اختر القسم",
        choose_department_description:
            "اختر القسم لعرض التخصصات الموجودة به.",

        select_specialization_message:
            "اختر التخصص لعرض أفكار المشاريع.",
        choose_specialization:
            "اختر التخصص",
        choose_specialization_description:
            "اختر تخصصًا لعرض أفكار مشاريع التخرج المتاحة.",

        project_found_one: "فكرة مشروع موجودة",
        project_found_many: "أفكار مشاريع موجودة",

        no_projects: "لم يتم العثور على أفكار مشاريع",
        no_projects_description:
            "حاول تغيير كلمات البحث.",

        random_suggestion:
            "🎲 اقتراح مشروع عشوائي",

        select_specialization_first:
            "من فضلك اختر التخصص أولًا.",

        no_projects_match:
            "لا توجد أفكار مشاريع تطابق البحث الحالي.",

        suggested_tools: "الأدوات المقترحة:"
    }

};


function getCurrentLanguage() {

    return localStorage.getItem(
        "studentToolsLanguage"
    ) || "en";

}


function t(key) {

    const language =
        getCurrentLanguage();

    return (
        translations[language]?.[key] ||
        translations.en[key] ||
        key
    );

}


function applyLanguage() {

    const language =
        getCurrentLanguage();

    const isArabic =
        language === "ar";


    document.documentElement.lang =
        isArabic ? "ar" : "en";

    document.documentElement.dir =
        isArabic ? "rtl" : "ltr";


    document.body.classList.toggle(
        "arabic-mode",
        isArabic
    );


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (translations[language][key]) {

                element.textContent =
                    translations[language][key];

            }

        });


    updateLanguageButton();

}


function toggleLanguage() {

    const currentLanguage =
        getCurrentLanguage();

    const newLanguage =
        currentLanguage === "en"
            ? "ar"
            : "en";


    localStorage.setItem(
        "studentToolsLanguage",
        newLanguage
    );


    applyLanguage();


    /*
     * If a tool modal is open, close it.
     * The user can reopen it in the new language.
     */

    const modal =
        document.querySelector(".tool-modal");

    if (modal) {
        closeTool();
    }

}


function updateLanguageButton() {

    const button =
        document.getElementById(
            "language-toggle"
        );


    if (!button) {
        return;
    }


    button.textContent =
        getCurrentLanguage() === "en"
            ? "🌐 AR"
            : "🌐 EN";

}


// ============================================================
// OPEN / CLOSE TOOLS
// ============================================================

function openTool(toolName) {

    if (toolName === "percentage") {
        openPercentageCalculator();
    }

    else if (toolName === "gpa") {
        openGPACalculator();
    }

    else if (toolName === "pomodoro") {
        openPomodoro();
    }

    else if (toolName === "todo") {
        openTodoList();
    }

    else if (toolName === "studytime") {
        openStudyTimeCalculator();
    }

    else if (toolName === "projects") {
        openGraduationProjectIdeas();
    }

}


// ============================================================
// CREATE MODAL
// ============================================================

function closeTool() {

    if (timerInterval) {

        clearInterval(timerInterval);

        timerInterval = null;

    }


    isTimerRunning = false;


    const modal =
        document.querySelector(".tool-modal");


    if (modal) {
        modal.remove();
    }

}


function createModal(
    content,
    extraClass = ""
) {

    closeTool();


    const modal =
        document.createElement("div");


    modal.className =
        `tool-modal ${extraClass}`;


    modal.innerHTML = `

        <div class="tool-modal-content">

            <button
                class="close-tool"
                onclick="closeTool()"
                aria-label="Close"
            >
                ×
            </button>

            ${content}

        </div>

    `;


    document.body.appendChild(modal);


    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {
                closeTool();
            }

        }
    );

}


// ============================================================
// PERCENTAGE CALCULATOR
// ============================================================

function openPercentageCalculator() {

    const content = `

        <div class="tool-header">

            <div>

                <span class="tool-header-icon">
                    📊
                </span>

                <h2>
                    ${t("percentage_tool_title")}
                </h2>

                <p>
                    ${t("percentage_tool_description")}
                </p>

            </div>

        </div>


        <div class="calculator-form">

            <label>
                ${t("percentage_label")}
            </label>

            <input
                type="number"
                id="percentageValue"
                placeholder="${t("percentage_example_20")}"
            >


            <label>
                ${t("percentage_number")}
            </label>

            <input
                type="number"
                id="percentageNumber"
                placeholder="${t("percentage_example_500")}"
            >


            <button
                class="primary-button"
                onclick="calculatePercentage()"
            >
                ${t("calculate")}
            </button>


            <div
                id="percentageResult"
                class="calculator-result"
            ></div>

        </div>

    `;


    createModal(content);

}


function calculatePercentage() {

    const percentage =
        parseFloat(
            document.getElementById(
                "percentageValue"
            ).value
        );


    const number =
        parseFloat(
            document.getElementById(
                "percentageNumber"
            ).value
        );


    const result =
        document.getElementById(
            "percentageResult"
        );


    if (
        Number.isNaN(percentage) ||
        Number.isNaN(number)
    ) {

        result.innerHTML =
            t("valid_numbers");

        return;

    }


    const calculated =
        (percentage / 100) * number;


    result.innerHTML = `
        <strong>
            ${t("result")}
        </strong>
        ${calculated.toFixed(2)}
    `;

}


// ============================================================
// GPA CALCULATOR
// ============================================================

function openGPACalculator() {

    courseCount = 0;


    const content = `

        <div class="tool-header">

            <div>

                <span class="tool-header-icon">
                    🎓
                </span>

                <h2>
                    ${t("gpa_tool_title")}
                </h2>

                <p>
                    ${t("gpa_tool_description")}
                </p>

            </div>

        </div>


        <div id="coursesContainer"></div>


        <button
            class="secondary-button"
            onclick="addCourse()"
        >
            ${t("add_course")}
        </button>


        <button
            class="primary-button"
            onclick="calculateGPA()"
        >
            ${t("calculate_gpa")}
        </button>


        <div
            id="gpaResult"
            class="calculator-result"
        ></div>

    `;


    createModal(content);


    addCourse();
    addCourse();

}


function addCourse() {

    courseCount++;


    const container =
        document.getElementById(
            "coursesContainer"
        );


    if (!container) {
        return;
    }


    const row =
        document.createElement("div");


    row.className =
        "course-row";


    row.innerHTML = `

        <input
            type="text"
            placeholder="${t("course")} ${courseCount}"
            class="course-name"
        >


        <input
            type="number"
            min="1"
            value="3"
            class="course-credit"
            placeholder="${t("credits")}"
        >


        <select class="course-grade">

            <option value="4">A</option>
            <option value="3.7">A-</option>
            <option value="3.3">B+</option>
            <option value="3">B</option>
            <option value="2.7">B-</option>
            <option value="2.3">C+</option>
            <option value="2">C</option>
            <option value="1.7">C-</option>
            <option value="1.3">D+</option>
            <option value="1">D</option>
            <option value="0">F</option>

        </select>

    `;


    container.appendChild(row);

}


function calculateGPA() {

    const rows =
        document.querySelectorAll(
            ".course-row"
        );


    let totalPoints = 0;

    let totalCredits = 0;


    rows.forEach(row => {

        const credits =
            parseFloat(
                row.querySelector(
                    ".course-credit"
                ).value
            );


        const grade =
            parseFloat(
                row.querySelector(
                    ".course-grade"
                ).value
            );


        if (
            !Number.isNaN(credits) &&
            !Number.isNaN(grade)
        ) {

            totalCredits += credits;

            totalPoints +=
                credits * grade;

        }

    });


    const result =
        document.getElementById(
            "gpaResult"
        );


    if (totalCredits === 0) {

        result.innerHTML =
            t("valid_course");

        return;

    }


    const gpa =
        totalPoints / totalCredits;


    result.innerHTML = `

        <strong>
            ${t("your_gpa")}
        </strong>

        ${gpa.toFixed(2)}

    `;

}


// ============================================================
// POMODORO TIMER
// ============================================================

function openPomodoro() {

    timerSeconds = 25 * 60;

    isTimerRunning = false;

    isBreak = false;


    const content = `

        <div class="tool-header">

            <div>

                <span class="tool-header-icon">
                    ⏱️
                </span>

                <h2>
                    ${t("pomodoro_tool_title")}
                </h2>

                <p>
                    ${t("pomodoro_tool_description")}
                </p>

            </div>

        </div>


        <div class="pomodoro-container">

            <div
                id="timerDisplay"
                class="timer-display"
            >
                25:00
            </div>


            <div
                id="timerStatus"
                class="timer-status"
            >
                ${t("study_time")}
            </div>


            <button
                class="primary-button"
                onclick="togglePomodoro()"
            >
                ${t("start_pause")}
            </button>


            <button
                class="secondary-button"
                onclick="resetPomodoro()"
            >
                ${t("reset")}
            </button>

        </div>

    `;


    createModal(content);

    updateTimerDisplay();

}


function togglePomodoro() {

    if (isTimerRunning) {

        clearInterval(timerInterval);

        timerInterval = null;

        isTimerRunning = false;

        return;

    }


    isTimerRunning = true;


    timerInterval =
        setInterval(() => {

            timerSeconds--;

            updateTimerDisplay();


            if (timerSeconds <= 0) {

                clearInterval(timerInterval);

                timerInterval = null;

                isTimerRunning = false;

                switchPomodoroMode();

            }

        }, 1000);

}


function updateTimerDisplay() {

    const display =
        document.getElementById(
            "timerDisplay"
        );


    if (!display) {
        return;
    }


    const minutes =
        Math.floor(
            timerSeconds / 60
        );


    const seconds =
        timerSeconds % 60;


    display.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


function switchPomodoroMode() {

    isBreak = !isBreak;


    if (isBreak) {

        timerSeconds = 5 * 60;

        alert(
            t("study_finished")
        );

    }

    else {

        timerSeconds = 25 * 60;

        alert(
            t("break_finished")
        );

    }


    const status =
        document.getElementById(
            "timerStatus"
        );


    if (status) {

        status.textContent =
            isBreak
                ? t("break_time")
                : t("study_time");

    }


    updateTimerDisplay();

}


function resetPomodoro() {

    if (timerInterval) {

        clearInterval(timerInterval);

        timerInterval = null;

    }


    isTimerRunning = false;

    isBreak = false;

    timerSeconds = 25 * 60;


    const status =
        document.getElementById(
            "timerStatus"
        );


    if (status) {

        status.textContent =
            t("study_time");

    }


    updateTimerDisplay();

}


// ============================================================
// TO-DO LIST
// ============================================================

function getTodos() {

    return JSON.parse(
        localStorage.getItem(
            "studentToolsTodos"
        )
    ) || [];

}


function saveTodos(todos) {

    localStorage.setItem(
        "studentToolsTodos",
        JSON.stringify(todos)
    );

}


function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent = text;


    return div.innerHTML;

}


function openTodoList() {

    const content = `

        <div class="tool-header">

            <div>

                <span class="tool-header-icon">
                    ✅
                </span>

                <h2>
                    ${t("todo_tool_title")}
                </h2>

                <p>
                    ${t("todo_tool_description")}
                </p>

            </div>

        </div>


        <div class="todo-input-area">

            <input
                type="text"
                id="todoInput"
                placeholder="${t("task_placeholder")}"
            >


            <button
                class="primary-button"
                onclick="addTodo()"
            >
                ${t("add")}
            </button>

        </div>


        <div id="todoList"></div>


        <button
            class="secondary-button"
            onclick="clearCompletedTodos()"
        >
            ${t("clear_completed")}
        </button>

    `;


    createModal(content);

    renderTodos();

}


function addTodo() {

    const input =
        document.getElementById(
            "todoInput"
        );


    if (!input) {
        return;
    }


    const text =
        input.value.trim();


    if (!text) {
        return;
    }


    const todos =
        getTodos();


    todos.push({

        id: Date.now(),

        text: text,

        completed: false

    });


    saveTodos(todos);

    input.value = "";

    renderTodos();

}


function renderTodos() {

    const container =
        document.getElementById(
            "todoList"
        );


    if (!container) {
        return;
    }


    const todos =
        getTodos();


    if (todos.length === 0) {

        container.innerHTML =
            `<p class="empty-message">
                ${t("no_tasks")}
            </p>`;

        return;

    }


    container.innerHTML =
        todos.map(todo => `

            <div class="todo-item">

                <label>

                    <input
                        type="checkbox"
                        ${todo.completed ? "checked" : ""}
                        onchange="toggleTodo(${todo.id})"
                    >

                    <span
                        style="${todo.completed
                            ? "text-decoration: line-through; opacity: 0.6;"
                            : ""}"
                    >
                        ${escapeHTML(todo.text)}
                    </span>

                </label>


                <button
                    onclick="deleteTodo(${todo.id})"
                >
                    ${t("delete")}
                </button>

            </div>

        `).join("");

}


function toggleTodo(id) {

    const todos =
        getTodos();


    const todo =
        todos.find(
            item => item.id === id
        );


    if (!todo) {
        return;
    }


    todo.completed =
        !todo.completed;


    saveTodos(todos);

    renderTodos();

}


function deleteTodo(id) {

    const todos =
        getTodos()
            .filter(
                item => item.id !== id
            );


    saveTodos(todos);

    renderTodos();

}


function clearCompletedTodos() {

    const todos =
        getTodos()
            .filter(
                item => !item.completed
            );


    saveTodos(todos);

    renderTodos();

}


// ============================================================
// STUDY TIME CALCULATOR
// ============================================================

function openStudyTimeCalculator() {

    studySubjectCount = 0;


    const content = `

        <div class="tool-header">

            <div>

                <span class="tool-header-icon">
                    📚
                </span>

                <h2>
                    ${t("studytime_tool_title")}
                </h2>

                <p>
                    ${t("studytime_tool_description")}
                </p>

            </div>

        </div>


        <div class="calculator-form">

            <label>
                ${t("study_days")}
            </label>

            <input
                type="number"
                id="studyDays"
                min="1"
                placeholder="${t("study_days_example")}"
            >


            <label>
                ${t("hours_per_day")}
            </label>

            <input
                type="number"
                id="studyHoursPerDay"
                min="0"
                step="0.5"
                placeholder="${t("hours_example")}"
            >


            <h3>
                ${t("subjects")}
            </h3>


            <div
                id="studySubjects"
            ></div>


            <button
                class="secondary-button"
                onclick="addStudySubject()"
            >
                ${t("add_subject")}
            </button>


            <button
                class="primary-button"
                onclick="calculateStudyTime()"
            >
                ${t("calculate_study_time")}
            </button>


            <div
                id="studyTimeResult"
                class="calculator-result"
            ></div>

        </div>

    `;


    createModal(content);

    addStudySubject();

}


function addStudySubject() {

    studySubjectCount++;


    const container =
        document.getElementById(
            "studySubjects"
        );


    if (!container) {
        return;
    }


    const row =
        document.createElement(
            "div"
        );


    row.className =
        "study-subject-row";


    row.innerHTML = `

        <input
            type="text"
            placeholder="${t("subject")} ${studySubjectCount}"
            class="study-subject-name"
        >

        <input
            type="number"
            min="0"
            step="0.5"
            placeholder="${t("required_hours")}"
            class="study-subject-hours"
        >

    `;


    container.appendChild(row);

}


function calculateStudyTime() {

    const days =
        parseFloat(
            document.getElementById(
                "studyDays"
            ).value
        );


    const hoursPerDay =
        parseFloat(
            document.getElementById(
                "studyHoursPerDay"
            ).value
        );


    const result =
        document.getElementById(
            "studyTimeResult"
        );


    if (
        Number.isNaN(days) ||
        Number.isNaN(hoursPerDay) ||
        days <= 0 ||
        hoursPerDay < 0
    ) {

        result.innerHTML =
            t("valid_study_info");

        return;

    }


    const subjectHours =
        Array.from(
            document.querySelectorAll(
                ".study-subject-hours"
            )
        );


    let totalRequired = 0;


    subjectHours.forEach(input => {

        const value =
            parseFloat(input.value);


        if (!Number.isNaN(value)) {

            totalRequired += value;

        }

    });


    const totalAvailable =
        days * hoursPerDay;


    const requiredPerDay =
        totalRequired / days;


    const difference =
        totalAvailable - totalRequired;


    if (totalRequired === 0) {

        result.innerHTML =
            t("required_study_hours");

        return;

    }


    if (difference >= 0) {

        result.innerHTML = `

            <strong>
                ${t("enough_time")}
            </strong>

            <br><br>

            ${t("required")}
            ${totalRequired.toFixed(1)}
            ${getHoursWord()}

            <br>

            ${t("available")}
            ${totalAvailable.toFixed(1)}
            ${getHoursWord()}

            <br>

            ${t("required_per_day")}
            ${requiredPerDay.toFixed(1)}
            ${getHoursWord()}

        `;

    }

    else {

        result.innerHTML = `

            <strong>
                ${t("more_time")}
            </strong>

            <br><br>

            ${t("required")}
            ${totalRequired.toFixed(1)}
            ${getHoursWord()}

            <br>

            ${t("available")}
            ${totalAvailable.toFixed(1)}
            ${getHoursWord()}

            <br>

            ${t("additional_time")}
            ${Math.abs(difference).toFixed(1)}
            ${getHoursWord()}

        `;

    }

}


function getHoursWord() {

    return getCurrentLanguage() === "ar"
        ? "ساعة"
        : "hours";

}


// ============================================================
// GRADUATION PROJECT IDEAS
// ============================================================

function getProjectColleges() {

    return [
        ...new Set(
            graduationProjects.map(
                project => project.college
            )
        )
    ].sort();

}


function getProjectDepartments(college) {

    return [
        ...new Set(

            graduationProjects

                .filter(
                    project =>
                        project.college === college
                )

                .map(
                    project =>
                        project.department
                )

        )
    ].sort();

}


function getProjectSpecializations(
    college,
    department
) {

    return [
        ...new Set(

            graduationProjects

                .filter(
                    project =>
                        project.college === college &&
                        project.department === department
                )

                .map(
                    project =>
                        project.specialization
                )

        )
    ].sort();

}


// ============================================================
// OPEN PROJECT MODAL
// ============================================================

function openGraduationProjectIdeas() {

    const content = `

        <div class="tool-header">

            <div>

                <span class="tool-header-icon">
                    💡
                </span>

                <h2>
                    ${t("projects_tool_title")}
                </h2>

                <p>
                    ${t("projects_tool_description")}
                </p>

            </div>

        </div>


        <div class="project-filters">


            <div>

                <label>
                    ${t("college")}
                </label>

                <select
                    id="projectCollege"
                    onchange="updateProjectDepartments()"
                >
                    <option value="">
                        ${t("select_college")}
                    </option>
                </select>

            </div>


            <div>

                <label>
                    ${t("department")}
                </label>

                <select
                    id="projectDepartment"
                    onchange="updateProjectSpecializations()"
                    disabled
                >
                    <option value="">
                        ${t("select_department")}
                    </option>
                </select>

            </div>


            <div>

                <label>
                    ${t("specialization")}
                </label>

                <select
                    id="projectSpecialization"
                    onchange="handleProjectSpecializationChange()"
                    disabled
                >
                    <option value="">
                        ${t("select_specialization")}
                    </option>
                </select>

            </div>


            <div class="project-search">

                <label>
                    ${t("search")}
                </label>

                <input
                    type="text"
                    id="projectSearch"
                    placeholder="${t("search_placeholder")}"
                    oninput="renderProjectIdeas()"
                    disabled
                >

            </div>

        </div>


        <button
            id="randomProjectButton"
            class="primary-button"
            onclick="generateRandomProject()"
            disabled
        >
            ${t("smart_random")}
        </button>


        <div
            id="projectResultsCount"
            class="project-results-count"
        >
            ${t("start_project_message")}
        </div>


        <div
            id="projectIdeasContainer"
            class="project-ideas-container"
        >

            <div class="empty-message">

                <div style="font-size: 2rem;">
                    🎓
                </div>

                <h3>
                    ${t("start_exploring")}
                </h3>

                <p>
                    ${t("start_exploring_description")}
                </p>

            </div>

        </div>

    `;


    createModal(
        content,
        "projects-modal"
    );


    populateProjectColleges();

    resetProjectFilters();

    showProjectStartMessage();

}


// ============================================================
// RESET PROJECT FILTERS
// ============================================================

function resetProjectFilters() {

    const college =
        document.getElementById(
            "projectCollege"
        );

    const department =
        document.getElementById(
            "projectDepartment"
        );

    const specialization =
        document.getElementById(
            "projectSpecialization"
        );

    const search =
        document.getElementById(
            "projectSearch"
        );

    const randomButton =
        document.getElementById(
            "randomProjectButton"
        );


    if (college) {
        college.value = "";
    }


    if (department) {

        department.value = "";

        department.disabled = true;

    }


    if (specialization) {

        specialization.value = "";

        specialization.disabled = true;

    }


    if (search) {

        search.value = "";

        search.disabled = true;

    }


    if (randomButton) {

        randomButton.disabled = true;

    }

}


// ============================================================
// START MESSAGE
// ============================================================

function showProjectStartMessage() {

    const container =
        document.getElementById(
            "projectIdeasContainer"
        );


    const countElement =
        document.getElementById(
            "projectResultsCount"
        );


    if (countElement) {

        countElement.textContent =
            t("start_project_message");

    }


    if (container) {

        container.innerHTML = `

            <div class="empty-message">

                <div style="font-size: 2rem;">
                    🎓
                </div>

                <h3>
                    ${t("start_exploring")}
                </h3>

                <p>
                    ${t("start_exploring_description")}
                </p>

            </div>

        `;

    }

}


// ============================================================
// COLLEGE
// ============================================================

function populateProjectColleges() {

    const select =
        document.getElementById(
            "projectCollege"
        );


    if (!select) {
        return;
    }


    const colleges =
        getProjectColleges();


    select.innerHTML = `

        <option value="">
            ${t("select_college")}
        </option>

        ${colleges.map(
            college => `

                <option value="${escapeHTML(college)}">
                    ${escapeHTML(college)}
                </option>

            `
        ).join("")}

    `;

}


// ============================================================
// DEPARTMENT
// ============================================================

function updateProjectDepartments() {

    const collegeSelect =
        document.getElementById(
            "projectCollege"
        );


    const departmentSelect =
        document.getElementById(
            "projectDepartment"
        );


    const specializationSelect =
        document.getElementById(
            "projectSpecialization"
        );


    const searchInput =
        document.getElementById(
            "projectSearch"
        );


    const randomButton =
        document.getElementById(
            "randomProjectButton"
        );


    if (
        !collegeSelect ||
        !departmentSelect ||
        !specializationSelect
    ) {
        return;
    }


    const college =
        collegeSelect.value;


    departmentSelect.innerHTML = `

        <option value="">
            ${t("select_department")}
        </option>

    `;


    specializationSelect.innerHTML = `

        <option value="">
            ${t("select_specialization")}
        </option>

    `;


    specializationSelect.disabled = true;


    if (searchInput) {

        searchInput.value = "";

        searchInput.disabled = true;

    }


    if (randomButton) {

        randomButton.disabled = true;

    }


    if (!college) {

        departmentSelect.disabled = true;

        showProjectStartMessage();

        return;

    }


    const departments =
        getProjectDepartments(
            college
        );


    departments.forEach(
        department => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                department;


            option.textContent =
                department;


            departmentSelect.appendChild(
                option
            );

        }
    );


    departmentSelect.disabled = false;


    showDepartmentMessage();

}


// ============================================================
// DEPARTMENT MESSAGE
// ============================================================

function showDepartmentMessage() {

    const container =
        document.getElementById(
            "projectIdeasContainer"
        );


    const countElement =
        document.getElementById(
            "projectResultsCount"
        );


    if (countElement) {

        countElement.textContent =
            t("select_department_message");

    }


    if (container) {

        container.innerHTML = `

            <div class="empty-message">

                <div style="font-size: 2rem;">
                    📚
                </div>

                <h3>
                    ${t("choose_department")}
                </h3>

                <p>
                    ${t("choose_department_description")}
                </p>

            </div>

        `;

    }

}


// ============================================================
// SPECIALIZATION
// ============================================================

function updateProjectSpecializations() {

    const college =
        document.getElementById(
            "projectCollege"
        )?.value || "";


    const department =
        document.getElementById(
            "projectDepartment"
        )?.value || "";


    const specializationSelect =
        document.getElementById(
            "projectSpecialization"
        );


    const searchInput =
        document.getElementById(
            "projectSearch"
        );


    const randomButton =
        document.getElementById(
            "randomProjectButton"
        );


    if (!specializationSelect) {
        return;
    }


    specializationSelect.innerHTML = `

        <option value="">
            ${t("select_specialization")}
        </option>

    `;


    specializationSelect.disabled = true;


    if (searchInput) {

        searchInput.value = "";

        searchInput.disabled = true;

    }


    if (randomButton) {

        randomButton.disabled = true;

    }


    if (
        !college ||
        !department
    ) {

        showDepartmentMessage();

        return;

    }


    const specializations =
        getProjectSpecializations(
            college,
            department
        );


    specializations.forEach(
        specialization => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                specialization;


            option.textContent =
                specialization;


            specializationSelect.appendChild(
                option
            );

        }
    );


    specializationSelect.disabled = false;


    showSpecializationMessage();

}


// ============================================================
// SPECIALIZATION MESSAGE
// ============================================================

function showSpecializationMessage() {

    const container =
        document.getElementById(
            "projectIdeasContainer"
        );


    const countElement =
        document.getElementById(
            "projectResultsCount"
        );


    if (countElement) {

        countElement.textContent =
            t("select_specialization_message");

    }


    if (container) {

        container.innerHTML = `

            <div class="empty-message">

                <div style="font-size: 2rem;">
                    🎯
                </div>

                <h3>
                    ${t("choose_specialization")}
                </h3>

                <p>
                    ${t("choose_specialization_description")}
                </p>

            </div>

        `;

    }

}


// ============================================================
// SPECIALIZATION CHANGE
// ============================================================

function handleProjectSpecializationChange() {

    const specialization =
        document.getElementById(
            "projectSpecialization"
        )?.value || "";


    const searchInput =
        document.getElementById(
            "projectSearch"
        );


    const randomButton =
        document.getElementById(
            "randomProjectButton"
        );


    if (!specialization) {

        if (searchInput) {

            searchInput.value = "";

            searchInput.disabled = true;

        }


        if (randomButton) {

            randomButton.disabled = true;

        }


        showSpecializationMessage();

        return;

    }


    if (searchInput) {
        searchInput.disabled = false;
    }


    if (randomButton) {
        randomButton.disabled = false;
    }


    if (searchInput) {
        searchInput.value = "";
    }


    renderProjectIdeas();

}


// ============================================================
// FILTER PROJECTS
// ============================================================

function getFilteredProjects() {

    const college =
        document.getElementById(
            "projectCollege"
        )?.value || "";


    const department =
        document.getElementById(
            "projectDepartment"
        )?.value || "";


    const specialization =
        document.getElementById(
            "projectSpecialization"
        )?.value || "";


    const search =
        (
            document.getElementById(
                "projectSearch"
            )?.value || ""
        )
        .trim()
        .toLowerCase();


    if (!specialization) {
        return [];
    }


    return graduationProjects.filter(
        project => {

            if (
                project.college !== college
            ) {
                return false;
            }


            if (
                project.department !== department
            ) {
                return false;
            }


            if (
                project.specialization !== specialization
            ) {
                return false;
            }


            if (search) {

                const searchableText = `

                    ${project.title}

                    ${project.description}

                    ${project.suggestedTools.join(" ")}

                `.toLowerCase();


                if (
                    !searchableText.includes(search)
                ) {
                    return false;
                }

            }


            return true;

        }
    );

}


// ============================================================
// RENDER PROJECT IDEAS
// ============================================================

function renderProjectIdeas() {

    const container =
        document.getElementById(
            "projectIdeasContainer"
        );


    const countElement =
        document.getElementById(
            "projectResultsCount"
        );


    const specialization =
        document.getElementById(
            "projectSpecialization"
        )?.value || "";


    if (!container) {
        return;
    }


    if (!specialization) {

        showSpecializationMessage();

        return;

    }


    const projects =
        getFilteredProjects();


    if (countElement) {

        countElement.textContent =
            projects.length === 1
                ? `1 ${t("project_found_one")}`
                : `${projects.length} ${t("project_found_many")}`;

    }


    if (projects.length === 0) {

        container.innerHTML = `

            <div class="empty-message">

                <div style="font-size: 2rem;">
                    🔍
                </div>

                <h3>
                    ${t("no_projects")}
                </h3>

                <p>
                    ${t("no_projects_description")}
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        projects
            .map(
                project =>
                    createProjectCard(project)
            )
            .join("");

}


// ============================================================
// PROJECT CARD
// ============================================================

function createProjectCard(project) {

    const tools =
        project.suggestedTools
            .map(
                tool => `

                    <span class="project-tag">
                        ${escapeHTML(tool)}
                    </span>

                `
            )
            .join("");


    return `

        <div class="project-card">


            <h3>
                ${escapeHTML(project.title)}
            </h3>


            <div class="project-academic-info">

                <strong>
                    ${t("college")}:
                </strong>

                ${escapeHTML(project.college)}

                <br>

                <strong>
                    ${t("department")}:
                </strong>

                ${escapeHTML(project.department)}

                <br>

                <strong>
                    ${t("specialization")}:
                </strong>

                ${escapeHTML(project.specialization)}

            </div>


            <p>
                ${escapeHTML(project.description)}
            </p>


            <div class="project-tools">

                <strong>
                    ${t("suggested_tools")}
                </strong>

                <div class="project-tags">
                    ${tools}
                </div>

            </div>

        </div>

    `;

}


// ============================================================
// SMART RANDOM PROJECT
// ============================================================

function generateRandomProject() {

    const specialization =
        document.getElementById(
            "projectSpecialization"
        )?.value || "";


    if (!specialization) {

        alert(
            t("select_specialization_first")
        );

        return;

    }


    const projects =
        getFilteredProjects();


    if (projects.length === 0) {

        alert(
            t("no_projects_match")
        );

        return;

    }


    const randomIndex =
        Math.floor(
            Math.random() * projects.length
        );


    const randomProject =
        projects[randomIndex];


    const container =
        document.getElementById(
            "projectIdeasContainer"
        );


    const countElement =
        document.getElementById(
            "projectResultsCount"
        );


    if (countElement) {

        countElement.textContent =
            t("random_suggestion");

    }


    if (container) {

        container.innerHTML =
            createProjectCard(
                randomProject
            );

    }

}


// ============================================================
// DARK MODE
// ============================================================

function toggleTheme() {

    document.body.classList.toggle(
        "dark-mode"
    );


    const isDark =
        document.body.classList.contains(
            "dark-mode"
        );


    localStorage.setItem(
        "studentToolsDarkMode",
        isDark
    );


    updateThemeButton();

}


function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "studentToolsDarkMode"
        );


    if (savedTheme === "true") {

        document.body.classList.add(
            "dark-mode"
        );

    }


    updateThemeButton();

}


function updateThemeButton() {

    const button =
        document.getElementById(
            "theme-toggle"
        );


    if (!button) {
        return;
    }


    const isDark =
        document.body.classList.contains(
            "dark-mode"
        );


    button.textContent =
        isDark ? "☀️" : "🌙";

}


// ============================================================
// CONTACT FORM
// ============================================================

function handleContactForm(event) {

    event.preventDefault();


    const status =
        document.getElementById(
            "contact-message-status"
        );


    if (!status) {
        return;
    }


    status.textContent =
        getCurrentLanguage() === "ar"
            ? "شكرًا لك على رسالتك! نموذج التواصل قيد التجهيز حاليًا."
            : "Thank you for your message! This contact form is currently being prepared.";

}


// ============================================================
// PAGE LOAD
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadTheme();

        applyLanguage();

    }
);