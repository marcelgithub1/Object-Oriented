export class Authentication{
    static login(authentic, password){
        if(Authentication.authenticationTwo(authentic)){
            return authentic.authentication(password);
        }
        return false
    };

    static authenticationTwo(authentic){
        return "authentication" in authentic && 
        authentic.authentication instanceof Function
    };
};