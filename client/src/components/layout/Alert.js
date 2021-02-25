import React from 'react';
import { AlertContainer, AlertTitle, AlertIcon } from '../styled';
import {
  AiOutlineExclamationCircle,
  AiOutlineInfoCircle,
} from 'react-icons/ai';
import { BsExclamationTriangle, BsCheckCircle } from 'react-icons/bs';

export const Alert = (props) => {
  return (
    <>
      {props.type === 'error' && (
        <AlertContainer $error>
          <AlertIcon $error>
            <AiOutlineExclamationCircle />
          </AlertIcon>{' '}
          <AlertTitle $error>{props.msg}</AlertTitle>{' '}
        </AlertContainer>
      )}

      {props.type === 'warning' && (
        <AlertContainer $warning>
          <AlertIcon $warning>
            <BsExclamationTriangle />
          </AlertIcon>{' '}
          <AlertTitle $warning>{props.msg}</AlertTitle>{' '}
        </AlertContainer>
      )}

      {props.type === 'info' && (
        <AlertContainer $info>
          <AlertIcon $info>
            <AiOutlineInfoCircle />
          </AlertIcon>{' '}
          <AlertTitle $info>{props.msg}</AlertTitle>{' '}
        </AlertContainer>
      )}

      {props.type === 'success' && (
        <AlertContainer $success>
          <AlertIcon $success>
            <BsCheckCircle />
          </AlertIcon>{' '}
          <AlertTitle $success>{props.msg}</AlertTitle>{' '}
        </AlertContainer>
      )}
    </>
  );
};
