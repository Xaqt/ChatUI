import React from 'react';
import { Button } from '../Button';
import { useLocale } from '../LocaleProvider';

interface SendButtonProps {
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonColor?: string;
}

export const SendButton = ({ disabled, onClick, buttonColor }: SendButtonProps) => {
  const { trans } = useLocale('Composer');
  return (
    <div className="Composer-actions">
      <Button
        className="Composer-sendBtn"
        disabled={disabled}
        onMouseDown={onClick}
        backgroundColor={buttonColor}
        color="white"
      >
        {trans('send')}
      </Button>
    </div>
  );
};
