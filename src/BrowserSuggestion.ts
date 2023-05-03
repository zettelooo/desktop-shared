export type BrowserSuggestion<T extends BrowserSuggestion.Type = BrowserSuggestion.Type> = {
  [BrowserSuggestion.Type.SearchHistory]: {
    readonly type: BrowserSuggestion.Type.SearchHistory
    readonly query: string
  }
  [BrowserSuggestion.Type.BrowseHistory]: {
    readonly type: BrowserSuggestion.Type.BrowseHistory
    readonly title: string
    readonly url: string
    readonly faviconUrl?: string
  }
  [BrowserSuggestion.Type.Bookmark]: {
    readonly type: BrowserSuggestion.Type.Bookmark
    readonly title: string
    readonly url: string
    readonly faviconUrl?: string
  }
  [BrowserSuggestion.Type.SearchEngineSuggestedQuery]: {
    readonly type: BrowserSuggestion.Type.SearchEngineSuggestedQuery
    readonly suggestedQuery: string
  }
  [BrowserSuggestion.Type.SearchEngineSuggestedUrl]: {
    readonly type: BrowserSuggestion.Type.SearchEngineSuggestedUrl
    readonly primaryText: string
    readonly secondaryText?: string
    readonly url: string
    readonly faviconUrl?: string
  }
}[T]

export namespace BrowserSuggestion {
  export enum Type {
    SearchHistory = 'SEARCH_HISTORY',
    BrowseHistory = 'BROWSE_HISTORY',
    Bookmark = 'BOOKMARK',
    SearchEngineSuggestedQuery = 'SEARCH_ENGINE_SUGGESTED_QUERY',
    SearchEngineSuggestedUrl = 'SEARCH_ENGINE_SUGGESTED_URL',
  }

  export interface SearchEngine {
    readonly name: string
    readonly faviconUrl?: string
  }
}
