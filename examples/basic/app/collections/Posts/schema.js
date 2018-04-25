const Image = {
  url: {
    type: String
  },
  size: {
    type: Number
  }
}

export default {
  title: {
    type: String,
    custom(title) {
      if (title.length < 5) {
        return 'short'
      }
    }
  },
  content: {
    type: String,
    custom(content, {doc}) {
      if (content.length < doc.title.length) {
        return 'smallerThanTitle'
      }
    }
  },
  tags: {
    type: [String],
    optional: true
  },
  image: {
    type: Image,
    optional: true
  },
  creatorId: {
    type: String,
    optional: true
  }
}
