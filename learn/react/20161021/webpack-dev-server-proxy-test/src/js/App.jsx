import React from 'react';
import 'whatwg-fetch';

let App = React.createClass({
    getInitialState: ()=>{
        return{
           data: 'lizi'
        } 
    },
    componentDidMount: function(){
        var xhr = new XMLHttpRequest();

         xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var status = xhr.status;
                if (status >= 200 && status < 300) {
                   console.log('%%%%%%%%%%%%%%%',xhr.responseText, xhr.responseXML);
                } else {
                    console.log('失败===========',status);
                }
            }
            
        }
        xhr.open("GET", '/try/ajax/demo_test.php', true);
            //设置表单提交时的内容类型
            xhr.send(null);
        fetch('/try/ajax/demo_test.php')
            .then((response) => {
                console.log(response)
                return response.json();

            })
            .then((data) => {
                console.log(data);
                this.setState({
                    data: JSON.stringify(data)
                });
                console.log('===========',this.state.data);
            })
            .catch((ex) => {
                console.log('====================================',ex);
            });
    },
    render: function(){
        let d = this.state.data;
        return (
            <div>
                {d}
            </div>);
    }
});
export default App;
