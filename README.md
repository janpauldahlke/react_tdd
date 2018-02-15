# tdd with jest+enzyme in the react world

### giftgiver
- small project to test tdd approach
- one can gift a present to person
- list expands with number of gifts
- one can remove gifts
##### requirements
```npm install --save-dev enzyme jest-cli@20.0.4```
- one is using 20.0.4 of jest-cli // there is an error in a higher version
- using react-bootstrap for styling convinience
- make sure to have latest react && react-dom
- ```npm install react react-dom```
- i removed verything from /src to start from scratch
##### test cli
- ```npm run test```for watch suite
- ```npm run test -- --coverage```for nice formatted table
- to exclude files from test coverage use the "jest" object in package.json with !Bang operator (compare repo to see exmaple)

### lootcheck
- deposit and withdraw money from account
- saved in cookies
- can call bitcoin exhcange api
- usese and tests redux
