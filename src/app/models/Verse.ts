
export class Verse {

    text: string;

    chapter: string;

    book: string;

    verseNumber: string;

    id: number;

    constructor(text: string, chapter: string, book: string, verseNumber: string, id: number){
        this.text = text;
        this.chapter = chapter;
        this.book = book;
        this.verseNumber = verseNumber;
        this.id = id;
    }

}