import axios from '../../axios'
import React, { Component } from 'react'


export default class database extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deneme: [{}]
        };
    }
    getUsersData() {
        axios
            .get(`/database`, [{}])
            .then(res => {
                 const data=res.data
                
                console.log(data)
                //console.log(JSON.parse(data)["name"]);
                const database = data.map(u =>
                    <div>
                    <p>{(u.id)}</p>
                    <p>{(u.name)}</p>
                    
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