import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

function Test() {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        address: '',
        school: ''
    })
    const [isSubmitEnable, setIsSubmitEnable] = useState(false)
    const [gridData, setGridData] = useState([]);
    const [updateDataID, setupdateDataID] = useState(0)
    const [isUpdate, setIsUpdate] = useState(false)

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }

    function addData(e) {
        setIsSubmitEnable(false);
        e.preventDefault();
        if (!isUpdate) {
            const modeldata = {
                name: formData.name,
                age: formData.age,
                address: formData.address,
                school: formData.school
            }
            console.log("modeldata::> ", modeldata)

            axios.post('http://localhost:8080/api/Test/testItemInsertion', modeldata).then((res) => {
                if (res.data.ID != null) {
                    setFormData({
                        ...formData,
                        name: '',
                        age: '',
                        address: '',
                        school: ''
                    })
                    getAllTestItems();
                }
                setIsSubmitEnable(true);
            }).catch((e) => {
                console.log("Error:> ", e)
            })
        } else {
            const updateModel = {
                id: updateDataID,
                name: formData.name,
                age: formData.age,
                address: formData.address,
                school: formData.school
            }
            axios.put('http://localhost:8080/api/Test/UpdateDetails', updateModel).then((res) => {
                console.log("update response:> ", res)
                if (res.data.status == "Success") {
                    alert(res.data.status)
                    setupdateDataID(0);
                    setFormData({
                        ...formData,
                        name: '',
                        age: '',
                        address: '',
                        school: ''
                    })
                    getAllTestItems();
                }
            })
        }
    }

    useEffect(() => {
        getAllTestItems();
    }, [])

    function getAllTestItems() {
        axios.get('http://localhost:8080/api/Test/getAllTestItems').then((res) => {
            setGridData(res.data)
        }).catch((err) => {
            alert(err)
        })
    }

    function DeleteRecord(id) {
        console.log("delete id:> ", id)
        axios.delete(`http://localhost:8080/api/Test/deleteTestItem/${id}`).then(res => {
            if (res.data.state == "Success") {
                alert("Item deleted successfully!!")
                getAllTestItems();
            }
        }).catch(err => {
            alert(err)
        })
    }

    function UpdateRowData(updateID) {
        console.log("updateID::> ", updateID)
        axios.get(`http://localhost:8080/api/Test/getTestItemByID/${updateID}`).then((res) => {
            console.log("res.data::> ", res.data.data)
            if (res.data.status == "Success") {
                setFormData({
                    ...formData,
                    name: res.data.data[0].name,
                    age: res.data.data[0].age,
                    address: res.data.data[0].address,
                    school: res.data.data[0].school
                })
                setupdateDataID(res.data.data[0]._id)
                setIsUpdate(true);
            }
        }).catch(err => {
            alert(err)
        })
    }

    return (
        <>
            <h1>hello</h1>
            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                <form onSubmit={addData}>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <TextField
                                id="outlined-required"
                                label="Name"
                                name='name'
                                value={formData.name}
                                onChange={(e) => handleChange(e)}
                                size='small'
                            />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <TextField
                                id="outlined-required"
                                label="Age"
                                name='age'
                                value={formData.age}
                                onChange={(e) => handleChange(e)}
                                size='small'
                            />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <TextField
                                id="outlined-required"
                                label="Address"
                                name='address'
                                value={formData.address}
                                onChange={(e) => handleChange(e)}
                                size='small'
                            />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <TextField
                                id="outlined-required"
                                label="School"
                                name='school'
                                value={formData.school}
                                onChange={(e) => handleChange(e)}
                                size='small'
                            />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Button
                                color='primary'
                                type='submit'
                                variant='contained'
                            >
                                {isUpdate == false ? 'Submit' : 'Update'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box >
            <br /><br />
            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>School</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {gridData.map((row) => (
                                <TableRow>
                                    <TableCell>{row._id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.age}</TableCell>
                                    <TableCell>{row.address}</TableCell>
                                    <TableCell>{row.school}</TableCell>
                                    <TableCell>
                                        <DeleteIcon onClick={() => DeleteRecord(row._id)} />&nbsp;
                                        <CreateIcon onClick={() => UpdateRowData(row._id)} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default Test