/* =========================================
   ABHI'S CSE ROADMAP TRACKER
   Start Date: 08 October 2026
========================================= */

const START_DATE = new Date("2026-10-08T00:00:00");
const STORAGE_KEY = "abhis_cse_tracker_v1";

const defaultState = {
  completedTasks: [],
  careerChecks: [],
  activityDates: []
};

let state = loadState();

/* =========================================
   RESOURCE DATA
========================================= */

const resources = {
  computer: {
    title: "Computer Fundamentals",
    description:
      "Computer basics, hardware, software, operating systems, files, memory and how a computer actually works.",
    links: [
      {
        title: "Computer Fundamentals — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+computer+fundamentals+hindi"
      },
      {
        title: "Computer Fundamentals — WsCube Tech",
        url: "https://www.youtube.com/results?search_query=WsCube+Tech+computer+fundamentals+hindi"
      }
    ]
  },

  terminal: {
    title: "Command Line / Terminal",
    description:
      "Learn Windows terminal, commands, paths, files, folders and basic command-line workflow.",
    links: [
      {
        title: "Windows CMD / Terminal — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+CMD+terminal+hindi"
      },
      {
        title: "Linux Terminal — WsCube Tech",
        url: "https://www.youtube.com/results?search_query=WsCube+Tech+Linux+terminal+hindi"
      }
    ]
  },

  cpp: {
    title: "C++ Programming",
    description:
      "Build your programming foundation with variables, conditions, loops, functions, arrays, strings and problem solving.",
    links: [
      {
        title: "C++ Full Course Hindi — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+C%2B%2B+full+course+hindi"
      },
      {
        title: "C++ — Apna College",
        url: "https://www.youtube.com/results?search_query=Apna+College+C%2B%2B+hindi"
      }
    ]
  },

  "cpp-oop": {
    title: "C++ OOP",
    description:
      "Learn classes, objects, constructors, inheritance, polymorphism, encapsulation and abstraction.",
    links: [
      {
        title: "OOP in C++ — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+OOP+C%2B%2B+hindi"
      },
      {
        title: "C++ OOP — Apna College",
        url: "https://www.youtube.com/results?search_query=Apna+College+C%2B%2B+OOP+hindi"
      }
    ]
  },

  git: {
    title: "Git & GitHub",
    description:
      "Version control, repositories, commits, branches, pushing code and building a proper GitHub profile.",
    links: [
      {
        title: "Git & GitHub — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+Git+GitHub+hindi"
      },
      {
        title: "Git & GitHub — Apna College",
        url: "https://www.youtube.com/results?search_query=Apna+College+Git+GitHub+hindi"
      }
    ]
  },

  dsa: {
    title: "Data Structures & Algorithms",
    description:
      "Arrays, strings, linked lists, stacks, queues, trees, graphs, recursion, sorting, searching and complexity.",
    links: [
      {
        title: "DSA — Apna College",
        url: "https://www.youtube.com/results?search_query=Apna+College+DSA+hindi"
      },
      {
        title: "DSA — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+DSA+hindi"
      }
    ]
  },

  html: {
    title: "HTML",
    description:
      "Learn semantic HTML, forms, links, images, tables, accessibility and modern page structure.",
    links: [
      {
        title: "HTML — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+HTML+course+hindi"
      },
      {
        title: "HTML — Thapa Technical",
        url: "https://www.youtube.com/results?search_query=Thapa+Technical+HTML+hindi"
      }
    ]
  },

  css: {
    title: "CSS",
    description:
      "Master layouts, Flexbox, Grid, responsive design, animations, transitions and modern UI styling.",
    links: [
      {
        title: "CSS — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+CSS+course+hindi"
      },
      {
        title: "CSS — Thapa Technical",
        url: "https://www.youtube.com/results?search_query=Thapa+Technical+CSS+hindi"
      }
    ]
  },

  javascript: {
    title: "JavaScript",
    description:
      "Variables, functions, arrays, objects, DOM, events, async JavaScript, APIs and modern ES6+.",
    links: [
      {
        title: "JavaScript — Chai aur Code",
        url: "https://www.youtube.com/results?search_query=Chai+aur+Code+JavaScript+hindi"
      },
      {
        title: "JavaScript — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+JavaScript+course+hindi"
      }
    ]
  },

  react: {
    title: "React",
    description:
      "Components, props, state, hooks, routing, API calls and building real frontend applications.",
    links: [
      {
        title: "React — Chai aur Code",
        url: "https://www.youtube.com/results?search_query=Chai+aur+Code+React+hindi"
      },
      {
        title: "React — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+React+hindi"
      }
    ]
  },

  node: {
    title: "Node.js",
    description:
      "Learn backend JavaScript, modules, HTTP, APIs, npm and server-side application development.",
    links: [
      {
        title: "Node.js — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+Node.js+hindi"
      },
      {
        title: "Node.js — Chai aur Code",
        url: "https://www.youtube.com/results?search_query=Chai+aur+Code+Node.js+hindi"
      }
    ]
  },

  express: {
    title: "Express.js",
    description:
      "Build REST APIs, routes, middleware, controllers and backend applications using Express.",
    links: [
      {
        title: "Express.js — Chai aur Code",
        url: "https://www.youtube.com/results?search_query=Chai+aur+Code+Express.js+hindi"
      },
      {
        title: "Express.js — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+Express.js+hindi"
      }
    ]
  },

  sql: {
    title: "SQL & Databases",
    description:
      "Tables, queries, relationships, joins, indexes, CRUD and database fundamentals.",
    links: [
      {
        title: "SQL — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+SQL+course+hindi"
      },
      {
        title: "SQL — Gate Smashers",
        url: "https://www.youtube.com/results?search_query=Gate+Smashers+SQL+hindi"
      }
    ]
  },

  auth: {
    title: "Authentication",
    description:
      "Understand login systems, sessions, tokens, cookies, password security and authorization.",
    links: [
      {
        title: "Authentication — Chai aur Code",
        url: "https://www.youtube.com/results?search_query=Chai+aur+Code+authentication+hindi"
      },
      {
        title: "JWT Authentication — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+JWT+authentication+hindi"
      }
    ]
  },

  python: {
    title: "Python",
    description:
      "Python syntax, functions, data structures, modules, files and the foundation for automation and AI.",
    links: [
      {
        title: "Python — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+Python+course+hindi"
      },
      {
        title: "Python — Apna College",
        url: "https://www.youtube.com/results?search_query=Apna+College+Python+hindi"
      }
    ]
  },

  linux: {
    title: "Linux",
    description:
      "Linux filesystem, commands, permissions, processes, packages and developer workflow.",
    links: [
      {
        title: "Linux — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+Linux+hindi"
      },
      {
        title: "Linux — WsCube Tech",
        url: "https://www.youtube.com/results?search_query=WsCube+Tech+Linux+hindi"
      }
    ]
  },

  docker: {
    title: "Docker",
    description:
      "Containers, images, Dockerfiles, volumes, networks and deploying applications consistently.",
    links: [
      {
        title: "Docker — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+Docker+hindi"
      },
      {
        title: "Docker — Chai aur Code",
        url: "https://www.youtube.com/results?search_query=Chai+aur+Code+Docker+hindi"
      }
    ]
  },

  aws: {
    title: "AWS / Cloud",
    description:
      "Understand cloud computing, servers, storage, deployment and basic AWS services.",
    links: [
      {
        title: "AWS — WsCube Tech",
        url: "https://www.youtube.com/results?search_query=WsCube+Tech+AWS+hindi"
      },
      {
        title: "AWS — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+AWS+hindi"
      }
    ]
  },

  ai: {
    title: "AI & Machine Learning",
    description:
      "Python-based AI/ML foundations, datasets, models, training, evaluation and practical projects.",
    links: [
      {
        title: "AI / ML — CampusX",
        url: "https://www.youtube.com/results?search_query=CampusX+machine+learning+hindi"
      },
      {
        title: "Machine Learning — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+machine+learning+hindi"
      }
    ]
  },

  os: {
    title: "Operating Systems",
    description:
      "Processes, threads, memory management, scheduling, deadlocks, file systems and OS fundamentals.",
    links: [
      {
        title: "Operating Systems — Gate Smashers",
        url: "https://www.youtube.com/results?search_query=Gate+Smashers+Operating+System+hindi"
      }
    ]
  },

  dbms: {
    title: "DBMS",
    description:
      "Database architecture, normalization, transactions, keys, SQL and database design.",
    links: [
      {
        title: "DBMS — Gate Smashers",
        url: "https://www.youtube.com/results?search_query=Gate+Smashers+DBMS+hindi"
      }
    ]
  },

  networking: {
    title: "Computer Networks",
    description:
      "OSI/TCP-IP, IP addressing, DNS, HTTP, TCP, UDP, routing and networking fundamentals.",
    links: [
      {
        title: "Computer Networks — Gate Smashers",
        url: "https://www.youtube.com/results?search_query=Gate+Smashers+Computer+Networks+hindi"
      },
      {
        title: "Networking — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+computer+networks+hindi"
      }
    ]
  },

  "react-native": {
    title: "React Native",
    description:
      "Build Android/iOS applications with React Native, Expo, navigation, components and APIs.",
    links: [
      {
        title: "React Native — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+React+Native+hindi"
      },
      {
        title: "React Native — Chai aur Code",
        url: "https://www.youtube.com/results?search_query=Chai+aur+Code+React+Native+hindi"
      }
    ]
  },

  cybersecurity: {
    title: "Cybersecurity",
    description:
      "Learn defensive security fundamentals, networking, authentication, common vulnerabilities and secure development.",
    links: [
      {
        title: "Cyber Security — WsCube Tech",
        url: "https://www.youtube.com/results?search_query=WsCube+Tech+cyber+security+hindi"
      },
      {
        title: "OWASP Web Security",
        url: "https://owasp.org/www-project-top-ten/"
      }
    ]
  },

  "system-design": {
    title: "System Design",
    description:
      "Learn how large applications are structured: APIs, databases, caching, queues, scaling and reliability.",
    links: [
      {
        title: "System Design — CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+system+design+hindi"
      },
      {
        title: "System Design — Concept && Architecture",
        url: "https://www.youtube.com/results?search_query=system+design+hindi+software+engineering"
      }
    ]
  }
};


