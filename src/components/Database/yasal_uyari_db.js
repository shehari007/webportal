import axios from './axios_api/yasal_uyari_axios';
import React, { Component } from 'react'



export default class ppdb extends Component {
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
                const data=res.data
                console.log(data)
                

               
                const database = data.map((data, index) =>
                {
                    return <div>
                        <h4>{data.DATA_heading}</h4><br/><p style={{whiteSpace: 'pre-wrap'}} key={index}>{data.DATA_aciklama}
                    </p></div>
                }
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