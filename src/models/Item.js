let nextId = 1;

class Item {
  constructor(text, hour) {
    this._id = nextId++;
    this._text = text;
    this._hour = hour;
  }

  get id() {
    return this._id;
  }

  get text() {
    return this._text;
  }
  get hour() {
    return this._hour;
  }
}

export default Item;
