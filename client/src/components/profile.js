import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Profile = (props) => (
    <tr>
        <td>{props.record.surname}</td>
        <td>{props.record.initials}</td>
        <td>{props.record.institution}</td>
        <td>{props.record.email}</td>
        <td>{props.record.specialisation}</td>
        <td>{props.record.publications}</td>
        <td>{props.record.totalCitations}</td>
        <td>{props.record.gender}</td>
        <td>{props.recordarticle.title}</td>
    </tr>
);