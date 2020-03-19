let nextId = 1;

export class Item {
  constructor(date, status, text, hour) {
    this._id = nextId++;
    this._date = date;
    this._text = text;
    this._status = status;

    this._hour = hour;
  }

  get id() {
    return this._id;
  }
  get date() {
    return this._date;
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
