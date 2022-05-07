import React, { ChangeEvent, FormEvent, useState } from 'react';
import useFetch from 'hooks/useFetch';
import Input from 'components/Input';
import QQCard from 'components/Card/QQCard';
import { toInteger } from 'utils/format';
import { qqInfoApi } from 'config';
import './index.css';

interface Props {
  style?: React.CSSProperties;
  data?: {
    qlogo?: string;
    name?: string;
    qq?: string;
  };
}

/**
 * Form for fetch QQ user info
 */
export default function QQInfo(props: Props) {
  const { style } = props;
  const [qqNumber, setQqNumber] = useState('');
  const { loading, data, error, fetch } = useFetch(
    qqInfoApi,
    {
      method: 'get',
      params: { qq: qqNumber },
    },
    {
      // error data: {code: 201701, msg: '查询QQ不能为空'}
      getError: (res: any) => res?.code !== 1 && res?.msg,
    }
  );
  const onSubmit = () => {
    if (loading || data?.qq === qqNumber) return;
    if (qqNumber.length >= 5 && qqNumber.length <= 11) {
      fetch();
    }
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    // const { value } = event.target;
    // console.warn({ value });
  };
  // auto format for paste & input
  const onInput = (event: FormEvent<HTMLInputElement>) => {
    const { value = '' } = event.currentTarget;
    const qq = `${toInteger(value) || ''}`; // positive integer
    setQqNumber(qq);
  };
  const user = { img: data?.qlogo, name: data?.name, text: data?.qq };
  // console.warn(loading, error, data);
  return (
    <div className='QQInfo' style={style}>
      <Input
        id='qq'
        label={'QQ'}
        placeholder={'请输入QQ号码'}
        onChange={onChange}
        onInput={onInput}
        onBlur={onSubmit}
        value={qqNumber}
        disabled={loading}
        loading={loading}
        error={error}
      />
      <QQCard className='mt-4' data={user} />
    </div>
  );
}