/* =========================================
   LOCAL STORAGE
========================================= */

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return { ...defaultState };
    }

    const parsed = JSON.parse(saved);

    return {
      completedTasks: Array.isArray(parsed.completedTasks)
        ? parsed.completedTasks
        : [],
      careerChecks: Array.isArray(parsed.careerChecks)
        ? parsed.careerChecks
        : [],
      activityDates: Array.isArray(parsed.activityDates)
        ? parsed.activityDates
        : []
    };
  } catch (error) {
    console.error("Could not load tracker:", error);
    return { ...defaultState };
  }
}


function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}


/* =========================================
   DATE HELPERS
========================================= */

function getTodayKey() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}


function getDayNumber() {
  const now = new Date();

  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  const start = new Date(
    START_DATE.getFullYear(),
    START_DATE.getMonth(),
    START_DATE.getDate()
  );

  const difference = Math.floor(
    (today - start) / 86400000
  );

  return difference + 1;
}


function updateDayCounter() {
  const dayNumber = document.getElementById("dayNumber");
  const dayText = document.getElementById("dayText");

  if (!dayNumber || !dayText) return;

  const day = getDayNumber();

  if (day < 1) {
    const daysLeft = Math.abs(day - 1);

    dayNumber.textContent = `T-${daysLeft}`;
    dayText.textContent = "STARTS SOON";
    return;
  }

  dayNumber.textContent = String(day).padStart(2, "0");
  dayText.textContent = "ROADMAP DAY";
}


