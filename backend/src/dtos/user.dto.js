
export class UserDto {
    constructor( {first_name, last_name, email, password }){
        
        this.full_name = `${first_name} ${last_name}`.toUpperCase()
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.password = password
        this.role = 'employee'
    }

    userFront(){
        return {
            full_name: this.full_name, 
            email: this.email, 
            role: this.role}
    }
}