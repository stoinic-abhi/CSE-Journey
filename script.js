/* =========================================================
   CSE OS — COMMAND CENTER ENGINE
   =========================================================

   START DATE:
   08 OCTOBER 2026

   8 Oct 2026 = DAY 1
   9 Oct 2026 = DAY 2
   ...

   Everything is saved in localStorage.
   ========================================================= */


const STORAGE_KEY = "abhi_cse_os_v2";


/* =========================================================
   SETTINGS
   ========================================================= */

const DEFAULT_START_DATE = "2026-10-08";


/* =========================================================
   ROADMAP DATA
   =========================================================

   Every task contains:

   id
   title
   description
   xp
   resource
   resourceName

   Resource buttons automatically open the relevant
   learning page in a new tab.
   ========================================================= */

const ROADMAP = [

    {
        id: "p1",
        number: "01",
        title: "Computer + Professional Foundations",
        short: "Become comfortable operating like a developer.",
        tasks: [

            {
                id: "p1-t1",
                title: "Windows & file system fundamentals",
                description: "Files, folders, extensions, paths, storage and basic Windows navigation.",
                xp: 10,
                resource: "https://support.microsoft.com/windows",
                resourceName: "Microsoft Windows Support"
            },

            {
                id: "p1-t2",
                title: "Understand file extensions & project structure",
                description: "Understand .cpp, .h, .html, .css, .js, .json, .md and common project folders.",
                xp: 10,
                resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
                resourceName: "MDN Web Development"
            },

            {
                id: "p1-t3",
                title: "ZIP, extraction & compression",
                description: "Learn ZIP archives, extraction, compression and basic archive handling.",
                xp: 10,
                resource: "https://support.microsoft.com/windows/zip-and-unzip-files",
                resourceName: "Microsoft ZIP Guide"
            },

            {
                id: "p1-t4",
                title: "Environment variables & PATH",
                description: "Understand PATH, environment variables and why terminals can find programs.",
                xp: 20,
                resource: "https://learn.microsoft.com/windows-server/administration/windows-commands/set_1",
                resourceName: "Microsoft Command Reference"
            },

            {
                id: "p1-t5",
                title: "Command Prompt / PowerShell basics",
                description: "Navigate directories, create files, run programs and understand the command line.",
                xp: 20,
                resource: "https://learn.microsoft.com/powershell/",
                resourceName: "Microsoft PowerShell"
            },

            {
                id: "p1-t6",
                title: "Browser DevTools",
                description: "Inspect HTML/CSS, console errors, network requests and basic debugging.",
                xp: 20,
                resource: "https://developer.chrome.com/docs/devtools/",
                resourceName: "Chrome DevTools"
            },

            {
                id: "p1-t7",
                title: "Basic troubleshooting mindset",
                description: "Learn to read errors, isolate problems, reproduce bugs and search documentation.",
                xp: 20,
                resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
                resourceName: "MDN Learning"
            }

        ]
    },


    {
        id: "p2",
        number: "02",
        title: "C++ Programming",
        short: "Build genuine programming fundamentals.",
        tasks: [

            {
                id: "p2-t1",
                title: "Install C++ compiler + VS Code setup",
                description: "Set up a lightweight C++ development environment.",
                xp: 20,
                resource: "https://www.learncpp.com/cpp-tutorial/introduction-to-these-tutorials/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t2",
                title: "Variables & data types",
                description: "int, float, double, char, bool, strings, constants and type basics.",
                xp: 20,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t3",
                title: "Operators & expressions",
                description: "Arithmetic, comparison, logical, assignment and increment operators.",
                xp: 20,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t4",
                title: "Input / Output",
                description: "cin, cout, formatting and basic console programs.",
                xp: 20,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t5",
                title: "Conditions",
                description: "if, else, else-if, switch and logical decision making.",
                xp: 20,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t6",
                title: "Loops",
                description: "for, while, do-while, break and continue.",
                xp: 20,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t7",
                title: "Functions",
                description: "Parameters, return values, scope, overloading and reusable code.",
                xp: 25,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t8",
                title: "Arrays",
                description: "One-dimensional and multidimensional arrays plus traversal.",
                xp: 25,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t9",
                title: "Strings",
                description: "std::string, string operations, input and manipulation.",
                xp: 25,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t10",
                title: "Pointers",
                description: "Understand addresses, pointers, dereferencing and memory basics.",
                xp: 30,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t11",
                title: "References",
                description: "Understand references, pass-by-reference and when they are useful.",
                xp: 25,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t12",
                title: "Structs & user-defined types",
                description: "Group related data and understand custom data structures.",
                xp: 20,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t13",
                title: "OOP fundamentals",
                description: "Classes, objects, constructors, encapsulation and member functions.",
                xp: 35,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t14",
                title: "Inheritance & polymorphism",
                description: "Understand inheritance, virtual functions and polymorphism.",
                xp: 35,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p2-t15",
                title: "C++ STL",
                description: "vector, string, map, set, stack, queue, algorithms and iterators.",
                xp: 40,
                resource: "https://en.cppreference.com/w/cpp/container",
                resourceName: "cppreference"
            },

            {
                id: "p2-t16",
                title: "Build C++ mini projects",
                description: "Build multiple console projects without copying code.",
                xp: 50,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            }

        ]
    },


    {
        id: "p3",
        number: "03",
        title: "DSA + Problem Solving",
        short: "Turn programming knowledge into problem-solving ability.",
        tasks: [

            {
                id: "p3-t1",
                title: "Time & space complexity",
                description: "Big-O, Big-Theta basics and complexity analysis.",
                xp: 30,
                resource: "https://www.bigocheatsheet.com/",
                resourceName: "Big-O Cheat Sheet"
            },

            {
                id: "p3-t2",
                title: "Arrays DSA",
                description: "Traversal, prefix sums, two pointers and common array patterns.",
                xp: 35,
                resource: "https://cp-algorithms.com/",
                resourceName: "CP Algorithms"
            },

            {
                id: "p3-t3",
                title: "Strings DSA",
                description: "Frequency counting, pattern techniques and string problems.",
                xp: 35,
                resource: "https://cp-algorithms.com/string/",
                resourceName: "CP Algorithms"
            },

            {
                id: "p3-t4",
                title: "Searching",
                description: "Linear search, binary search and search-space thinking.",
                xp: 35,
                resource: "https://cp-algorithms.com/num_methods/binary_search.html",
                resourceName: "CP Algorithms"
            },

            {
                id: "p3-t5",
                title: "Sorting",
                description: "Bubble, selection, insertion, merge, quick sort and complexity.",
                xp: 35,
                resource: "https://cp-algorithms.com/",
                resourceName: "CP Algorithms"
            },

            {
                id: "p3-t6",
                title: "Linked Lists",
                description: "Singly, doubly linked lists and common interview patterns.",
                xp: 40,
                resource: "https://www.geeksforgeeks.org/data-structures/linked-list/",
                resourceName: "GeeksforGeeks"
            },

            {
                id: "p3-t7",
                title: "Stacks & Queues",
                description: "Implement and solve common stack/queue problems.",
                xp: 35,
                resource: "https://www.geeksforgeeks.org/stack-data-structure/",
                resourceName: "GeeksforGeeks"
            },

            {
                id: "p3-t8",
                title: "Hashing",
                description: "Hash maps, sets, frequency counting and lookup optimization.",
                xp: 40,
                resource: "https://cp-algorithms.com/data_structures/disjoint_set_union.html",
                resourceName: "CP Algorithms"
            },

            {
                id: "p3-t9",
                title: "Recursion & backtracking",
                description: "Recursive thinking, base cases, recursion trees and backtracking.",
                xp: 45,
                resource: "https://cp-algorithms.com/",
                resourceName: "CP Algorithms"
            },

            {
                id: "p3-t10",
                title: "Trees & BST",
                description: "Binary trees, traversal, BST operations and recursion.",
                xp: 50,
                resource: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
                resourceName: "GeeksforGeeks"
            },

            {
                id: "p3-t11",
                title: "Heaps / Priority Queue",
                description: "Heap operations and priority-based problem solving.",
                xp: 45,
                resource: "https://cp-algorithms.com/",
                resourceName: "CP Algorithms"
            },

            {
                id: "p3-t12",
                title: "Graphs",
                description: "BFS, DFS, representations, shortest paths and graph thinking.",
                xp: 55,
                resource: "https://cp-algorithms.com/graph/breadth-first-search.html",
                resourceName: "CP Algorithms"
            },

            {
                id: "p3-t13",
                title: "Dynamic Programming",
                description: "Memoization, tabulation and recognizing DP patterns.",
                xp: 60,
                resource: "https://cp-algorithms.com/dynamic_programming/intro-to-dp.html",
                resourceName: "CP Algorithms"
            },

            {
                id: "p3-t14",
                title: "Solve 100+ DSA problems",
                description: "Build consistency across easy, medium and selected hard problems.",
                xp: 100,
                resource: "https://leetcode.com/problemset/",
                resourceName: "LeetCode"
            }

        ]
    },


    {
        id: "p4",
        number: "04",
        title: "Web Development",
        short: "HTML → CSS → JavaScript → React.",
        tasks: [

            {
                id: "p4-t1",
                title: "HTML fundamentals",
                description: "Document structure, semantic elements, links, images and forms.",
                xp: 30,
                resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content",
                resourceName: "MDN HTML"
            },

            {
                id: "p4-t2",
                title: "HTML forms & accessibility",
                description: "Forms, labels, inputs, semantic markup and accessibility basics.",
                xp: 30,
                resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms",
                resourceName: "MDN Forms"
            },

            {
                id: "p4-t3",
                title: "CSS fundamentals",
                description: "Selectors, box model, colors, typography and spacing.",
                xp: 30,
                resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics",
                resourceName: "MDN CSS"
            },

            {
                id: "p4-t4",
                title: "Flexbox",
                description: "Build modern one-dimensional layouts.",
                xp: 30,
                resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox",
                resourceName: "MDN Flexbox"
            },

            {
                id: "p4-t5",
                title: "CSS Grid",
                description: "Build responsive two-dimensional layouts.",
                xp: 30,
                resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids",
                resourceName: "MDN CSS Grid"
            },

            {
                id: "p4-t6",
                title: "Responsive design",
                description: "Media queries, mobile-first design and responsive interfaces.",
                xp: 30,
                resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
                resourceName: "MDN Responsive Design"
            },

            {
                id: "p4-t7",
                title: "CSS animations & transitions",
                description: "Transitions, transforms and keyframe animations.",
                xp: 25,
                resource: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations",
                resourceName: "MDN CSS Animations"
            },

            {
                id: "p4-t8",
                title: "JavaScript fundamentals",
                description: "Variables, types, operators, conditions and loops.",
                xp: 40,
                resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting",
                resourceName: "MDN JavaScript"
            },

            {
                id: "p4-t9",
                title: "Functions, arrays & objects",
                description: "Core JavaScript data structures and reusable functions.",
                xp: 40,
                resource: "https://javascript.info/",
                resourceName: "JavaScript.info"
            },

            {
                id: "p4-t10",
                title: "DOM manipulation",
                description: "Select elements, modify UI, create elements and respond to events.",
                xp: 40,
                resource: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
                resourceName: "MDN DOM"
            },

            {
                id: "p4-t11",
                title: "ES6+",
                description: "let/const, destructuring, spread, arrow functions, modules and modern syntax.",
                xp: 40,
                resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                resourceName: "MDN JavaScript Guide"
            },

            {
                id: "p4-t12",
                title: "Promises + async/await",
                description: "Understand asynchronous JavaScript and promise-based workflows.",
                xp: 45,
                resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS",
                resourceName: "MDN Async JavaScript"
            },

            {
                id: "p4-t13",
                title: "Fetch + APIs",
                description: "Consume REST APIs from frontend JavaScript.",
                xp: 45,
                resource: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
                resourceName: "MDN Fetch API"
            },

            {
                id: "p4-t14",
                title: "React fundamentals",
                description: "Components, JSX, props, state and component thinking.",
                xp: 50,
                resource: "https://react.dev/learn",
                resourceName: "React Learn"
            },

            {
                id: "p4-t15",
                title: "React Hooks",
                description: "useState, useEffect and core hooks.",
                xp: 50,
                resource: "https://react.dev/reference/react",
                resourceName: "React Reference"
            },

            {
                id: "p4-t16",
                title: "React routing + forms",
                description: "Multi-page SPA navigation, forms and validation.",
                xp: 50,
                resource: "https://reactrouter.com/",
                resourceName: "React Router"
            },

            {
                id: "p4-t17",
                title: "Build a serious React project",
                description: "Create a polished responsive application from scratch.",
                xp: 100,
                resource: "https://react.dev/learn",
                resourceName: "React Learn"
            }

        ]
    },


    {
        id: "p5",
        number: "05",
        title: "Backend + Databases",
        short: "Turn frontend applications into real software.",
        tasks: [

            {
                id: "p5-t1",
                title: "Node.js fundamentals",
                description: "Understand Node runtime, modules, npm and server-side JavaScript.",
                xp: 40,
                resource: "https://nodejs.org/en/learn",
                resourceName: "Node.js Learn"
            },

            {
                id: "p5-t2",
                title: "npm + packages",
                description: "Install dependencies, package.json, scripts and semantic versions.",
                xp: 25,
                resource: "https://docs.npmjs.com/",
                resourceName: "npm Docs"
            },

            {
                id: "p5-t3",
                title: "Express.js",
                description: "Build HTTP servers, routes and middleware.",
                xp: 45,
                resource: "https://expressjs.com/en/starter/installing.html",
                resourceName: "Express Docs"
            },

            {
                id: "p5-t4",
                title: "REST APIs",
                description: "HTTP methods, status codes, resources and API architecture.",
                xp: 45,
                resource: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
                resourceName: "MDN REST"
            },

            {
                id: "p5-t5",
                title: "PostgreSQL fundamentals",
                description: "Relational databases, tables, rows and basic database concepts.",
                xp: 40,
                resource: "https://www.postgresql.org/docs/current/tutorial.html",
                resourceName: "PostgreSQL Tutorial"
            },

            {
                id: "p5-t6",
                title: "SQL CRUD",
                description: "SELECT, INSERT, UPDATE and DELETE.",
                xp: 35,
                resource: "https://www.postgresql.org/docs/current/tutorial-sql.html",
                resourceName: "PostgreSQL SQL"
            },

            {
                id: "p5-t7",
                title: "WHERE / ORDER BY / GROUP BY",
                description: "Filter, sort and aggregate relational data.",
                xp: 35,
                resource: "https://www.postgresql.org/docs/current/tutorial-sql.html",
                resourceName: "PostgreSQL SQL"
            },

            {
                id: "p5-t8",
                title: "SQL JOINs",
                description: "INNER JOIN, LEFT JOIN and relational data modeling.",
                xp: 45,
                resource: "https://www.postgresql.org/docs/current/tutorial-join.html",
                resourceName: "PostgreSQL JOIN Tutorial"
            },

            {
                id: "p5-t9",
                title: "Indexes",
                description: "Understand indexes and why they improve query performance.",
                xp: 40,
                resource: "https://www.postgresql.org/docs/current/indexes.html",
                resourceName: "PostgreSQL Indexes"
            },

            {
                id: "p5-t10",
                title: "Constraints + normalization",
                description: "Primary keys, foreign keys, unique constraints and data design.",
                xp: 40,
                resource: "https://www.postgresql.org/docs/current/ddl-constraints.html",
                resourceName: "PostgreSQL Constraints"
            },

            {
                id: "p5-t11",
                title: "Transactions + ACID",
                description: "Understand atomicity, consistency, isolation and durability.",
                xp: 45,
                resource: "https://www.postgresql.org/docs/current/tutorial-transactions.html",
                resourceName: "PostgreSQL Transactions"
            },

            {
                id: "p5-t12",
                title: "Authentication",
                description: "Sessions, JWT, password hashing and authentication architecture.",
                xp: 60,
                resource: "https://developer.mozilla.org/en-US/docs/Web/Security",
                resourceName: "MDN Web Security"
            },

            {
                id: "p5-t13",
                title: "Authorization",
                description: "Roles, permissions and access control.",
                xp: 45,
                resource: "https://developer.mozilla.org/en-US/docs/Web/Security",
                resourceName: "MDN Security"
            },

            {
                id: "p5-t14",
                title: "MongoDB basics",
                description: "Understand NoSQL documents and when MongoDB is appropriate.",
                xp: 35,
                resource: "https://www.mongodb.com/docs/manual/",
                resourceName: "MongoDB Docs"
            },

            {
                id: "p5-t15",
                title: "Build a full-stack application",
                description: "React frontend + Node backend + PostgreSQL database + auth.",
                xp: 120,
                resource: "https://fullstackopen.com/en/",
                resourceName: "Full Stack Open"
            }

        ]
    },


    {
        id: "p6",
        number: "06",
        title: "Git + GitHub + Linux + Developer Workflow",
        short: "Work like a real developer.",
        tasks: [

            {
                id: "p6-t1",
                title: "Git fundamentals",
                description: "Repositories, commits and version control concepts.",
                xp: 30,
                resource: "https://git-scm.com/book/en/v2",
                resourceName: "Pro Git"
            },

            {
                id: "p6-t2",
                title: "git init / add / commit",
                description: "Create repositories and make meaningful commits.",
                xp: 25,
                resource: "https://git-scm.com/docs",
                resourceName: "Git Documentation"
            },

            {
                id: "p6-t3",
                title: "push / pull / clone",
                description: "Work with remote repositories.",
                xp: 25,
                resource: "https://skills.github.com/",
                resourceName: "GitHub Skills"
            },

            {
                id: "p6-t4",
                title: "Branches + merge",
                description: "Work safely with branches and merge changes.",
                xp: 35,
                resource: "https://skills.github.com/",
                resourceName: "GitHub Skills"
            },

            {
                id: "p6-t5",
                title: "Rebase basics",
                description: "Understand when and why rebase is useful.",
                xp: 35,
                resource: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing",
                resourceName: "Pro Git Rebasing"
            },

            {
                id: "p6-t6",
                title: ".gitignore + repository hygiene",
                description: "Keep secrets, dependencies and generated files out of repositories.",
                xp: 25,
                resource: "https://git-scm.com/docs/gitignore",
                resourceName: "Gitignore Docs"
            },

            {
                id: "p6-t7",
                title: "Professional README",
                description: "Write project overview, features, setup, screenshots and roadmap.",
                xp: 30,
                resource: "https://www.makeareadme.com/",
                resourceName: "Make a README"
            },

            {
                id: "p6-t8",
                title: "GitHub Issues + Pull Requests",
                description: "Understand collaborative GitHub workflows.",
                xp: 35,
                resource: "https://skills.github.com/",
                resourceName: "GitHub Skills"
            },

            {
                id: "p6-t9",
                title: "GitHub Actions basics",
                description: "Understand CI workflows and automated checks.",
                xp: 45,
                resource: "https://docs.github.com/actions",
                resourceName: "GitHub Actions"
            },

            {
                id: "p6-t10",
                title: "Linux terminal basics",
                description: "ls, cd, pwd, mkdir, touch, cp, mv, rm, cat and grep.",
                xp: 35,
                resource: "https://ubuntu.com/tutorials/command-line-for-beginners",
                resourceName: "Ubuntu Command Line"
            },

            {
                id: "p6-t11",
                title: "Permissions + processes",
                description: "chmod, permissions, processes and basic Linux administration.",
                xp: 35,
                resource: "https://ubuntu.com/tutorials/command-line-for-beginners",
                resourceName: "Ubuntu Command Line"
            },

            {
                id: "p6-t12",
                title: "SSH",
                description: "Understand SSH keys and secure remote connections.",
                xp: 35,
                resource: "https://docs.github.com/authentication/connecting-to-github-with-ssh",
                resourceName: "GitHub SSH Guide"
            }

        ]
    },


    {
        id: "p7",
        number: "07",
        title: "CS Fundamentals",
        short: "Understand what is happening underneath your code.",
        tasks: [

            {
                id: "p7-t1",
                title: "Operating Systems",
                description: "Processes, threads, memory, scheduling and file systems.",
                xp: 50,
                resource: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
                resourceName: "OSTEP"
            },

            {
                id: "p7-t2",
                title: "Memory management",
                description: "Stack, heap, virtual memory and memory allocation.",
                xp: 45,
                resource: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
                resourceName: "OSTEP"
            },

            {
                id: "p7-t3",
                title: "OOP concepts revision",
                description: "Encapsulation, inheritance, polymorphism and abstraction.",
                xp: 35,
                resource: "https://www.learncpp.com/",
                resourceName: "LearnCpp"
            },

            {
                id: "p7-t4",
                title: "DBMS fundamentals",
                description: "Database architecture, relational models, transactions and indexing.",
                xp: 50,
                resource: "https://www.postgresql.org/docs/current/tutorial.html",
                resourceName: "PostgreSQL Docs"
            },

            {
                id: "p7-t5",
                title: "Computer Networks",
                description: "IP, DNS, HTTP, HTTPS, TCP, UDP and ports.",
                xp: 55,
                resource: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
                resourceName: "MDN HTTP"
            },

            {
                id: "p7-t6",
                title: "Web security basics",
                description: "Cookies, CORS, authentication and common browser security concepts.",
                xp: 50,
                resource: "https://developer.mozilla.org/en-US/docs/Web/Security",
                resourceName: "MDN Security"
            },

            {
                id: "p7-t7",
                title: "Networking practical understanding",
                description: "Use browser DevTools and terminal tools to inspect real network traffic.",
                xp: 40,
                resource: "https://developer.chrome.com/docs/devtools/network/",
                resourceName: "Chrome Network DevTools"
            }

        ]
    },


    {
        id: "p8",
        number: "08",
        title: "Python + Automation + AI",
        short: "Add Python and modern AI engineering skills.",
        tasks: [

            {
                id: "p8-t1",
                title: "Python fundamentals",
                description: "Variables, types, conditions, loops, functions and modules.",
                xp: 45,
                resource: "https://docs.python.org/3/tutorial/",
                resourceName: "Python Tutorial"
            },

            {
                id: "p8-t2",
                title: "Python data structures",
                description: "Lists, tuples, dictionaries, sets and comprehensions.",
                xp: 40,
                resource: "https://docs.python.org/3/tutorial/datastructures.html",
                resourceName: "Python Data Structures"
            },

            {
                id: "p8-t3",
                title: "Python automation",
                description: "Build scripts that automate repetitive computer tasks.",
                xp: 45,
                resource: "https://docs.python.org/3/library/",
                resourceName: "Python Standard Library"
            },

            {
                id: "p8-t4",
                title: "HTTP requests in Python",
                description: "Consume APIs and automate web/API workflows.",
                xp: 35,
                resource: "https://requests.readthedocs.io/",
                resourceName: "Requests"
            },

            {
                id: "p8-t5",
                title: "NumPy basics",
                description: "Understand numerical arrays and vectorized operations.",
                xp: 30,
                resource: "https://numpy.org/learn/",
                resourceName: "NumPy Learn"
            },

            {
                id: "p8-t6",
                title: "Pandas basics",
                description: "Load, clean, transform and analyze tabular data.",
                xp: 35,
                resource: "https://pandas.pydata.org/docs/getting_started/index.html",
                resourceName: "Pandas Getting Started"
            },

            {
                id: "p8-t7",
                title: "LLM fundamentals",
                description: "Understand tokens, context windows, inference and model behavior.",
                xp: 45,
                resource: "https://huggingface.co/learn",
                resourceName: "Hugging Face Learn"
            },

            {
                id: "p8-t8",
                title: "Prompt engineering",
                description: "Write structured prompts and evaluate model outputs.",
                xp: 30,
                resource: "https://platform.openai.com/docs/guides/prompt-engineering",
                resourceName: "OpenAI Prompt Engineering"
            },

            {
                id: "p8-t9",
                title: "AI APIs",
                description: "Integrate an LLM API into a real application.",
                xp: 50,
                resource: "https://platform.openai.com/docs/overview",
                resourceName: "OpenAI API Docs"
            },

            {
                id: "p8-t10",
                title: "Embeddings + vector search",
                description: "Understand semantic search and vector representations.",
                xp: 50,
                resource: "https://huggingface.co/learn/nlp-course/chapter5/6",
                resourceName: "Hugging Face NLP"
            },

            {
                id: "p8-t11",
                title: "RAG architecture",
                description: "Build retrieval-augmented generation with a knowledge source.",
                xp: 60,
                resource: "https://huggingface.co/learn",
                resourceName: "Hugging Face Learn"
            },

            {
                id: "p8-t12",
                title: "AI-powered project",
                description: "Build a real application using AI as one component of the product.",
                xp: 100,
                resource: "https://huggingface.co/learn",
                resourceName: "Hugging Face Learn"
            }

        ]
    },


    {
        id: "p9",
        number: "09",
        title: "Cloud + Docker + Deployment",
        short: "Learn how software reaches real users.",
        tasks: [

            {
                id: "p9-t1",
                title: "Deployment fundamentals",
                description: "Understand build, deploy, domains, environment variables and production.",
                xp: 35,
                resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
                resourceName: "MDN Web Development"
            },

            {
                id: "p9-t2",
                title: "Docker fundamentals",
                description: "Images, containers, Dockerfiles and basic container workflows.",
                xp: 45,
                resource: "https://docs.docker.com/get-started/",
                resourceName: "Docker Get Started"
            },

            {
                id: "p9-t3",
                title: "Docker Compose",
                description: "Run multiple services together.",
                xp: 40,
                resource: "https://docs.docker.com/compose/",
                resourceName: "Docker Compose"
            },

            {
                id: "p9-t4",
                title: "AWS fundamentals",
                description: "Understand core cloud concepts and AWS architecture.",
                xp: 40,
                resource: "https://aws.amazon.com/getting-started/",
                resourceName: "AWS Getting Started"
            },

            {
                id: "p9-t5",
                title: "EC2",
                description: "Understand virtual servers and basic deployment.",
                xp: 40,
                resource: "https://docs.aws.amazon.com/ec2/",
                resourceName: "AWS EC2"
            },

            {
                id: "p9-t6",
                title: "S3",
                description: "Object storage and common cloud storage use cases.",
                xp: 30,
                resource: "https://docs.aws.amazon.com/s3/",
                resourceName: "AWS S3"
            },

            {
                id: "p9-t7",
                title: "IAM basics",
                description: "Understand cloud identities, permissions and least privilege.",
                xp: 35,
                resource: "https://docs.aws.amazon.com/iam/",
                resourceName: "AWS IAM"
            },

            {
                id: "p9-t8",
                title: "CI/CD fundamentals",
                description: "Automate testing, builds and deployment.",
                xp: 45,
                resource: "https://docs.github.com/actions",
                resourceName: "GitHub Actions"
            }

        ]
    },


    {
        id: "p10",
        number: "10",
        title: "Cybersecurity + Mobile + Product Skills",
        short: "Expand into security, mobile and product building.",
        tasks: [

            {
                id: "p10-t1",
                title: "OWASP Top 10",
                description: "Understand common web application security risks.",
                xp: 45,
                resource: "https://owasp.org/www-project-top-ten/",
                resourceName: "OWASP Top 10"
            },

            {
                id: "p10-t2",
                title: "Secure authentication",
                description: "Understand common authentication weaknesses and secure patterns.",
                xp: 45,
                resource: "https://developer.mozilla.org/en-US/docs/Web/Security",
                resourceName: "MDN Security"
            },

            {
                id: "p10-t3",
                title: "React Native fundamentals",
                description: "Use React knowledge to build native mobile interfaces.",
                xp: 50,
                resource: "https://reactnative.dev/docs/getting-started",
                resourceName: "React Native"
            },

            {
                id: "p10-t4",
                title: "Expo fundamentals",
                description: "Build and run React Native applications using Expo.",
                xp: 40,
                resource: "https://docs.expo.dev/",
                resourceName: "Expo Docs"
            },

            {
                id: "p10-t5",
                title: "Build KACHEHRI foundation",
                description: "Apply React Native + Expo knowledge to your India-wide university platform.",
                xp: 100,
                resource: "https://docs.expo.dev/",
                resourceName: "Expo Docs"
            },

            {
                id: "p10-t6",
                title: "UI/UX fundamentals",
                description: "Typography, spacing, hierarchy, responsive design and user flows.",
                xp: 35,
                resource: "https://www.figma.com/resources/learn-design/",
                resourceName: "Figma Learn Design"
            },

            {
                id: "p10-t7",
                title: "Figma basics",
                description: "Create basic wireframes, UI layouts and prototypes.",
                xp: 30,
                resource: "https://help.figma.com/hc/en-us",
                resourceName: "Figma Help"
            },

            {
                id: "p10-t8",
                title: "Product thinking",
                description: "Problem discovery, users, MVPs, feedback and iteration.",
                xp: 30,
                resource: "https://www.productplan.com/glossary/minimum-viable-product/",
                resourceName: "MVP Guide"
            }

        ]
    },


    {
        id: "p11",
        number: "11",
        title: "Corporate Productivity",
        short: "Professional tools that support your engineering career.",
        tasks: [

            {
                id: "p11-t1",
                title: "Excel fundamentals",
                description: "Tables, sorting, filtering and basic formatting.",
                xp: 20,
                resource: "https://support.microsoft.com/excel",
                resourceName: "Microsoft Excel Support"
            },

            {
                id: "p11-t2",
                title: "Excel formulas",
                description: "IF, SUMIF, SUMIFS, COUNTIF, COUNTIFS and XLOOKUP.",
                xp: 30,
                resource: "https://support.microsoft.com/excel",
                resourceName: "Microsoft Excel Support"
            },

            {
                id: "p11-t3",
                title: "Pivot tables + charts",
                description: "Summarize and visualize structured data.",
                xp: 30,
                resource: "https://support.microsoft.com/excel",
                resourceName: "Microsoft Excel Support"
            },

            {
                id: "p11-t4",
                title: "Word professional documents",
                description: "Headings, formatting, tables, page layout and PDF export.",
                xp: 15,
                resource: "https://support.microsoft.com/word",
                resourceName: "Microsoft Word Support"
            },

            {
                id: "p11-t5",
                title: "PowerPoint fundamentals",
                description: "Build clean technical presentations and explain projects.",
                xp: 20,
                resource: "https://support.microsoft.com/powerpoint",
                resourceName: "Microsoft PowerPoint Support"
            },

            {
                id: "p11-t6",
                title: "Technical communication",
                description: "Explain technical problems clearly in writing and conversation.",
                xp: 30,
                resource: "https://developers.google.com/tech-writing",
                resourceName: "Google Technical Writing"
            }

        ]
    },


    {
        id: "p12",
        number: "12",
        title: "Interview + System Design + Advanced Engineering",
        short: "Turn your skills into employability.",
        tasks: [

            {
                id: "p12-t1",
                title: "DSA interview revision",
                description: "Revise core patterns and solve problems under time constraints.",
                xp: 70,
                resource: "https://leetcode.com/",
                resourceName: "LeetCode"
            },

            {
                id: "p12-t2",
                title: "OS interview revision",
                description: "Processes, threads, memory, scheduling and deadlocks.",
                xp: 50,
                resource: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
                resourceName: "OSTEP"
            },

            {
                id: "p12-t3",
                title: "DBMS interview revision",
                description: "SQL, normalization, indexing, transactions and ACID.",
                xp: 50,
                resource: "https://www.postgresql.org/docs/current/tutorial.html",
                resourceName: "PostgreSQL"
            },

            {
                id: "p12-t4",
                title: "Networking interview revision",
                description: "HTTP, HTTPS, DNS, TCP/IP, APIs and common networking questions.",
                xp: 50,
                resource: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
                resourceName: "MDN HTTP"
            },

            {
                id: "p12-t5",
                title: "System design basics",
                description: "Scalability, caching, load balancing, databases and queues.",
                xp: 60,
                resource: "https://github.com/donnemartin/system-design-primer",
                resourceName: "System Design Primer"
            },

            {
                id: "p12-t6",
                title: "Portfolio project #1",
                description: "Build a serious full-stack application with production-quality documentation.",
                xp: 150,
                resource: "https://fullstackopen.com/en/",
                resourceName: "Full Stack Open"
            },

            {
                id: "p12-t7",
                title: "Portfolio project #2",
                description: "Build another application solving a different real-world problem.",
                xp: 150,
                resource: "https://fullstackopen.com/en/",
                resourceName: "Full Stack Open"
            },

            {
                id: "p12-t8",
                title: "Portfolio project #3 — AI",
                description: "Build and deploy a useful AI-powered product.",
                xp: 180,
                resource: "https://huggingface.co/learn",
                resourceName: "Hugging Face Learn"
            },

            {
                id: "p12-t9",
                title: "Open-source contribution",
                description: "Find a beginner-friendly issue and make a real contribution.",
                xp: 100,
                resource: "https://goodfirstissue.dev/",
                resourceName: "Good First Issue"
            },

            {
                id: "p12-t10",
                title: "Resume with proof",
                description: "Create a resume that prioritizes measurable projects and real evidence.",
                xp: 50,
                resource: "https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/",
                resourceName: "Harvard Resume Guide"
            },

            {
                id: "p12-t11",
                title: "LinkedIn final optimization",
                description: "Make your profile accurately represent your real engineering journey.",
                xp: 40,
                resource: "https://www.linkedin.com/help/linkedin",
                resourceName: "LinkedIn Help"
            },

            {
                id: "p12-t12",
                title: "Final engineering capstone",
                description: "Build, deploy, document and publicly showcase your strongest project.",
                xp: 250,
                resource: "https://fullstackopen.com/en/",
                resourceName: "Full Stack Open"
            }

        ]
    }

];


