/*
    1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
    2.reducer函数会接到两个参数，分别为：之前的状态（preState），动作对象（action）
*/

const initState = []
export default function settingReducer(preState=initState, action) {
    // 从action对象中获取：type、data
    const {type, data} = action;
    // 根据type决定如何加工数据
    switch (type) {
        case 'saveData':
            return data

        default:
            return preState
    }
}