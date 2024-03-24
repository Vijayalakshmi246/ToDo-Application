'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/index.html', ()=>{
  return{greeting: "HI and Welcome json"}
})
//Route.group(() => {
  Route.post('/Posts', 'PostController.create');
  Route.get('/posts', 'PostController.findAll');
  Route.get('/Posts/:id', 'PostController.findOne');
  Route.put('/Posts/:id', 'PostController.update');
  Route.delete('/Posts/:id', 'PostController.delete');
  
    // Route.post('/tasks', 'TaskController.store');
    // Route.get('/tasks', 'TaskController.index');
    // Route.get('/tasks/:id', 'TaskController.show');
    // Route.put('/tasks/:id', 'TaskController.update');
    // Route.delete('/tasks/:id', 'TaskController.destroy');
 // }).prefix('api/v1');
  

