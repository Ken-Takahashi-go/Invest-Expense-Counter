let nextId = 1;

export class Item {
  constructor(status, text, hour) {
    this._id = nextId++;
    this._text = text;
    this._status = status;

    this._hour = hour;
  }

  get id() {
    return this._id;
  }
  get status() {
    return this._status;
  }
  get text() {
    return this._text;
  }

  get hour() {
    return this._hour;
  }
}
