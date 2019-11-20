import React,{Component,Fragment} from 'react';
export default class List extends Component{
  render() {
      console.log(this.props);
      return (
          <table className="table table-bordered">
              <thead>
                  <tr>
                      <td>字段</td>
                      <td>值</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>张三</td>
                  </tr>
              </tbody>
          </table>
      )
  }
}