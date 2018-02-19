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
- usese and tests redux
- deposit and withdraw money from account
- saved in cookies // testing cookie behavior
- can call bitcoin exhcange api
- test redux thunk and async actions
- carefully work around the incompatibiliy of enzyme with react 16 using ```npm install enzyme-adapter-react-16```
- also read https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f for more insights
- to add async stuff ```npm install redux-thunk --save```
- to able to test it do ```npm install redux-mock-store fetch-mock --save-dev```