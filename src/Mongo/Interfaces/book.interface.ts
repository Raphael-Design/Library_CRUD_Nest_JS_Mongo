import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { BookSchema } from '../Schemas/book.schemas';

export interface BookDocument extends Document {
    readonly _id : mongoose.Schema.Types.ObjectId;
    readonly name : string,
    readonly author : any,
    readonly language : string,
    readonly releaseYear : number,
    readonly publisher : string,
    readonly pages : number
}

export const Book = mongoose.model<BookDocument>('book', BookSchema )