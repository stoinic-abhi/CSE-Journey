/* =========================================================
   ABHI'S CSE MASTER ROADMAP
   script.js
   Start Date: 08 October 2026
   ========================================================= */

"use strict";

/* =========================================================
   CONFIG
   ========================================================= */

const CONFIG = {
    startDate: "2026-10-08",
    storageKey: "abhis-cse-roadmap-v1",

    selectors: {
        dayNumber: ".day-number",
        dayLabel: ".day-label",
        progressFill: ".progress-fill",
        progressPercent: ".progress-percent",
        totalCompleted: "[data-total-completed]",
        totalTasks: "[data-total-tasks]",
        currentStreak: "[data-current-streak]",
        bestStreak: "[data-best-streak]",
        completionRate: "[data-completion-rate]",
        searchInput: "[data-search]",
        phaseCard: ".phase-card",
        taskCard: ".task-card",
        taskComplete: ".task-complete",
        resourceButton: ".resource-btn",
        resourceModal: ".modal-backdrop",
        sidebar: ".sidebar",
        mobileMenu: "[data-mobile-menu]",
        sidebarClose: "[data-sidebar-close]",
        phaseToggle: "[data-phase-toggle]",
        toastContainer: ".toast-container"
    }
};


/* =========================================================
   RESOURCE DATABASE
   =========================================================
   Replace/add URLs anytime you want.
   Resources are intentionally grouped by skill.
   ========================================================= */