/* =========================================
   TASK SETUP
========================================= */

const tasks = Array.from(document.querySelectorAll(".task"));
const totalCount = document.getElementById("totalCount");

if (totalCount) {
  totalCount.textContent = tasks.length;
}


function getTaskId(task, index) {
  return task.dataset.resource || `task-${index}`;
}


function restoreTasks() {
  tasks.forEach((task, index) => {
    const id = getTaskId(task, index);

    if (state.completedTasks.includes(id)) {
      task.classList.add("completed");
    }
  });
}


/* =========================================
   CAREER CHECKBOXES
========================================= */

const careerChecks = Array.from(
  document.querySelectorAll(".career-check")
);

function restoreCareerChecks() {
  careerChecks.forEach((checkbox, index) => {
    checkbox.checked = state.careerChecks.includes(index);
  });
}


careerChecks.forEach((checkbox, index) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      if (!state.careerChecks.includes(index)) {
        state.careerChecks.push(index);
      }
    } else {
      state.careerChecks = state.careerChecks.filter(
        item => item !== index
      );
    }

    saveState();
    showToast(
      checkbox.checked
        ? "Career task completed"
        : "Career task unchecked"
    );
  });
});


/* =========================================
   STREAK
========================================= */

function recordActivity() {
  const today = getTodayKey();

  if (!state.activityDates.includes(today)) {
    state.activityDates.push(today);
  }

  // Keep only last 365 days
  state.activityDates = state.activityDates.slice(-365);

  saveState();
}


