import { Contains, IsInt, IsLength, IsEmail, IsFQDN, IsDate , ValidationOptions} from 'validator.ts/decorator/Validation';

export class Post {

    @IsLength(10, 20, { message: 'O tamanho do titulo deve estar entre 10 e 20 caracteres.' })
    title: string;

    @Contains('hello', { message: 'O texto deve conter "hello".' })
    text: string;

    @IsInt({ min: 0, max: 10}, { message: 'O Rating deve estar entre 0 e 10.'} )
    rating: number;

    @IsEmail( { } , { message : 'E-mail informado inválido.' } )
    email: string;

    @IsFQDN( { }, { message: 'Dominio informado não está correto' } )
    site: string;

    // @IsDate() // não está validando data ???
    createDate = new Date();
}
