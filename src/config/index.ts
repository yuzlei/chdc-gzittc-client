import {setId} from "@/utils";
import type {IInfo, IBarList, IIInfoList} from "@/types";

const apiUrl: string = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1"

const bannerData: IInfo = {
    _id: 0,
    title: "广州市工贸技师学院牧码人开发社",
    content: `欢迎来到广州市工贸技师学院牧码人开发社！自2013年成立以来，我们一直致力于构建一个充满创新精神的学习环境，旨在提升学生在Web设计和开发领域的技能。`,
}

const bannerBtnData: IBarList = setId([{
    name: "了解更多",
    href: "/index/about",
}, {
    name: "加入我们",
    href: "/",
}])

const barData: IBarList = setId([{
    name: "首页",
    href: "/index/home",
}, {
    name: "动态",
    href: "/index/updates",
}, {
    name: "联系我们",
    href: "/index/contact",
}])

const infoData: IIInfoList = setId([{
    title: `社团简介`,
    content: `
        广州市工贸技师学院牧码人开发社
        <br/>
        （Guangzhou Industry and Trade Technician College Code Herders Development Club，简称 CHDC-GZITTC）
        <br/>
        自2013年成立以来，我们一直致力于构建一个充满创新精神的学习环境，
        <br/>
        旨在培养成员对Web前端开发的浓厚兴趣与专业技能。我们坚信理论与实践并重的学习模式是通往成功的最佳路径，
        <br/>
        因此，我们通过理论学习与实战项目相结合的方式，引导成员深入掌握HTML, CSS, JavaScript等核心语言，奠定扎实的技术基础。
    `,
}, {
    title: `社团宗旨`,
    content: `
        为怀揣理想者创造机会，
        <br/>
        为苦于现状者竖起护盾，
        <br/>
        为困于迷雾者照亮前路。
        <br/>
        在校内构建前沿的Web前端技术交流中心，
        <br/>
        联结校园技术精英，
        <br/>
        开创属于我们的一方天地。
    `,
}, {
    title: `社团成员`,
    content: `
        截至2024年，社团成员总人数已达百余人。
        <br/>
        培养了许多优秀的前端开发工程师，制作了诸多优质项目。
    `,
}, {
    title: `社团成就`,
    content: `社团成员积极参与各类比赛，为社团及学校赢得了诸多奖项`,
}])

export {
    apiUrl,
    bannerData,
    bannerBtnData,
    barData,
    infoData
}