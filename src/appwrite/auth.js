import { Client, Account, ID } from "appwrite";
import config from "../conf/config.js";

//class
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        const promise = account.create(ID.unique(), email, name,password);

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    }

    async login({ email, password }) {
        
        
        const promise = account.createEmailPasswordSession({email,password});
        
        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
        

    }

    async getCurrentUser() {
        try {
            await this.account.get();
        } catch (error) {
            throw error;
        }
        return null ;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw (error);
        }
    }
}
//object
const authService = new AuthService();
//export object
export default authService;