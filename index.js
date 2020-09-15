class Formatter {
  //add static methods here
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize (sentence) {
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let newArray = sentence.split(' ')
    return (newArray.map(word => {
      if (word === newArray[0])
        { return this.capitalize(word) }
      else {
        if (!(exceptions.includes(word)))
          { return this.capitalize(word) }
        else 
          {return word}
      }
    })
    ).join(' ');
  }
}