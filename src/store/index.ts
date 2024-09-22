import {ref} from "vue"
import {defineStore} from "pinia";
import {apiUrl} from "../config";
import axios from "axios";
import type {Ref} from "vue"
import type {IAbridgeUpdatesViewList, IAbridgeUpdatesView} from "../types";

export default defineStore("defineStore", () => {
    const updatePageNum: Ref<number> = ref(1)
    const searchPageNum: Ref<number> = ref(1)
    const updateId: Ref<string> = ref("")
    const search: Ref<string> = ref("")
    const staticSearch: Ref<string> = ref("")
    const searchData: Ref<IAbridgeUpdatesViewList> = ref(null)
    const searchPageTotal: Ref<number> = ref(1)
    const url: string = `${apiUrl}/updates`

    const setUpdatePageNum = (num: number): void => {
        updatePageNum.value = num
    }
    const setUpdateId = (id: string): void => {
        updateId.value = id
    }
    const setStaticSearch = (value: string): void => {
        staticSearch.value = value
    }
    const setSearchData = (value: IAbridgeUpdatesViewList): void => {
        searchData.value = value
    }
    const setSearchPageTotal = (value: number): void => {
        searchPageTotal.value = value
    }

    const keyword = (str: string): string => str === "" ? str : str.replaceAll(search.value, `<span style="color: red">${search.value}</span>`)

    const getSearchData = async (): Promise<void> => {
        let {data: {data, pageTotal: _pageTotal}} = await axios.get(`${url}/pages_condition`, {
            params: {
                title_regex: `/${search.value}/`,
                content_text_regex: `/${search.value}/`,
                author_regex: `/${search.value}/`,
                page: searchPageNum.value
            }
        })
        if (search.value !== "") {
            data = data.map((item: IAbridgeUpdatesView) => {
                item.title = keyword(item.title)
                item.ellipsis = keyword(item.ellipsis)
                item.author = keyword(item.author)
                return item
            })
        }
        setSearchData(data)
        setSearchPageTotal(_pageTotal)
    }
    const setSearchPageNum = async (num: number): Promise<void> => {
        searchPageNum.value = num
        await getSearchData()
    }

    return {
        updatePageNum,
        updateId,
        search,
        searchPageNum,
        staticSearch,
        searchData,
        searchPageTotal,
        setUpdatePageNum,
        setUpdateId,
        setSearchPageNum,
        setStaticSearch,
        setSearchData,
        setSearchPageTotal,
        getSearchData
    }
}, {
    persist: {
        pick: ['updateId'],
    },
})