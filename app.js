// CSE 365 MASTER ROADMAP DATA WITH SELECTED INDIAN CREATORS & LOCALSTORAGE PERSISTENCE

const ROADMAP_PHASES = [
  {
    phaseId: "phase1",
    phaseLabel: "PHASE 1 — Computer + Programming Foundation",
    range: "Tasks 1 - 37",
    creators: "Gate Smashers, Love Babbar (CodeHelp), CodeWithHarry",
    defaultPlaylist: "https://www.youtube.com/results?search_query=love+babbar+cpp+playlist+complete",
    tasks: [
      { id: 1, title: "Computer kaise kaam karta hai samajhna", creator: "Gate Smashers", query: "how computer works gate smashers" },
      { id: 2, title: "CPU, RAM, SSD/HDD, GPU samajhna", creator: "Gate Smashers", query: "cpu ram memory hierarchy gate smashers" },
      { id: 3, title: "Operating System basics", creator: "Gate Smashers", query: "operating system introduction gate smashers" },
      { id: 4, title: "Files & folders properly manage karna", creator: "CodeWithHarry", query: "file system and directory structure codewithharry" },
      { id: 5, title: "Windows settings & basic troubleshooting", creator: "Knowledge Gate", query: "windows basics troubleshooting for developers" },
      { id: 6, title: "Command Prompt / Terminal basics", creator: "Kunal Kushwaha", query: "command line basics kunal kushwaha" },
      { id: 7, title: "Paths, directories aur file navigation", creator: "Kunal Kushwaha", query: "terminal path directory navigation" },
      { id: 8, title: "Basic terminal commands", creator: "CodeWithHarry", query: "important terminal commands codewithharry" },
      { id: 9, title: "VS Code properly setup karna", creator: "CodeWithHarry", query: "vs code setup for c++ codewithharry" },
      { id: 10, title: "VS Code extensions & shortcuts", creator: "Love Babbar", query: "vs code extensions for c++ love babbar" },
      { id: 11, title: "Programming kya hoti hai", creator: "CodeWithHarry", query: "what is programming in hindi codewithharry" },
      { id: 12, title: "Compiler vs Interpreter", creator: "Gate Smashers", query: "compiler vs interpreter gate smashers" },
      { id: 13, title: "Programming languages ka overview", creator: "Love Babbar", query: "programming language overview love babbar" },
      { id: 14, title: "C++ install & setup", creator: "Love Babbar", query: "c++ installation vs code mingw love babbar lecture 1" },
      { id: 15, title: "C++ syntax basics", creator: "Love Babbar", query: "first c++ program syntax love babbar" },
      { id: 16, title: "Variables & data types", creator: "Love Babbar", query: "variables and data types in c++ love babbar" },
      { id: 17, title: "Input & output", creator: "Love Babbar", query: "c++ input output cin cout love babbar" },
      { id: 18, title: "Operators", creator: "Love Babbar", query: "operators in c++ love babbar" },
      { id: 19, title: "If / Else", creator: "Love Babbar", query: "conditionals if else in c++ love babbar" },
      { id: 20, title: "Nested conditions", creator: "Love Babbar", query: "nested if else in c++ love babbar" },
      { id: 21, title: "Switch case", creator: "Love Babbar", query: "switch case statement in c++ love babbar" },
      { id: 22, title: "For loop", creator: "Love Babbar", query: "for loop in c++ love babbar" },
      { id: 23, title: "While loop", creator: "Love Babbar", query: "while loop in c++ love babbar" },
      { id: 24, title: "Do-while loop", creator: "Love Babbar", query: "do while loop in c++ love babbar" },
      { id: 25, title: "Nested loops", creator: "Love Babbar", query: "pattern printing nested loops in c++ love babbar" },
      { id: 26, title: "Functions", creator: "Love Babbar", query: "functions in c++ love babbar" },
      { id: 27, title: "Function parameters & return values", creator: "Love Babbar", query: "pass by value pass by reference c++ love babbar" },
      { id: 28, title: "Arrays", creator: "Love Babbar", query: "arrays in c++ love babbar lecture 9" },
      { id: 29, title: "Strings", creator: "Love Babbar", query: "character arrays and strings in c++ love babbar" },
      { id: 30, title: "2D arrays", creator: "Love Babbar", query: "2D arrays in c++ love babbar lecture 22" },
      { id: 31, title: "Pointers basics", creator: "Love Babbar", query: "pointers in c++ love babbar lecture 25" },
      { id: 32, title: "References", creator: "Love Babbar", query: "reference variables in c++ love babbar lecture 28" },
      { id: 33, title: "Structures", creator: "CodeWithHarry", query: "structures unions and enums in c++ codewithharry" },
      { id: 34, title: "File handling basics", creator: "CodeWithHarry", query: "file handling in c++ codewithharry" },
      { id: 35, title: "Debugging basics", creator: "Love Babbar", query: "how to debug code in vs code c++ love babbar" },
      { id: 36, title: "Solve 20 basic C++ problems", creator: "Striver (take U forward)", query: "striver basic c++ problems practice" },
      { id: 37, title: "Solve 50 basic C++ problems", creator: "Love Babbar", query: "love babbar c++ basic practice sheet" }
    ]
  },
  {
    phaseId: "phase2",
    phaseLabel: "PHASE 2 — C++ + OOP + Git",
    range: "Tasks 38 - 77",
    creators: "Love Babbar, Striver (take U forward), Kunal Kushwaha",
    defaultPlaylist: "https://www.youtube.com/results?search_query=love+babbar+oops+c%2B%2B",
    tasks: [
      { id: 38, title: "Object-Oriented Programming concept", creator: "Love Babbar", query: "oops in c++ love babbar lecture 42" },
      { id: 39, title: "Classes & Objects", creator: "Love Babbar", query: "classes and objects in c++ love babbar" },
      { id: 40, title: "Constructors", creator: "Love Babbar", query: "constructors and destructors c++ love babbar" },
      { id: 41, title: "Destructors", creator: "Love Babbar", query: "destructors in c++ love babbar" },
      { id: 42, title: "Encapsulation", creator: "Love Babbar", query: "4 pillars of oops encapsulation love babbar lecture 43" },
      { id: 43, title: "Inheritance", creator: "Love Babbar", query: "inheritance in c++ oops love babbar" },
      { id: 44, title: "Polymorphism", creator: "Love Babbar", query: "polymorphism in c++ oops love babbar" },
      { id: 45, title: "Abstraction", creator: "Love Babbar", query: "abstraction in c++ oops love babbar" },
      { id: 46, title: "Function overloading", creator: "CodeWithHarry", query: "function overloading in c++ codewithharry" },
      { id: 47, title: "Operator overloading", creator: "CodeWithHarry", query: "operator overloading in c++ codewithharry" },
      { id: 48, title: "Static members", creator: "Love Babbar", query: "static keyword in c++ oops love babbar" },
      { id: 49, title: "Access modifiers", creator: "Love Babbar", query: "public private protected in c++ love babbar" },
      { id: 50, title: "STL introduction", creator: "Striver (take U forward)", query: "c++ stl in one video striver" },
      { id: 51, title: "Vector", creator: "Striver (take U forward)", query: "vector in c++ stl striver" },
      { id: 52, title: "Pair", creator: "Striver (take U forward)", query: "pair in c++ stl striver" },
      { id: 53, title: "Stack", creator: "Striver (take U forward)", query: "stack in c++ stl striver" },
      { id: 54, title: "Queue", creator: "Striver (take U forward)", query: "queue in c++ stl striver" },
      { id: 55, title: "Set", creator: "Striver (take U forward)", query: "set multiset unordered_set c++ stl striver" },
      { id: 56, title: "Map", creator: "Striver (take U forward)", query: "map unordered_map in c++ stl striver" },
      { id: 57, title: "Iterators", creator: "Striver (take U forward)", query: "iterators in c++ stl striver" },
      { id: 58, title: "Algorithms library", creator: "Striver (take U forward)", query: "algorithms in c++ stl sort binary_search striver" },
      { id: 59, title: "Time complexity basics", creator: "Love Babbar", query: "time and space complexity love babbar" },
      { id: 60, title: "Space complexity basics", creator: "Striver (take U forward)", query: "time and space complexity striver" },
      { id: 61, title: "Git kya hai", creator: "Kunal Kushwaha", query: "what is git and github kunal kushwaha" },
      { id: 62, title: "Git install & setup", creator: "Kunal Kushwaha", query: "git installation and configuration kunal kushwaha" },
      { id: 63, title: "Git configuration", creator: "Kunal Kushwaha", query: "git config username email kunal kushwaha" },
      { id: 64, title: "git init", creator: "Kunal Kushwaha", query: "git init explained kunal kushwaha" },
      { id: 65, title: "git add", creator: "Kunal Kushwaha", query: "git staging area git add kunal kushwaha" },
      { id: 66, title: "git commit", creator: "Kunal Kushwaha", query: "git commit best practices kunal kushwaha" },
      { id: 67, title: "git status", creator: "Kunal Kushwaha", query: "git status and git diff kunal kushwaha" },
      { id: 68, title: "git log", creator: "Kunal Kushwaha", query: "git log command kunal kushwaha" },
      { id: 69, title: "GitHub account setup", creator: "Apna College", query: "github account setup apna college" },
      { id: 70, title: "Repository banana", creator: "Kunal Kushwaha", query: "create github repository kunal kushwaha" },
      { id: 71, title: "Local project GitHub par push karna", creator: "Kunal Kushwaha", query: "git remote add origin git push kunal kushwaha" },
      { id: 72, title: "README likhna", creator: "Kunal Kushwaha", query: "how to write a good github readme kunal kushwaha" },
      { id: 73, title: "Branches", creator: "Kunal Kushwaha", query: "git branching explained kunal kushwaha" },
      { id: 74, title: "Merge", creator: "Kunal Kushwaha", query: "git merge and conflict resolution kunal kushwaha" },
      { id: 75, title: "Pull requests", creator: "Kunal Kushwaha", query: "how to create a pull request on github kunal kushwaha" },
      { id: 76, title: "GitHub profile properly setup karna", creator: "Kunal Kushwaha", query: "make github profile attractive kunal kushwaha" },
      { id: 77, title: "First proper GitHub project upload karna", creator: "Chai aur Code", query: "push project to github chai aur code" }
    ]
  },
  {
    phaseId: "phase3",
    phaseLabel: "PHASE 3 — DSA Mastery",
    range: "Tasks 78 - 125",
    creators: "Striver (take U forward), Love Babbar, Abdul Bari",
    defaultPlaylist: "https://www.youtube.com/results?search_query=take+u+forward+striver+a2z+dsa",
    tasks: [
      { id: 78, title: "DSA kya hota hai", creator: "Striver (take U forward)", query: "why learn dsa striver" },
      { id: 79, title: "Big-O notation", creator: "Abdul Bari", query: "big o notation abdul bari" },
      { id: 80, title: "Arrays revision", creator: "Striver (take U forward)", query: "arrays in dsa striver a2z" },
      { id: 81, title: "Array traversal", creator: "Love Babbar", query: "array traversal and basic questions love babbar" },
      { id: 82, title: "Array searching", creator: "Love Babbar", query: "linear search and binary search love babbar" },
      { id: 83, title: "Array sorting", creator: "Striver (take U forward)", query: "sorting algorithms striver" },
      { id: 84, title: "Two Pointer technique", creator: "Striver (take U forward)", query: "two pointer technique striver" },
      { id: 85, title: "Sliding Window", creator: "Striver (take U forward)", query: "sliding window technique striver" },
      { id: 86, title: "Prefix Sum", creator: "Love Babbar", query: "prefix sum array love babbar" },
      { id: 87, title: "Strings", creator: "Love Babbar", query: "strings dsa questions love babbar" },
      { id: 88, title: "String manipulation", creator: "Striver (take U forward)", query: "strings problems striver a2z" },
      { id: 89, title: "Recursion", creator: "Striver (take U forward)", query: "recursion series striver" },
      { id: 90, title: "Backtracking basics", creator: "Love Babbar", query: "backtracking love babbar" },
      { id: 91, title: "Linked List", creator: "Love Babbar", query: "linked list introduction love babbar lecture 44" },
      { id: 92, title: "Singly Linked List", creator: "Love Babbar", query: "singly linked list implementation love babbar" },
      { id: 93, title: "Doubly Linked List", creator: "Love Babbar", query: "doubly linked list love babbar" },
      { id: 94, title: "Circular Linked List", creator: "Love Babbar", query: "circular linked list love babbar" },
      { id: 95, title: "Stack", creator: "Love Babbar", query: "stack implementation and problems love babbar" },
      { id: 96, title: "Queue", creator: "Love Babbar", query: "queue implementation and problems love babbar" },
      { id: 97, title: "Deque", creator: "Love Babbar", query: "double ended queue deque love babbar" },
      { id: 98, title: "Hashing", creator: "Striver (take U forward)", query: "hashing in dsa striver" },
      { id: 99, title: "HashMap", creator: "Love Babbar", query: "hashmaps in c++ love babbar lecture 78" },
      { id: 100, title: "HashSet", creator: "Striver (take U forward)", query: "unordered set hashset dsa striver" },
      { id: 101, title: "Binary Search", creator: "Striver (take U forward)", query: "binary search full series striver" },
      { id: 102, title: "Binary Search variations", creator: "Striver (take U forward)", query: "binary search on answers striver" },
      { id: 103, title: "Sorting algorithms", creator: "Abdul Bari", query: "sorting algorithms compared abdul bari" },
      { id: 104, title: "Bubble Sort", creator: "Love Babbar", query: "bubble sort love babbar" },
      { id: 105, title: "Selection Sort", creator: "Love Babbar", query: "selection sort love babbar" },
      { id: 106, title: "Insertion Sort", creator: "Love Babbar", query: "insertion sort love babbar" },
      { id: 107, title: "Merge Sort", creator: "Love Babbar", query: "merge sort algorithm love babbar lecture 35" },
      { id: 108, title: "Quick Sort", creator: "Love Babbar", query: "quick sort algorithm love babbar lecture 36" },
      { id: 109, title: "Trees", creator: "Love Babbar", query: "trees introduction love babbar lecture 62" },
      { id: 110, title: "Binary Tree", creator: "Striver (take U forward)", query: "binary tree series striver" },
      { id: 111, title: "Binary Search Tree", creator: "Love Babbar", query: "binary search tree bst love babbar" },
      { id: 112, title: "Tree traversal", creator: "Striver (take U forward)", query: "inorder preorder postorder level order striver" },
      { id: 113, title: "Heap", creator: "Love Babbar", query: "heaps in c++ love babbar lecture 74" },
      { id: 114, title: "Priority Queue", creator: "Striver (take U forward)", query: "priority queue heap striver" },
      { id: 115, title: "Graph basics", creator: "Striver (take U forward)", query: "graph series in hindi striver" },
      { id: 116, title: "BFS", creator: "Striver (take U forward)", query: "bfs of graph striver" },
      { id: 117, title: "DFS", creator: "Striver (take U forward)", query: "dfs of graph striver" },
      { id: 118, title: "Shortest Path basics", creator: "Striver (take U forward)", query: "dijkstra algorithm striver" },
      { id: 119, title: "Dynamic Programming basics", creator: "Striver (take U forward)", query: "dynamic programming series striver" },
      { id: 120, title: "Greedy algorithms", creator: "Striver (take U forward)", query: "greedy algorithms striver" },
      { id: 121, title: "Solve 100 DSA problems", creator: "Striver (take U forward)", query: "striver a2z dsa sheet roadmap" },
      { id: 122, title: "Solve 250 DSA problems", creator: "Love Babbar", query: "love babbar 450 dsa sheet" },
      { id: 123, title: "Start LeetCode", creator: "Striver (take U forward)", query: "how to use leetcode effectively striver" },
      { id: 124, title: "Start CodeChef / Codeforces", creator: "Love Babbar", query: "how to start competitive programming love babbar" },
      { id: 125, title: "Build DSA consistency", creator: "Striver (take U forward)", query: "how to remain consistent in dsa striver" }
    ]
  },
  {
    phaseId: "phase4",
    phaseLabel: "PHASE 4 — Web Development",
    range: "Tasks 126 - 180",
    creators: "Chai aur Code (Hitesh Choudhary), Sheryians Coding School, Thapa Technical",
    defaultPlaylist: "https://www.youtube.com/results?search_query=chai+aur+javascript+hitesh+choudhary",
    tasks: [
      { id: 126, title: "Internet kaise kaam karta hai", creator: "Chai aur Code", query: "how internet works chai aur code" },
      { id: 127, title: "Client vs Server", creator: "Gate Smashers", query: "client server architecture gate smashers" },
      { id: 128, title: "HTTP / HTTPS", creator: "Gate Smashers", query: "http vs https gate smashers" },
      { id: 129, title: "Domain & DNS", creator: "Gate Smashers", query: "domain name system dns gate smashers" },
      { id: 130, title: "Browser basics", creator: "Chai aur Code", query: "browser working mechanism chai aur code" },
      { id: 131, title: "HTML introduction", creator: "Chai aur Code", query: "html introduction chai aur code" },
      { id: 132, title: "HTML document structure", creator: "Chai aur Code", query: "html boiler plate structure chai aur code" },
      { id: 133, title: "Headings & paragraphs", creator: "Chai aur Code", query: "html tags headings paragraphs chai aur code" },
      { id: 134, title: "Links", creator: "Chai aur Code", query: "html anchor tags links chai aur code" },
      { id: 135, title: "Images", creator: "Chai aur Code", query: "html images attributes chai aur code" },
      { id: 136, title: "Lists", creator: "Chai aur Code", query: "html ordered unordered lists chai aur code" },
      { id: 137, title: "Tables", creator: "Chai aur Code", query: "html tables chai aur code" },
      { id: 138, title: "Forms", creator: "Chai aur Code", query: "html forms inputs validation chai aur code" },
      { id: 139, title: "Semantic HTML", creator: "Chai aur Code", query: "semantic html tags chai aur code" },
      { id: 140, title: "Accessibility basics", creator: "Sheryians Coding School", query: "web accessibility basics sheryians" },
      { id: 141, title: "HTML mini project", creator: "Chai aur Code", query: "html project for beginners chai aur code" },
      { id: 142, title: "CSS introduction", creator: "Chai aur Code", query: "css introduction chai aur code" },
      { id: 143, title: "Selectors", creator: "Chai aur Code", query: "css selectors chai aur code" },
      { id: 144, title: "Colors", creator: "Chai aur Code", query: "css colors hex rgb chai aur code" },
      { id: 145, title: "Fonts", creator: "Chai aur Code", query: "css typography google fonts chai aur code" },
      { id: 146, title: "Box model", creator: "Chai aur Code", query: "css box model explained chai aur code" },
      { id: 147, title: "Margin & padding", creator: "Chai aur Code", query: "margin vs padding css chai aur code" },
      { id: 148, title: "Display", creator: "Chai aur Code", query: "css display inline block inline-block chai aur code" },
      { id: 149, title: "Positioning", creator: "Chai aur Code", query: "css position static relative absolute fixed sticky chai aur code" },
      { id: 150, title: "Flexbox", creator: "Chai aur Code", query: "css flexbox complete chai aur code" },
      { id: 151, title: "CSS Grid", creator: "Chai aur Code", query: "css grid tutorial chai aur code" },
      { id: 152, title: "Responsive design", creator: "Sheryians Coding School", query: "responsive web design sheryians" },
      { id: 153, title: "Media queries", creator: "Chai aur Code", query: "css media queries chai aur code" },
      { id: 154, title: "CSS animations", creator: "Sheryians Coding School", query: "css animations and keyframes sheryians" },
      { id: 155, title: "CSS transitions", creator: "Chai aur Code", query: "css transitions transforms chai aur code" },
      { id: 156, title: "Modern UI design", creator: "Sheryians Coding School", query: "modern ui design css glassmorphism sheryians" },
      { id: 157, title: "Build landing page", creator: "Sheryians Coding School", query: "build modern landing page html css sheryians" },
      { id: 158, title: "Build portfolio website", creator: "Chai aur Code", query: "developer portfolio html css chai aur code" },
      { id: 159, title: "JavaScript introduction", creator: "Chai aur Code", query: "chai aur javascript lecture 1 hitesh choudhary" },
      { id: 160, title: "Variables", creator: "Chai aur Code", query: "let var const javascript chai aur code" },
      { id: 161, title: "Data types", creator: "Chai aur Code", query: "datatypes and ecamscript standards chai aur code" },
      { id: 162, title: "Operators", creator: "Chai aur Code", query: "operators and type conversion javascript chai aur code" },
      { id: 163, title: "Conditions", creator: "Chai aur Code", query: "control flow if else in javascript chai aur code" },
      { id: 164, title: "Loops", creator: "Chai aur Code", query: "iterations for while do-while javascript chai aur code" },
      { id: 165, title: "Functions", creator: "Chai aur Code", query: "functions and scope in javascript chai aur code" },
      { id: 166, title: "Arrays", creator: "Chai aur Code", query: "arrays in javascript chai aur code" },
      { id: 167, title: "Objects", creator: "Chai aur Code", query: "objects in depth javascript chai aur code" },
      { id: 168, title: "DOM", creator: "Chai aur Code", query: "dom manipulation in javascript chai aur code" },
      { id: 169, title: "Events", creator: "Chai aur Code", query: "javascript events and event listeners chai aur code" },
      { id: 170, title: "Forms with JavaScript", creator: "Sheryians Coding School", query: "form validation using javascript sheryians" },
      { id: 171, title: "LocalStorage", creator: "Chai aur Code", query: "local storage in javascript chai aur code" },
      { id: 172, title: "JSON", creator: "Chai aur Code", query: "json parse stringify api chai aur code" },
      { id: 173, title: "Fetch API", creator: "Chai aur Code", query: "fetch api in javascript chai aur code" },
      { id: 174, title: "Promises", creator: "Chai aur Code", query: "promises in javascript chai aur code" },
      { id: 175, title: "Async / Await", creator: "Chai aur Code", query: "async await in javascript chai aur code" },
      { id: 176, title: "Error handling", creator: "Chai aur Code", query: "try catch error handling javascript chai aur code" },
      { id: 177, title: "ES6+", creator: "Chai aur Code", query: "es6 features arrow functions destructuring chai aur code" },
      { id: 178, title: "Modules", creator: "Chai aur Code", query: "import export modules javascript chai aur code" },
      { id: 179, title: "JavaScript project #1", creator: "Chai aur Code", query: "javascript projects chai aur code project 1" },
      { id: 180, title: "JavaScript project #2", creator: "Chai aur Code", query: "javascript projects chai aur code project 2" }
    ]
  },
  {
    phaseId: "phase5",
    phaseLabel: "PHASE 5 — React + Full Stack",
    range: "Tasks 181 - 222",
    creators: "Chai aur Code (Hitesh Choudhary), Piyush Garg, Gate Smashers",
    defaultPlaylist: "https://www.youtube.com/results?search_query=chai+aur+react+hitesh+choudhary",
    tasks: [
      { id: 181, title: "React kya hai", creator: "Chai aur Code", query: "why react exists virtual dom chai aur code" },
      { id: 182, title: "React setup", creator: "Chai aur Code", query: "create react app vs vite setup chai aur code" },
      { id: 183, title: "Components", creator: "Chai aur Code", query: "react components jsx chai aur code" },
      { id: 184, title: "JSX", creator: "Chai aur Code", query: "understanding jsx in react chai aur code" },
      { id: 185, title: "Props", creator: "Chai aur Code", query: "props and tailwind integration react chai aur code" },
      { id: 186, title: "State", creator: "Chai aur Code", query: "understanding state in react chai aur code" },
      { id: 187, title: "Events", creator: "Chai aur Code", query: "handling events in react chai aur code" },
      { id: 188, title: "Conditional rendering", creator: "Chai aur Code", query: "conditional rendering in react chai aur code" },
      { id: 189, title: "Lists & keys", creator: "Chai aur Code", query: "lists and keys in react chai aur code" },
      { id: 190, title: "Forms", creator: "Chai aur Code", query: "form handling controlled components react chai aur code" },
      { id: 191, title: "useState", creator: "Chai aur Code", query: "usestate hook in react chai aur code" },
      { id: 192, title: "useEffect", creator: "Chai aur Code", query: "useeffect hook in react chai aur code" },
      { id: 193, title: "useRef", creator: "Chai aur Code", query: "useref hook in react chai aur code" },
      { id: 194, title: "Context API", creator: "Chai aur Code", query: "context api in react chai aur code" },
      { id: 195, title: "React Router", creator: "Chai aur Code", query: "react router crash course chai aur code" },
      { id: 196, title: "API integration", creator: "Chai aur Code", query: "calling apis in react currency converter chai aur code" },
      { id: 197, title: "Loading states", creator: "Piyush Garg", query: "handling loading and error states in react piyush garg" },
      { id: 198, title: "Error states", creator: "Piyush Garg", query: "error boundaries in react piyush garg" },
      { id: 199, title: "Reusable components", creator: "Chai aur Code", query: "building reusable components in react chai aur code" },
      { id: 200, title: "React project #1", creator: "Chai aur Code", query: "password generator react chai aur code" },
      { id: 201, title: "React project #2", creator: "Chai aur Code", query: "todo app react context localstorage chai aur code" },
      { id: 202, title: "Node.js introduction", creator: "Piyush Garg", query: "nodejs crash course piyush garg" },
      { id: 203, title: "npm", creator: "Chai aur Code", query: "npm package json package lock chai aur code" },
      { id: 204, title: "Node modules", creator: "Piyush Garg", query: "node modules and fs module piyush garg" },
      { id: 205, title: "Node HTTP", creator: "Piyush Garg", query: "building http server in nodejs piyush garg" },
      { id: 206, title: "Express.js", creator: "Chai aur Code", query: "express js tutorial chai aur code" },
      { id: 207, title: "Routes", creator: "Chai aur Code", query: "express routing and controllers chai aur code" },
      { id: 208, title: "Middleware", creator: "Chai aur Code", query: "express middleware deep dive chai aur code" },
      { id: 209, title: "REST API", creator: "Chai aur Code", query: "how to design production rest api chai aur code" },
      { id: 210, title: "Controllers", creator: "Chai aur Code", query: "controllers and async handlers chai aur code" },
      { id: 211, title: "Environment variables", creator: "Chai aur Code", query: "dotenv in nodejs chai aur code" },
      { id: 212, title: "MongoDB basics", creator: "Chai aur Code", query: "mongodb mongoose connect chai aur code" },
      { id: 213, title: "SQL basics", creator: "Gate Smashers", query: "sql basics queries gate smashers" },
      { id: 214, title: "Database design", creator: "Gate Smashers", query: "er diagrams database design gate smashers" },
      { id: 215, title: "CRUD", creator: "Chai aur Code", query: "crud operations in nodejs express chai aur code" },
      { id: 216, title: "Authentication", creator: "Chai aur Code", query: "user authentication from scratch chai aur code" },
      { id: 217, title: "Authorization", creator: "Chai aur Code", query: "role based authorization chai aur code" },
      { id: 218, title: "Password security", creator: "Chai aur Code", query: "bcrypt password hashing chai aur code" },
      { id: 219, title: "JWT", creator: "Chai aur Code", query: "json web token jwt access refresh token chai aur code" },
      { id: 220, title: "Backend project", creator: "Chai aur Code", query: "complete mega backend project chai aur code" },
      { id: 221, title: "Full-stack project #1", creator: "Piyush Garg", query: "full stack project react nodejs piyush garg" },
      { id: 222, title: "Full-stack project #2", creator: "Chai aur Code", query: "full stack project chai aur code" }
    ]
  },
  {
    phaseId: "phase6",
    phaseLabel: "PHASE 6 — Professional Development",
    range: "Tasks 223 - 246",
    creators: "Kunal Kushwaha, Piyush Garg, Chai aur Code",
    defaultPlaylist: "https://www.youtube.com/results?search_query=kunal+kushwaha+devops+bootcamp",
    tasks: [
      { id: 223, title: "Linux basics", creator: "Kunal Kushwaha", query: "linux complete tutorial kunal kushwaha" },
      { id: 224, title: "Linux filesystem", creator: "Kunal Kushwaha", query: "linux file hierarchy structure kunal kushwaha" },
      { id: 225, title: "Linux commands", creator: "Kunal Kushwaha", query: "50 linux commands every developer needs kunal kushwaha" },
      { id: 226, title: "Permissions", creator: "Kunal Kushwaha", query: "linux file permissions chmod chown kunal kushwaha" },
      { id: 227, title: "Processes", creator: "Kunal Kushwaha", query: "linux process management kunal kushwaha" },
      { id: 228, title: "Package managers", creator: "Kunal Kushwaha", query: "apt yum pacman package managers linux kunal kushwaha" },
      { id: 229, title: "SSH", creator: "Kunal Kushwaha", query: "ssh key setup remote server kunal kushwaha" },
      { id: 230, title: "Environment variables", creator: "Chai aur Code", query: "environment variables in linux production chai aur code" },
      { id: 231, title: "Docker basics", creator: "Piyush Garg", query: "docker complete crash course piyush garg" },
      { id: 232, title: "Docker images", creator: "Piyush Garg", query: "docker images vs containers piyush garg" },
      { id: 233, title: "Docker containers", creator: "Piyush Garg", query: "docker container lifecycle and commands piyush garg" },
      { id: 234, title: "Dockerfile", creator: "Piyush Garg", query: "how to write dockerfile for nodejs piyush garg" },
      { id: 235, title: "Docker Compose", creator: "Piyush Garg", query: "docker compose multi container app piyush garg" },
      { id: 236, title: "Cloud computing basics", creator: "Kunal Kushwaha", query: "what is cloud computing devops kunal kushwaha" },
      { id: 237, title: "AWS basics", creator: "Piyush Garg", query: "aws crash course for beginners piyush garg" },
      { id: 238, title: "Deploy frontend", creator: "Chai aur Code", query: "deploy react app on vercel render chai aur code" },
      { id: 239, title: "Deploy backend", creator: "Piyush Garg", query: "deploy nodejs backend production piyush garg" },
      { id: 240, title: "Connect database", creator: "Piyush Garg", query: "connect hosted database render railway piyush garg" },
      { id: 241, title: "HTTPS / SSL basics", creator: "Gate Smashers", query: "ssl tls certificates explained gate smashers" },
      { id: 242, title: "CI/CD basics", creator: "Kunal Kushwaha", query: "ci cd pipeline explained kunal kushwaha" },
      { id: 243, title: "GitHub Actions", creator: "Piyush Garg", query: "github actions tutorial piyush garg" },
      { id: 244, title: "Environment management", creator: "Piyush Garg", query: "staging vs production environments piyush garg" },
      { id: 245, title: "Logs & monitoring", creator: "Piyush Garg", query: "logging and error monitoring in nodejs piyush garg" },
      { id: 246, title: "Debugging production issues", creator: "Chai aur Code", query: "how to debug live production bugs chai aur code" }
    ]
  },
  {
    phaseId: "phase7",
    phaseLabel: "PHASE 7 — CS Core + Advanced",
    range: "Tasks 247 - 281",
    creators: "Gate Smashers (Varun Singla), Knowledge Gate",
    defaultPlaylist: "https://www.youtube.com/results?search_query=gate+smashers+operating+system+playlist",
    tasks: [
      { id: 247, title: "Operating Systems fundamentals", creator: "Gate Smashers", query: "operating system full playlist gate smashers" },
      { id: 248, title: "Processes", creator: "Gate Smashers", query: "process management in os gate smashers" },
      { id: 249, title: "Threads", creator: "Gate Smashers", query: "threads user level kernel level gate smashers" },
      { id: 250, title: "CPU scheduling", creator: "Gate Smashers", query: "cpu scheduling algorithms fcfs sjf round robin gate smashers" },
      { id: 251, title: "Memory management", creator: "Gate Smashers", query: "memory management paging segmentation gate smashers" },
      { id: 252, title: "Virtual memory", creator: "Gate Smashers", query: "virtual memory page replacement gate smashers" },
      { id: 253, title: "Deadlocks", creator: "Gate Smashers", query: "deadlock prevention detection bankers algorithm gate smashers" },
      { id: 254, title: "File systems", creator: "Gate Smashers", query: "file allocation methods os gate smashers" },
      { id: 255, title: "DBMS fundamentals", creator: "Gate Smashers", query: "dbms playlist gate smashers" },
      { id: 256, title: "Keys", creator: "Gate Smashers", query: "primary key foreign key candidate key gate smashers" },
      { id: 257, title: "Normalization", creator: "Gate Smashers", query: "normalization 1nf 2nf 3nf bcnf gate smashers" },
      { id: 258, title: "Transactions", creator: "Gate Smashers", query: "transactions in dbms gate smashers" },
      { id: 259, title: "ACID", creator: "Gate Smashers", query: "acid properties dbms gate smashers" },
      { id: 260, title: "Indexing", creator: "Gate Smashers", query: "b tree b plus tree indexing gate smashers" },
      { id: 261, title: "SQL optimization", creator: "Gate Smashers", query: "sql query optimization gate smashers" },
      { id: 262, title: "Computer Networks", creator: "Gate Smashers", query: "computer networks playlist gate smashers" },
      { id: 263, title: "OSI model", creator: "Gate Smashers", query: "osi 7 layer model gate smashers" },
      { id: 264, title: "TCP/IP", creator: "Gate Smashers", query: "tcp ip model gate smashers" },
      { id: 265, title: "IP addressing", creator: "Gate Smashers", query: "ipv4 subnetting classful addressing gate smashers" },
      { id: 266, title: "DNS", creator: "Gate Smashers", query: "dns working explained gate smashers" },
      { id: 267, title: "HTTP", creator: "Gate Smashers", query: "http protocol status codes gate smashers" },
      { id: 268, title: "TCP vs UDP", creator: "Gate Smashers", query: "tcp vs udp 3 way handshake gate smashers" },
      { id: 269, title: "Routing basics", creator: "Gate Smashers", query: "routing algorithms distance vector link state gate smashers" },
      { id: 270, title: "Cybersecurity fundamentals", creator: "CodeWithHarry", query: "cyber security basics for beginners codewithharry" },
      { id: 271, title: "Authentication security", creator: "Chai aur Code", query: "secure authentication patterns chai aur code" },
      { id: 272, title: "Web security basics", creator: "Piyush Garg", query: "web security xss csrf injection piyush garg" },
      { id: 273, title: "OWASP Top 10", creator: "Kunal Kushwaha", query: "owasp top 10 vulnerabilities explained kunal kushwaha" },
      { id: 274, title: "Secure coding", creator: "Chai aur Code", query: "secure coding practices chai aur code" },
      { id: 275, title: "System Design basics", creator: "Gaurav Sen", query: "system design for beginners gaurav sen" },
      { id: 276, title: "Scalability", creator: "Gaurav Sen", query: "horizontal vs vertical scaling gaurav sen" },
      { id: 277, title: "Load balancing", creator: "Gaurav Sen", query: "load balancer working gaurav sen" },
      { id: 278, title: "Caching", creator: "Gaurav Sen", query: "caching and redis architecture gaurav sen" },
      { id: 279, title: "Message queues", creator: "Piyush Garg", query: "message queues rabbitmq kafka piyush garg" },
      { id: 280, title: "Database scaling", creator: "Gaurav Sen", query: "database sharding replication gaurav sen" },
      { id: 281, title: "Microservices basics", creator: "Piyush Garg", query: "monolith vs microservices architecture piyush garg" }
    ]
  },
  {
    phaseId: "phase8",
    phaseLabel: "PHASE 8 — AI / ML",
    range: "Tasks 282 - 315",
    creators: "CodeWithHarry, Krish Naik, CampusX (Nitish Singh)",
    defaultPlaylist: "https://www.youtube.com/results?search_query=codewithharry+python+playlist",
    tasks: [
      { id: 282, title: "Python basics", creator: "CodeWithHarry", query: "python 100 days of code day 1 codewithharry" },
      { id: 283, title: "Python data structures", creator: "CodeWithHarry", query: "lists tuples sets dictionaries python codewithharry" },
      { id: 284, title: "Functions", creator: "CodeWithHarry", query: "functions in python codewithharry" },
      { id: 285, title: "OOP in Python", creator: "CodeWithHarry", query: "oops in python codewithharry" },
      { id: 286, title: "Modules & packages", creator: "CodeWithHarry", query: "pip and virtualenv in python codewithharry" },
      { id: 287, title: "NumPy", creator: "CampusX", query: "numpy complete tutorial campusx" },
      { id: 288, title: "Pandas", creator: "CampusX", query: "pandas for data analysis campusx" },
      { id: 289, title: "Matplotlib", creator: "CampusX", query: "matplotlib and seaborn data visualization campusx" },
      { id: 290, title: "Data cleaning", creator: "Krish Naik", query: "data cleaning feature engineering krish naik" },
      { id: 291, title: "Statistics basics", creator: "Krish Naik", query: "statistics for machine learning krish naik" },
      { id: 292, title: "Probability basics", creator: "Krish Naik", query: "probability for data science krish naik" },
      { id: 293, title: "Machine Learning fundamentals", creator: "Krish Naik", query: "machine learning complete roadmap krish naik" },
      { id: 294, title: "Linear Regression", creator: "CampusX", query: "linear regression math and code campusx" },
      { id: 295, title: "Logistic Regression", creator: "CampusX", query: "logistic regression classification campusx" },
      { id: 296, title: "Decision Trees", creator: "CampusX", query: "decision tree algorithm campusx" },
      { id: 297, title: "Random Forest", creator: "CampusX", query: "random forest ensemble campusx" },
      { id: 298, title: "KNN", creator: "CampusX", query: "k nearest neighbors algorithm campusx" },
      { id: 299, title: "Clustering", creator: "CampusX", query: "k means clustering campusx" },
      { id: 300, title: "Train/Test split", creator: "Krish Naik", query: "train test split cross validation krish naik" },
      { id: 301, title: "Model evaluation", creator: "Krish Naik", query: "confusion matrix accuracy precision recall krish naik" },
      { id: 302, title: "Feature engineering", creator: "Krish Naik", query: "feature engineering masterclass krish naik" },
      { id: 303, title: "Scikit-learn", creator: "CampusX", query: "scikit learn complete tutorial campusx" },
      { id: 304, title: "ML project #1", creator: "Krish Naik", query: "end to end machine learning project krish naik" },
      { id: 305, title: "ML project #2", creator: "CampusX", query: "machine learning project deployment campusx" },
      { id: 306, title: "Neural Networks basics", creator: "Krish Naik", query: "artificial neural networks ann krish naik" },
      { id: 307, title: "Deep Learning basics", creator: "Krish Naik", query: "deep learning complete playlist krish naik" },
      { id: 308, title: "TensorFlow / PyTorch basics", creator: "Krish Naik", query: "pytorch for beginners krish naik" },
      { id: 309, title: "NLP basics", creator: "Krish Naik", query: "natural language processing nlp krish naik" },
      { id: 310, title: "Computer Vision basics", creator: "Krish Naik", query: "computer vision opencv krish naik" },
      { id: 311, title: "Generative AI basics", creator: "Krish Naik", query: "generative ai roadmap krish naik" },
      { id: 312, title: "LLM basics", creator: "CampusX", query: "large language models llm explained campusx" },
      { id: 313, title: "Prompt engineering", creator: "Krish Naik", query: "prompt engineering techniques krish naik" },
      { id: 314, title: "AI API integration", creator: "Chai aur Code", query: "openai gemini api integration nodejs python chai aur code" },
      { id: 315, title: "Build AI-powered app", creator: "Piyush Garg", query: "build ai saas application langchain piyush garg" }
    ]
  },
  {
    phaseId: "phase9",
    phaseLabel: "PHASE 9 — Mobile + Real Apps",
    range: "Tasks 316 - 332",
    creators: "Chai aur Code (Hitesh Choudhary), Thapa Technical",
    defaultPlaylist: "https://www.youtube.com/results?search_query=chai+aur+react+native+hitesh+choudhary",
    tasks: [
      { id: 316, title: "React Native basics", creator: "Chai aur Code", query: "react native crash course chai aur code" },
      { id: 317, title: "Expo", creator: "Chai aur Code", query: "expo setup react native chai aur code" },
      { id: 318, title: "Navigation", creator: "Chai aur Code", query: "react navigation stack tabs chai aur code" },
      { id: 319, title: "Components", creator: "Chai aur Code", query: "core components view text image react native chai aur code" },
      { id: 320, title: "Styling", creator: "Chai aur Code", query: "stylesheet and nativewind react native chai aur code" },
      { id: 321, title: "State management", creator: "Chai aur Code", query: "state management in react native chai aur code" },
      { id: 322, title: "API integration", creator: "Chai aur Code", query: "fetch apis in mobile app react native chai aur code" },
      { id: 323, title: "Authentication", creator: "Chai aur Code", query: "mobile app authentication jwt async storage chai aur code" },
      { id: 324, title: "Local storage", creator: "Chai aur Code", query: "async storage in react native chai aur code" },
      { id: 325, title: "Notifications", creator: "Thapa Technical", query: "push notifications in react native expo thapa technical" },
      { id: 326, title: "Camera / media basics", creator: "Thapa Technical", query: "expo camera image picker thapa technical" },
      { id: 327, title: "Build Android app #1", creator: "Chai aur Code", query: "react native app project 1 chai aur code" },
      { id: 328, title: "Build Android app #2", creator: "Chai aur Code", query: "react native app project 2 chai aur code" },
      { id: 329, title: "Build full-stack mobile app", creator: "Piyush Garg", query: "full stack react native app backend piyush garg" },
      { id: 330, title: "Publish app", creator: "Chai aur Code", query: "how to build apk and publish to play store chai aur code" },
      { id: 331, title: "Learn app analytics", creator: "Piyush Garg", query: "mobile app analytics crashlytics piyush garg" },
      { id: 332, title: "Learn crash/error monitoring", creator: "Piyush Garg", query: "sentry error tracking in mobile apps piyush garg" }
    ]
  },
  {
    phaseId: "phase10",
    phaseLabel: "PHASE 10 — Portfolio + Career",
    range: "Tasks 333 - 365",
    creators: "Kunal Kushwaha, Love Babbar, Striver, Harkirat Singh",
    defaultPlaylist: "https://www.youtube.com/results?search_query=kunal+kushwaha+open+source+resume",
    tasks: [
      { id: 333, title: "Create professional GitHub", creator: "Kunal Kushwaha", query: "how to make github profile stand out kunal kushwaha" },
      { id: 334, title: "Clean GitHub repositories", creator: "Kunal Kushwaha", query: "clean git commit history and repo structure kunal kushwaha" },
      { id: 335, title: "Create developer portfolio", creator: "Chai aur Code", query: "developer portfolio website chai aur code" },
      { id: 336, title: "Create LinkedIn profile", creator: "Kunal Kushwaha", query: "linkedin profile optimization for tech students kunal kushwaha" },
      { id: 337, title: "Add skills properly", creator: "Love Babbar", query: "which skills to add on resume linkedin love babbar" },
      { id: 338, title: "Add projects", creator: "Love Babbar", query: "how to showcase projects on linkedin github love babbar" },
      { id: 339, title: "Add GitHub", creator: "Kunal Kushwaha", query: "linking github to linkedin properly kunal kushwaha" },
      { id: 340, title: "Add portfolio", creator: "Kunal Kushwaha", query: "showcasing portfolio to recruiters kunal kushwaha" },
      { id: 341, title: "Start networking", creator: "Kunal Kushwaha", query: "how to network on linkedin for referrals kunal kushwaha" },
      { id: 342, title: "Follow developers", creator: "Harkirat Singh", query: "how to connect with senior developers harkirat singh" },
      { id: 343, title: "Participate in communities", creator: "Kunal Kushwaha", query: "tech communities discord twitter tech kunal kushwaha" },
      { id: 344, title: "Start contributing to open source", creator: "Kunal Kushwaha", query: "complete guide to open source kunal kushwaha" },
      { id: 345, title: "Make first open-source contribution", creator: "Kunal Kushwaha", query: "first pull request open source hacktoberfest kunal kushwaha" },
      { id: 346, title: "Build 3 strong projects", creator: "Love Babbar", query: "top 3 resume projects for cse students love babbar" },
      { id: 347, title: "Build 1 flagship project", creator: "Harkirat Singh", query: "how to build a flagship 10x engineering project harkirat singh" },
      { id: 348, title: "Deploy all major projects", creator: "Chai aur Code", query: "hosting and deploying full stack projects chai aur code" },
      { id: 349, title: "Write proper README files", creator: "Kunal Kushwaha", query: "how to write professional documentation readme kunal kushwaha" },
      { id: 350, title: "Create project demos", creator: "Kunal Kushwaha", query: "recording video demos of software projects kunal kushwaha" },
      { id: 351, title: "Prepare resume", creator: "Love Babbar", query: "software engineer resume template love babbar" },
      { id: 352, title: "Prepare ATS-friendly resume", creator: "Kunal Kushwaha", query: "ats friendly resume for freshers kunal kushwaha" },
      { id: 353, title: "Practice technical interviews", creator: "Striver (take U forward)", query: "how to prepare for technical interviews striver" },
      { id: 354, title: "Practice DSA interviews", creator: "Striver (take U forward)", query: "mock dsa interview preparation striver" },
      { id: 355, title: "Practice CS fundamentals", creator: "Gate Smashers", query: "core cs interview questions os dbms cn gate smashers" },
      { id: 356, title: "Practice HR interviews", creator: "Love Babbar", query: "hr interview questions and answers love babbar" },
      { id: 357, title: "Apply for internships", creator: "Kunal Kushwaha", query: "how to get off campus internship kunal kushwaha" },
      { id: 358, title: "Apply for freelance opportunities only if useful", creator: "Chai aur Code", query: "freelancing for developers chai aur code" },
      { id: 359, title: "Apply for open-source programs", creator: "Kunal Kushwaha", query: "gsoc lfx mlh fellowship guide kunal kushwaha" },
      { id: 360, title: "Start internship preparation", creator: "Striver (take U forward)", query: "internship prep roadmap striver" },
      { id: 361, title: "Build professional network", creator: "Harkirat Singh", query: "building a developer network that gets jobs harkirat singh" },
      { id: 362, title: "Track applications", creator: "Love Babbar", query: "job application tracking sheet love babbar" },
      { id: 363, title: "Prepare for placement season", creator: "Love Babbar", query: "college placement season preparation love babbar" },
      { id: 364, title: "Continue DSA", creator: "Striver (take U forward)", query: "daily dsa problem habit striver" },
      { id: 365, title: "Continue building", creator: "Chai aur Code", query: "never stop building real software chai aur code" }
    ]
  }
];

