# Internship Technical Exercise
A demostration of basic Javascript knowledge. In order to view these files, you'll need to fork this repo, download the files to a folder on your computer, and then launch your local server from 
that location. The index page should load with a text input box and a submit button. You may enter any arguments you wish, but a sample input would be `['bob@acme.com', [0, 3, 'foo', 20, ['Joe']], 'Jane', [7]]`. The
expected output is: `['email', 0, 'fizzbuzz', 'foo', 'buzz', 'Joe', 'Jane', 7]` based on the below instructions:

In JavaScript, using as few characters as possible, write a function(s) that:
  1. Returns a flat, one-dimensional array containing the specified values below
  2. Takes one argument, a multi-dimensional array of n length
  3. Each item in the argument array may contain other arrays of n length or strings (but never objects)
  4. Append the word 'email' to the returned array if the string is a valid email address
  5. Append the word 'fizz' to the returned array if the integer is evenly divisible by 3
  6. Append the word 'buzz' to the returned array if the integer is evenly divisible by 5
  7. Append the word 'fizz buzz' if the number is evenly divisible by 3 and 5
  8. Append the integer if it's neither divisible evenly by 3 nor 5
