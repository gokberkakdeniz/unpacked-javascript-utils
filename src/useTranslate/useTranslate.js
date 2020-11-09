import { useIntl } from "react-intl";
import { useCallback } from "react";

const useTranslate = () => {
  const { formatMessage } = useIntl();

  const translate = useCallback(
    (id, values = {}) => (id ? formatMessage({ id }, values) : undefined),
    [formatMessage]
  );

  return translate;
};

export default useTranslate;