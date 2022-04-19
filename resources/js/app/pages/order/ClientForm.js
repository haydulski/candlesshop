import React from 'react'
import { Form, Input } from './ClientForm.css'

function ClientForm({ getter, data }) {


    const handleChange = (e) => {
        getter({ ...data, [e.target.id]: e.target.value })
    }

    return (
        <Form>
            <h3>Your address details</h3>
            <Input className="half-width mr-1" type="text" id="name" placeholder="Name" onChange={(e) => handleChange(e)} value={data.name} />
            <Input className="half-width" type="text" id="surname" placeholder="Surname" value={data.surname} onChange={(e) => handleChange(e)} />
            <Input type="email" id="email" placeholder="Email" value={data.email} onChange={(e) => handleChange(e)} />
            <Input type="text" id="phone" placeholder="Contact Phone" value={data.phone} onChange={(e) => handleChange(e)} />
            <Input type="text" id="street" placeholder="Street" value={data.street} onChange={(e) => handleChange(e)} />
            <Input className="half-width mr-1" type="text" id="post" placeholder="Post code" value={data.post} onChange={(e) => handleChange(e)} />
            <Input className="half-width" type="text" id="city" placeholder="City" value={data.city} onChange={(e) => handleChange(e)} />
            <Input type="text" id="province" placeholder="Province" value={data.province} onChange={(e) => handleChange(e)} />
            <Input type="text" id="country" value={data.country} placeholder="Country" onChange={(e) => handleChange(e)} />
            <textarea type="text" id="mess" placeholder="Your message..." onChange={(e) => handleChange(e)} value={data.mess} />
        </Form>
    );
}

export default React.memo(ClientForm);