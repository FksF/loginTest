import { UserEntity } from '../User.entity';
import { User } from 'src/app/domain/entities/User';

export class UserEntityResponse {

    public static toUser(userEntity: UserEntity,  userR: User): User {
        console.log('userEntity', userEntity);
        console.log('userR', userR);
        let user: User = null;
        if (userEntity != null) {
            user = new User();
            // user.setFirstName(userEntity.contact.firstName);
            // user.setLastName(userEntity.contact.lastName);
            // user.setAge(userEntity.contact.age);
            // user.setUsername(userEntity.username);
            // user.setStatus(userEntity.status);
            // user.setCorporateMail(userEntity.contact.corporateMail);
            // user.setPersonalMail(userEntity.contact.personalMail);
            // user.setInitial_names(userEntity.contact.firstName, userEntity.contact.lastName);
            // user.setCode(userEntity.contact.code);
            // user.setPortfolio(userEntity.portfolio);
            // user.setUserId(userEntity.userId);
            // user.setContact(userEntity.contact);
            // user.setRememberCredentials(userR.remember_credentials);
            // user.setName_document(Number(userR.name_document));
            // user.setNumberDocument(userR.number_document);
            // user.setFullName_document(userR.fullName_document);
            // user.setTypeDocument(userR.type_document);
            // user.setCountLogin(userEntity.dataLogin.countLogin)
        }
        return user;
    }

}