// STATE MANAGEMENT
const STORAGE_KEY = "cse_mastery_completed_tasks_365";
let completedTasks = new Set();
let activeFilter = "all";
let currentModalTask = null;

// Initialize
function initApp() {
  loadCompletedTasks();
  renderRoadmap();
  updateStats();
  setupEventListeners();
}

function loadCompletedTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      completedTasks = new Set(JSON.parse(saved));
    }
  } catch (e) {
    console.error("Error loading localStorage", e);
    completedTasks = new Set();
  }
}

function saveCompletedTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedTasks]));
  } catch (e) {
    console.error("Error saving localStorage", e);
  }
}

function toggleTask(taskId, taskObj, phaseObj) {
  if (completedTasks.has(taskId)) {
    completedTasks.delete(taskId);
    showToast(`Unchecked: Task #${taskId}`);
  } else {
    completedTasks.add(taskId);
    showToast(`🎉 Mastered Task #${taskId}: ${taskObj.title}!`);
    // Open action modal for git commit and linkedin post
    openActionModal(taskId, taskObj, phaseObj);
  }
  saveCompletedTasks();
  updateStats();
  renderRoadmap();
}

function updateStats() {
  const totalTasks = 365;
  const completedCount = completedTasks.size;
  const percentage = Math.round((completedCount / totalTasks) * 100);

  document.getElementById("completedCount").textContent = completedCount;
  document.getElementById("totalCount").textContent = totalTasks;
  document.getElementById("overallPercent").textContent = `${percentage}%`;
  document.getElementById("overallProgressBar").style.width = `${percentage}%`;
  document.getElementById("gitCommitsCount").textContent = `${completedCount} Commits`;
  document.getElementById("linkedInPostsCount").textContent = `${completedCount} Posts`;
}

