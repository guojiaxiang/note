// 定义一个Element的类
class Element{
    constructor(type,attr,children){
        // 将函数createElement传过来的实参，都放到当前实例私有属性上
        this.type=type;
        this.attr=attr;
        this.children=children;
    }
    render(){
        // 将虚拟的DOM转真实的DOM；this=》element的实例
        // this.attr:{a:1,b:2}
        let ele =document.createElement(this.type);
        for(let key in this.attr){
            // 遍历attr将属性设置到行间属性上；
           let val=key;
            if(key==="className"){
                val="class"
            }
            if(key==="htmlFor"){
                key="for"
            }
            ele.setAttribute(val,this.attr[key]);
        }
        this.children.forEach((item,index)=>{
            // 如果该数组成员是一个虚拟DOM元素，需要继续调用render方法
            let newEle=item instanceof Element ?item.render():document.createTextNode(item);
            ele.appendChild(newEle);
        })
        return ele;

    }
}
let React ={
    createElement(type,attr,...children){//把第三个以及之后的参数都放进children的数组中；
        return new Element(type,attr,children)
    }
};
let ReactDOM={
    render(element,container){
        // element：虚拟DOM
        //appendChild：必须接受一个真实的DOM节点
        //需要将虚拟的DOM元素转换成真实的DOM元素
        container.appendChild(element.render())
    }
};
let a=React.createElement("div",{a:1,b:2,className:"btn"},"珠峰",React.createElement('span',null,11234));
ReactDOM.render(a,window.root)