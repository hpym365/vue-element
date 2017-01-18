import * as types from '../types'

const state = {
  loading: false,
  sort: true,
  data: [],
  column: [
    {
      showname: '姓名',
      colname: 'name',
      show: true,
      type: 'button-component',
      sort: true,
      sortType: 'desc',
      width: '50%'
    }, {
      showname: '年龄',
      colname: 'age',
      show: true,
      type: 'a-component',
      sort: true,
      sortType: 'desc'
    }, {
      showname: '性别',
      colname: 'sex',
      show: true
    }, {
      showname: '备注',
      colname: 'desc',
      show: true
    }, {
      showname: '删除',
      colname: 'delete',
      show: true,
      type: 'delete-component'
    }],
  url: '',
  requestparam: {},
  sortfield: '123',
  sorttype: 'asc',
  headerclass: ''
}

const getters = {
  [types.GETTER_LOADING]: state => {
    return state.loading
  },
  [types.GETTER_SORT]: state => {
    return state.sort
  },
  [types.GETTER_GRID_DATA]: state => {
    return state.data
  },
  [types.GETTER_GRID_COLUMN]: state => {
    return state.column
  },
  [types.GETTER_GRID_REQUEST_URL]: state => {
    return state.url
  },
  [types.GETTER_GRID_REQUEST_PARAM]: state => {
    return state.param
  },
  [types.GETTER_CURRENT_SORT_FIELD]: state => {
    return state.sortfield
  },
  [types.GETTER_GRID_HEADER_CLASS]: state => {
    return state.headerclass
  }
}

const actions = {
  /**
   * 更换排序字段了  需要将requetparam 里的 sort 更新为当前字段  将sort方式更改为 默认的asc
   * @type {string}
   */
  [types.ACTION_SORT_BY_FIELD] (store, value) {
    console.log(value)
    let sorttype = 'asc'
    if (store.state.sortfield === value) {
      if (store.state.sorttype === 'asc') {
        sorttype = 'desc'
      } else if (store.state.sorttype === 'desc') {
        sorttype = '-'
      } else {
        sorttype = 'asc'
      }
    } else {
      store.commit([types.CHANGE_CURRENT_SORT_FIELD], value)
    }
    store.commit([types.CHANGE_CURRENT_SORT_TYPE], sorttype)
    store.commit([types.CHANGE_GRID_REQUEST_PARAM], {
      sortfield: store.state.sortfield,
      sorttype: store.state.sorttype
    })
  }
}

const mutations = {
  [types.CHANGE_LOADING] (state, value) {
    state.loading = value
  },
  [types.CHANGE_CURRENT_SORT_FIELD] (state, value) {
    state.sortfield = value
  },
  [types.CHANGE_CURRENT_SORT_TYPE] (state, value) {
    state.sorttype = value
  },
  [types.CHANGE_GRID_REQUEST_PARAM] (state, value) {
    state.requestparam = Object.assign(state.requestparam, value)
  },
  [types.CHANGE_GRID_COLUMN] (state, value) {
    state.column = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
