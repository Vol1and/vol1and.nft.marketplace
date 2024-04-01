export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}
export interface Article {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[]
    blocks: ArticleBlock[]
}

export enum ArticleBlockType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CODE = 'CODE'
}

export interface ArticleBlockBase {
    id: string,
}

export type ArticleBlock = ArticleBlockText | ArticleBlockCode | ArticleBlockImage

export interface ArticleBlockImage extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string
    title: string
}

export interface ArticleBlockCode extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string
}

export interface ArticleBlockText extends ArticleBlockBase {
    type: ArticleBlockType.TEXT
    title: string,
    paragraphs: string[]
}