const RESOURCES = {

    "computer-basics": {
        title: "Computer Fundamentals",
        description: "Windows, files, folders, extensions, software installation, terminal and troubleshooting.",
        resources: [
            {
                title: "Computer Fundamentals — Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+computer+fundamentals+hindi"
            },
            {
                title: "Windows & Computer Basics",
                creator: "WsCube Tech",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=WsCube+Tech+computer+fundamentals+hindi"
            }
        ]
    },

    "command-line": {
        title: "Command Line / Terminal",
        description: "Learn CMD, PowerShell, terminal navigation and basic commands.",
        resources: [
            {
                title: "Windows Command Prompt Tutorial",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+CMD+commands+hindi"
            },
            {
                title: "Linux Terminal Basics",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+Linux+commands+hindi"
            }
        ]
    },

    "cpp": {
        title: "C++ Programming",
        description: "Complete C++ fundamentals from absolute beginner level.",
        resources: [
            {
                title: "C++ Complete Course in Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+C%2B%2B+complete+course+hindi"
            },
            {
                title: "C++ Programming in Hindi",
                creator: "Apna College",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Apna+College+C%2B%2B+course+hindi"
            }
        ]
    },

    "cpp-oop": {
        title: "C++ OOP",
        description: "Classes, objects, constructors, inheritance, polymorphism and encapsulation.",
        resources: [
            {
                title: "OOPs in C++ Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+OOP+C%2B%2B+hindi"
            },
            {
                title: "C++ OOP Concepts",
                creator: "Apna College",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Apna+College+OOP+C%2B%2B+hindi"
            }
        ]
    },

    "stl": {
        title: "C++ STL",
        description: "Vector, pair, map, set, stack, queue, priority queue and algorithms.",
        resources: [
            {
                title: "C++ STL in Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+C%2B%2B+STL+hindi"
            },
            {
                title: "C++ STL for DSA",
                creator: "Apna College",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Apna+College+C%2B%2B+STL+DSA"
            }
        ]
    },

    "dsa": {
        title: "Data Structures & Algorithms",
        description: "Core DSA roadmap from arrays to graphs and dynamic programming.",
        resources: [
            {
                title: "DSA in C++ Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+DSA+C%2B%2B+hindi"
            },
            {
                title: "DSA Supreme / C++",
                creator: "Love Babbar",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Love+Babbar+DSA+Supreme+C%2B%2B"
            },
            {
                title: "DSA in C++",
                creator: "Apna College",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Apna+College+DSA+C%2B%2B+hindi"
            }
        ]
    },

    "git": {
        title: "Git & GitHub",
        description: "Version control, repositories, commits, branches and collaboration.",
        resources: [
            {
                title: "Git & GitHub Complete Course",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+Git+GitHub+course+hindi"
            },
            {
                title: "Git & GitHub in Hindi",
                creator: "Apna College",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Apna+College+Git+GitHub+hindi"
            }
        ]
    },

    "html": {
        title: "HTML",
        description: "Semantic HTML, forms, tables, accessibility and modern structure.",
        resources: [
            {
                title: "HTML Complete Course",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+HTML+complete+course+hindi"
            },
            {
                title: "HTML Tutorial",
                creator: "Apna College",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Apna+College+HTML+Hindi"
            }
        ]
    },

    "css": {
        title: "CSS",
        description: "Modern CSS, layouts, responsive design, animations and UI architecture.",
        resources: [
            {
                title: "CSS Complete Course",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+CSS+complete+course+hindi"
            },
            {
                title: "CSS Tutorial Hindi",
                creator: "Thapa Technical",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Thapa+Technical+CSS+Hindi"
            }
        ]
    },

    "javascript": {
        title: "JavaScript",
        description: "Modern JavaScript from fundamentals to asynchronous programming and APIs.",
        resources: [
            {
                title: "JavaScript Complete Course",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+JavaScript+complete+course+hindi"
            },
            {
                title: "JavaScript Course",
                creator: "Thapa Technical",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Thapa+Technical+JavaScript+course+hindi"
            },
            {
                title: "JavaScript Hindi",
                creator: "Chai aur Code",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Chai+aur+Code+JavaScript+hindi"
            }
        ]
    },

    "dom": {
        title: "DOM & Browser APIs",
        description: "DOM manipulation, events, forms, localStorage and browser APIs.",
        resources: [
            {
                title: "JavaScript DOM Tutorial",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+DOM+JavaScript+hindi"
            },
            {
                title: "DOM Manipulation",
                creator: "Thapa Technical",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Thapa+Technical+DOM+JavaScript"
            }
        ]
    },

    "react": {
        title: "React.js",
        description: "Components, props, state, hooks, routing, APIs and production patterns.",
        resources: [
            {
                title: "React JS Course Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+React+JS+course+hindi"
            },
            {
                title: "React JS Hindi",
                creator: "Chai aur Code",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Chai+aur+Code+React+JS+hindi"
            },
            {
                title: "React Tutorial Hindi",
                creator: "Thapa Technical",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Thapa+Technical+React+JS+hindi"
            }
        ]
    },

    "node": {
        title: "Node.js",
        description: "Backend JavaScript, modules, filesystem, HTTP and server fundamentals.",
        resources: [
            {
                title: "Node.js Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+Node.js+Hindi"
            },
            {
                title: "Node.js Backend",
                creator: "Chai aur Code",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Chai+aur+Code+Node.js+hindi"
            }
        ]
    },

    "express": {
        title: "Express.js",
        description: "REST APIs, routing, middleware and backend architecture.",
        resources: [
            {
                title: "Express.js Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+Express.js+Hindi"
            },
            {
                title: "Express JS Backend",
                creator: "Chai aur Code",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Chai+aur+Code+Express+JS+hindi"
            }
        ]
    },

    "sql": {
        title: "SQL & PostgreSQL",
        description: "Queries, joins, indexes, constraints, transactions and database design.",
        resources: [
            {
                title: "SQL Complete Course Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+SQL+complete+course+hindi"
            },
            {
                title: "SQL Database Hindi",
                creator: "Gate Smashers",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Gate+Smashers+SQL+DBMS+hindi"
            }
        ]
    },

    "mongodb": {
        title: "MongoDB",
        description: "NoSQL concepts, collections, documents, queries and application integration.",
        resources: [
            {
                title: "MongoDB Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+MongoDB+Hindi"
            },
            {
                title: "MongoDB Course Hindi",
                creator: "Chai aur Code",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Chai+aur+Code+MongoDB+hindi"
            }
        ]
    },

    "auth": {
        title: "Authentication & Authorization",
        description: "JWT, sessions, cookies, password hashing, OAuth and authorization.",
        resources: [
            {
                title: "JWT Authentication Node.js",
                creator: "Chai aur Code",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Chai+aur+Code+JWT+authentication+nodejs"
            },
            {
                title: "Authentication Node.js Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+authentication+nodejs+hindi"
            }
        ]
    },

    "python": {
        title: "Python",
        description: "Python fundamentals for automation, data, AI and backend development.",
        resources: [
            {
                title: "Python Complete Course Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+Python+complete+course+hindi"
            },
            {
                title: "Python Hindi",
                creator: "Apna College",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Apna+College+Python+hindi"
            }
        ]
    },

    "linux": {
        title: "Linux",
        description: "Linux commands, permissions, processes, SSH and package management.",
        resources: [
            {
                title: "Linux Complete Course Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+Linux+course+hindi"
            },
            {
                title: "Linux for Beginners",
                creator: "WsCube Tech",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=WsCube+Tech+Linux+Hindi"
            }
        ]
    },

    "os": {
        title: "Operating Systems",
        description: "Processes, threads, memory, scheduling, deadlocks and file systems.",
        resources: [
            {
                title: "Operating System Hindi",
                creator: "Gate Smashers",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Gate+Smashers+Operating+System+Hindi"
            },
            {
                title: "OS Concepts",
                creator: "Knowledge Gate",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Knowledge+Gate+Operating+System+Hindi"
            }
        ]
    },

    "dbms": {
        title: "DBMS",
        description: "Transactions, ACID, normalization, indexing and concurrency.",
        resources: [
            {
                title: "DBMS Complete Course Hindi",
                creator: "Gate Smashers",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Gate+Smashers+DBMS+complete+course+hindi"
            },
            {
                title: "DBMS Hindi",
                creator: "Knowledge Gate",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Knowledge+Gate+DBMS+Hindi"
            }
        ]
    },

    "networking": {
        title: "Computer Networks",
        description: "IP, DNS, HTTP, HTTPS, TCP, UDP, ports, REST, WebSockets and CORS.",
        resources: [
            {
                title: "Computer Networks Hindi",
                creator: "Gate Smashers",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Gate+Smashers+Computer+Networks+Hindi"
            },
            {
                title: "Networking Basics Hindi",
                creator: "Knowledge Gate",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Knowledge+Gate+Computer+Networks+Hindi"
            }
        ]
    },

    "excel": {
        title: "Excel",
        description: "Formulas, lookups, pivots, data cleaning and charts.",
        resources: [
            {
                title: "Excel Complete Course Hindi",
                creator: "WsCube Tech",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=WsCube+Tech+Excel+complete+course+hindi"
            },
            {
                title: "Excel Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Excel+Hindi+course+India"
            }
        ]
    },

    "docker": {
        title: "Docker",
        description: "Images, containers, Dockerfiles, volumes, networks and Compose.",
        resources: [
            {
                title: "Docker Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+Docker+hindi"
            },
            {
                title: "Docker Course Hindi",
                creator: "Chai aur Code",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Chai+aur+Code+Docker+hindi"
            }
        ]
    },

    "aws": {
        title: "AWS",
        description: "EC2, S3, IAM, RDS, Lambda and cloud fundamentals.",
        resources: [
            {
                title: "AWS Cloud Hindi",
                creator: "WsCube Tech",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=WsCube+Tech+AWS+cloud+hindi"
            },
            {
                title: "AWS for Beginners Hindi",
                creator: "Technical Guftgu",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=AWS+beginners+hindi+India"
            }
        ]
    },

    "ai": {
        title: "AI / LLM",
        description: "LLMs, prompting, APIs, embeddings, RAG, agents and evaluation.",
        resources: [
            {
                title: "Generative AI Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+Generative+AI+hindi"
            },
            {
                title: "Generative AI / LLM",
                creator: "Krish Naik",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Krish+Naik+Generative+AI+LLM"
            },
            {
                title: "AI Engineering",
                creator: "CampusX",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CampusX+Generative+AI+Hindi"
            }
        ]
    },

    "cybersecurity": {
        title: "Cybersecurity",
        description: "Networking, Linux, HTTP, authentication, OWASP and secure coding.",
        resources: [
            {
                title: "Cyber Security Hindi",
                creator: "WsCube Tech",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=WsCube+Tech+Cyber+Security+Hindi"
            },
            {
                title: "Ethical Hacking Fundamentals",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+ethical+hacking+hindi"
            }
        ]
    },

    "react-native": {
        title: "React Native + Expo",
        description: "Cross-platform mobile app development using React Native and Expo.",
        resources: [
            {
                title: "React Native Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+React+Native+hindi"
            },
            {
                title: "React Native Expo",
                creator: "Thapa Technical",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Thapa+Technical+React+Native+Expo"
            }
        ]
    },

    "system-design": {
        title: "System Design",
        description: "Scalability, caching, load balancing, queues, databases and distributed systems.",
        resources: [
            {
                title: "System Design Hindi",
                creator: "CodeWithHarry",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=CodeWithHarry+system+design+hindi"
            },
            {
                title: "System Design for Beginners",
                creator: "Concept && Coding",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=Concept+and+Coding+system+design"
            }
        ]
    },

    "uiux": {
        title: "UI / UX",
        description: "Typography, spacing, visual hierarchy, responsive design and Figma.",
        resources: [
            {
                title: "UI UX Design Hindi",
                creator: "WsCube Tech",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=WsCube+Tech+UI+UX+Hindi"
            },
            {
                title: "Figma Hindi",
                creator: "WsCube Tech",
                type: "YouTube",
                url: "https://www.youtube.com/results?search_query=WsCube+Tech+Figma+Hindi"
            }
        ]
    }
};


