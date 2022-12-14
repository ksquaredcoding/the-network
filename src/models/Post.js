import { Account } from "./Account.js"

export class Post {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.createdAt = data.createdAt
    this.creator = new Account(data.creator)
    this.imgUrl = data.imgUrl
  }
}