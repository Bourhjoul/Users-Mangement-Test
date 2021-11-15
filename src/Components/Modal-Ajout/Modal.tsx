import { Col, Row } from "antd"
import nextId from "react-id-generator"
import React, {
  useRef,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
  useState,
} from "react"
import { useSpring, animated } from "react-spring"
import { v4 as uuid } from "uuid"
import { user } from "../../types"
import {
  Background,
  Button,
  CloseModalButton,
  Input,
  ModalContent,
  ModalWrapper,
  Select,
} from "./ModalStyles"
interface FormAddProps {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  updateUsers: Dispatch<SetStateAction<user[]>>
}

export const Modal: React.FC<FormAddProps> = ({
  showModal,
  updateUsers,
  setShowModal,
}) => {
  const [user, setUser] = useState({
    id: "",
    createdDate: "",
    status: "En validation",
    firstName: "",
    lastName: "",
    userName: "",
    registrationNumber: 0,
  })

  const handelChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const modalRef = useRef(null)

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`,
  })

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false)
      }
    },
    [setShowModal, showModal]
  )
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateUsers((prevUsers) => [
      ...prevUsers,
      { ...user, id: uuid().slice(0, 9) },
    ])
    setShowModal(false)
  }
  useEffect(() => {
    document.addEventListener("keydown", keyPress)
    return () => document.removeEventListener("keydown", keyPress)
  }, [keyPress])

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalContent>
                <h1 style={{ fontWeight: 800 }}>Ajout d'utilisateurs</h1>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={{ span: 8 }} md={{ span: 24 }}>
                      <label htmlFor="lastName">Nom</label>
                      <br />
                      <Input
                        required
                        type="text"
                        value={user.lastName}
                        name="lastName"
                        onChange={handelChange}
                      />
                    </Col>
                    <Col lg={{ span: 8 }} md={{ span: 24 }}>
                      <label htmlFor="firstName">Prenom</label>
                      <br />
                      <Input
                        type="text"
                        required
                        name="firstName"
                        value={user.firstName}
                        onChange={handelChange}
                      />
                    </Col>
                    <Col lg={{ span: 8 }} md={{ span: 24 }}>
                      <label htmlFor="status">Etat</label>
                      <br />
                      <Select
                        name="status"
                        value={user.status}
                        defaultValue={user.status}
                        onChange={handelChange}
                      >
                        <option value="Rejeté">Rejeté</option>
                        <option value="Validé">Validé</option>
                        <option value="En validation">En Validation</option>
                      </Select>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col lg={{ span: 8 }} md={{ span: 24 }}>
                      <label htmlFor="userName">Nom d'utilisateur</label>
                      <br />
                      <Input
                        type="text"
                        required
                        name="userName"
                        value={user.userName}
                        onChange={handelChange}
                      />
                    </Col>
                    <Col lg={{ span: 8 }} md={{ span: 24 }}>
                      <label htmlFor="createdDate">Date de creation</label>
                      <br />
                      <Input
                        type="date"
                        required
                        style={{ padding: "5px" }}
                        name="createdDate"
                        value={user.createdDate}
                        onChange={handelChange}
                      />
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <Col>
                      <label htmlFor="registrationNumber">Matricule</label>
                      <br />
                      <Input
                        type="number"
                        required
                        name="registrationNumber"
                        value={user.registrationNumber}
                        onChange={handelChange}
                      />
                    </Col>
                  </Row>
                  <Button>Enregistrer</Button>
                </form>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}
