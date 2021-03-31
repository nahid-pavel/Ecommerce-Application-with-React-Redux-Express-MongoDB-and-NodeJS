import React, { useEffect } from 'react';
import Loading from '../../../_helper/Loading';
import { useDispatch } from 'react-redux';
import { useSelector, shallowEqual } from 'react-redux';
import { getAllProductsActions } from '../../product/_redux/Actions';
import Edit from '../../../_helper/Edit';
import Delete from '../../../_helper/Delete';
import {useHistory} from 'react-router-dom';




export default function AdminProduct() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [loading, setLoadng] = React.useState(true);
    const products = useSelector((state) => {
        return state.product?.allProducts;
    }, shallowEqual);

    console.log('got products', products)


    useEffect(() => {
        dispatch(getAllProductsActions(setLoadng))

    }, [dispatch])
    return (
        <div className="table-card">
            <div className="table-card-heading">
                <p>All Products</p>
                <button className="btn btn-success" onClick={()=> history.push('/admin/Product/Create')}>Create Product</button>

            </div>
            <div className="table-responsive">
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Rating</th>
                            <th>Status</th>
                            <th>Action</th>



                        </tr>


                    </thead>
                    <tbody>
                        {loading && <Loading />}
                        {
                            products?.products?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item?.name}</td>
                                        <td>{item?.description}</td>
                                        <td>{item?.price}</td>
                                        <td>{item?.countInStock}</td>
                                        <td>{item?.rating}</td>
                                        <td style={{ width: "80px" }}>{item?.countInStock >= 1 ? 'In Stock' : 'Out of stock'}</td>
                                        <td style={{ width: "50px" }} className="text-center">
                                            <div  className="d-flex justify-content-between">
                                                <span
 
                                                >
                                                    <Edit />
                                                </span>
                                                <span

                                                >
                                                    <Delete />
                                                </span>
                                            </div>


                                        </td>
                                    </tr>

                                )
                            })
                        }

                    </tbody>

                </table>
            </div>

        </div>
    )
}
