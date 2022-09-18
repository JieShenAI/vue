import { findIdx, getContainerName } from "@/pages/papers/data";
import { nanoid } from "nanoid";
let state = {
    data: JSON.parse(localStorage.getItem("papers")) || {},
    age: 18,
}

let actions = {
    /**
        * 根据用户身份(token)，查询出用户所拥有的所有文件
        * 根据用户身份(token)，查询出某个文件的内容
        * 用户访问另一个文件的时候，将本地缓存的上一个文件保存到服务器，给文件一个是否保存到云端的标志
     */

    add({ commit }, data) {
        commit("addP", data);
    },

}

let mutations = {
    // init 为 []
    init(state, { chse }) {
        state.data[chse] = [];
    },
    // 填充模板的文本
    fill(state, { chse, arr }) {
        for (let obj of arr) {
            // console.log("obj", obj);
            state.data[chse].push(obj);
        }
    },
    // 增加
    addP(state, { chse, id }) {
        let chapter = state.data[chse];
        chapter.splice(findIdx(chapter, id) + 1, 0, {
            P: "新文本",
            id: nanoid(),
        });
    },
    // 尾插
    appendP(state, { chse }) {
        let chapter = state.data[chse];
        let obj = {
            P: "新文本",
            id: nanoid(),
        };
        chapter.push(obj);
    },
    // 删除
    deleteP(state, { chse, id }) {
        for (const key in state.data[chse]) {
            if (state.data[chse][key].id == id) {
                state.data[chse].splice(key, 1);
                break;
            }
        }
    },
    // 修改
    editP(state, { chse, id, newValue }) {
        for (const key in state.data[chse]) {
            if (state.data[chse][key].id == id) {
                state.data[chse][key].id = nanoid();
                state.data[chse][key][getContainerName(state.data[chse][key])] = newValue;
            }
        }
    }
}

//仓库计算属性
let getters = {

};

//对外暴露小仓库
export default {
    state,
    mutations,
    actions,
    getters
}

