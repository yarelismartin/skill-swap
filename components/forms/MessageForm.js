import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { createMessage, updateMessage } from '../../api/messageData';

export default function MessageForm({ messageObj, onUpdate }) {
  const { user } = useAuth();
  const router = useRouter();
  const { receiverUid } = router.query;
  const [formInput, setFormInput] = useState({});

  useEffect(() => {
    setFormInput(messageObj);
  }, [messageObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formInput,
      receiverId: receiverUid,
      senderId: user.uid,
      dateSent: new Date().toUTCString(),
    };
    createMessage(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateMessage(patchPayload).then(() => onUpdate());
    });
  };

  return (
    <>
      <Form
        className="pop-font"
        style={{
          color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        }}
        onSubmit={handleSubmit}
      >
        <div
          className="message-form"
          style={{
            display: 'flex', alignItems: 'flex-start', padding: '10px 40px', width: '100%',
          }}
        >
          <Form.Group className="mb-3" style={{ flexGrow: 1, marginBottom: '0', marginRight: '5px' }}>
            <Form.Control
              type="text"
              style={{
                borderRadius: '15px', width: '100%', marginRight: '10px', padding: '5px 15px', fontWeight: '200',
              }}
              placeholder="Type your message here..."
              name="message"
              value={formInput.message || ''}
              onChange={handleChange}
              autoComplete="off"
            />
          </Form.Group>
          <Button style={{ fontWeight: '200' }} className="message-btn" variant="primary" type="submit">
            Send
          </Button>
        </div>
      </Form>
    </>
  );
}

MessageForm.propTypes = {
  messageObj: PropTypes.shape({
    message: PropTypes.string,
    senderId: PropTypes.string,
    receiverId: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
