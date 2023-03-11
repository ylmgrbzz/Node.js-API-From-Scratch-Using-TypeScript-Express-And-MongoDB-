import { Document } from 'mongoose';

export default interface Post extends Document {
    email: string;
    password: string;
    name: string;
    role: string;

    isValidPassword(password: string): Promise<Error | boolean>;
}
