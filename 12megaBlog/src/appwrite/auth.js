import conf from '../conf/conf.js'

import {Client, Account , ID} from 'appwrite'


// from apppwriate documentation 
// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// const account = new Account(client);
// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });


export class AuthService{
    client  = new Client();
    account;
    
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        this.client.setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }
    
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
           if(userAccount){
                return this.login(email,password)
           }else
            {return userAccount}
        } catch (error) {
            throw error
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailSession(email,password)
           
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
           // throw error
           console.log("appWrite service :: getCurrentUser::error",error)
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
        return null;
    }
}


const athService = new AuthService()
export default athService