/* =========================================================
   STATE
   ========================================================= */

let state = {

    startDate: DEFAULT_START_DATE,

    completed: {},

    activity: [],

    special: {},

    animations: true

};


let currentFilter = "all";
let currentSearch = "";
let selectedTask = null;


/* =========================================================
   LOAD / SAVE
   ========================================================= */

function loadState() {

    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {

        const parsed = JSON.parse(saved);

        state = {
            ...state,
            ...parsed
        };

    } catch (error) {

        console.warn("Could not load saved progress.");

    }

}


function saveState() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
    );

}


/* =========================================================
   HELPERS
   ========================================================= */

function allTasks() {

    return ROADMAP.flatMap(
        phase => phase.tasks.map(task => ({
            ...task,
            phaseId: phase.id,
            phaseNumber: phase.number,
            phaseTitle: phase.title
        }))
    );

}


function getTask(taskId) {

    return allTasks().find(
        task => task.id === taskId
    );

}


function getPhase(phaseId) {

    return ROADMAP.find(
        phase => phase.id === phaseId
    );

}


function completedTasks() {

    return allTasks().filter(
        task => state.completed[task.id]
    );

}


function totalXP() {

    return completedTasks().reduce(
        (sum, task) => sum + task.xp,
        0
    );

}


/* =========================================================
   DAY COUNTER
   ========================================================= */

