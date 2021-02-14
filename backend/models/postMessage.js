import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: String,
    caption: String,
    url: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
},{
    toJSON: {
        transform: function (doc, ret) {
          ret.id = ret._id;
          delete ret._id;
        }
      }
});

const PostMessage = mongoose.model("PostMessage",postSchema);

export default PostMessage;