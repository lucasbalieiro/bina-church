import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { BsTrashFill, BsPenFill } from "react-icons/bs"
import { MemberResponseData } from '../../types/Member';
import { useEffect, useState } from 'react';

const ListMembers = () => {

    const [members, setMembers] = useState<MemberResponseData[]>([]);

    const fetchMembers = async () => {
        const response = await fetch('http://localhost:8000/members/');
        const data = await response.json();
        setMembers(data);
    }
    useEffect(() => {
        fetchMembers();
    } , []);

    return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Endereco</th>
                    <th>Data de Nascimento</th>
                    <th>Situacao</th>
                    <th>Contato</th>
                    <th>Lideranca</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {members.map((member: MemberResponseData, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{member.name}</td>
                        <td>{member.address}</td>
                        <td>{member.birthdate}</td>
                        <td>{member.situation}</td>
                        <td>{member.phone}</td>
                        <td>{member.leader}</td>
                        <td>
                            <Link href={`/members/edit/${member.id}`}>
                                <Button variant="primary"><BsPenFill /></Button>
                            </Link>
                            <Button variant="danger" onClick={() => {
                                if (window.confirm('Deseja realmente excluir este membro?')) {
                                    fetch(`http://localhost:8000/members/${member.id}`, {
                                        method: 'DELETE'
                                    })
                                }
                            }}><BsTrashFill /></Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
export default ListMembers;