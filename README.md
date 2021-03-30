# number-generator
To achieve the task of generating a list of 10,000 numbers, I have a generateRndArr() function where I create an array (a=[]) of length 10,000 using a for() loop.
Inside this function i have a randomizedList() function that i call, and I then pass the items in the array i created using a while() loop.
As i loop through, i decrement the array length by 1. 
Using Math.random() to return a random number and Math.floor() to return an integer the length of the array.
Each random value is assigned to the array index which is based on its length: arr[rndInt] = arr[arrLength].
For each number to be unique, i used the Fisher–Yates Shuffle to swap randomly chosen elements with the current element.
I return the value.
