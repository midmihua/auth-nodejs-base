import { Schema, model, Document } from 'mongoose';
import { hash, compare } from 'bcryptjs';
import { BCRYPT_WORK_FACTORY } from '../config';

interface UserDocument extends Document {
    name: string,
    email: string,
    password: string,
    matchesPassword: (password: string) => Promise<boolean>
}

const userSchema = new Schema(
    {
        name: String,
        email: String,
        password: String
    },
    {
        timestamps: true
    }
);

userSchema.pre<UserDocument>('save', async function () {
    if (this.isModified('password')) {
        this.password = await hash(this.password, BCRYPT_WORK_FACTORY);
    }
});

userSchema.methods.matchesPassword = function (password: string) {
    return compare(password, this.password);
};

userSchema.set('toJSON', {
    transform: (doc, { __v, password, ...rest }, options) => rest
});

export const User = model<UserDocument>('User', userSchema);
