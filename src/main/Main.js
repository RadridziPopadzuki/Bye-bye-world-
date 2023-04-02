import React from 'react';
import './Main.css';


class Main extends React.Component {
   render() {
      return (
         <div className='container' >
            <main className='main' style={{
               fontSize: "1.5rem", background: "#435049",
               borderRadius: "10px"
            }}>
               <p>
                  This HTML file is a template.
                  If you open it directly in the browser, you will see an empty page.

                  You can add webfonts, meta tags, or analytics to this file.
                  The build step will place the bundled scripts into the tag.

                  To begin the development, run `npm start` or `yarn start`.
                  To create a production bundle, use `npm run build` or `yarn build`.
               </p>
               <blockquote>To begin the development, run `npm start` or `yarn start`.
                  To create a production bundle, use `npm run build` or `yarn build`.
               </blockquote>
            </main>
         </div>
      );
   }
}

export default Main;