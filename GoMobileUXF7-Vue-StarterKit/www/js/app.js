// Init F7 Vue Plugin
Framework7.use(Framework7Vue);

setTimeout(() => {
  document.getElementById('page-loader').style.display = 'none';   
}, 2000);


// Init Page Components

Vue.component('login-page', {
  template: '#LoginPage'
});
Vue.component('home-page', {
  template: '#HomePage'
});
Vue.component('page-not-found', {
  template: '#page-not-found'
});


// Init App
new Vue({
  el: '#app',
  data: function () {
    return {
      // Framework7 parameters here
      f7params: {
        root: '#app', // App root element
        id: 'io.framework7.testapp', // App bundle ID
        name: 'Framework7', // App name
        theme: 'md', // Automatic theme detection
        // App routes
        routes: [
          {
            path: '/login/',
            component: 'login-page'
          },
          {
            path: '/home/',
            component: 'home-page'
          },
          {
            path: '(.*)',
            component: 'page-not-found',
          },
        ],
      }
    }
  },
});

