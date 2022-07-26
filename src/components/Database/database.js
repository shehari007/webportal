import axios from '../../axios'
import React, { Component } from 'react'


export default class database extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deneme: []
        };
    }
    getUsersData() {
        axios
            .get(`/database`, [])
            .then(res => {
                 const data=[res.data]
                
                console.log(data)
                //console.log(JSON.parse(data)["name"]);
                const database = [data].map(data =>
                    <div>
                    <p key={"avm_id"}>{data}</p>
                    <p key={"avm_adresi"}>{data}</p>
                    </div>
                    )
                this.setState({database})

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    
    render() {
        return (
            
            <div>
                    {this.state.database}
            </div>
        )
    }
}