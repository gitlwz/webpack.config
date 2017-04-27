import React from 'react';

let Message = React.createClass({
    render () {
        return (
            <div>sd</div>
        );
    }
});

let App = React.createClass({
    propTypes:{
        // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
        optionalArray: React.PropTypes.array,
        optionalBool: React.PropTypes.bool,
        optionalFunc: React.PropTypes.func,
        optionalNumber: React.PropTypes.number,
        optionalObject: React.PropTypes.object,
        optionalString: React.PropTypes.string,

        // 可以被渲染的对象 numbers, strings, elements 或 array
        optionalNode: React.PropTypes.node,

        //  React 元素
        optionalElement: React.PropTypes.element,

        // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
        optionalMessage: React.PropTypes.instanceOf(Message),

        // 用 enum 来限制 prop 只接受指定的值。
        optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

        // 可以是多个对象类型中的一个
        optionalUnion: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.instanceOf(Message)
        ]),

        // 指定类型组成的数组
        optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

        // 指定类型的属性构成的对象
        optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

        // 特定 shape 参数的对象
        optionalObjectWithShape: React.PropTypes.shape({
            color: React.PropTypes.string,
            fontSize: React.PropTypes.number
        }),

        // 任意类型加上 `isRequired` 来使 prop 不可空。
        requiredFunc:React.PropTypes.func.isRequired,

        // 不可空的任意类型
        requiredAny:React.PropTypes.any.isRequired,

        // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
        customProp: function (props, propName, componentName) {
            if (!/matchme/.test(props[propName])) {
                return new Error('Validation failed!');
            }
        }
    },

    getDefaultProps (){
        return {
            title: 123,
            requiredFunc() {
                console.log('function');
            },
            requiredAny: 23,
            optionalEnum: 'News'
        }
    },

    componentDidMount () {
      console.log(this.props);
    },

    render (){
        return(
            <div >
                div换行要在return里加括号！
            </div>
        );
    }
});

export default App;