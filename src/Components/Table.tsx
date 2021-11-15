import React, { Dispatch, SetStateAction } from "react"
import { user } from "../types"
import { Row, Col, Empty, Popconfirm } from "antd"
import { Table, TableContainer, Tag } from "./TableStyles"
import { DeleteOutlined } from "@ant-design/icons"
interface TableProps {
  users: user[]
  updateUsers: Dispatch<SetStateAction<user[]>>
}

export const UsersTable: React.FC<TableProps> = ({ users, updateUsers }) => {
  const handleDelete = (id: string) => {
    updateUsers(users.filter((user) => user.id !== id))
  }

  return (
    <Row align="middle" justify="center">
      <Col
        xs={{ span: 24 }}
        lg={{ span: 22 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        xl={{ span: 22 }}
        xxl={{ span: 22 }}
      >
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date de creation</th>
                <th style={{ padding: "0", textAlign: "center" }}>Etat</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Nom d'utilisateur</th>
                <th>Matricule</th>
                <th style={{ textAlign: "right", width: "200px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.createdDate.slice(0, 10).replaceAll("-", "/")}</td>
                  <td style={{ textAlign: "center" }}>
                    <Tag
                      color={
                        user.status === "Validé"
                          ? "#5BE881"
                          : user.status === "Rejeté"
                          ? "#FF0000"
                          : user.status === "En validation"
                          ? "#FDB64D"
                          : "grey"
                      }
                    >
                      {user.status}
                    </Tag>
                  </td>
                  <td>{user.lastName}</td>
                  <td>{user.firstName}</td>
                  <td>{user.userName}</td>
                  <td>{user.registrationNumber}</td>
                  <td style={{ textAlign: "right" }}>
                    <Popconfirm
                      title="Vous etes sure？"
                      okText="Oui"
                      cancelText="Non"
                      onConfirm={() => handleDelete(user.id)}
                    >
                      <DeleteOutlined />
                    </Popconfirm>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {users.length <= 0 && (
            <Row align="middle" justify="center">
              <Col span={22}>
                <Empty />
              </Col>
            </Row>
          )}
        </TableContainer>
      </Col>
    </Row>
  )
}
