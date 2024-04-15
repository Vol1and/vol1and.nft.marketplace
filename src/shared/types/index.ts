export type SortOrder = 'asc' | 'desc'

export enum RoutePath {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile',
    PROFILE_DETAIL = '/profile/:id',
    ARTICLES = '/articles',
    ARTICLE_CREATE = '/articles/create',
    ARTICLE_EDIT = '/articles/:id/edit',
    ARTICLE_DETAIL = '/articles/:id',
    ADMIN_PANEL = '/admin-panel',
    NOT_FOUND = '*'
}
