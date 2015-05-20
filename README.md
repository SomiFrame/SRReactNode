Serverside React Rendering: Isomorphic JavaScript with ReactJS + Node
=============

MultiPage application using Node.js and React.js
--------------
An application Demo to show using Node.js and React to implement server-side render.

What the point?
---------------
1. JavaScript driven MVCs (angular, ember, backbone, etc.) render on DOM load, this can be really slowwwww & can make for a bad user experience.
2. They aren't indexable by search engines (without paying $$ for a third party service like https://prerender.io/). If your app is serving any kind of data that people might be searching for, this is a bad thing.
3. The Splitter of backend and front-end.

Server-side Javascript
---------------
![''](https://camo.githubusercontent.com/ed895cf7561cb3ec07ef74aa2dea573b57dbe219/687474703a2f2f696d672e68622e616963646e2e636f6d2f3430303931653637316230626465653236653531366163303530633663616563383038383562386131326238372d374a676646685f6677363538)

1. Front-end UI layer handle the browser's view logic and generate html(optional).
2. Backend UI(Node) layer handle router, template, fetch data, session and cookies etc, finally router is under front-end's controller the benefit is whatever SPA or MPA, Front-end has full and free controller, the Backend can get rid of strong concern for the view logic.  

For china collages, I suggest read ['Web 研发模式演变'](https://github.com/lifesinger/lifesinger.github.com/issues/184)

Demo Install Instructions
--------------
1. Clone the repo: git clone git@gitlab.dev.activenetwork.com:stoneli/TT-IntroduceReact.git.
2. Install packages: npm install.
3. Launch: gulp debug.
4. Visit in your browser at: http://localhost:8094