function getMissionDay() {

    const start = new Date(
        `${state.startDate}T00:00:00`
    );

    const now = new Date();

    start.setHours(0,0,0,0);

    now.setHours(0,0,0,0);

    const difference =
        Math.floor(
            (now - start) /
            (1000 * 60 * 60 * 24)
        );

    return Math.max(1, difference + 1);

}


function formatDate(dateString) {

    const date = new Date(
        `${dateString}T00:00:00`
    );

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


function updateDay() {

    const day = getMissionDay();

    document.getElementById("dayNumber")
        .textContent =
        String(day).padStart(2,"0");

    document.getElementById("todayChip")
        .textContent =
        `DAY ${String(day).padStart(2,"0")}`;

    document.getElementById("daySince")
        .textContent =
        `Since ${formatDate(state.startDate)}`;

    document.getElementById("todayDate")
        .textContent =
        new Date().toLocaleDateString(
            "en-IN",
            {
                weekday: "short",
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );

}


/* =========================================================
   XP + LEVEL
   ========================================================= */

function updateXP() {

    const xp = totalXP();

    const level =
        Math.floor(xp / 100) + 1;

    const xpInLevel =
        xp % 100;

    const xpRemaining =
        100 - xpInLevel;

    document.getElementById("xpCount")
        .textContent = xp;

    document.getElementById("levelNumber")
        .textContent = level;

    document.getElementById("xpNext")
        .textContent = xpRemaining;

}


/* =========================================================
   OVERALL PROGRESS
   ========================================================= */

function updateOverall() {

    const total = allTasks().length;

    const completed = completedTasks().length;

    const percent =
        total === 0
            ? 0
            : Math.round(
                completed / total * 100
            );

    document.getElementById("overallPercent")
        .textContent = percent;

    document.getElementById("overallProgress")
        .style.width = `${percent}%`;

    document.getElementById("completedCount")
        .textContent =
        `${completed} completed`;

    document.getElementById("totalCount")
        .textContent =
        `${total} tasks`;

    document.getElementById("roadmapPercent")
        .textContent = `${percent}%`;

    document.getElementById("activityCompleted")
        .textContent = completed;

}


/* =========================================================
   STREAK
   ========================================================= */

function calculateStreak() {

    const dates = [
        ...new Set(
            state.activity
                .map(item => item.date)
                .filter(Boolean)
        )
    ].sort().reverse();

    if (!dates.length) return 0;

    let streak = 0;

    let current =
        new Date();

    current.setHours(0,0,0,0);

    for (const dateString of dates) {

        const activityDate =
            new Date(
                `${dateString}T00:00:00`
            );

        const difference =
            Math.floor(
                (current - activityDate) /
                (1000 * 60 * 60 * 24)
            );

        if (
            difference === 0 ||
            difference === 1
        ) {

            streak++;

            current = activityDate;

        } else {

            break;

        }

    }

    return streak;

}


function updateStreak() {

    document.getElementById("streakCount")
        .textContent =
        calculateStreak();

}


/* =========================================================
   PHASE PROGRESS
   ========================================================= */

function phaseProgress(phase) {

    const done =
        phase.tasks.filter(
            task => state.completed[task.id]
        ).length;

    return Math.round(
        done / phase.tasks.length * 100
    );

}


/* =========================================================
   PHASE GRID
   ========================================================= */

function renderPhaseGrid() {

    const container =
        document.getElementById("phaseGrid");

    container.innerHTML = "";

    ROADMAP.forEach(phase => {

        const percent =
            phaseProgress(phase);

        const card =
            document.createElement("div");

        card.className = "phase-card";

        card.innerHTML = `

            <div class="phase-card-top">

                <span class="phase-num">
                    PHASE ${phase.number}
                </span>

                <span class="phase-percent">
                    ${percent}%
                </span>

            </div>

            <h4>
                ${phase.title}
            </h4>

            <p>
                ${phase.short}
            </p>

            <div class="mini-progress">
                <span style="width:${percent}%"></span>
            </div>

        `;

        card.addEventListener(
            "click",
            () => {

                openSection("roadmap");

                setTimeout(() => {

                    const target =
                        document.querySelector(
                            `[data-phase="${phase.id}"]`
                        );

                    if (target) {

                        target.classList.add("open");

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }

                }, 50);

            }
        );

        container.appendChild(card);

    });

}


/* =========================================================
   ROADMAP RENDER
   ========================================================= */

function renderRoadmap() {

    const container =
        document.getElementById(
            "roadmapContainer"
        );

    container.innerHTML = "";

    let visibleSomething = false;


    ROADMAP.forEach(phase => {

        const matchingTasks =
            phase.tasks.filter(task => {

                const search =
                    currentSearch.trim().toLowerCase();

                const matchesSearch =
                    !search ||
                    task.title.toLowerCase().includes(search) ||
                    task.description.toLowerCase().includes(search) ||
                    phase.title.toLowerCase().includes(search);

                const completed =
                    !!state.completed[task.id];

                const matchesFilter =
                    currentFilter === "all" ||
                    (
                        currentFilter === "active" &&
                        !completed
                    ) ||
                    (
                        currentFilter === "completed" &&
                        completed
                    );

                return matchesSearch && matchesFilter;

            });


        if (!matchingTasks.length) {
            return;
        }


        visibleSomething = true;


        const phaseElement =
            document.createElement("div");

        phaseElement.className =
            "roadmap-phase";

        phaseElement.dataset.phase =
            phase.id;


        const percent =
            phaseProgress(phase);


        phaseElement.innerHTML = `

            <div class="phase-header">

                <div class="phase-header-left">

                    <div class="phase-badge">
                        ${phase.number}
                    </div>

                    <div>

                        <h3>
                            ${phase.title}
                        </h3>

                        <p>
                            ${phase.short}
                        </p>

                    </div>

                </div>


                <div class="phase-header-right">

                    <span>
                        ${percent}% complete
                    </span>

                    <span class="chevron">
                        ▼
                    </span>

                </div>

            </div>


            <div class="task-list"></div>

        `;


        const header =
            phaseElement.querySelector(
                ".phase-header"
            );


        header.addEventListener(
            "click",
            () => {

                phaseElement.classList.toggle(
                    "open"
                );

            }
        );


        const taskList =
            phaseElement.querySelector(
                ".task-list"
            );


        matchingTasks.forEach(task => {

            const isCompleted =
                !!state.completed[task.id];


            const taskElement =
                document.createElement("div");

            taskElement.className =
                `task ${isCompleted ? "completed" : ""}`;


            taskElement.dataset.task =
                task.id;


            taskElement.innerHTML = `

                <input
                    class="task-check"
                    type="checkbox"
                    ${isCompleted ? "checked" : ""}
                    aria-label="Complete ${escapeHTML(task.title)}"
                >

                <div class="task-info">

                    <div class="task-title">
                        ${escapeHTML(task.title)}
                    </div>

                    <div class="task-description">
                        ${escapeHTML(task.description)}
                    </div>

                </div>

                <span class="task-xp">
                    +${task.xp} XP
                </span>

                <a
                    class="resource-btn"
                    href="${task.resource}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ↗ Resource
                </a>

                <button
                    class="task-details"
                    title="Task details"
                >
                    ⋯
                </button>

            `;


            const checkbox =
                taskElement.querySelector(
                    ".task-check"
                );


            checkbox.addEventListener(
                "change",
                () => {

                    toggleTask(
                        task.id,
                        checkbox.checked
                    );

                }
            );


            const details =
                taskElement.querySelector(
                    ".task-details"
                );


            details.addEventListener(
                "click",
                () => {

                    openTaskModal(task);

                }
            );


            taskList.appendChild(
                taskElement
            );

        });


        container.appendChild(
            phaseElement
        );

    });


    if (!visibleSomething) {

        container.innerHTML = `

            <div class="no-results">
                No matching tasks found.
            </div>

        `;

    }

}


/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   TOGGLE TASK
   ========================================================= */

function toggleTask(
    taskId,
    checked
) {

    const task =
        getTask(taskId);

    if (!task) return;


    if (checked) {

        if (!state.completed[taskId]) {

            state.completed[taskId] = true;

            addActivity(
                "task",
                task
            );

            showToast(
                `Completed: ${task.title} +${task.xp} XP`
            );

        }

    } else {

        delete state.completed[taskId];

        showToast(
            "Task marked active."
        );

    }


    saveState();

    refreshEverything();

}


/* =========================================================
   ACTIVITY
   ========================================================= */

function addActivity(
    type,
    task
) {

    const now =
        new Date();

    const today =
        now.toISOString()
            .split("T")[0];


    state.activity.unshift({

        id:
            `${Date.now()}-${task.id}`,

        type,

        taskId:
            task.id,

        title:
            task.title,

        phase:
            task.phaseTitle,

        date:
            today,

        timestamp:
            now.toISOString()

    });


    state.activity =
        state.activity.slice(
            0,
            100
        );

}


function renderRecentActivity() {

    const container =
        document.getElementById(
            "recentActivity"
        );


    if (!state.activity.length) {

        container.innerHTML = `

            <div class="empty">
                Complete your first task to create activity.
            </div>

        `;

        return;

    }


    const items =
        state.activity.slice(0,5);


    container.innerHTML =
        items.map(item => `

            <div class="timeline-item">

                <div class="timeline-icon">
                    ✓
                </div>

                <div>

                    <strong>
                        ${escapeHTML(item.title)}
                    </strong>

                    <p>
                        ${escapeHTML(item.phase)}
                    </p>

                </div>

                <span class="timeline-time">
                    ${formatActivityTime(item.timestamp)}
                </span>

            </div>

        `).join("");

}


function renderActivityPage() {

    const timeline =
        document.getElementById(
            "activityTimeline"
        );


    const github =
        Object.values(state.special)
            .filter(
                item =>
                    item.category === "github" &&
                    item.checked
            ).length;


    const linkedin =
        Object.values(state.special)
            .filter(
                item =>
                    item.category === "linkedin" &&
                    item.checked
            ).length;


    document.getElementById(
        "githubCount"
    ).textContent = github;


    document.getElementById(
        "linkedinCount"
    ).textContent = linkedin;


    const projectCount =
        state.activity.filter(
            item =>
                item.title.toLowerCase().includes("project")
        ).length;


    document.getElementById(
        "projectCount"
    ).textContent = projectCount;


    if (!state.activity.length) {

        timeline.innerHTML = `

            <div class="empty">
                Your activity timeline is empty.
            </div>

        `;

        return;

    }


    timeline.innerHTML =
        state.activity.map(item => `

            <div class="timeline-item">

                <div class="timeline-icon">
                    ✓
                </div>

                <div>

                    <strong>
                        ${escapeHTML(item.title)}
                    </strong>

                    <p>
                        ${escapeHTML(item.phase)}
                    </p>

                </div>

                <span class="timeline-time">
                    ${formatActivityTime(item.timestamp)}
                </span>

            </div>

        `).join("");

}


function formatActivityTime(timestamp) {

    const date =
        new Date(timestamp);

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short"
        }
    );

}


