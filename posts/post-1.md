# What is .splice() method

Javascript .splice() method is a common method. This function is only for the array. This is very important and most commonly used. So in this lesson, I will explain what .splice() method is, how to use it, and the most common uses with so many examples.

## .splice() method

**Introduction:** This method helps you to adds or removes some item from an array. ```.splice(index, howMany, ...items)```

| Parameter                    | Description                                                                                                                                                              |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| index (required)             | A number that you can specify the position of an array from where the item(s) will be added or removes. You can also specify a negative integer to specify the end of the array. |
| howMany (optional)           | A number that specifies how many items to remove from the array                                                                                                            |
| ...item, (optional) | New elements to add to the specified position.                                                                                                                            |

**Examples:**
Example 1: Lets say, you have an array like ``var arr = [1, 2, 3, 4, 5, 6, 7]``. Now you want to remove '5' from arr. So your code will be:

    arr.splice(4, 1);
    console.log(arr);

You will see ``[1, 2, 3, 4, 6, 7]`` in the console.

Example 2: You have an array (`var arr = [1, 2, 3, 4, 5, 6, 7]`). You want to remove all items after '2'. So you can write:

    arr.splice(2);
    console.log(arr);

Then lock at the console. Result is `[1, 2]`;

Example 3: Now lets say, you wand to replace some items with some other. How will you do that? You want to replace 2,3,4 items with 'a', 'b', 'c'.

    var arr = [1, 2, 3, 4, 5, 6, 7];
    arr.splice(1, 3, 'a', 'b', 'c');
    console.log(arr);

And 2,3,4 are replaced with 'a', 'b', 'c'.

Example 4: Every function returns something, right? What does splice() return actually? So lets look what does .splice() method returns. Write this code:

    var arr = [1, 2, 3, 4, 5, 6, 7]
    let arrReturn = arr.splice(3, 2);
    console.log(`arr = ${arr}`)
    console.log(`arrReturn = ${arrReturn}`);

What do you see?

    arr = 1,2,3,6,7
    arrReturn = 4,5

So, here you can see .splice() method returns those items which is removed. And it modify the arr variable.

So what did you learn from this lesson?

1. .splice() takes 3 parameter: index, howMany, ...items. index is required.
2. It modifies the main array.
3. It returns a new array of items which is removed from the main array.

### Tasks for you

    arr = ['Apple', 'Android', 'Windows', 'Linux', 'macOS', 'Ubuntu', 'iOS'];

1. Remove `Apple` from the array
2. Replace `macOS, Ubuntu` with `Unix, FreeBSD, MINIX, BeOS`
3. Make the `arr` empty using .splice()

This is today's lesson. By the way, this is the first blog I have ever written. Please forgive me if I made any mistakes or [Modify this blog](https://facebook.com/akhand.tajmirul)
