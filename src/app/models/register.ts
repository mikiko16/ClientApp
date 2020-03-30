export class RegisterModel {
    constructor(
      public firstName: string,
      public lastName: string,
      public passwordhash: string,
      public email: string,
      public companyname: string,
      public isActive: boolean,
      public isAdmin: boolean
    ) {}
  }