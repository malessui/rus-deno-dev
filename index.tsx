import {React, react, ReactDOM} from './deps.ts';
import App from './App.tsx';

addEventListener("fetch", (event) => {
  const html = ReactDOM.renderToString(
    <react.StrictMode>
      <App />
    </react.StrictMode>
  );
  event.respondWith(
    new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" },
    }),
  );
});