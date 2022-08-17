import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { BsTrashFill, BsPenFill } from "react-icons/bs"

const ListMembers = () => {
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
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>R. Grp, 154 - Redencao</td>
                    <td>01/01/2000</td>
                    <td>Reconciliacao</td>
                    <td>(31) 9 9999-9999</td>
                    <td>Lideranca 1</td>
                    <td>
                        <Link href="/members/edit/1">
                            <Button variant='primary' size='sm'>
                                <BsPenFill />
                            </Button>
                        </Link>{' '}
                        <Link href="/members/delete/1">
                            <Button variant='danger' size='sm'><BsTrashFill /></Button>
                        </Link>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}
export default ListMembers;