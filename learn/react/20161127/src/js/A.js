import React from 'react'
import {Link } from 'react-router'


class A extends React.Component {
    constructor (props){
        super(props)

    }

    KeepScrollBar() {
        
        var scrollPos;
        if (typeof window.pageYOffset != 'undefined') {
            scrollPos = window.pageYOffset;
        }
        else if (typeof document.body != 'undefined') {
            scrollPos = document.querySelector('ul').scrollTop;
        }
        document.cookie = "scrollTop=" + scrollPos; 
        console.log(scrollPos);
    }
 

    componentDidMount () {
        this.props.changeCome()
        console.log('离开---'+this.props.transitionL);
         console.log('进入---'+this.props.transitionE);

          window.addEventListener('scroll', this.KeepScrollBar.bind(this));
            if (document.cookie.match(/scrollTop=([^;]+)(;|$)/) != null) {
                var arr = document.cookie.match(/scrollTop=([^;]+)(;|$)/); 
                document.querySelector('ul').scrollTop = parseInt(arr[1]);
                console.log(parseInt(arr[1]));
            }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.KeepScrollBar.bind(this));
    }

    render () {
        return(<ul>
                <li><Link to="/B">这是一个列表标题1</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题2</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题3</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题4</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题5</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题6</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题7</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题8</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题9</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题10</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题11</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题12</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题13</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题14</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题15</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题16</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题17</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题18</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题1</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题2</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题3</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题4</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题5</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题6</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题7</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题8</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题9</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题10</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题11</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题12</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题13</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题14</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题15</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题16</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题17</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题18</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题1</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题2</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题3</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题4</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题5</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题6</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题7</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题8</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题9</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题10</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题11</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题12</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题13</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题14</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题15</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题16</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题17</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题18</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题1</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题2</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题3</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题4</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题5</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题6</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题7</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题8</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题9</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题10</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题11</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题12</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题13</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题14</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题15</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题16</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题17</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题18</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题1</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题2</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题3</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题4</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题5</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题6</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题7</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题8</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题9</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题10</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题11</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题12</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题13</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题14</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题15</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题16</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题17</Link><hr/></li>
                <li><Link to="/B">这是一个列表标题18</Link><hr/></li>
            </ul>);
    }
}

export default A