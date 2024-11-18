// Predefined colors
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// Function to roll random colors
function rollColors() {
  const colorContainer = document.getElementById('color-container');
  const countInput = document.getElementById('color-count');
  const numColors = parseInt(countInput.value, 10);

  // Validate input
  if (isNaN(numColors) || numColors < 1 || numColors > 6) {
    alert(`Please enter a number between 1 and 6`);
    return;
  }

  colorContainer.innerHTML = ''; // Clear previous colors

  // Initialize the selected colors array
  const selectedColors = [];
  for (let i = 0; i < numColors; i++) {
    const randomChance = Math.random();

    if (randomChance < 0.005) {
      // 0.5% chance for 3 same colors
      const color = colors[Math.floor(Math.random() * colors.length)];
      selectedColors.push(color, color, color);
      break;
    } else if (randomChance < 0.014) {
      // 0.9% chance for 2 same colors
      const color = colors[Math.floor(Math.random() * colors.length)];
      selectedColors.push(color, color);
      i++; // Adjust loop for added color
    } else {
      // 98.6% chance for a single random color
      const color = colors[Math.floor(Math.random() * colors.length)];
      selectedColors.push(color);
    }
  }

  // Limit selected colors to the input count
  const finalColors = selectedColors.slice(0, numColors);

  // Display the selected colors with animation
  finalColors.forEach((color, index) => {
    const colorBox = document.createElement('div');
    colorBox.className = `color-box ${color}`;
    colorBox.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    colorContainer.appendChild(colorBox);

    // Delay to trigger animation for each box
    setTimeout(() => {
      colorBox.classList.add('show');
    }, index * 100); // 100ms delay between each box
  });
}

// Initial roll when the page loads
rollColors();
