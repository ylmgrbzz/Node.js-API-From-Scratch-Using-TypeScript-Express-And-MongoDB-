import { Schema, model } from 'mongoose';
import Post from '@/resources/post/post.interface';

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const postModel = model<Post>('Post', postSchema);

export default postModel;
