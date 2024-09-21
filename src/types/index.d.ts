interface IBar {
    _id?: string,
    name: string,
    href: string
}

type IBarList = Array<IBar>

interface IInfo {
    _id?: number,
    title: string,
    content: string
}

type IIInfoList = Array<IInfo>

interface IMember {
    _id?: string,
    name: string,
    head: string,
    status: Array<number>,
}

type IMemberList = Array<IMember>

interface IAchieve {
    _id?: string,
    name: string,
    imgSrc: string
}

type IAchieveList = Array<IAchieve>

interface IAbridgeUpdatesView {
    _id?: string,
    title: string,
    cover: string,
    ellipsis: string,
    createdAt: string,
    author: string
}

type IAbridgeUpdatesViewList = Array<IAbridgeUpdatesView>

interface IAbridgeUpdatesContent {
    _id?: string,
    content: string,
    content_text: string,
}

export {
    IBar,
    IBarList,
    IInfo,
    IIInfoList,
    IMember,
    IMemberList,
    IAchieve,
    IAchieveList,
    IAbridgeUpdatesView,
    IAbridgeUpdatesViewList,
    IAbridgeUpdatesContent,
}