/* =========================================================
   DAILY FOCUS
   ========================================================= */

function updateDailyFocus() {

    const next =
        allTasks().find(
            task =>
                !state.completed[task.id]
        );


    if (!next) {

        document.getElementById(
            "dailyFocusTitle"
        ).textContent =
            "All roadmap tasks complete.";

        document.getElementById(
            "dailyFocusText"
        ).textContent =
            "You completed the entire roadmap. Now keep shipping real projects.";

        document.getElementById(
            "focusPhase"
        ).textContent =
            "MISSION COMPLETE";

        document.getElementById(
            "nextTaskTitle"
        ).textContent =
            "Build something real.";

        document.getElementById(
            "nextTaskDescription"
        ).textContent =
            "Your roadmap is complete. Start another project or deepen your strongest skill.";

        return;

    }


    document.getElementById(
        "dailyFocusTitle"
    ).textContent =
        next.title;


    document.getElementById(
        "dailyFocusText"
    ).textContent =
        next.description;


    document.getElementById(
        "focusPhase"
    ).textContent =
        `PHASE ${next.phaseNumber}`;


    document.getElementById(
        "nextTaskTitle"
    ).textContent =
        next.title;


    document.getElementById(
        "nextTaskDescription"
    ).textContent =
        next.description;


    document.getElementById(
        "nextTaskBtn"
    ).onclick = () => {

        openSection("roadmap");

        setTimeout(() => {

            const phase =
                document.querySelector(
                    `[data-phase="${next.phaseId}"]`
                );

            if (!phase) return;

            phase.classList.add("open");

            const task =
                phase.querySelector(
                    `[data-task="${next.id}"]`
                );

            if (task) {

                task.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                task.style.outline =
                    "1px solid rgba(167,139,250,.4)";

                setTimeout(() => {

                    task.style.outline = "";

                }, 1500);

            }

        }, 80);

    };

}


