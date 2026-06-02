# 🧩 Sudoku Solver Pro

1-Month Software Engineering Internship at [SkillCraft Technology](https://skillcrafttech.com/) | Third Task: Sudoku Solver Pro Project 🚀

A clean, responsive web-based Sudoku solver built using HTML, CSS, and JavaScript. This project demonstrates the implementation of the **Backtracking Algorithm** to solve 9x9 Sudoku puzzles automatically.

---

## 🚀 Features

* **9x9 Sudoku Grid:** Intuitive interface for inputting puzzles.
* **Automatic Solving:** One-click solution using efficient recursive backtracking.
* **Sample Data:** Built-in function to load a sample puzzle for immediate testing.
* **Utility Controls:** Dedicated buttons to clear the board or reset state.
* **User Experience:**
  * Dark mode support.
  * Arrow key navigation (↑ ↓ ← →) for fast input.
  * Simple, minimalist UI design.

---

## 🛠️ Technologies Used

* **HTML5:** Structure and semantic layout.
* **CSS3:** Styling, grid layout, and dark mode theming.
* **JavaScript (ES6+):** Core logic, DOM manipulation, and backtracking implementation.

---

## 🧠 Algorithm: Backtracking

This solver utilizes the **Backtracking Algorithm**, a depth-first search approach:

1. Iterate through each empty cell.
2. Attempt to place numbers 1 through 9.
3. Validate: Check Sudoku rules (row, column, 3×3 grid).
4. Recurse if valid.
5. Backtrack if no valid number exists.

---

## 🎯 Sample Puzzle

Use the **"Load Sample Puzzle"** button to populate the board:

| 5 | 3 | . | . | 7 | . | . | . | . |
|---|---|---|---|---|---|---|---|---|
| 6 | . | . | 1 | 9 | 5 | . | . | . |
| . | 9 | 8 | . | . | . | . | 6 | . |
| 8 | . | . | . | 6 | . | . | . | 3 |
| 4 | . | . | 8 | . | 3 | . | . | 1 |
| 7 | . | . | . | 2 | . | . | . | 6 |
| . | 6 | . | . | . | . | 2 | 8 | . |
| . | . | . | 4 | 1 | 9 | . | . | 5 |
| . | . | . | . | 8 | . | . | 7 | 9 |

---

## 💡 Solving Strategy Tips

* Start with rows/columns with more filled numbers.
* Eliminate invalid candidates using Sudoku rules.
* Look for hidden singles (only one possible number).
* Repeat until solved.

---

## ▶️ How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in any modern browser.
   * Recommended: Use **Live Server** extension in VS Code.

---

## 📌 Note

This project was developed for **educational purposes** and as an **internship submission**.

---

## 👨‍💻 Author

Abhishek Badiger  
Software Development Intern at [SkillCraft Technology](https://skillcrafttech.com/)

---

## ⭐ Result

After clicking **Solve Puzzle**, the system automatically fills all empty cells and displays the correct solution using the backtracking algorithm.
