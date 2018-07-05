# chrome-ext-render

Had issues using `componentWillUnmount` with Chrome Extensions which were built on sites using React. `componentWillUnmount` would never trigger so all event listeners, etc, would still be active.

This makes sure that components in your app will call `componentWillUnmount` and also remove the app from the DOM, including the node that it was mounted to if you want.

```
yarn add chrome-ext-render
```

```
import createApp from 'chrome-ext-render'
import ReactDOM from 'react-dom'
let app;

// When you come to render app...

const node = document.getElementById('root');
app = createApp(<App />, node, ReactDOM.render);


// When you want to remove it just call app();
app();
```

You have to pass through the render method as I wanted to be able to use this method with other React like libraries such as Inferno and Preact.

If anyone finds a way to not need this, please let me know!