/* =========================================================
   TASK MODAL
   ========================================================= */

function openTaskModal(task) {

    selectedTask = task;


    document.getElementById(
        "modalPhase"
    ).textContent =
        `PHASE ${task.phaseNumber} · ${task.phaseTitle}`;


    document.getElementById(
        "modalTitle"
    ).textContent =
        task.title;


    document.getElementById(
        "modalDescription"
    ).textContent =
        task.description;


    document.getElementById(
        "modalXP"
    ).textContent =
        task.xp;


    document.getElementById(
        "modalStatus"
    ).textContent =
        state.completed[task.id]
            ? "COMPLETED"
            : "ACTIVE";


    const resource =
        document.getElementById(
            "modalResource"
        );


    resource.href =
        task.resource;


    resource.textContent =
        `${task.resourceName} ↗`;


    document.getElementById(
        "taskModal"
    ).classList.add("show");

}


function closeTaskModal() {

    document.getElementById(
        "taskModal"
    ).classList.remove("show");

    selectedTask = null;

}


/* =========================================================
   SPECIAL CHECKLIST
   ========================================================= */

function loadSpecialChecks() {

    document
        .querySelectorAll(
            "[data-special]"
        )
        .forEach(input => {

            const saved =
                state.special[input.id];

            input.checked =
                !!saved?.checked;

            input.addEventListener(
                "change",
                () => {

                    state.special[input.id] = {

                        category:
                            input.dataset.special,

                        checked:
                            input.checked

                    };

                    saveState();

                    updateSpecialStats();

                    showToast(
                        input.checked
                            ? "Portfolio proof saved."
                            : "Portfolio item unchecked."
                    );

                }
            );

        });

}


