export interface UserCardModel{
  "user": {
    "curp": string,
    "name": {
      "firstName": string,
      "lastName": string,
      "secondLastName": string
    },
    "birthDay": {
      "day": number,
      "month": number,
      "year": number
    },
    "cards": Array<any>
  },
}
