// components/modal/modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sonVal1: {
      type: "string" ,
      value: ""
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
   sonVal2:"",
    state:"否",
    sonVal:"子组件数据"
  },

  

  /**
   * 组件的方法列表
   */
  methods: {
    changeState:function(){
      this.setData({
        state:"是"
      })
    },

    // 触发myevent事件
    sendValToDad:function(){
      var myEventDetail = {
        val: this.data.sonVal
      }
      this.triggerEvent('myevent', myEventDetail) 
    }
  }
})