/* =========================================================
   STATE
   ========================================================= */

const defaultState = {
    completedTasks: {},
    completedProjects: {},
    githubChecklist: {},
    linkedinChecklist: {},
    activity: {},
    settings: {
        sound: true,
        compactMode: false
    },
    lastVisit: null,
    createdAt: new Date().toISOString()
};

let state = loadState();


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = (selector, parent = document) => {
    return parent.querySelector(selector);
};

const $$ = (selector, parent = document) => {
    return Array.from(parent.querySelectorAll(selector));
};


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeApplication();

});


function initializeApplication() {

    updateDayCounter();
    collectAndNormalizeTasks();
    restoreTaskState();
    restoreChecklistState();
    restoreSettings();

    setupTaskInteractions();
    setupResourceButtons();
    setupSearch();
    setupPhaseToggles();
    setupMobileNavigation();
    setupSettings();
    setupExportImport();

    updateDashboard();
    updateAllPhaseProgress();
    updateAnalytics();

    recordTodayVisit();

    setupKeyboardShortcuts();

}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function loadState() {

    try {

        const saved = localStorage.getItem(CONFIG.storageKey);

        if (!saved) {
            return structuredClone(defaultState);
        }

        const parsed = JSON.parse(saved);

        return {
            ...structuredClone(defaultState),
            ...parsed,
            completedTasks: parsed.completedTasks || {},
            completedProjects: parsed.completedProjects || {},
            githubChecklist: parsed.githubChecklist || {},
            linkedinChecklist: parsed.linkedinChecklist || {},
            activity: parsed.activity || {},
            settings: {
                ...defaultState.settings,
                ...(parsed.settings || {})
            }
        };

    } catch (error) {

        console.warn("Could not load saved roadmap state.", error);

        return structuredClone(defaultState);
    }
}


function saveState() {

    try {

        localStorage.setItem(
            CONFIG.storageKey,
            JSON.stringify(state)
        );

    } catch (error) {

        console.warn("Could not save roadmap state.", error);
    }
}


/* =========================================================
   DAY COUNTER
   ========================================================= */

function getToday() {

    const now = new Date();

    return new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

}


function getStartDate() {

    const [year, month, day] = CONFIG.startDate
        .split("-")
        .map(Number);

    return new Date(year, month - 1, day);
}


function getDayNumber() {

    const start = getStartDate();
    const today = getToday();

    const difference =
        Math.floor(
            (today.getTime() - start.getTime()) /
            (1000 * 60 * 60 * 24)
        );

    return difference + 1;
}


