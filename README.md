# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![preview](./public/preview.png)

### Links

- Solution URL: [Github](https://github.com/oloude)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - extends JavaScript by adding types to the language

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
function Faqs() {
  const [selectedId, setSelectedId] = (useState < number) | (null > null);

  function handleToggle(id: number) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="bg-white shadow-md -mt-20 max-w-3xl mx-6 sm:mx-auto p-6 rounded-xl">
      <header className="flex gap-3 items-center mb-10">
        <img src={starIcon} alt="starIcon" className="block w-7 h-7" />
        <h1 className="text-3xl text-darkPurple font-bold">FAQs </h1>
      </header>
      <div className="flex flex-col gap-4">
        {data.map((item) => (
          <Faq
            key={item.id}
            title={item.title}
            answer={item.answer}
            id={item.id}
            isOpen={selectedId === item.id}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
}
```

## Author

- Frontend Mentor - [@Oloude](https://www.frontendmentor.io/profile/oloude)
- Twitter - [@AbosedeOloude](https://www.twitter.com/AbosedeOloude)
