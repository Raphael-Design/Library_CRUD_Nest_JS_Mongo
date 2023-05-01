import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { BookDTO } from "src/DTO/books.dto";
import { BookDocument, Book } from "../Interfaces/book.interface";
import { BookSchema } from "../Schemas/book.schemas";


@Injectable()
export class BookRepository {

    async getAllBooks() : Promise<BookDTO[]>{
        return await Book.find({}, {_v : false}).sort({name : +1}).exec();
    }

    async getBookByID(bookID : string) : Promise<BookDTO>{
        return await Book.findById(bookID)
    }

    async saveBook(newBook : BookDTO): Promise<BookDTO>{
        const savedBook = new Book(newBook);
        return await savedBook.save();
    }
}