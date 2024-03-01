export class Post {
  constructor() {
    this.body = data.body || ''
    this.createdAt = new Date(data.createdAt) || new Date()
    this.creator = data.creator || ''
    this.creatorId = data.creatorId || ''
    this.id = data.id || data._id
    this.imgUrl = data.imgUrl || ''
    this.likeIds = data.likeIds || []
    this.likes = data.likes || []
    this.updatedAt = new Date(data.updatedAt) || new Date()
  }
}