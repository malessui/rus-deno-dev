import {React, ReactDOM} from './deps.ts';
import App from './App.tsx';

// ReactDOM.render(
//   <react.StrictMode>
//     <App />
//   </react.StrictMode>,
//   document.getElementById('root')
// );


addEventListener("fetch", (event) => {
  const html = ReactDOM.renderToString(<App />);
  event.respondWith(
    new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" },
    }),
  );
});