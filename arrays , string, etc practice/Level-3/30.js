//Create a function that sorts an array of objects based on a specific property.

function sortArrayByProperty(arr, property) {
    return arr.sort((a, b) => {
        if (a[property] < b[property]) {
        return -1; // a comes before b
        }
        if (a[property] > b[property]) {
        return 1; // b comes before a
        }
      return 0; // they are equal
    });
    }

  // Example usage
    const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 }
    ];

    console.log(sortArrayByProperty(users, 'age'));
  // Output: [
  //   { name: 'Charlie', age: 22 },
  //   { name: 'Alice', age: 25 },
  //   { name: 'Bob', age: 30 }
  // ]
