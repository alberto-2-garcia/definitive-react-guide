import { FC } from 'react';
import { BubbleAlertProps } from './interface';
import './styles.scss';

const BubbleAlert: FC<BubbleAlertProps> = ({ value }) => {
  const getNumber = (n: Number) => {
    if(!n) {
      return '';
    }

    return n > 9 ? '9+' : n;
  }
  return (
    <span className='bubble-alert'>{getNumber(value)}</span>
  )
}

export default BubbleAlert;
