import React,{Component,Fragment} from 'react';
import Link from 'umi/link';
export default class List extends Component{
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/user/detail/1">1</Link>
                </li>
            </ul>
        )
    }
}