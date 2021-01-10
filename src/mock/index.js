import Mock from 'mockjs'

Mock.mock(/\/users/,'get',function(){
    console.log('66666')
    return Mock.mock({
        code:200,
        data:{
            message:'成功'
        }
    })
})

export default Mock