# Brain Training

[View Demo](https://brain-training-game.netlify.app)

## Folder Structure

The project is broken down into the below structure:

```
|-- src
    |-- index.js
    |-- components                      # React Components
    |   |-- App
    |   |-- |-- App.js
    |   |-- |-- App.css
    |   |-- Input
    |   |-- |-- Input.js
    |   |-- |-- Input.module.css
    |-- contexts                        # Contexts contains any React Context data
    |   |-- GlobalContext.js
    |-- pages                           # Pages
    |   |-- GetStarted.js               # /get-started
    |   |-- Home.js                     # /
    |   |-- Play.js                     # /play
    |   |-- Results.js                  # /results
    |-- styles                          # Generic Styles & Tailwind
    |   |-- tailwind.css
```

## Tools and Tech

- React
- React-Router
- Tailwind CSS

### Styled Components Vs. CSS Modules

Originally I wanted to use Styled Components to write the styles of the game with the thought that i'd potentially need to manipulate the css based on props however, I began to think that somewhere down the line I may need to use animations or generally for the page to load faster and be more performant thus the plain old CSS route.

## Improvements

### Terminate game and display results

My intention was to terminate the game if the following 2 conditions were met:

1. 2 Errors were recorded
2. The sequence has reached the end

In order to achieve this, I was trying to use `clearTimeout()` in order to terminate the `setTimeout()` and then eventually route the user to `/results` using `useHistory()` from `react-router-dom`. Unfortuantely I wasn't able to achieve this.

### Unit Tests

I would have liked to add unit tests.
