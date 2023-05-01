import { IsNotEmpty, IsString, MaxLength, MinLength, IsNumber, IsPositive} from 'class-validator';

export class AuthorDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly surname: string;
}