function renderRoadmap() {
  const container = document.getElementById("roadmapContainer");
  const searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();
  container.innerHTML = "";

  ROADMAP_PHASES.forEach(phase => {
    // Check phase filter
    if (activeFilter !== "all" && phase.phaseId !== activeFilter) {
      return;
    }

    // Filter tasks based on search
    const filteredTasks = phase.tasks.filter(task => {
      const matchId = task.id.toString() === searchQuery;
      const matchTitle = task.title.toLowerCase().includes(searchQuery);
      const matchCreator = task.creator.toLowerCase().includes(searchQuery);
      const matchPhase = phase.phaseLabel.toLowerCase().includes(searchQuery);
      return matchId || matchTitle || matchCreator || matchPhase;
    });

    if (filteredTasks.length === 0 && searchQuery !== "") {
      return;
    }

    // Calculate module completion
    const modCompleted = filteredTasks.filter(t => completedTasks.has(t.id)).length;
    const modTotal = filteredTasks.length;
    const modPercent = modTotal > 0 ? Math.round((modCompleted / modTotal) * 100) : 0;

    const card = document.createElement("div");
    card.className = "module-card";
    card.id = phase.phaseId;

    // Header
    card.innerHTML = `
      <div class="module-header" onclick="toggleModuleCollapse('${phase.phaseId}')">
        <div class="module-title-area">
          <span class="module-phase-tag">${phase.range}</span>
          <h3 class="module-title">${phase.phaseLabel}</h3>
        </div>
        <div class="module-meta">
          <span class="module-progress-text">${modCompleted}/${modTotal} (${modPercent}%)</span>
          <span class="module-toggle-icon">▼</span>
        </div>
      </div>
      <div class="module-body">
        <div class="module-creator-bar">
          <div>
            <span class="creator-label">🇮🇳 Selected Indian Mentors: </span>
            <span class="creator-names">${phase.creators}</span>
          </div>
          <a href="${phase.defaultPlaylist}" target="_blank" rel="noopener" class="creator-yt-btn">
            ▶ Phase Playlist
          </a>
        </div>
        <div class="task-list" id="list-${phase.phaseId}">
        </div>
      </div>
    `;

    const listContainer = card.querySelector(`#list-${phase.phaseId}`);

    filteredTasks.forEach(task => {
      const isChecked = completedTasks.has(task.id);
      const taskEl = document.createElement("div");
      taskEl.className = `task-item ${isChecked ? "completed" : ""}`;

      // Targeted YouTube link directly curated for that creator and exact query
      const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(task.query)}`;

      taskEl.innerHTML = `
        <div class="task-main">
          <input type="checkbox" class="custom-checkbox" ${isChecked ? "checked" : ""} id="chk-${task.id}">
          <label for="chk-${task.id}" class="task-text">
            <span class="task-num">#${task.id < 10 ? '00' + task.id : (task.id < 100 ? '0' + task.id : task.id)}</span>
            <span class="task-title-text">${task.title}</span>
            <span class="task-mentor-badge">👤 ${task.creator}</span>
          </label>
        </div>
        <div class="task-actions">
          <a href="${searchUrl}" target="_blank" rel="noopener" class="task-action-btn yt-link" title="Watch Selected Lesson on YouTube">
            ▶ Watch
          </a>
          <button class="task-action-btn push-act" onclick="triggerActionModal(${task.id})">
            ⚡ Action
          </button>
        </div>
      `;

      // Checkbox event
      const checkbox = taskEl.querySelector(`#chk-${task.id}`);
      checkbox.addEventListener("change", () => {
        toggleTask(task.id, task, phase);
      });

      listContainer.appendChild(taskEl);
    });

    container.appendChild(card);
  });
}

