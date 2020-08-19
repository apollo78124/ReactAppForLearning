class Items {
    constructor(name) {
      this.title = name;
    }
  
    present() {
      return 'Have to do ' + this.title;
    }
  }
  
  class ToDo extends Items {
    constructor(name, start, end, description, comment) {
      super(name);
      this.start = start;
      this.end = end;
      this.description = description;
      this.comment = comment;
    }  
    show() {
         return this.present() + ' starting ' + this.start + ' until ' + this.end + " " + this.description + "comment: " + this.comment;
    }
  }
  export default Items;