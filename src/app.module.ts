import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './Controllers/books/books.controller';
import { Mongoose } from 'mongoose';
import { BooksService } from './Services/books/books.service';
import { BookSchema } from './Mongo/Schemas/book.schemas';
import { BookRepository } from './Mongo/Repository/book.repository';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/biblioteca', {useNewUrlParser : true, useUnifiedTopology : true}),
    MongooseModule.forFeature([
      { name : 'book', schema : BookSchema}
    ])
  ],
  controllers: [BooksController],
  providers: [BooksService, BookRepository],
})
export class AppModule {}
