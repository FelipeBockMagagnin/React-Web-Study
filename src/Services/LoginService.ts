class LoginService {
    TOKEN_KEY = "@login-Token";

    isAuthenticated = () : boolean => {
        return localStorage.getItem(this.TOKEN_KEY) !== null;
    }
    
    getToken = () : string | null => {
        return localStorage.getItem(this.TOKEN_KEY);
    } 
    
    login = (token : string) => {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    logout = () : void => {
        localStorage.removeItem(this.TOKEN_KEY);
    };
}

export default LoginService