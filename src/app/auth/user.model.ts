export class User{
    constructor(
        //_token & _tokenExpiration date shouldn't be retrieved from here
        public email: string, 
        public id: string, 
        private _token: string,
        private _tokenExpirationDate: Date  
        ){}

    get token(){
        //user can't override code
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null;
        }
        return this._token;

    }
}