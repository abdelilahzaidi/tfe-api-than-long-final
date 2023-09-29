import { IsBoolean, IsEmail, IsIn, IsNotEmpty } from "class-validator";
import { UserGender } from "src/commun/enums/gender.enum";
import { LevelEnum } from "src/commun/enums/level.enum";
import { UserStatus } from "src/commun/enums/status.enum";


export class UserCreateDTO{
    @IsNotEmpty()
    first_name: string;
  
    @IsNotEmpty()
    last_name: string;
  
    @IsNotEmpty()
    @IsEmail({}, { message: 'Please enter correct email address' })
    email: string;   
  
    @IsNotEmpty()
    @IsIn(['member', 'admin','responsale'], { message: 'Invalid status' }) 
    status: UserStatus;


    @IsNotEmpty()
    @IsIn(['male', 'female'], { message: 'Invalid gender' }) 
    gender: UserGender;
  
    @IsNotEmpty()
    birthDate: Date;
  
    
    @IsNotEmpty()
    rue: string;

    @IsNotEmpty()
    commune: string;

    @IsNotEmpty()
    ville: string;
  
    @IsNotEmpty()
    @IsBoolean()
    actif: boolean; 
    
  
    @IsNotEmpty()
    gsm: string;

    @IsNotEmpty()
    grade:LevelEnum;
   
}