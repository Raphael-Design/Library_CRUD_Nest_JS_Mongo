import { BadRequestException, Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository : BookRepository
    ){}

    async getAllBooks() : Promise<BookDTO[]>{
        return await this.bookRepository.getAllBooks();
    }

    async getBookByID(bookID : string) : Promise<BookDTO>{
        try {
            return await this.bookRepository.getBookByID(bookID);
        } catch (error) {
            throw new BadRequestException("No results");
        }
        
    }

    async saveBook(newBook : BookDTO) : Promise<BookDTO> {
        return await this.bookRepository.saveBook(newBook);
    }
}