function updateDayCounter() {

    const dayNumberElement = $(
        CONFIG.selectors.dayNumber
    );

    const labelElement = $(
        CONFIG.selectors.dayLabel
    );

    if (!dayNumberElement) {
        return;
    }

    const day = getDayNumber();

    if (day < 1) {

        const daysUntilStart = Math.abs(day - 1);

        dayNumberElement.textContent =
            `T-${daysUntilStart}`;

        if (labelElement) {
            labelElement.textContent =
                "Days Until Journey";
        }

        return;
    }

    dayNumberElement.textContent =
        String(day).padStart(2, "0");

    if (labelElement) {
        labelElement.textContent =
            "Journey Day";
    }
}


/* =========================================================
   TASK NORMALIZATION
   ========================================================= */

function collectAndNormalizeTasks() {

    const taskCards = $$(".task-card");

    taskCards.forEach((card, index) => {

        if (!card.dataset.taskId) {

            const titleElement =
                card.querySelector(
                    ".task-title, h3, h4, [data-task-title]"
                );

            const title =
                titleElement?.textContent?.trim()
                || `task-${index + 1}`;

            card.dataset.taskId =
                slugify(`${title}-${index + 1}`);
        }

        const resourceButton =
            card.querySelector(".resource-btn");

        if (
            resourceButton &&
            !resourceButton.dataset.resource
        ) {

            const text =
                card.textContent.toLowerCase();

            const key = guessResourceKey(text);

            if (key) {
                resourceButton.dataset.resource = key;
            }
        }
    });
}


function slugify(value) {

    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}


function guessResourceKey(text) {

    const mappings = [
        ["javascript", "javascript"],
        ["react native", "react-native"],
        ["react.js", "react"],
        ["react", "react"],
        ["node.js", "node"],
        ["node js", "node"],
        ["express", "express"],
        ["postgres", "sql"],
        ["sql", "sql"],
        ["mongodb", "mongodb"],
        ["authentication", "auth"],
        ["authorization", "auth"],
        ["python", "python"],
        ["linux", "linux"],
        ["docker", "docker"],
        ["aws", "aws"],
        ["cyber", "cybersecurity"],
        ["security", "cybersecurity"],
        ["system design", "system-design"],
        ["network", "networking"],
        ["dbms", "dbms"],
        ["operating system", "os"],
        ["excel", "excel"],
        ["figma", "uiux"],
        ["ui/ux", "uiux"],
        ["ui ux", "uiux"],
        ["stl", "stl"],
        ["dsa", "dsa"],
        ["data structure", "dsa"],
        ["algorithm", "dsa"],
        ["git", "git"],
        ["github", "git"],
        ["html", "html"],
        ["css", "css"],
        ["c++", "cpp"],
        ["cpp", "cpp"],
        ["oop", "cpp-oop"],
        ["llm", "ai"],
        ["generative ai", "ai"],
        ["artificial intelligence", "ai"],
        ["computer basics", "computer-basics"],
        ["terminal", "command-line"],
        ["command line", "command-line"]
    ];

    for (const [needle, key] of mappings) {

        if (text.includes(needle)) {
            return key;
        }
    }

    return null;
}


/* =========================================================
   TASK COMPLETION
   ========================================================= */

function setupTaskInteractions() {

    const buttons = $$(CONFIG.selectors.taskComplete);

    buttons.forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();
            event.stopPropagation();

            const taskCard =
                button.closest(".task-card");

            if (!taskCard) {
                return;
            }

            const taskId =
                taskCard.dataset.taskId;

            if (!taskId) {
                return;
            }

            toggleTask(taskId, taskCard, button);
        });

    });
}


function toggleTask(taskId, taskCard, button) {

    const wasCompleted =
        Boolean(state.completedTasks[taskId]);

    if (wasCompleted) {

        delete state.completedTasks[taskId];

        taskCard.classList.remove("is-completed");
        button.classList.remove("completed");

        showToast(
            "Task marked incomplete",
            "info"
        );

    } else {

        state.completedTasks[taskId] = {
            completedAt: new Date().toISOString()
        };

        taskCard.classList.add("is-completed");
        button.classList.add("completed");

        playCompletionSound();

        showToast(
            "Task completed ✓",
            "success"
        );
    }

    recordActivity();
    saveState();

    updateDashboard();
    updateAllPhaseProgress();
    updateAnalytics();
}


