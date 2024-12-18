// Prompt the user for names and ages
let namesInput = prompt("Enter names separated by commas (e.g., Genevieve, Juan, Luna, Gabriel, Elise):");
let agesInput = prompt("Enter ages separated by commas (e.g., 24, 65, 21, 5, 9):");

// Parse the input strings into arrays
let subArray1 = namesInput.split(",").map(name => name.trim());
let subArray2 = agesInput.split(",").map(age => Number(age.trim()));

// Combine the two arrays into a multi-dimensional array
let multiDimensionalArray = [];
for (let i = 0; i < subArray1.length; i++) {
  multiDimensionalArray.push([subArray1[i], subArray2[i]]);
}

// Log the restructured array to the console
console.log("Restructured Multi-Dimensional Array:");
multiDimensionalArray.forEach(subArray => {
  console.log(subArray);
});
