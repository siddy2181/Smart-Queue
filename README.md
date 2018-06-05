# Smart Queue System

## Requirements

For running this project in development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).





   ## Clone and Setup 
   ```sh
   $ git clone https://github.com/siddy2181/638da5b0c8cb1cd77c64a7d596283c6a.git
   $ cd SmartQueue
  ```
  ### Install Dependencies
  The package.jason folder contains all the dependencies under #dependencies. The following command installs all the dependencies required to run the project
  
   ```sh 
   $ npm install
   ```

### Configure api

Open `\SmartQueue\src\api\makeRequest.js` and `\SmartQueue\src\api\postRequest.js`then edit it with the url where you have setup:
backend api.


## Start & watch
   ```sh
    $ npm start
    $ open http://localhost:3000
```
## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

**Note:** Unix user can just link the `git-hooks/post-merge`:

## Enable git hooks (unix only :/)

    $ npm run create-hook-symlinks

### `post-merge` (≃ `npm install`)

This hook will `npm prune && npm install` each time you `git pull` something if the `package.json` has been modified.

### `pre-commit` (≃ `npm test`)

This hook will just ensure you will commit something not broken bye pruning npm packages not in the `package.json` & eventually reinstall missings/not correctly removed packages.
Then it will try a production build.

---

## Unit Testing

### Mocha test 


## Languages & tools
### IDE

Webstorm by Jetbrains


### JavaScript

- [React](http://facebook.github.io/react) is used for UI.
- Used `create-react-app` for setup and initiate project
- [Jquery] 

### Bootstrap

- For templeting and styling