function restoreTaskState() {

    const taskCards = $$(".task-card");

    taskCards.forEach(card => {

        const taskId = card.dataset.taskId;

        if (!taskId) {
            return;
        }

        const button =
            card.querySelector(".task-complete");

        if (
            state.completedTasks[taskId]
        ) {

            card.classList.add("is-completed");

            if (button) {
                button.classList.add("completed");
            }

        } else {

            card.classList.remove("is-completed");

            if (button) {
                button.classList.remove("completed");
            }
        }
    });
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function getTaskCards() {

    return $$(".task-card");
}


function getTotalTasks() {

    return getTaskCards().length;
}


function getCompletedTasks() {

    return getTaskCards()
        .filter(card => {

            const id = card.dataset.taskId;

            return id &&
                Boolean(state.completedTasks[id]);
        })
        .length;
}


function getCompletionPercentage() {

    const total = getTotalTasks();

    if (total === 0) {
        return 0;
    }

    return Math.round(
        (getCompletedTasks() / total) * 100
    );
}


function updateDashboard() {

    const completed =
        getCompletedTasks();

    const total =
        getTotalTasks();

    const percentage =
        getCompletionPercentage();

    updateText(
        "[data-total-completed]",
        completed
    );

    updateText(
        "[data-total-tasks]",
        total
    );

    updateText(
        "[data-completion-rate]",
        `${percentage}%`
    );

    updateText(
        "[data-progress-percent]",
        `${percentage}%`
    );

    updateText(
        ".progress-percent",
        `${percentage}%`
    );

    const fills = $$(
        ".progress-fill"
    );

    fills.forEach(fill => {

        fill.style.width =
            `${percentage}%`;
    });

    document.documentElement
        .style.setProperty(
            "--roadmap-progress",
            `${percentage}%`
        );
}


function updateText(selector, value) {

    $$(selector).forEach(element => {

        element.textContent = value;
    });
}


/* =========================================================
   PHASE PROGRESS
   ========================================================= */

function updateAllPhaseProgress() {

    const phases = $$(".phase-card");

    phases.forEach(phase => {

        const tasks =
            $$(".task-card", phase);

        if (!tasks.length) {
            return;
        }

        const completed =
            tasks.filter(task => {

                const id =
                    task.dataset.taskId;

                return id &&
                    state.completedTasks[id];

            }).length;

        const percentage =
            Math.round(
                (completed / tasks.length) * 100
            );

        const progressBar =
            phase.querySelector(
                ".phase-progress-fill"
            );

        const progressText =
            phase.querySelector(
                ".phase-progress-percent"
            );

        if (progressBar) {

            progressBar.style.width =
                `${percentage}%`;
        }

        if (progressText) {

            progressText.textContent =
                `${percentage}%`;
        }

        phase.dataset.progress =
            percentage;
    });
}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

    const inputs = $$(
        CONFIG.selectors.searchInput
    );

    inputs.forEach(input => {

        input.addEventListener(
            "input",
            debounce(() => {

                performSearch(
                    input.value.trim()
                );

            }, 120)
        );
    });
}


function performSearch(query) {

    const normalized =
        query.toLowerCase();

    const phases = $$(".phase-card");

    phases.forEach(phase => {

        const tasks =
            $$(".task-card", phase);

        let phaseHasMatch = false;

        tasks.forEach(task => {

            const text =
                task.textContent.toLowerCase();

            const matches =
                !normalized ||
                text.includes(normalized);

            task.style.display =
                matches ? "" : "none";

            if (matches) {
                phaseHasMatch = true;
            }
        });

        phase.style.display =
            phaseHasMatch || !normalized
                ? ""
                : "none";
    });

}


/* =========================================================
   PHASE ACCORDION
   ========================================================= */

function setupPhaseToggles() {

    const phaseCards =
        $$(".phase-card");

    phaseCards.forEach(phase => {

        const toggle =
            phase.querySelector(
                "[data-phase-toggle]"
            );

        if (!toggle) {
            return;
        }

        toggle.addEventListener(
            "click",
            event => {

                event.preventDefault();

                phase.classList.toggle(
                    "is-collapsed"
                );

                const collapsed =
                    phase.classList.contains(
                        "is-collapsed"
                    );

                toggle.setAttribute(
                    "aria-expanded",
                    String(!collapsed)
                );
            }
        );
    });
}


/* =========================================================
   RESOURCE SYSTEM
   ========================================================= */

function setupResourceButtons() {

    const buttons =
        $$(CONFIG.selectors.resourceButton);

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();
                event.stopPropagation();

                const key =
                    button.dataset.resource;

                if (!key) {

                    const card =
                        button.closest(
                            ".task-card"
                        );

                    const guessed =
                        guessResourceKey(
                            card?.textContent
                                ?.toLowerCase() || ""
                        );

                    if (guessed) {
                        openResourceModal(
                            guessed
                        );
                    } else {
                        showToast(
                            "Resources coming soon",
                            "info"
                        );
                    }

                    return;
                }

                openResourceModal(key);
            }
        );
    });
}


function openResourceModal(resourceKey) {

    const resource =
        RESOURCES[resourceKey];

    if (!resource) {

        showToast(
            "Resource not found",
            "error"
        );

        return;
    }

    let modal =
        $(".resource-modal");

    if (!modal) {
        modal = createResourceModal();
    }

    const title =
        modal.querySelector(
            "[data-resource-title]"
        );

    const description =
        modal.querySelector(
            "[data-resource-description]"
        );

    const list =
        modal.querySelector(
            "[data-resource-list]"
        );

    if (title) {
        title.textContent =
            resource.title;
    }

    if (description) {
        description.textContent =
            resource.description;
    }

    if (list) {

        list.innerHTML = "";

        resource.resources.forEach(item => {

            const link =
                document.createElement("a");

            link.className =
                "resource-modal-item";

            link.href = item.url;
            link.target = "_blank";
            link.rel =
                "noopener noreferrer";

            link.innerHTML = `
                <span class="resource-modal-icon">
                    ${getResourceIcon(item.type)}
                </span>

                <span class="resource-modal-content">
                    <strong>${escapeHTML(item.title)}</strong>
                    <small>
                        ${escapeHTML(item.creator)}
                        ·
                        ${escapeHTML(item.type)}
                    </small>
                </span>

                <span class="resource-modal-arrow">
                    ↗
                </span>
            `;

            list.appendChild(link);
        });
    }

    modal.classList.add("is-open");

    document.body.classList.add(
        "modal-open"
    );
}


