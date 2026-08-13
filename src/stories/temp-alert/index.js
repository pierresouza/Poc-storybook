import * as React from 'react';
import t from 'prop-types';

// Estilo
import { AlertStyle } from './styles';

// Utils
import Utils from './utils';

/**
 * `import { Alert } from "@sme/secretui"`
 *
 * Os alertas aparecem na parte superior da tela e exibem informações críticas sobre perda de dados, funcionalidade, erro, validações, etc.
 *
 * # Boas práticas de uso
 * - Deve aparecer um de cada vez e no máximo duas linhas devem ser usadas para exibir as mensagens.
 * - Use as notificações para apresentar informações que precisam ser visualizadas imediatamente e que requerem atenção do usuário.
 * - Apresente mensagens claras e concisas e dê ações de acompanhamento para permitir que o usuário fique mais informado ou resolva o problema.
 * - Evite exibir mensagens com códigos de erro técnico que não ajudam o usuário a resolver o problema.
 * - Apresente mensagens específicas para cada situação em vez de usar mensagens padrão.
 * - Assuma a culpa quando for apropriado. Diga "estamos com problemas para conectar" em vez de "você está tendo problemas de conexão".
 */
function Alert({
  afterClose,
  type,
  showIcon,
  icon,
  message,
  description,
  closable,
  closeText,
}) {
  return (
    <AlertStyle
      afterClose={afterClose}
      type={type}
      showIcon={showIcon}
      icon={icon}
      message={message}
      description={description}
      closable={closable}
      closeText={closeText}
    />
  );
}

Alert.propTypes = {
  afterClose: t.func.isRequired,
  type: t.oneOf(['success', 'info', 'warning', 'error']),
  showIcon: t.bool,
  icon: t.element,
  message: t.string.isRequired,
  description: t.string.isRequired,
  closable: t.bool,
  closeText: t.string,
};

Alert.defaultProps = {
  type: 'info',
  showIcon: true,
  icon: null,
  closable: true,
  closeText: '',
};

Alert.Utils = Utils;

export default Alert;
