import { Document, Proxy } from './proxy.ts';

const document: Document = new Document("It: a coisa");

const proxy = new Proxy(document);
proxy.getSyntax();