module Journal {
  export interface IEntry {
    title: string;
    body: string;
    points: number;
    wordCount(): number;
    upVote(): void;
    downVote(): void;
    validate(): boolean;
  }

  export class Entry implements IEntry {
    points: number = 0;
    constructor(public title: string, public body: string) {}
    wordCount() {
      var bodyArray: string[] = this.body.split(" ");
      return bodyArray.length;
    }
    upVote() {
      this.points++;
    }
    downVote() {
      this.points--;
    }
    validate() {
      return ((this.title.length<=20)&&(this.body.length<=500));
    }
  }



}