function updateSpecialStats() {

    const github =
        Object.values(state.special)
            .filter(
                item =>
                    item.category === "github" &&
                    item.checked
            ).length;


    const linkedin =
        Object.values(state.special)
            .filter(
                item =>
                    item.category === "linkedin" &&
                    item.checked
            ).length;


    document.getElementById(
        "githubCount"
    ).textContent = github;


    document.getElementById(
        "linkedinCount"
    ).textContent = linkedin;

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function openSection(sectionId) {

    document
        .querySelectorAll(".section")
        .forEach(section => {

            section.classList.remove(
                "active"
            );

        });


    document
        .getElementById(sectionId)
        .classList.add("active");


    document
        .querySelectorAll(".nav-btn")
        .forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.section === sectionId
            );

        });


    const names = {

        overview: "Mission Control",

        roadmap: "Learning Roadmap",

        activity: "Activity Center",

        portfolio: "Public Proof"

    };


    document.getElementById(
        "pageTitle"
    ).textContent =
        names[sectionId] || "Mission Control";


    document.getElementById(
        "crumbCurrent"
    ).textContent =
        sectionId.toUpperCase();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


document
    .querySelectorAll(
        ".nav-btn[data-section]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openSection(
                    button.dataset.section
                );

            }
        );

    });


/* =========================================================
   FILTERS
   ========================================================= */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter")
                    .forEach(btn =>
                        btn.classList.remove(
                            "active"
                        )
                    );

                button.classList.add(
                    "active"
                );

                currentFilter =
                    button.dataset.filter;

                renderRoadmap();

            }
        );

    });


