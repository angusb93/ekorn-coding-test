# Notes

## 🤔 Thought process

Starting this task I initially did a lot of research into Svelte itself as I was curious to see how far it differed from my wheelhouse of React. I was please to find that it solves many pain points of React through its much simpler implementation. I also had been a fan of Rich Harris but hadn't realised that he wrote it!

I then did a full read through of the README to understand everything the task was asking. Which I interpreted as:

1. The data transformation - transforming the data from StudentDataItem[] to Student[]
2. Displaying that data using Svelte with sensible markup and project structure
3. Making sure that all styling was applied meticulously

## 📝 Assumptions made

I made a few assumptions:

1. Browser support required was relatively new browsers. As there is a few CSS properties not fully supported i.e. gap
2. Cards dont link anywhere and so there is no hover state or other CTA
3. The date string may be dirty and so added a protective case
4. the Cards component is always used within a list and not singularly as it is a <li/>

## 🚀 Additional features implemented

The only thing I have implemented additionally is the medium breakpoint in the grid. It goes to two columns before going to one. This is just visual.

## 📒 Other Notes

- I manually did the letter spacing on the "Students" title as it wasnt looking right.
- I removed the redundant font declaration from the styling on "body" so that it cascades down from root.
- I moved the type for "Student" to the data file so that I could access it elsewhere. Although I'm certain there is a better way of doing this as well as a different place for it be. Maybe in /utils/types.ts ?

Over all I have enjoyed the test :)
