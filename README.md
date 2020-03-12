
# Snapptrip! Code Challenge: Front-end

Thank you for your interest in joining Snapptrip! family. This repo contains exercises used in the Snapptrip's front-end recruitment process.

## What is this?
The coding exercise is the first stage of the interview process. 
This contains multiple challenges, each challenge has tests accompanying it so you know exactly when the challenge is solved.
Please make sure you follow instructions below in order to **clone the project**, **solving the challenges** and finally **send your solutions** back to us.

**Happy Coding!**


## Clone the Project
Go to your working directory and run:
```
git clone git@github.com:Snapptrip/frontend-code-challenge.git
```
## Solving the Challenges
### Requirements and dependencies

[NodeJS/NPM][nodejs] are required to work with the repository.

### Installation and running

Install the dependencies:

```
yarn install
```

### Testing

To be sure that the algorithm is correct, there are several tests to validate the requirements are met.

The test run with [Jest][jest] which is installed in previous step. The tests can run with watchers too.

```
npm run test
npm run test -- --watch
```

After all tests pass please proceed to next step and upload your solutions.


## Send your Solutions

Please make sure tests regarding the challenges you did provide a solution for are passed and then attend below instructions:

### Stage and Commit Changes
```
git add .
git commit -m "chore: challenges solved"
```

### Bundle the Repository
```
git bundle create repo.bundle master
```

**Navigate to project directory and attach *repo.bundle* file in your reply to Snapptrip!'s code challenge email.**


[eslint]: https://eslint.org/
[jest]: https://jestjs.io/en/
[nodejs]: https://nodejs.org/
