/**
 * 初始化数据项
 * @returns 
 */
export function obj() {
    return {
        avgCountryGdp: 0,
        avgGdp: 0,
        avgProvinceGdp: 0,
        cityID: 0,
        countryGdp: 0,
        countryGdpIncrease: 0,
        gdp: 0,
        gdpIncrease: 0,
        id: 0,
        provinceGdp: 0,
        provinceGdpIncrease: 0,
        year: 0,
    }
}

// 从数组中，找出值为value的下标
export function findIdx(arr, value) {
    let idx = -1;
    for (let v of arr) {
        idx++;
        if (v.id === value) {
            return idx;
        }
    }
}

import vue from '@/main'
/**
 * 初始化paper
 * @returns 
 */
export function initPaper({ paperId, year, cityId }) {
    let paper = [];
    let storePaper = vue.$store.state.paper.data[paperId];
    if (storePaper) {
        paper = storePaper;
    } else {
        vue.$store.commit('paper/initPaper', { paperId, year, cityId });
    }
    return paper;
}

/**
 * 初始化每篇文章，赋值为 []
 * @param {*} chse 
 */
export const initChapter = function (paperId, chse) {
    // if (vue.$store.state.paper.data[paperId][chse] == undefined) {
    if (Object.prototype.hasOwnProperty.call(vue.$store.state.paper.data[paperId], chse) == false) {
        vue.$store.commit("paper/initChapter", { paperId, chse });
    }
    return vue.$store.state.paper.data[paperId][chse];
}


import { nanoid } from "nanoid";
export const paragraphTextArr = function (nodes) {
    // 将获取了数据库数据的页面上的文本添加到arr数组中
    // let nodes = this.$refs.content.childNodes;
    let arr = [];
    for (let node of nodes) {
        arr.push({
            [node.tagName]: node.innerText,
            id: nanoid(),
        });
    }
    return arr;
}

// 获取承载文字的容器名，eg: h1,h2..,p,img
export const getContainerName = (obj) => {
    let name = "P";
    Object.keys(obj).forEach(
        (tagName) => {
            if (tagName != "id") {
                name = tagName;
            }
        }
    )
    return name;
}

// 初始化PImg
export const initPImg = (obj) => {
    let containerName = getContainerName(obj);
    let textValue = obj[containerName];
    let preValue = obj[containerName];
    let isImg = containerName === "IMG" ? true : false;
    return {
        id: obj.id,
        // containerName,
        isImg,
        textValue,
        preValue,
        isShowTools: "hidden",
        isEdit: false,
    }
}
