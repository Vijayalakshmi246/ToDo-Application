//'use strict'
//const Task = use('App/Models/Task')

// app/Controllers/Http/TaskController.js


'use strict';
const Post = use('App/Models/Post');
const Joi =require('joi');

class PostController{
 async create({request,response}) {
    // get data from req,save in tht db,return newly created post
    const id=request.input('id');
    const title=request.input('title');
    const description=request.input('description');
    const status=request.input('status');
    const due_date=request.input('due_date');

    const schema = Joi.object().keys({
      id:Joi.number(),
      title:Joi.string().required().max(20),
      description:Joi.string().required(),
      status:Joi.string().optional(),
      due_date:Joi.date()
    });
    console.log('request.all()=',request.all());
    // const {value,error}= Joi.validate(request.all(),schema);
    const value = await schema.validateAsync(request.all());
    // if(error && error.details){
    //   return response.status(400).json(error);
    // }

    const post=new Post();

  post.id=id;
  post.title=title;
  post.description=description;
  post.status=status;
  post.due_date=due_date;

    await post.save();
    
    return post;
     
  }

  // get
  async findAll({request,response}){
    // const posts=await Post.query().fetch();
    const posts=await Post.all();
    return posts;
  }
  async findOne({request,response,params}) {
    const post=await Post.find(params.id);
    return post;
  }
  async update({request,response,params}) {
    // get all params,define schema,validate schema,find the post,update or save ,return updated post in the response
    const id=request.input('id');
    const title=request.input('title');
    const description=request.input('description');
    const status=request.input('status');

    const schema = Joi.object().keys({
      id:Joi.number(),
      title:Joi.string().optional().max(20),
      description:Joi.string().optional(),
      status:Joi.string().optional(),
      due_date:Joi.date()
    });
    console.log('request.all()=',request.all());
    // const {value,error}= Joi.validate(request.all(),schema);
    const value = await schema.validateAsync(request.all());

    const post=await Post.find(params.id)
    if(id){
      post.id=id;
    }
    if(title){
      post.title=title;
    }
    if(description){
      post.description=description;
    }
    await post.save();
    return post;
  }
  async delete({request,response,params}) {
    const post=await Post.find(params.id);
    await post.delete();
    return post;
  }
}
module.exports = PostController;

// const Task = use('App/Models/Task');

// class TaskController {

//   async create({ request, response }) {
//     try {
//       const data = request.only(['title', 'due_date', 'description', 'status']);
//       const task = await Task.createTask(data);
//       return response.status(201).json(task);
//     } catch (error) {
//       return response.status(400).json({ error: error });
//     }
//   }

//   async index({ response }) {
//     try {
//       const tasks = await Task.getAllTasks();
//       return response.json(tasks);
//     } catch (error) {
//       return response.status(500).json({ error: 'Internal server error' });
//     }
//   }

//   async create({ params, response }) {
//     try {
//       const task = await Task.getTaskById(params.id);
//       return response.json(task);
//     } catch (error) {
//       return response.status(404).json({ error: 'Task not found' });
//     }
//   }

//   async update({ params, request, response }) {
//     try {
//       const data = request.only(['title', 'due_date', 'description', 'status']);
//       const task = await Task.updateTask(params.id, data);
//       return response.json(task);
//     } catch (error) {
//       return response.status(400).json({ error: error });
//     }
//   }

//   async destroy({ params, response }) {
//     try {
//       await Task.deleteTask(params.id);
//       return response.json({ message: 'Task deleted successfully' });
//     } catch (error) {
//       return response.status(500).json({ error: 'Internal server error' });
//     }
//   }
// }

// module.exports = TaskController;


// // class TaskController {

// //   async create({ request, response }) {
// //     try {
// //       // Get request data
// //       const data = request.only(['title', 'due_date', 'description', 'status']);

// //       // Call model method to create task
// //       const task = await Task.createTask(data);

// //       // Return created task
// //       return response.status(201).json(task);
// //     } catch (error) {
// //       // Handle errors
// //       return response.status(400).json({ error: error });
// //     }
// //   }

// //   async index({ response }) {
// //     try {
// //       // Call model method to get all tasks
// //       const tasks = await Task.getAllTasks();

// //       // Return tasks
// //       return response.json(tasks);
// //     } catch (error) {
// //       // Handle errors
// //       return response.status(500).json({ error: 'Internal server error' });
// //     }
// //   }

// //   async show({ params, response }) {
// //     try {
// //       // Call model method to get task by ID
// //       const task = await Task.getTaskById(params.id);

// //       // Return task
// //       return response.json(task);
// //     } catch (error) {
// //       // Handle errors
// //       return response.status(404).json({ error: 'Task not found' });
// //     }
// //   }

// //   async update({ params, request, response }) {
// //     try {
// //       // Get request data
// //       const data = request.only(['title', 'due_date', 'description', 'status']);

// //       // Call model method to update task
// //       const task = await Task.updateTask(params.id, data);

// //       // Return updated task
// //       return response.json(task);
// //     } catch (error) {
// //       // Handle errors
// //       return response.status(400).json({ error: error });
// //     }
// //   }

// //   async destroy({ params, response }) {
// //     try {
// //       // Call model method to delete task
// //       await Task.deleteTask(params.id);

// //       // Return success message
// //       return response.json({ message: 'Task deleted successfully' });
// //     } catch (error) {
// //       // Handle errors
// //       return response.status(500).json({ error: 'Internal server error' });
// //     }
// //   }
// // }

// // module.exports = TaskController;

// //     // async index() {
// //     //     return await Task.all()
// //     //   }
    
// //     //   async store({ request }) {
// //     //     const data = request.only(['title', 'description', 'status', 'due_date'])
// //     //     const task = new Task()
// //     //     task.fill(data)
    
// //     //     try {
// //     //       await task.validate()
// //     //       await task.save()
// //     //       return task
// //     //     } catch (error) {
// //     //       return error.messages
// //     //     }
// //     //   }
    
// //     //   async show({ params }) {
// //     //     return await Task.findOrFail(params.id)
// //     //   }
    
// //     //   async update({ params, request }) {
// //     //     const task = await Task.findOrFail(params.id)
// //     //     const data = request.only(['title', 'description', 'status', 'due_date'])
// //     //     task.merge(data)
    
// //     //     try {
// //     //       await task.validate()
// //     //       await task.save()
// //     //       return task
// //     //     } catch (error) {
// //     //       return error.messages
// //     //     }
// //     //   }
    
// //     //   async destroy({ params }) {
// //     //     const task = await Task.findOrFail(params.id)
// //     //     await task.delete()
// //     //     return { message: 'Task deleted successfully' }
// //     //   }
// //     // }
    
// // // }

// // // module.exports = TaskController
