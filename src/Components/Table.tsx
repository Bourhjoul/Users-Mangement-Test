import React from "react"
import { user } from "../types"
import { Table, Row, Col } from "antd"
interface TableProps {
  users: user[]
}

export const UsersTable: React.FC<TableProps> = ({ users }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Date de creation",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "Etat",
      dataIndex: "status",
      key: "Status",
    },
    {
      title: "Nom",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Prenom",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Prenom",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Nom d'utilisateur",
      dataIndex: "userName",
      key: "usrName",
    },
    {
      title: "Matricule",
      dataIndex: "registrationNumber",
      key: "registrationNumber",
    },
  ]
  return (
    <Row align="middle" justify="center">
      <Col span={22}>
        <Table columns={columns} dataSource={users} />
      </Col>
    </Row>
  )
}
