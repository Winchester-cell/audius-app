export const getEndPoint = (key: string) => {

    let queryInfo: { endpoint: null | string, searchparams: null | string } = { endpoint: null, searchparams: null }

    if (key === 'trending') {
        queryInfo.endpoint = 'trending'
        return queryInfo
    } else if (key === 'popular') {
        queryInfo.endpoint ='search'
        queryInfo.searchparams = 'sort_method=popular'
        return queryInfo
    } else if (key === 'recent') {
        queryInfo.endpoint = 'search'
        queryInfo.searchparams = 'sort_method=recent'
        return queryInfo
    }

}