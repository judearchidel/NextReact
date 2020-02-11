import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';

class Indexpage extends Component {
   static async getInitialProps(contex){
       console.log(contex);
       return {};
    }

    render(){
        return(
 
    <div>
        <h1>The main Page</h1>
        <p>Goto  <Link href="/auth"><a>Auth</a></Link> </p>
        <button onClick={()=> {Router.push('/auth') }} >go to auth </button>
    </div>
);
}
}

export default Indexpage;