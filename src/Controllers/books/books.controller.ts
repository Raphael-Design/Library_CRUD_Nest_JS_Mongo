import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import {BookDTO} from '../../DTO/books.dto';
import { BooksService } from 'src/Services/books/books.service';

@Controller('books')
export class BooksController {

    constructor(
        private readonly bookService : BooksService
    ){}

    @Get()
    async getAllBooks(): Promise<BookDTO[]>{
        return await this.bookService.getAllBooks();
    }

    @Get(':bookID')
    async getBookByID(@Param('bookID') bookID : string ): Promise<BookDTO>{
        return await this.bookService.getBookByID(bookID);
    }

    @Post()
    async saveBook(@Body() newBook: BookDTO) : Promise<BookDTO> {
        return this.bookService.saveBook(newBook);
    }

    @Patch()
    updateBook(): string{
        return "Este livro foi atualizado";
    }

    @Delete()
    deleteBook(): string{
        return "Este livro foi apagado"
    }

}