function createResourceModal() {

    const modal =
        document.createElement("div");

    modal.className =
        "modal-backdrop resource-modal";

    modal.innerHTML = `
        <div class="resource-modal-window">

            <button
                class="modal-close"
                type="button"
                aria-label="Close"
                data-resource-close
            >
                ×
            </button>

            <div class="modal-header">

                <span class="modal-eyebrow">
                    LEARNING RESOURCES
                </span>

                <h2 data-resource-title>
                    Resources
                </h2>

                <p data-resource-description>
                    Select a resource to begin.
                </p>

            </div>

            <div
                class="resource-modal-list"
                data-resource-list
            ></div>

        </div>
    `;

    document.body.appendChild(modal);

    const closeButton =
        modal.querySelector(
            "[data-resource-close]"
        );

    closeButton.addEventListener(
        "click",
        closeResourceModal
    );

    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {
                closeResourceModal();
            }
        }
    );

    return modal;
}


function closeResourceModal() {

    const modal =
        $(".resource-modal");

    if (!modal) {
        return;
    }

    modal.classList.remove(
        "is-open"
    );

    document.body.classList.remove(
        "modal-open"
    );
}


function getResourceIcon(type) {

    if (type === "YouTube") {
        return "▶";
    }

    return "↗";
}


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function setupMobileNavigation() {

    const sidebar =
        $(".sidebar");

    const openButton =
        $("[data-mobile-menu]");

    const closeButton =
        $("[data-sidebar-close]");

    if (!sidebar) {
        return;
    }

    if (openButton) {

        openButton.addEventListener(
            "click",
            () => {

                sidebar.classList.add(
                    "is-open"
                );

                document.body.classList.add(
                    "sidebar-open"
                );
            }
        );
    }

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeSidebar
        );
    }

    document.addEventListener(
        "click",
        event => {

            if (
                !sidebar.classList.contains(
                    "is-open"
                )
            ) {
                return;
            }

            if (
                sidebar.contains(event.target) ||
                openButton?.contains(event.target)
            ) {
                return;
            }

            closeSidebar();
        }
    );
}


function closeSidebar() {

    const sidebar =
        $(".sidebar");

    if (!sidebar) {
        return;
    }

    sidebar.classList.remove(
        "is-open"
    );

    document.body.classList.remove(
        "sidebar-open"
    );
}


/* =========================================================
   ACTIVITY / STREAK
   ========================================================= */

function recordTodayVisit() {

    const key =
        formatDate(getToday());

    if (!state.activity[key]) {

        state.activity[key] = {
            visits: 0,
            tasksCompleted: 0
        };
    }

    state.activity[key].visits += 1;

    state.lastVisit =
        new Date().toISOString();

    saveState();
}


function recordActivity() {

    const key =
        formatDate(getToday());

    if (!state.activity[key]) {

        state.activity[key] = {
            visits: 0,
            tasksCompleted: 0
        };
    }

    state.activity[key].tasksCompleted += 1;

    saveState();
}