function calculateStreak() {
  const activity = new Set(state.activityDates);

  let streak = 0;
  const date = new Date();

  date.setHours(0, 0, 0, 0);

  while (true) {
    const key =
      `${date.getFullYear()}-` +
      `${String(date.getMonth() + 1).padStart(2, "0")}-` +
      `${String(date.getDate()).padStart(2, "0")}`;

    if (!activity.has(key)) {
      break;
    }

    streak++;

    date.setDate(date.getDate() - 1);
  }

  return streak;
}


/* =========================================
   PROGRESS
========================================= */

function updateProgress() {
  const completed = tasks.filter(task =>
    task.classList.contains("completed")
  ).length;

  const total = tasks.length;

  const percent =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  const completedCount = document.getElementById(
    "completedCount"
  );

  const progressPercent = document.getElementById(
    "progressPercent"
  );

  const progressLabel = document.getElementById(
    "progressLabel"
  );

  const sidePercent = document.getElementById(
    "sidePercent"
  );

  const sideProgress = document.getElementById(
    "sideProgress"
  );

  const bigProgressBar = document.getElementById(
    "bigProgressBar"
  );

  if (completedCount) {
    completedCount.textContent = completed;
  }

  if (progressPercent) {
    progressPercent.textContent = `${percent}%`;
  }

  if (progressLabel) {
    progressLabel.textContent =
      `${completed} of ${total} tasks completed`;
  }

  if (sidePercent) {
    sidePercent.textContent = `${percent}%`;
  }

  if (sideProgress) {
    sideProgress.style.width = `${percent}%`;
  }

  if (bigProgressBar) {
    bigProgressBar.style.width = `${percent}%`;
  }

  const streak = document.getElementById("streak");

  if (streak) {
    streak.textContent = calculateStreak();
  }

  updatePhaseProgress();
}


function updatePhaseProgress() {
  document.querySelectorAll(".phase").forEach(phase => {
    const phaseTasks = Array.from(
      phase.querySelectorAll(".task")
    );

    const done = phaseTasks.filter(task =>
      task.classList.contains("completed")
    ).length;

    const total = phaseTasks.length;

    const percent =
      total === 0
        ? 0
        : Math.round((done / total) * 100);

    const percentElement = phase.querySelector(
      ".phase-percent strong"
    );

    if (percentElement) {
      percentElement.textContent = `${percent}%`;
    }
  });
}


/* =========================================
   TASK CLICK
========================================= */

tasks.forEach((task, index) => {
  const check = task.querySelector(".check");

  if (!check) return;

  check.addEventListener("click", event => {
    event.stopPropagation();

    const id = getTaskId(task, index);

    const completed = task.classList.toggle(
      "completed"
    );

    if (completed) {
      if (!state.completedTasks.includes(id)) {
        state.completedTasks.push(id);
      }

      recordActivity();

      showToast("Task completed ✓");
    } else {
      state.completedTasks =
        state.completedTasks.filter(
          item => item !== id
        );

      saveState();

      showToast("Task marked incomplete");
    }

    saveState();
    updateProgress();
  });
});


/* =========================================
   RESOURCE MODAL
========================================= */

const resourceModal =
  document.getElementById("resourceModal");

const closeModal =
  document.getElementById("closeModal");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const resourceList =
  document.getElementById("resourceList");


