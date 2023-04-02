import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />;
      <main className='main'>
        <p>
          This HTML file is a template.
          If you open it directly in the browser, you will see an empty page.

          You can add webfonts, meta tags, or analytics to this file.
          The build step will place the bundled scripts into the tag.

          To begin the development, run `npm start` or `yarn start`.
          To create a production bundle, use `npm run build` or `yarn build`.
        </p>

      </main>
      <footer className='footer'>Made by <a href='#'>Radridzi</a></footer>
    </div>
  );
}


export default App;
