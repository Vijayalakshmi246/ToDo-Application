'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Model = use('Model')
class Post extends Model {
  // post
 
}

module.exports = Post










// 'use strict';

// const { validateAll } = use('Validator');
// const Database = use('Database');

// class Task {
//   // Create a new task
//   static async createTask(data) {
//     const validation = await validateAll(data, {
//       title: 'required',
//       due_date: 'date'
//     });

//     if (validation.fails()) {
//       throw validation.messages();
//     }

//     const task = await Database.table('tasks').insert(data);
//     return task;
//   }

//   // Update an existing task
//   static async updateTask(id, data) {
//     const validation = await validateAll(data, {
//       title: 'required',
//       due_date: 'date'
//     });

//     if (validation.fails()) {
//       throw validation.messages();
//     }

//     const task = await Database.table('tasks').where('id', id).update(data);
//     return task;
//   }

//   // Delete a task
//   static async deleteTask(id) {
//     const task = await Database.table('tasks').where('id', id).delete();
//     return task;
//   }

//   // Retrieve all tasks
//   static async getAllTasks() {
//     const tasks = await Database.table('tasks').select('*');
//     return tasks;
//   }

//   // Retrieve a single task by ID
//   static async getTaskById(id) {
//     const task = await Database.table('tasks').where('id', id).first();
//     return task;
//   }
// }

// module.exports = Task;


// // class Task extends Model {
// //     static get rules() {
// //         return {
// //           title: 'required',
// //           due_date: 'date'
// //         }
// //     }
// //     // Create a new task
// //   static async createTask(data) {
// //     const task = new Task();
// //     task.fill(data);

// //     try {
// //       await task.validate();
// //       await task.save();
// //       return task;
// //     } catch (error) {
// //       throw error.messages;
// //     }
// //   }

// //   // Update an existing task
// //   static async updateTask(id, data) {
// //     const task = await Task.findOrFail(id);
// //     task.merge(data);

// //     try {
// //       await task.validate();
// //       await task.save();
// //       return task;
// //     } catch (error) {
// //       throw error.messages;
// //     }
// //   }

// //   // Delete a task
// //   static async deleteTask(id) {
// //     const task = await Task.findOrFail(id);
// //     await task.delete();
// //   }

// //   // Retrieve all tasks
// //   static async getAllTasks() {
// //     return await Task.all();
// //   }

// //   // Retrieve a single task by ID
// //   static async getTaskById(id) {
// //     return await Task.findOrFail(id);
// //   }
// // }

// // module.exports = Task