function findTaskAndPhaseById(taskId) {
  for (const phase of ROADMAP_PHASES) {
    const task = phase.tasks.find(t => t.id === taskId);
    if (task) return { task, phase };
  }
  return null;
}

window.toggleModuleCollapse = function(moduleId) {
  const modCard = document.getElementById(moduleId);
  if (modCard) {
    modCard.classList.toggle("collapsed");
  }
};

window.triggerActionModal = function(taskId) {
  const match = findTaskAndPhaseById(taskId);
  if (match) {
    openActionModal(taskId, match.task, match.phase);
  }
};

// Modal Handling
function openActionModal(taskId, taskObj, phaseObj) {
  currentModalTask = { id: taskId, task: taskObj, phase: phaseObj };
  document.getElementById("modalBadge").textContent = `TASK #${taskId} COMPLETED`;
  document.getElementById("modalTaskTitle").textContent = taskObj.title;

  // Clean Task Title for Git commit
  const safeTitle = taskObj.title.replace(/["\\]/g, "");
  const gitCode = `git add .
git commit -m "Day ${taskId}: Completed Task #${taskId} - ${safeTitle}"
git push origin main`;
  document.getElementById("gitCommandsCode").textContent = gitCode;

  // Formatted LinkedIn Post
  const dayNumber = taskId;
  const linkedinPost = `🚀 Day ${dayNumber}/365 of my CSE Mastery Journey!

Today's Completed Milestone:
👉 Task #${taskId}: "${taskObj.title}"
📚 Learning Track: ${phaseObj.phaseLabel}
🇮🇳 Mentor Reference: ${taskObj.creator}

💻 What I accomplished today:
- Understood the core fundamentals from the ground up (Zero Shortcuts)
- Implemented and verified practical code in my local environment
- Committed & pushed my work to GitHub to maintain clean engineering consistency

Every single day is compounding. Onwards to the next milestone! 🎯

#BTech #ComputerScience #LearningInPublic #BuildInPublic #CPP #DSA #WebDev #GitHub #SoftwareEngineering #DeveloperJourney`;

  document.getElementById("linkedinPostText").value = linkedinPost;

  document.getElementById("actionModal").classList.add("open");
}

function closeActionModal() {
  document.getElementById("actionModal").classList.remove("open");
}

// Event Listeners
function setupEventListeners() {
  // Search
  document.getElementById("searchInput").addEventListener("input", () => {
    renderRoadmap();
  });

  // Filter Tabs
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      renderRoadmap();
    });
  });

  // Modal Close
  document.getElementById("modalCloseBtn").addEventListener("click", closeActionModal);
  document.getElementById("actionModal").addEventListener("click", (e) => {
    if (e.target.id === "actionModal") {
      closeActionModal();
    }
  });

  // Modal Tab Switching
  const modalTabBtns = document.querySelectorAll(".modal-tab-btn");
  modalTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modalTabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-target");
      document.querySelectorAll(".modal-tab-content").forEach(content => {
        content.classList.remove("active");
      });
      document.getElementById(target).classList.add("active");
    });
  });

  // Copy Git Code
  document.getElementById("copyGitBtn").addEventListener("click", () => {
    const code = document.getElementById("gitCommandsCode").textContent;
    navigator.clipboard.writeText(code).then(() => {
      showToast("📋 Git commands copied to clipboard!");
    });
  });

  // Copy LinkedIn Text
  document.getElementById("copyLinkedinBtn").addEventListener("click", () => {
    const text = document.getElementById("linkedinPostText").value;
    navigator.clipboard.writeText(text).then(() => {
      showToast("📋 LinkedIn post copied to clipboard!");
    });
  });

  // Export Data
  document.getElementById("exportBtn").addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify([...completedTasks]));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `cse_365_progress_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("💾 Backup downloaded successfully!");
  });

  // Reset Data
  document.getElementById("resetBtn").addEventListener("click", () => {
    if (confirm("Kya aap sach me poora progress reset karna chahte hain?")) {
      completedTasks.clear();
      saveCompletedTasks();
      updateStats();
      renderRoadmap();
      showToast("🔄 Progress reset to 0%. Ek nayi shuruaat!");
    }
  });
}

// Toast System
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// Launch
document.addEventListener("DOMContentLoaded", initApp);
