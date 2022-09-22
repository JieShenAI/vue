import { findIdx, getContainerName } from "@/pages/papers/data";
import { nanoid } from "nanoid";

export default {
    namespaced: true,
    state: {
        data: JSON.parse(localStorage.getItem("papers")) || {},
        age: 18,
    },

    actions: {
        /**
            * 根据用户身份(token)，查询出用户所拥有的所有文件
            * 根据用户身份(token)，查询出某个文件的内容
            * 用户访问另一个文件的时候，将本地缓存的上一个文件保存到服务器，给文件一个是否保存到云端的标志
         */
    },

    mutations: {
        initPaper(state, { paperId, year, cityId }) {
            state.data[paperId] = { year, cityId };
        },
        // init 为 []
        initChapter(state, { paperId, chse }) {
            state.data[paperId][chse] = [];
        },
        // 填充模板的文本
        fill(state, { paperId, chse, arr }) {
            for (let obj of arr) {
                // console.log("obj", obj);
                state.data[paperId][chse].push(obj);
            }
        },
        // 增加
        addP(state, { paperId, chse, id }) {
            let chapter = state.data[paperId][chse];
            chapter.splice(findIdx(chapter, id) + 1, 0, {
                P: "新文本",
                id: nanoid(),
            });
        },
        // 删除
        deleteP(state, { paperId, chse, id }) {
            for (const key in state.data[paperId][chse]) {
                if (state.data[paperId][chse][key].id == id) {
                    state.data[paperId][chse].splice(key, 1);
                    break;
                }
            }
        },
        // 修改
        editP(state, { paperId, chse, id, newValue }) {
            for (const key in state.data[paperId][chse]) {
                if (state.data[chse][key].id == id) {
                    state.data[chse][key].id = nanoid();
                    state.data[chse][key][getContainerName(state.data[chse][key])] = newValue;
                }
            }
        }
    },

    //仓库计算属性
    getters: {

    },

}
