import React, { useEffect, useState } from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import axios from 'axios';
import swal from 'sweetalert';
import toast, { Toaster } from 'react-hot-toast'

const SellerTable = () => {
    const [members, setMember] = useState([]);
    const [search, setSearch] = useState('')
    const [filterMember, setFilterMember] = useState([])
    const [plus, setPlus] = useState(0)
    const [minus, setMinus] = useState(0);
    const [totalMember, setTotalMember] = useState(0)


    const getPurchase = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/purchase`);

        setMember(response.data.data)
        setFilterMember(response.data.data)
        // console.log(response.data.data);

    }


    const columns = [
        {
            name: "Name",
            selector: (row) => row.uname,
            //sortable : true
        },
        {
            name: "Email",
            selector: (row) => row.email
        },
        {
            name: "Number",
            selector: (row) => row.number
        },
        {
            name: "Address",
            selector: (row) => row.address
        },
        {
            name: "City",
            selector: (row) => row.city
        },
        {
            name: "State",
            selector: (row) => row.state
        },
        {
            name: "Pincode",
            selector: (row) => row.pincode
        },
        {
            name: "Product",
            selector: (row) => row.pname
        },
        {
            name: "Quantity",
            selector: (row) => row.quantity
        },
        {
            name: "Amount",
            selector: (row) => row.totalAmount
        },
        {
            name: "Mode",
            selector: (row) => row.mode
        },
        {
            name: "Action",
            cell: (row) => (
                <>
                    <i className="fa-solid fa-circle-check w" onClick={() => updatePurchase(row._id, "Accept")}  style={{ color: "#008000", }} ></i>
                    <i className="fa-solid fa-circle-xmark w" onClick={() => updatePurchase(row._id, "Reject")}  style={{ color: "#Ff0000", }}></i>
                </>
            )
        },
        {
            name: "Status",
            selector: (row) => row.status
        }
    ]


    useEffect(() => {
        getPurchase();
    }, [])


    useEffect(() => {
        const result = members.filter(member =>
            member.uname.toLowerCase().includes(search.toLowerCase()) ||
            member.status.toLowerCase().includes(search.toLowerCase())
        )
        setFilterMember(result);
    }, [search, members])

    useEffect(() => {
        let total = 0
        let acceptedMembers = 0
        let rejectedMembers = 0
        
        members.forEach((member) => {
            total++;
            if(member.status === 'Order Accepted'){
                acceptedMembers++
            }
            if(member.status === 'Order Rejected'){
                rejectedMembers++
            }
        })
        setTotalMember(total)
        setPlus(acceptedMembers)
        setMinus(rejectedMembers)
    }, [members])



    const customStyles = {
        headCells: {
            style: {
                fontSize: '20px',
                fontWeight: "bold"
            },
        },

    };

    createTheme('solarized', {
        text: {
            primary: '#fff',
            secondary: '#fff',
        },
        background: {
            default: '#454545',
            color: '#fff'
        },
        context: {
            background: '#cb4b16',
            text: '#FFFFFF',
        },
        divider: {
            default: '#000',
        }
    }, 'dark');



    const updatePurchase = async (id, msg) => {

        let rejectionReason = ''
        if (msg === 'Reject') {
            rejectionReason = await swal({
                text: 'Please provide a reason for rejection.',
                content: 'input',
                dangerMode: true,
                button: {
                    text: 'Submit',
                    closeModal: true,
                },
            });

            if (!rejectionReason) {
                return swal('Error', 'You need to provide a reason for rejection.', 'error',
                    {
                        dangerMode: true
                    }
                );
            }
        }


        await axios.put(`${process.env.REACT_APP_API_URL}/purchase/${id}`, {
            status: msg === "Accept" ? 'Order Accepted' : 'Order Rejected',
            reason: msg === "Accept" ? 'Order Accepted' : rejectionReason
        });

        toast.success(`Member Order ${msg}`);

        const updatedMembers = members.map(member =>
            member._id === id ? { ...member, status: msg === "Accept" ? 'Order Accepted' : 'Order Rejected' } : member
        );
        setMember(updatedMembers);
        setFilterMember(updatedMembers);
    }

    return (
        <>
            <div className="box-container">
                <div className="box box1">
                    <div className="text">
                        <h2 className="topic-heading">{totalMember}</h2>
                        <h2 className="topic">Total Sellers</h2>
                    </div>
                    <i className="fa-solid fa-people-group clg"></i>
                </div>

                <div className="box box2">
                    <div className="text">
                        <h2 className="topic-heading"> {plus} </h2>
                        <h2 className="topic">Order Accepted</h2>
                    </div>
                    <i className="fa-solid fa-circle-check clg"></i>
                </div>

                <div className="box box3">
                    <div className="text">
                        <h2 className="topic-heading"> {minus} </h2>
                        <h2 className="topic">Order Rejected</h2>
                    </div>
                    <i className="fa-solid fa-circle-xmark clg"></i>
                </div>
            </div>


            <div className="searchbar2">
                <input type="text" placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Recent</h1>
                    <div className="searchbar">
                        <input type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search Here"
                            className='t-search' />
                    </div>
                </div>

                <div className="report-body">
                    <DataTable
                        columns={columns}
                        data={filterMember}
                        fixedHeader
                        fixedHeaderScrollHeight='400px'
                        pagination
                        highlightOnHover
                        customStyles={customStyles}
                        className='sc'
                        theme="solarized"
                    />
                </div>
            </div>
        </>
    )
}

export default SellerTable