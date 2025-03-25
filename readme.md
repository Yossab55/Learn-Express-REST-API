# Subscriber API Project

This is a small Node.js project built to learn how to create and manage APIs using Express.js and Mongoose. The goal was to understand how to define schemas, handle API routes, and connect to a MongoDB database. Below is a summary of my experience and the tools I used.

## Project Overview

The project is a simple API to manage subscribers. It includes a `Subscriber` model with a schema consisting of:

- `name`: The subscriber's name.
- `subscribedToChannel`: The channel they subscribed to.
- `subscribeDate`: The date of subscription.

I followed a tutorial to build this project, which helped me grasp the basics of backend development with Node.js.

## Tools & Dependencies

- **Express.js**: For creating the API routes and server.
- **Mongoose**: For defining the schema and interacting with MongoDB.
- **Nodemon**: For auto-restarting the server during development.
- **Dotenv**: For managing environment variables (e.g., MongoDB connection string).

## Project Structure

- **Controllers Folder**: Contains the logic for handling API requests (e.g., creating, reading, updating, and deleting subscribers).
- **Model**: Defines the `Subscriber` schema.

## How I Built It

1. **Setup**: Initialized a Node.js project and installed the required dependencies.

```
  npm install
```

2. **Schema Creation**: Created the `Subscriber` model with the fields `name`, `subscribedToChannel`, and `subscribeDate` using Mongoose.
   ```
    name: {
      type: String,
      required: true
    },
    subscribeToChannel: {
      type: String,
      required: true
    },
    subscribeDate: {
      type: Date,
      required: true,
      default: Date.now
    }
   ```
3. **API Routes**: Set up Express routes to handle CRUD operations (Create, Read, Update, Delete) for subscribers.
   ```
      router.get("/", subscribersController.getAll);
    router.get(
      "/:id",
      subscribersController.getSubscriber,
      subscribersController.getById
    );
    router.post("/", subscribersController.create);

    router.patch(
      "/:id",
      subscribersController.getSubscriber,
      subscribersController.update
    );
    router.delete(
      "/:id",
      subscribersController.getSubscriber,
      subscribersController.remove
    );
   ```
4. **Database Connection**: Used Mongoose and `dotenv` to securely connect to MongoDB.
   ```
    mongoose
      .connect(process.env.DATABASE_URI)
      .then(app.listen(3000, () => console.log("server on port 300")));

    const db = mongoose.connection
    db.on("error", (err) => console.log(err));
    db.once("open", () => console.log("DataBase is opened"));
   ```
5. **Testing**: Ran the server with Nodemon and tested the API endpoints.

## What I Learned

- How to structure a basic Node.js project.
- Defining and using Mongoose schemas for MongoDB.
- Setting up RESTful API endpoints with Express.
- Managing environment variables for security.

## Tutorial Reference

I followed this YouTube tutorial to build the project: [Node.js Express & MongoDB Tutorial](https://youtu.be/fgTGADljAeg?si=WZBxzAXD-ZKAfF_A)

## Contact Me

- **LinkedIn**: [Yossab Samouel ](https://www.linkedin.com/in/yossab-samouel-b71353323/)]
- **Email**: [yossabsamouelwork@gmail.com] (mailto:yossabsamouelwork@gmail.com)
- **CV**: [my CV] (https://drive.google.com/drive/folders/1yXkeQxSeFWjaB8p-Hh-uHLh5oWKvAlb_?usp=sharing)

Feel free to reach out if you have feedback or want to collaborate!
