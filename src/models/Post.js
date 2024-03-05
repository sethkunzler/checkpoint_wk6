export class Post {
  constructor(data) {
    this.body = data.body || ''
    this.createdAt = new Date(data.createdAt) || new Date()
    this.creator = data.creator || ''
    this.creatorId = data.creatorId || ''
    this.id = data.id || data._id
    this.imgUrl = data.imgUrl || 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnQ1d3M0Zml1YXRodThzM2hreG00cjh5MTRyZGNxd3ZwaGcyc281biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3V0HSvyvbXrKHmpO/giphy.gif'
    this.likeIds = data.likeIds || []
    this.likes = data.likes || []
    this.updatedAt = new Date(data.updatedAt) || new Date()
  }
}