document.getElementById(
    "searchInput"
).addEventListener(
    "input",
    event => {

        currentSearch =
            event.target.value;

        renderRoadmap();

    }
);


/* =========================================================
   SETTINGS
   ========================================================= */

const settingsModal =
    document.getElementById(
        "settingsModal"
    );


document.getElementById(
    "settingsOpen"
).addEventListener(
    "click",
    () => {

        document.getElementById(
            "startDateInput"
        ).value =
            state.startDate;

        document.getElementById(
            "animationToggle"
        ).checked =
            state.animations !== false;

        settingsModal.classList.add(
            "show"
        );

    }
);


document.getElementById(
    "settingsClose"
).addEventListener(
    "click",
    () => {

        settingsModal.classList.remove(
            "show"
        );

    }
);


document.getElementById(
    "saveSettings"
).addEventListener(
    "click",
    () => {

        const newDate =
            document.getElementById(
                "startDateInput"
            ).value;


        if (newDate) {

            state.startDate =
                newDate;

        }


        state.animations =
            document.getElementById(
                "animationToggle"
            ).checked;


        applyAnimationSetting();

        saveState();

        updateDay();

        settingsModal.classList.remove(
            "show"
        );

        showToast(
            "Settings saved."
        );

    }
);


/* =========================================================
   ANIMATION SETTING
   ========================================================= */