function formatDate(date) {

    const year =
        date.getFullYear();

    const month =
        String(date.getMonth() + 1)
            .padStart(2, "0");

    const day =
        String(date.getDate())
            .padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function calculateCurrentStreak() {

    let streak = 0;

    const date =
        getToday();

    while (true) {

        const key =
            formatDate(date);

        const activity =
            state.activity[key];

        if (
            !activity ||
            (
                activity.visits === 0 &&
                activity.tasksCompleted === 0
            )
        ) {
            break;
        }

        streak++;

        date.setDate(
            date.getDate() - 1
        );
    }

    return streak;
}


function calculateBestStreak() {

    const dates =
        Object.keys(state.activity)
            .sort();

    if (!dates.length) {
        return 0;
    }

    let best = 0;
    let current = 0;
    let previous = null;

    dates.forEach(dateString => {

        const activity =
            state.activity[dateString];

        if (
            !activity ||
            (
                activity.visits === 0 &&
                activity.tasksCompleted === 0
            )
        ) {
            current = 0;
            previous = null;
            return;
        }

        const date =
            new Date(
                `${dateString}T00:00:00`
            );

        if (!previous) {

            current = 1;

        } else {

            const difference =
                Math.round(
                    (
                        date.getTime() -
                        previous.getTime()
                    ) /
                    (1000 * 60 * 60 * 24)
                );

            if (difference === 1) {
                current++;
            } else {
                current = 1;
            }
        }

        best =
            Math.max(best, current);

        previous = date;
    });

    return best;
}


/* =========================================================
   ANALYTICS
   ========================================================= */

function updateAnalytics() {

    const current =
        calculateCurrentStreak();

    const best =
        calculateBestStreak();

    updateText(
        "[data-current-streak]",
        current
    );

    updateText(
        "[data-best-streak]",
        best
    );

    renderActivityChart();
}


function renderActivityChart() {

    const chart =
        $(".activity-chart");

    if (!chart) {
        return;
    }

    const today =
        getToday();

    const days = [];

    for (let i = 13; i >= 0; i--) {

        const date =
            new Date(today);

        date.setDate(
            today.getDate() - i
        );

        days.push(date);
    }

    chart.innerHTML = "";

    const maxValue =
        Math.max(
            1,
            ...days.map(date => {

                const data =
                    state.activity[
                        formatDate(date)
                    ];

                return (
                    data?.tasksCompleted || 0
                );
            })
        );

    days.forEach(date => {

        const key =
            formatDate(date);

        const data =
            state.activity[key];

        const value =
            data?.tasksCompleted || 0;

        const height =
            Math.max(
                8,
                Math.round(
                    (value / maxValue) * 100
                )
            );

        const bar =
            document.createElement("div");

        bar.className =
            "activity-bar";

        bar.style.height =
            `${height}%`;

        bar.title =
            `${key}: ${value} tasks`;

        chart.appendChild(bar);
    });
}


/* =========================================================
   PROJECT / SOCIAL CHECKLISTS
   ========================================================= */

function restoreChecklistState() {

    restoreCheckboxGroup(
        "[data-github-check]",
        state.githubChecklist
    );

    restoreCheckboxGroup(
        "[data-linkedin-check]",
        state.linkedinChecklist
    );

    restoreCheckboxGroup(
        "[data-project-check]",
        state.completedProjects
    );

    setupChecklistGroup(
        "[data-github-check]",
        state.githubChecklist
    );

    setupChecklistGroup(
        "[data-linkedin-check]",
        state.linkedinChecklist
    );

    setupChecklistGroup(
        "[data-project-check]",
        state.completedProjects
    );
}


function restoreCheckboxGroup(
    selector,
    storage
) {

    const elements =
        $$(selector);

    elements.forEach(
        (element, index) => {

            const id =
                element.dataset.id ||
                `${selector}-${index}`;

            element.dataset.id = id;

            element.checked =
                Boolean(storage[id]);

            updateCheckboxVisual(
                element
            );
        }
    );
}


function setupChecklistGroup(
    selector,
    storage
) {

    const elements =
        $$(selector);

    elements.forEach(
        (element, index) => {

            const id =
                element.dataset.id ||
                `${selector}-${index}`;

            element.dataset.id = id;

            element.addEventListener(
                "change",
                () => {

                    if (element.checked) {
                        storage[id] = true;
                    } else {
                        delete storage[id];
                    }

                    updateCheckboxVisual(
                        element
                    );

                    saveState();
                    updateDashboard();
                }
            );
        }
    );
}


function updateCheckboxVisual(
    checkbox
) {

    const wrapper =
        checkbox.closest(
            ".check-item, .checklist-item, label"
        );

    if (!wrapper) {
        return;
    }

    wrapper.classList.toggle(
        "is-checked",
        checkbox.checked
    );
}


/* =========================================================
   SETTINGS
   ========================================================= */

function restoreSettings() {

    if (state.settings.compactMode) {

        document.body.classList.add(
            "compact-mode"
        );
    }

    const soundToggle =
        $("[data-setting-sound]");

    if (soundToggle) {

        soundToggle.checked =
            state.settings.sound;
    }

    const compactToggle =
        $("[data-setting-compact]");

    if (compactToggle) {

        compactToggle.checked =
            state.settings.compactMode;
    }
}


function setupSettings() {

    const soundToggle =
        $("[data-setting-sound]");

    if (soundToggle) {

        soundToggle.addEventListener(
            "change",
            () => {

                state.settings.sound =
                    soundToggle.checked;

                saveState();
            }
        );
    }

    const compactToggle =
        $("[data-setting-compact]");

    if (compactToggle) {

        compactToggle.addEventListener(
            "change",
            () => {

                state.settings.compactMode =
                    compactToggle.checked;

                document.body.classList.toggle(
                    "compact-mode",
                    compactToggle.checked
                );

                saveState();
            }
        );
    }
}


/* =========================================================
   EXPORT / IMPORT
   ========================================================= */

function setupExportImport() {

    const exportButton =
        $("[data-export-progress]");

    const importButton =
        $("[data-import-progress]");

    const fileInput =
        $("[data-import-file]");

    if (exportButton) {

        exportButton.addEventListener(
            "click",
            exportProgress
        );
    }

    if (importButton && fileInput) {

        importButton.addEventListener(
            "click",
            () => fileInput.click()
        );

        fileInput.addEventListener(
            "change",
            handleImport
        );
    }
}


function exportProgress() {

    const data =
        JSON.stringify(
            state,
            null,
            2
        );

    const blob =
        new Blob(
            [data],
            {
                type: "application/json"
            }
        );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        `abhis-cse-roadmap-${formatDate(
            getToday()
        )}.json`;

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

    showToast(
        "Progress exported successfully",
        "success"
    );
}


function handleImport(event) {

    const file =
        event.target.files?.[0];

    if (!file) {
        return;
    }

    const reader =
        new FileReader();

    reader.onload = () => {

        try {

            const imported =
                JSON.parse(
                    reader.result
                );

            state = {
                ...structuredClone(defaultState),
                ...imported
            };

            saveState();

            showToast(
                "Progress imported. Reloading...",
                "success"
            );

            setTimeout(
                () => location.reload(),
                800
            );

        } catch (error) {

            showToast(
                "Invalid progress file",
                "error"
            );
        }
    };

    reader.readAsText(file);
}


/* =========================================================
   RESET
   ========================================================= */

function resetProgress() {

    const confirmed =
        window.confirm(
            "Reset ALL roadmap progress? This cannot be undone."
        );

    if (!confirmed) {
        return;
    }

    localStorage.removeItem(
        CONFIG.storageKey
    );

    state =
        structuredClone(defaultState);

    showToast(
        "Progress reset",
        "success"
    );

    setTimeout(
        () => location.reload(),
        600
    );
}


document.addEventListener(
    "click",
    event => {

        const resetButton =
            event.target.closest(
                "[data-reset-progress]"
            );

        if (resetButton) {
            resetProgress();
        }
    }
);


/* =========================================================
   TOAST SYSTEM
   ========================================================= */

function showToast(
    message,
    type = "info"
) {

    let container =
        $(".toast-container");

    if (!container) {

        container =
            document.createElement("div");

        container.className =
            "toast-container";

        document.body.appendChild(
            container
        );
    }

    const toast =
        document.createElement("div");

    toast.className =
        `toast toast-${type}`;

    toast.innerHTML = `
        <span class="toast-dot"></span>
        <span class="toast-message">
            ${escapeHTML(message)}
        </span>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {

        toast.classList.add(
            "is-visible"
        );
    });

    setTimeout(() => {

        toast.classList.remove(
            "is-visible"
        );

        setTimeout(
            () => toast.remove(),
            300
        );

    }, 2800);
}


/* =========================================================
   COMPLETION SOUND
   ========================================================= */

function playCompletionSound() {

    if (!state.settings.sound) {
        return;
    }

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) {
            return;
        }

        const context =
            new AudioContext();

        const oscillator =
            context.createOscillator();

        const gain =
            context.createGain();

        oscillator.type =
            "sine";

        oscillator.frequency.setValueAtTime(
            660,
            context.currentTime
        );

        oscillator.frequency.exponentialRampToValueAtTime(
            880,
            context.currentTime + 0.08
        );

        gain.gain.setValueAtTime(
            0.0001,
            context.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.04,
            context.currentTime + 0.01
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            context.currentTime + 0.15
        );

        oscillator.connect(gain);
        gain.connect(context.destination);

        oscillator.start();

        oscillator.stop(
            context.currentTime + 0.16
        );

    } catch {
        // Audio is optional.
    }
}


/* =========================================================
   KEYBOARD SHORTCUTS
   ========================================================= */

function setupKeyboardShortcuts() {

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "/" &&
                !isTypingContext(event.target)
            ) {

                event.preventDefault();

                const search =
                    $(
                        CONFIG.selectors.searchInput
                    );

                search?.focus();
            }

            if (event.key === "Escape") {

                closeResourceModal();
                closeSidebar();
            }
        }
    );
}


function isTypingContext(element) {

    if (!element) {
        return false;
    }

    const tag =
        element.tagName?.toLowerCase();

    return (
        tag === "input" ||
        tag === "textarea" ||
        tag === "select" ||
        element.isContentEditable
    );
}


/* =========================================================
   UTILITIES
   ========================================================= */

function debounce(
    callback,
    delay
) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout =
            setTimeout(
                () => callback(...args),
                delay
            );
    };
}


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        const link =
            event.target.closest(
                'a[href^="#"]'
            );

        if (!link) {
            return;
        }

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(
                targetId
            );

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        closeSidebar();
    }
);


/* =========================================================
   ACTIVE SIDEBAR NAVIGATION
   ========================================================= */

function setupActiveNavigation() {

    const links =
        $$(".sidebar a[href^='#']");

    const sections =
        links
            .map(link => {

                const id =
                    link.getAttribute(
                        "href"
                    );

                return document.querySelector(
                    id
                );
            })
            .filter(Boolean);

    if (!sections.length) {
        return;
    }

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const id =
                        `#${entry.target.id}`;

                    links.forEach(link => {

                        link.classList.toggle(
                            "active",
                            link.getAttribute(
                                "href"
                            ) === id
                        );
                    });
                });
            },
            {
                rootMargin:
                    "-20% 0px -65% 0px"
            }
        );

    sections.forEach(
        section => observer.observe(section)
    );
}


