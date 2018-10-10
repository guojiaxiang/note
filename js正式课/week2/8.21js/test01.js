/**
 * Created by 29120 on 2018/8/21.
 */

function hasPubProperty(obj, key) {
    if ('key' in obj) {
        if(obj.hasOwnProperty(key)){
            console.log('私有属性');
        }else {
            console.log('公有属性');
        }
    }else {
        console.log('不是我的属性');
    }

}
hasPubProperty(obj, 'name');
hasPubProperty(obj, 'constructor');