function applyAnimationSetting() {

    document.body.classList.toggle(
        "no-animation",
        state.animations === false
    );

}


/* =========================================================
   RESET
   ========================================================= */

document.getElementById(
    "resetBtn"
).addEventListener(
    "click",
    () => {

        const answer =
            confirm(
                "Reset ALL roadmap progress, XP and activity?"
            );


        if (!answer) return;


        state.completed = {};

        state.activity = {};

        state.activity = [];

        state.special = {};

        saveState();

        loadSpecialChecks();

        refreshEverything();

        showToast(
            "Progress reset."
        );

    }
);


/* =========================================================
   EXPORT
   ========================================================= */

document.getElementById(
    "exportBtn"
).addEventListener(
    "click",
    () => {

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
                    type:
                        "application/json"
                }
            );


        const url =
            URL.createObjectURL(
                blob
            );


        const anchor =
            document.createElement(
                "a"
            );


        anchor.href = url;

        anchor.download =
            "cse-os-progress.json";

        anchor.click();


        URL.revokeObjectURL(url);

        showToast(
            "Progress exported."
        );

    }
);


/* =========================================================
   IMPORT
   ========================================================= */

document.getElementById(
    "importInput"
).addEventListener(
    "change",
    event => {

        const file =
            event.target.files[0];

        if (!file) return;


        const reader =
            new FileReader();


        reader.onload =
            () => {

                try {

                    const imported =
                        JSON.parse(
                            reader.result
                        );


                    state = {
                        ...state,
                        ...imported
                    };


                    saveState();

                    loadSpecialChecks();

                    refreshEverything();

                    showToast(
                        "Progress imported."
                    );

                } catch {

                    showToast(
                        "Invalid progress file."
                    );

                }

            };


        reader.readAsText(file);

    }
);


/* =========================================================
   MODAL EVENTS
   ========================================================= */

document.getElementById(
    "modalClose"
).addEventListener(
    "click",
    closeTaskModal
);


document.getElementById(
    "taskModal"
).addEventListener(
    "click",
    event => {

        if (
            event.target.id ===
            "taskModal"
        ) {

            closeTaskModal();

        }

    }
);


document.getElementById(
    "modalComplete"
).addEventListener(
    "click",
    () => {

        if (!selectedTask) return;


        const completed =
            !!state.completed[
                selectedTask.id
            ];


        toggleTask(
            selectedTask.id,
            !completed
        );


        document.getElementById(
            "modalStatus"
        ).textContent =
            !completed
                ? "COMPLETED"
                : "ACTIVE";

    }
);


/* =========================================================
   MAIN BUTTONS
   ========================================================= */

function goToRoadmap() {

    openSection("roadmap");

}


document.getElementById(
    "heroRoadmap"
).addEventListener(
    "click",
    goToRoadmap
);


document.getElementById(
    "viewRoadmap"
).addEventListener(
    "click",
    goToRoadmap
);


document.getElementById(
    "allPhasesBtn"
)?.addEventListener(
    "click",
    goToRoadmap
);


document.getElementById(
    "continueBtn"
).addEventListener(
    "click",
    () => {

        const next =
            allTasks().find(
                task =>
                    !state.completed[
                        task.id
                    ]
            );


        if (!next) {

            goToRoadmap();

            return;

        }


        openSection("roadmap");

        setTimeout(() => {

            const phase =
                document.querySelector(
                    `[data-phase="${next.phaseId}"]`
                );

            if (!phase) return;

            phase.classList.add(
                "open"
            );


            const task =
                phase.querySelector(
                    `[data-task="${next.id}"]`
                );


            if (task) {

                task.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        }, 80);

    }
);


/* =========================================================
   REFRESH EVERYTHING
   ========================================================= */

function refreshEverything() {

    updateDay();

    updateOverall();

    updateXP();

    updateStreak();

    renderPhaseGrid();

    renderRoadmap();

    renderRecentActivity();

    renderActivityPage();

    updateDailyFocus();

    updateSpecialStats();

    applyAnimationSetting();

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.querySelector(
        "p"
    ).textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2200
        );

}


/* =========================================================
   INITIALIZE
   ========================================================= */

loadState();

document.getElementById(
    "startDateInput"
).value =
    state.startDate;

loadSpecialChecks();

refreshEverything();


/* Refresh date/day when tab becomes visible */

setInterval(
    updateDay,
    60 * 1000
);
