    export interface IDocument {
        getSyntax(): void, 
    };
    
    export class Proxy implements IDocument {
        private realDocument: Document;

        constructor(realDocument: Document) {
            this.realDocument = realDocument;
        }

        getSyntax(): void {
            console.log('Passing for proxy...');
            console.log(`Document title: ${this.realDocument.title}`);
            this.realDocument.getSyntax();
        }
    }

    export class Document implements IDocument {
        public title: string;

        constructor(title: string) {
            this.title = title;
        }

        getSyntax(): void {
            console.log(`${this.title} is avaible as an ebook on Amazon!`);
        }
    }