function openResource(resourceKey) {
  const resource = resources[resourceKey];

  if (!resource || !resourceModal) {
    showToast("Resource not available yet");
    return;
  }

  if (modalTitle) {
    modalTitle.textContent = resource.title;
  }

  if (modalDescription) {
    modalDescription.textContent =
      resource.description;
  }

  if (resourceList) {
    resourceList.innerHTML = "";

    resource.links.forEach(link => {
      const item = document.createElement("a");

      item.className = "resource-item";
      item.href = link.url;
      item.target = "_blank";
      item.rel = "noopener noreferrer";

      item.innerHTML = `
        <div class="resource-info">
          <strong>${escapeHTML(link.title)}</strong>
          <span>Open resource ↗</span>
        </div>
        <span class="resource-arrow">→</span>
      `;

      resourceList.appendChild(item);
    });
  }

  resourceModal.classList.add("show");
  document.body.style.overflow = "hidden";
}


function closeResourceModal() {
  if (!resourceModal) return;

  resourceModal.classList.remove("show");
  document.body.style.overflow = "";
}


document.querySelectorAll(".resource").forEach(button => {
  button.addEventListener("click", () => {
    const task = button.closest(".task");

    if (!task) return;

    const resourceKey = task.dataset.resource;

    openResource(resourceKey);
  });
});


if (closeModal) {
  closeModal.addEventListener(
    "click",
    closeResourceModal
  );
}


if (resourceModal) {
  resourceModal.addEventListener("click", event => {
    if (event.target === resourceModal) {
      closeResourceModal();
    }
  });
}


document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeResourceModal();
  }
});


/* =========================================
   SEARCH
========================================= */

const searchInput =
  document.getElementById("search");


if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query =
      searchInput.value.trim().toLowerCase();

    document.querySelectorAll(".phase").forEach(
      phase => {
        const phaseTitle =
          phase.querySelector(".phase-title")
            ?.textContent
            .toLowerCase() || "";

        const phaseNumber =
          phase.querySelector(".phase-number")
            ?.textContent
            .toLowerCase() || "";

        const phaseMatches =
          !query ||
          phaseTitle.includes(query) ||
          phaseNumber.includes(query);

        const phaseTasks =
          Array.from(
            phase.querySelectorAll(".task")
          );

        let visibleTasks = 0;

        phaseTasks.forEach(task => {
          const text =
            task.textContent.toLowerCase();

          const matches =
            !query ||
            phaseMatches ||
            text.includes(query);

          task.style.display =
            matches ? "" : "none";

          if (matches) {
            visibleTasks++;
          }
        });

        phase.style.display =
          !query || phaseMatches || visibleTasks > 0
            ? ""
            : "none";
      }
    );
  });
}


/* =========================================
   MOBILE SIDEBAR
========================================= */

const menuBtn =
  document.getElementById("menuBtn");

const sidebar =
  document.querySelector(".sidebar");


if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}


document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-link")
      .forEach(item =>
        item.classList.remove("active")
      );

    link.classList.add("active");

    if (sidebar) {
      sidebar.classList.remove("open");
    }
  });
});


/* =========================================
   RESET TRACKER
========================================= */

const resetBtn =
  document.getElementById("resetBtn");


if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    const confirmed = confirm(
      "Reset your entire roadmap progress?\n\nAll completed tasks, career checks and streak data will be removed."
    );

    if (!confirmed) return;

    localStorage.removeItem(STORAGE_KEY);

    state = {
      completedTasks: [],
      careerChecks: [],
      activityDates: []
    };

    tasks.forEach(task => {
      task.classList.remove("completed");
    });

    careerChecks.forEach(check => {
      check.checked = false;
    });

    updateProgress();

    showToast("Roadmap reset successfully");
  });
}


/* =========================================
   TOAST
========================================= */

let toastTimer;

function showToast(message) {
  const toast =
    document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}


/* =========================================
   SAFE HTML
========================================= */

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================================
   INITIALIZE
========================================= */

restoreTasks();
restoreCareerChecks();
updateDayCounter();
updateProgress();


/* =========================================
   AUTO UPDATE DAY
========================================= */

setInterval(() => {
  updateDayCounter();
  updateProgress();
}, 60000);


/* =========================================
   CONSOLE
========================================= */

console.log(
  "%cABHI'S CSE ROADMAP",
  "font-size:20px;font-weight:bold;"
);

console.log(
  "Start Date: 08 October 2026"
);

console.log(
  `Current Roadmap Day: ${getDayNumber()}`
);
