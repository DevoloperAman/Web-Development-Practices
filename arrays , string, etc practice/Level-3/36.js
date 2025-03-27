const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  // Using map() with destructuring
  const names = users.map(({ name  }) => name);
  
  console.log(names);
  // Output: ['Alice', 'Bob', 'Charlie']
  