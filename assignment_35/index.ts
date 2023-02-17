const animals: string[] = ['dog', 'cat', 'rabbit'];

// Print out the name of each animal

for (let i = 0; i < animals.length; i++) {
    console.log(`${animals[i]}`);
}

// Print out a statement about each animal
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}

// Print out a statement about what the animals have in common
console.log('Any of these animals would make a great pet!');
