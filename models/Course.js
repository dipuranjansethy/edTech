import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter course title"],
    minLength: [4, "Title must be of 4 charectors"],
    maxLength: [80, "Title can't exceed 80 charectors"],
  },
  description: {
    type: String,
    required: [true, "please enter description"],
    minLength: [20, "description must be of 20 charectors"],
  },
  lectures: [
    {
      title: {
        type: String,
        required: true,
      },
      video: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    },
  ],
  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  views:{
    type:Number,
    default:0,
  },
  numOfVideos:{
    type:Number,
    default:0,
  },
  category:{
    type:String,
    required:true,
  },
  createdBy:{
    type:String,
    required:[true,"enter the course creater name"],
  },
  createdAt:{
    type:Date,
    default:Date.now,
  },
});

export const Course = mongoose.model("Course", schema);
