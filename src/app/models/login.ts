import { IsEmail, NotEmpty, MinLength} from 'validator.ts/decorator/Validation';
import { Trim } from 'validator.ts/decorator/Sanitization';

export class Login {

    @NotEmpty( {message: 'INVALIDEMAIL'} )
    @IsEmail( { }, {message: 'INVALIDEMAILTYPE'} )
    email = '';

    @Trim()
    @NotEmpty( {message: 'INVALIDPASSWORD'} )
    @MinLength(5, {message: 'INVALIDPASSWORDLENGTH'})
    password = '';
}