/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

function setupScrollProgress() {

    const indicator =
        $(".scroll-progress");

    if (!indicator) {
        return;
    }

    window.addEventListener(
        "scroll",
        () => {

            const scrollTop =
                window.scrollY;

            const documentHeight =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;

            const percentage =
                documentHeight <= 0
                    ? 0
                    : (
                        scrollTop /
                        documentHeight
                    ) * 100;

            indicator.style.width =
                `${percentage}%`;
        },
        {
            passive: true
        }
    );
}


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

function setupRevealAnimations() {

    const elements =
        $$(
            ".hero, .dashboard-card, .phase-card, " +
            ".project-card, .social-card, .analytics-card"
        );

    if (!elements.length) {
        return;
    }

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );
                });
            },
            {
                threshold: 0.08
            }
        );

    elements.forEach(
        element => observer.observe(element)
    );
}


/* =========================================================
   INITIAL UI ENHANCEMENTS
   ========================================================= */

function initializeEnhancements() {

    setupActiveNavigation();
    setupScrollProgress();
    setupRevealAnimations();

}


/* =========================================================
   WINDOW LOAD
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        initializeEnhancements();

        updateDayCounter();
        updateDashboard();
        updateAllPhaseProgress();
        updateAnalytics();

    }
);


/* =========================================================
   MIDNIGHT REFRESH
   Keeps the Day counter correct without reopening page.
   ========================================================= */

function scheduleMidnightRefresh() {

    const now =
        new Date();

    const tomorrow =
        new Date(now);

    tomorrow.setHours(
        24,
        0,
        5,
        0
    );

    const delay =
        tomorrow.getTime() -
        now.getTime();

    setTimeout(() => {

        updateDayCounter();
        updateDashboard();
        updateAnalytics();

        scheduleMidnightRefresh();

    }, delay);
}

scheduleMidnightRefresh();


/* =========================================================
   CONSOLE BRANDING
   ========================================================= */

console.log(
    "%c ABHI'S CSE MASTER ROADMAP ",
    "background:#0f172a;color:#8b5cf6;font-size:16px;font-weight:800;padding:8px 14px;border-radius:8px;"
);

console.log(
    "%c Start Date: 08 October 2026 ",
    "color:#94a3b8;font-size:12px;"
);

console.log(
    "%c Build. Learn. Ship. Repeat. ",
    "color:#22c55e;font-size:12px;font-weight:700;"
);
