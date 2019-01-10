//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    dadVal1:"父组件数据1",  
    dadVal2: "父组件数据2",
    sonVal:""
  },

  // 方法2将父组件的值传给子组件
  sendValToSon2:function(){
    // 使用选择器选择组件实例节点，返回匹配到组件实例对象 
    let modal = this.selectComponent('#modal');
    // 给子组件数据重新赋值
    modal.setData({
      sonVal2:this.data.dadVal2
    })
  },


  // 调用子组件方法（可以与方法2合并使用）
  getFuncFromSon:function(){
    // 使用选择器选择组件实例节点，返回匹配到组件实例对象 
    let modal = this.selectComponent('#modal');
    // 调用子组件方法
    modal.changeState();
  },


  // e.detail是子组件传过来的数据对象
  getSonVal:function(e){
    this.setData({
      sonVal: e.detail.val
    })
  }
})
