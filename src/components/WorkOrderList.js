import React, {Component} from 'react'
import {Table,Button} from 'react-bootstrap'
import WorkOrder from './WorkOrder'
import makeRequest from "../api/makeRequest"


class WorkOrderList extends Component {
    constructor(){
        super();
        this.state = {
            WorkOrders : []
        }
    }
    componentWillMount(){
        let self = this;
        makeRequest("http://104.211.31.153/ids", "GET")
            .then(function (result) {
                self.setState({WorkOrders : result})
            })
            .catch(function (err) {
                console.log(err)
            });
    }

    getAllOrders(){
        let self = this;
        makeRequest("http://104.211.31.153/ids", "GET")
            .then(function (result) {
                self.setState({WorkOrders : result})
            })
            .catch(function (err) {
                console.log(err)
            });

    }

    // DELETE Logic
    deleteWorkOrder(id){
        let self = this;
        makeRequest("http://104.211.31.153/ids/" + id, 'DELETE')
            .then(function (result) {
                let WO = self.state.WorkOrders.filter(function(workOrder){
                    return workOrder.id !== id;
                })
                self.setState({WorkOrders : WO})
            })
            .catch(function (err) {
                console.log(err)
            });
    }



    dequeueFirstOrder(){
        let self = this;
        makeRequest("http://104.211.31.153/dequeue", 'GET')
            .then(function (result) {
                let WO = self.state.WorkOrders.filter(function(workOrder){
                    return workOrder.id === result.id;
                })
                self.setState({WorkOrders : WO})
            })
            .catch(function (err) {
                console.log(err)
            });

    }


    render() {
        console.log("render")
        let WorkOrders = this.state.WorkOrders;
        return (
            <div className="row">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12" style={{paddingLeft: '0px'}}>
                        <Button bsStyle="primary" onClick={() => this.dequeueFirstOrder()}>
                            Highest priority Work Order
                        </Button>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                        <Button bsStyle="info" onClick={() => this.getAllOrders()}>
                            Display All Work Orders
                        </Button>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Time of Creation</th>
                            <th>Work Order Type</th>
                            <th>Done</th>
                        </tr>
                        </thead>
                        <WorkOrder
                            orders={WorkOrders}
                            deleteWorkOrder={this.deleteWorkOrder.bind(this)}
                        />
                    </Table>
                </div>
            </div>
        )
    }
}

export default WorkOrderList;
