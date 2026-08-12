import React from 'react';
import styled from 'styled-components';

// Ant
import { Alert } from 'antd';

// Utils
import Utils from './utils';

export const AlertStyle = styled(Alert)`
  width: auto;
  margin: 0.3rem 0 !important;
  font-weight: bold;
  text-align: left;
  background-color: #333638;
  ${(props) =>
  `
    border-bottom: 3px solid ${Utils.Colors[props.type.toUpperCase()]};
    .ant-alert-close-icon {
      top: 5px;
      right: 5px;
      .anticon-close{
        color: ${props.theme?.Colors?.Light};
      }
    }
    .ant-alert-message {
        color: ${props.theme?.Colors?.Light};
    }
    .ant-alert-description {
      color: ${props.theme?.Colors?.Light};
      font-weight: initial;
    }
  `}
`;