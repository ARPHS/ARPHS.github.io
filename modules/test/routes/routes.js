import  view1 from "../views/test-view1.js"
import  view2 from "../views/test-view2.js"
import  viewParam from "../views/test-view-params.js"
import  home from "../views/param-views/home.js"
import  help from "../views/param-views/help.js"
import  helpEL from "../views/param-views/help-EL.js"

export const routes = [
    { path: '/view1',
      component: view1,
        children:[
            { path: '/home', component: home },
            { path: '/help', component: help },
            { path: '/helpEL', component: helpEL },
        ]
    },
    { path: '/view2', component: view2 },
    { path: '/view/:userName',
      component: viewParam,
      children:[
          { path: '/view/:userName/home', component: home },
          { path: '/view/:userName/help', component: help },
          { path: '/view/:userName/helpEL', component: helpEL },
      ]
    },
]
